const express = require("express");
const router = express.Router();
const needle = require("needle");
const token = process.env.BEARER_TOKEN;

const streamURL = 'https://api.twitter.com/2/tweets/sample/stream';
const connectToSampleStream = async (retryAttempt) => {
    try {
        const stream = needle.get(streamURL, {
            headers: {
                'User-Agent': 'v2SampleStreamJS',
                'Authorization': `Bearer ${token}`
            },
            timeout: 20000
        });

        stream.on('data', data => {
            try {
                const json = JSON.parse(data);
                console.log(json)
            } catch (error) {
                if (data.status === 401) {
                    console.log(data);
                    process.exit(1);
                } else if (data.detail === "This stream is currently at the maximum allowed connection limit.") {
                    console.log(data.detail);
                    process.exit(1);
                } else {
                    // Keep signaled recieved. Do nothing.
                };
            };
        });

        return stream;
    } catch (error) {
        return error.message;
    };
};

// @route GET /api/getSampleStream
// @desc Request to connect a real-time stream to Twitter that will deliver 1% of all publicly available Tweets. 
// @access Private
router.get("/", (req, res) => {
    connectToSampleStream().then(data => {
        res.send({ response: data });
    });
});

module.exports = router;