import React from 'react';
import '../Styles/Policies.css';

const Policies = ({ policies }) => {
    return (
        <div className="Policies-Component">
            <h1 className="title">Insurance Policies</h1>
            {policies ?
                <div className="policies">
                    {policies?.map((policy, index) => (
                        <div key={index} className="policy">
                            <div className="insuranceType">{policy.insuranceType}</div>
                            <div className="property-row">
                                <div className="property-label">Start Date:</div>
                                <div className="property-value">{new Date(policy.policyStartDate).toLocaleDateString()}</div>
                            </div>
                            <div className="property-row">
                                <div className="property-label">Term:</div>
                                <div className="property-value">{policy.policyTerm}</div>
                            </div>
                            <div className="property-row">
                                <div className="property-label">End Date:</div>
                                <div className="property-value">{new Date(policy.policyEndDate).toLocaleDateString()}</div>
                            </div>
                            <div className="property-row">
                                <div className="property-label">Claim Limit:</div>
                                <div className="property-value">{policy.claimLimit}</div>
                            </div>
                            {/* <div className="property-row">
                                <div className="property-label">Remaining Claim Limit:</div>
                                <div className="property-value">{policy.remainingClaimLimit}</div>
                            </div> */}
                        </div>
                    ))}
                </div>
                :
                <div className="empty-policies">No Policies Yet.</div>
            }
        </div>
    );
};

export default Policies;
