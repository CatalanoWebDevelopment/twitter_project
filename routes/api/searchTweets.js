const express = require("express");
const router = express.Router();
const needle = require("needle");
const token = process.env.BEARER_TOKEN;
const endpointURL = 'https://api.twitter.com/2/tweets/search/recent?result_type=popular';

const searchTweets = async (searchQuery) => {
    try {
        const params = {
            "query": `${searchQuery} lang:en`,
            "max_results": 10,
            "tweet.fields": "attachments,author_id,entities,source,text",
            "user.fields": "description,entities,location,name,profile_image_url,username,verified"
        };

        console.log("PARAMS: ", params);

        const res = await needle("get", endpointURL, params, {
            headers: {
                "authorization": `Bearer ${token}`
            }
        });

        if (res.body) {
            return res.body;
        } 
        else {
            throw new Error("Unsuccessful Request");
        };
    } catch (error) {
        return error.message;
    };
};

// @route GET api/searchTweets/:query
// @desc Search for Tweets within the past seven days. 
// @access Private
router.get("/", (req, res) => {
    const searchQuery = req.query.searchQuery;
    searchTweets(searchQuery).then(data => {
        res.send({ response: data });
    });
});

module.exports = router;