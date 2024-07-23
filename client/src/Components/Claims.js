import React, { useState } from 'react';
import { MdOutlineDeleteForever, MdModeEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import '../Styles/Claims.css';
import { message } from 'antd';
import claimService from '../Services/claimService';

const Claims = ({ claims, policies, setUpdateData }) => {
    const [editableClaim, setEditableClaim] = useState(null);
    const [formData, setFormData] = useState({
        policy: '',
        firstName: '',
        lastName: '',
        expenseDate: '',
        amount: '',
        purpose: '',
        followUp: '',
        previousClaimID: '',
        lastEditedClaimDate: new Date().toISOString(),
    });

    const toggleEditMode = (claim) => {
        setEditableClaim(claim._id);
        setFormData({
            ...formData,
            policy: claim.policy._id,
            firstName: claim.firstName,
            lastName: claim.lastName,
            expenseDate: claim.expenseDate,
            amount: claim.amount,
            purpose: claim.purpose,
            followUp: claim.followUp,
            previousClaimID: claim.previousClaimID,
        })
    };

    const isEditable = (claimId) => editableClaim === claimId;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === 'followUp' ? e.target.checked : value
        });
    };

    const handleDelete = async (claimID) => {
        try {
            const response = await claimService.DeleteClaim(claimID);
            message.success(response);
            setUpdateData(true);

        } catch (error) {
            message.error(error.response.data);
        }
    };

    const discardChanges = () => {
        setEditableClaim(null);
    };

    const handleUpdate = async () => {
        try {
            const response = await claimService.UpateClaim(formData, editableClaim);
            message.success(response);
            setEditableClaim(null);
            setUpdateData(true);
        } catch (error) {
            message.error(error.response.data);
        }
    };

    return (
        <div className="Claims-Component">
            <h1 className="title">Insurance Claims</h1>
            {claims && claims.length > 0 ? (
                <div className="claims">
                    {claims.map((claim) => (
                        <div key={claim._id} className="claim">

                            <div className="claim-info-2">
                                <div className="property">
                                    {isEditable(claim._id) ? (
                                        <div className="flex-input">
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={(e) => handleInputChange(e)}
                                            />
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={(e) => handleInputChange(e)}
                                            />
                                        </div>
                                    ) : (
                                        <div className="property-value"><strong>{claim.firstName + ' ' + claim.lastName}</strong></div>
                                    )}
                                </div>
                            </div>

                            <div className="policy-info">
                                <div className="property">
                                    <div className="property-label">Policy Type:</div>
                                    {isEditable(claim._id) ? (
                                        <select
                                            id="policy"
                                            name="policy"
                                            value={formData.policy}
                                            onChange={(e) => handleInputChange(e)}
                                            required
                                        >
                                            {policies.map((policy) => (
                                                <option key={policy._id} value={policy._id}>
                                                    {policy.insuranceType}
                                                </option>
                                            ))}
                                        </select>) : (
                                        <div className="property-value">{claim.policy.insuranceType}</div>
                                    )}
                                </div>
                            </div>
                            <div className="claim-info">
                                <div className="property">
                                    <div className="property-label">Amount:</div>
                                    {isEditable(claim._id) ? (
                                        <input
                                            type="number"
                                            name="amount"
                                            value={formData.amount}
                                            onChange={(e) => handleInputChange(e)}
                                        />
                                    ) : (
                                        <div className="property-value">{claim.amount}</div>
                                    )}
                                </div>

                                <div className="property">
                                    <div className="property-label">Expense Date:</div>
                                    {isEditable(claim._id) ? (
                                        <input
                                            type="date"
                                            name="expenseDate"
                                            value={new Date(formData.expenseDate).toISOString().split('T')[0]}
                                            onChange={(e) => handleInputChange(e)}
                                        />
                                    ) : (
                                        <div className="property-value">{new Date(claim.expenseDate).toLocaleDateString()}</div>)}
                                </div>

                                <div className="property">
                                    <div className="property-label">Purpose:</div>
                                    {isEditable(claim._id) ? (
                                        <input
                                            type="text"
                                            name="purpose"
                                            value={formData.purpose}
                                            onChange={(e) => handleInputChange(e)}
                                        />
                                    ) : (
                                        <div className="property-value">{claim.purpose}</div>
                                    )}
                                </div>

                                <div className="property">
                                    <div className="property-label">Follow Up:</div>
                                    {isEditable(claim._id) ? (
                                        <input
                                            type="checkbox"
                                            name="followUp"
                                            checked={formData.followUp}
                                            onChange={(e) => handleInputChange(e)}
                                        />
                                    ) : (
                                        <div className="property-value">{claim.followUp ? 'Yes' : 'No'}</div>
                                    )}
                                </div>

                                <div className="property">
                                    <div className="property-label">Previous Claim ID:</div>
                                    {isEditable(claim._id) ? (
                                        <input
                                            type="number"
                                            name="previousClaimID"
                                            value={formData.previousClaimID}
                                            onChange={(e) => handleInputChange(e)}
                                        />
                                    ) : (
                                        <div className="property-value">{claim.previousClaimID ? claim.previousClaimID : 'None'}</div>
                                    )}
                                </div>

                                <div className="property">
                                    <div className="property-label">Status:</div>
                                    <div className="property-value"><b>{claim.status}</b></div>
                                </div>
                            </div>
                            {claim.status === 'pending' &&
                            <>
                                {!isEditable(claim._id) ?
                                    <div className="bin-div">
                                        <MdOutlineDeleteForever size={22} className="icon" onClick={(e) => handleDelete(claim._id)} />
                                        <MdModeEdit size={18} className="icon" onClick={() => toggleEditMode(claim)} />
                                    </div>
                                    :
                                    <div className="status-info">
                                        <RxCross2 size={22} className="icon" onClick={discardChanges} />
                                        <FaCheck size={20} className="icon" onClick={handleUpdate} />
                                    </div>
                                }
                            </>
}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="empty-claims">No Claims Yet.</div>
            )
            }
        </div >
    );
};

export default Claims;
