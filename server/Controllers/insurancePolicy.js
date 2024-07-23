const Policy = require("../Models/insurancePolicyModel");

const FetchPolicies = async (req, res) => {
    try {
        const policies = await Policy.find();
        if (policies && policies.length > 0) {
            res.status(200).json(policies);
        }
        else {
            res.status(404).send('No Policies Found');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
        throw error;
    }
};

module.exports = {
    FetchPolicies
};

