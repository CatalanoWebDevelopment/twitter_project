import React, { useContext, useState, useEffect } from "react";
import { Context } from "../state/Store";
import { Col, Button, Container } from "reactstrap";
import TweetCard from "./TweetCard";
import Spinner from "./Spinner";
import { LOAD_NEXT_TWEETS, ERROR } from "../state/Types";
import axios from "axios";

const TweetContainer = () => {
    const [state, dispatch] = useContext(Context);
    const [displayedTweets, updateDisplayedTweets] = useState(state.displayedTweets);

    useEffect(() => {
        let tweets = (state.tweets && state.tweets.length > 0) ? state.tweets.slice(0, (5 * state.page)) : "";
        updateDisplayedTweets(tweets);
    }, [state.page, state.tweets, updateDisplayedTweets])
 
    const loadNextTweets = async () => {
        try {
            const request = await axios.get(`/api/searchTweets/?searchQuery=${state.query}&nextToken=${state.next.next_token}`);
            const response = request.data;
            dispatch({ type: LOAD_NEXT_TWEETS, payload: response });
        } catch (error) {
            dispatch({ type: ERROR, payload: error.message });
        };
    };
    
    return (
        <Col xs={{ size: 12, order: 3 }} md={{ size: 8, order: 2 }} className="mt-3" style={{ height: "165%" }}>
            { displayedTweets.length < 1 ? <Spinner /> : (
                <Container className="tweets--container">
                    {displayedTweets.map((tweet) => (
                        <TweetCard key={tweet.id} tweet={tweet} authors={state.authors} />
                    ))}

                    <Button className="load_more_tweets_button mt-3" onClick={loadNextTweets}>Load more</Button>
                </Container>
            )}
        </Col>
    );
};

export default TweetContainer;