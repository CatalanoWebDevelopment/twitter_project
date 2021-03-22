import React, { useState, useContext, useEffect, Fragment } from "react";
import axios from "axios";
import { Context } from "../state/Store";
import { UPDATE_TWEETS_FROM_SEARCH, ERROR } from "../state/Types";
import { Badge, Col, Container } from "reactstrap";

const HashtagContainer = () => {
    const [state, dispatch] = useContext(Context);

    // eslint-disable-next-line no-unused-vars
    const [query, updateQuery] = useState(state.query);
    const [displayedTweets, updateDisplayedTweets] = useState(state.displayedTweets);

    useEffect(() => {
        let tweets = (state.tweets && state.tweets.length > 0) ? state.tweets.slice(0, (5 * state.page)) : "";
        updateDisplayedTweets(tweets);
    }, [state.page, state.tweets, updateDisplayedTweets])

    const searchByHashtag = async (hashtag) => {
        try {
            const request = await axios.get(`/api/searchTweets/?searchQuery=${hashtag}`);
            const response = request.data;

            updateQuery(hashtag);
            dispatch({ type: UPDATE_TWEETS_FROM_SEARCH, payload: response, query: hashtag });
        } catch (error) {
            dispatch({ type: ERROR, payload: error.message });
        };
    };

    const grabHashtagsFromTweets = () => {
        let hashtags = [];
        if (displayedTweets) {
            for (const tweet of displayedTweets) {
                if (tweet.entities && tweet.entities.hashtags) {
                    hashtags = hashtags.concat(tweet.entities.hashtags);
                };
            };
        };

        // Remove duplicate hashtag objects
        hashtags = Array.from(new Set(hashtags.map(hash => hash.tag))).map(tag => {
            return hashtags.find(hash => hash.tag === tag);
        });

        return hashtags;
    };

    const hashtags = grabHashtagsFromTweets();

    return (
        <Fragment>
            { hashtags.length < 1 ? "" : (
                <Col className="mt-3" xs={{ size: 12, order: 2 }} md={{ size: 4, order: 3 }}>
                    <Container className="u-box-shadow p-3">
                        <h2 className="mt-3 mb-3">Filter by hashtag</h2>
                        {(hashtags.map((hashtag, index) => {
                            return (
                                <Badge onClick={() => searchByHashtag(hashtag.tag)} key={index} className="hashtag" pill>
                                    #{hashtag.tag}
                                </Badge>
                            )
                        }))}
                    </Container>
                </Col>
            )}
        </Fragment>
    );
};

export default HashtagContainer;