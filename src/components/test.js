import axios from 'axios';

const testFile = async () => {
    try {
        const request = await axios.get("/api/connectToSampleStream");
        const response = request.data;
        console.info("TEST RESPONSE: ", response);
        return response;
    } catch (error) {
        console.error(error.message);
        return error.message;
    };
};

export default testFile;