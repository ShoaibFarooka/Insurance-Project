import axiosInstance from './axiosInstance';

const userService = {
    getUserInfo: async () => {
        try {
            const response = await axiosInstance.get('/users/get-user-info');
            return response.data;
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    },
    registerUser: async (payload) => {
        try {
            const response = await axiosInstance.post('/users/register', payload);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    loginUser: async (payload) => {
        try {
            const response = await axiosInstance.post('/users/login', payload);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default userService;