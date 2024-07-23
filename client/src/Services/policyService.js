import axiosInstance from './axiosInstance';

const policyService = {
    getAllPolicies: async () => {
        try {
            const response = await axiosInstance.get('/policies/get-all-policies');
            return response.data;
        } catch (error) {
            console.error('Error fetching policies:', error);
            throw error;
        }
    },
};

export default policyService;