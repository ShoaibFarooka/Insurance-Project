import React, { useState } from 'react';
import '../Styles/CreateClaim.css';
import { message } from "antd";
import claimService from '../Services/claimService';

const CreateClaim = ({ policies, setActiveComponent }) => {
    const [formData, setFormData] = useState({
        policy: '',
        firstName: '',
        lastName: '',
        expenseDate: '',
        amount: '',
        purpose: '',
        followUp: false,
        previousClaimID: '',
        lastEditedClaimDate: new Date().toISOString(),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await claimService.CreateClaim(formData);
            message.success(response);
            setActiveComponent(2);
        } catch (error) {
            message.error(error.response.data);
        }
    };
    return (
        <div className="Create-Claim-Component">
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h1 className="title">Create Claim</h1>
                    <div className="divider"></div>
                    <label htmlFor="policy">Select Policy:</label>
                    <select
                        id="policy"
                        name="policy"
                        value={formData.policy}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select a policy</option>
                        {policies.map((policy) => (
                            <option key={policy._id} value={policy._id}>
                                {policy.insuranceType}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="expenseDate">Expense Date:</label>
                    <input
                        type="date"
                        id="expenseDate"
                        name="expenseDate"
                        value={formData.expenseDate}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="purpose">Purpose:</label>
                    <input
                        type="text"
                        id="purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="followUp">Follow Up:</label>
                    <input
                        type="checkbox"
                        id="followUp"
                        name="followUp"
                        checked={formData.followUp}
                        onChange={() => setFormData({ ...formData, followUp: !formData.followUp })}
                    />

                    <label htmlFor="previousClaimID">Previous Claim ID:</label>
                    <input
                        type="number"
                        id="previousClaimID"
                        name="previousClaimID"
                        value={formData.previousClaimID}
                        onChange={handleChange}
                    />

                    <button type="submit">Create Claim</button>
                </form>
            </div>

        </div>
    )
};

export default CreateClaim;