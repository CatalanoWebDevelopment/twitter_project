import React, { Fragment, useContext } from "react";
import { Context } from "../state/Store";
import { Col, Button } from "reactstrap";
import TweetCard from "./TweetCard";
import Spinner from "./Spinner";
import { LOAD_MORE_TWEETS } from "../state/Types";

const TweetContainer = () => {
    const [state, dispatch] = useContext(Context);
    
    return (
        <Fragment>
            <Col xs={{ size: 12, order: 3 }} m={{ size: 8, order: 2 }}>
                { state.displayedTweets.length < 1 ? <Spinner /> : state.displayedTweets.map((tweet, index) => (
                    <TweetCard key={index} tweet={tweet} authors={state.authors} />
                ))}

                <Button className="load_more_tweets mt-3" onClick={() => dispatch(LOAD_MORE_TWEETS)}>Load more</Button>
            </Col>
        </Fragment>
    );
};

export default TweetContainer;