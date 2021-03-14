const express = require("express");
const router = express.Router();
const needle = require("needle");
const token = process.env.BEARER_TOKEN;
const endpointURL = 'https://api.twitter.com/2/tweets/search/recent?query=';

const searchTweets = async (query="") => {
    console.log("THIS HAS BEEN HIT")
    return "THIS IS HIT";
    // try {
    //     const params = {
    //         "query": `${query} result_type=popular lang:en`,
    //         "max_results": 5,
    //         "tweet.fields": "attachments, author_id, context_annotations, conversation_id, created_at, entities, geo, id, in_reply_to_user_id, source, text",
    //         "user.fields": "description, entities, location, name, profile_image_url, username, verified"
    //     };

    //     const res = await needle.get("get", endpointURL, params, {
    //         headers: {
    //             "authorization": `Bearer ${token}`
    //         }
    //     });

    //     if (res.body) {
    //         return res.body;
    //     } 
    //     else {
    //         throw new Error('Unsuccessful Request');
    //     };
    // } catch (error) {
    //     return error.message;
    // };
};

// @route GET /api/searchTweets/:query
// @desc Search for Tweets within the past seven days. 
// @access Private
router.get("/", (req, res) => {
    searchTweets(req.query.query).then(data => {
        res.send({ response: data });
    });
});

module.exports = router;