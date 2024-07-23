import axiosInstance from './axiosInstance';

const claimService = {
    getUserClaims: async () => {
        try {
            const response = await axiosInstance.get('/claims/get-user-claims');
            return response.data;
        } catch (error) {
            console.error('Error fetching claims:', error);
            throw error;
        }
    },
    CreateClaim: async (payload) => {
        try {
            const response = await axiosInstance.post('/claims/create-claim', payload);
            return response.data;
        } catch (error) {
            console.error('Error fetching claims:', error);
            throw error;
        }
    },
    UpateClaim: async (payload, claimID) => {
        try {
            const response = await axiosInstance.put(`/claims/update-claim/${claimID}`, payload);
            return response.data;
        } catch (error) {
            console.error('Error fetching claims:', error);
            throw error;
        }
    },
    DeleteClaim: async (claimID) => {
        try {
            const response = await axiosInstance.delete(`/claims/delete-claim/${claimID}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching claims:', error);
            throw error;
        }
    },
};

export default claimService;