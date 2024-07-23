const InsurancePolicy = require('../Models/insurancePolicyModel');
const policyDataList = require('../Data/policyDataList');

const seedPolicies = async () => {
    try {
        await InsurancePolicy.deleteMany();
        console.log('Old Policies deleted successfully');
        const createdPolicies = await InsurancePolicy.create(policyDataList);
        if (createdPolicies) {
            console.log('Policies seeded successfully');
        } else {
            console.error('Failed to seed policies.');
        }
    } catch (error) {
        console.error('Error seeding policies:', error.message);
    }
};

module.exports = seedPolicies;
