import axios from 'axios';

const testFile = async (search_parameters) => {
    try {
        const request = await axios.get(`/api/searchTweets/?query=${search_parameters}`);
        const response = request.data;
        return response;
    } catch (error) {
        console.error(error.message);
        return error.message;
    };
};

export default testFile;