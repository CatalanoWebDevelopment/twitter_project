import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Badge } from 'reactstrap';

const TweetCard = ({ tweet, authors }) => {
    const user = authors[tweet.author_id];
    let hashtags;

    if (tweet.entities && tweet.entities.hashtags) {
        hashtags = tweet.entities.hashtags;
    };

    return (
        <Row className="p-3 m-0 tweet_row_container">
            <Col xs="1">
                <img src={user.profile_image_url} alt="Logo" className="author_image" />
            </Col>

            <Col xs="11">
                <div className="handle--container">
                    @{user.username}
                </div>

                <div className="tweet_text--container">
                    {tweet.text}
                </div>

                {!hashtags ? "" : (hashtags.map((hashtag, index) => {
                    return (
                        <Badge color="info" key={index} className="hashtag" pill>
                            #{hashtag.tag}
                        </Badge>
                    )
                }))}
            </Col>
        </Row>
    );
};

TweetCard.propTypes = {
    authors: PropTypes.object,
    tweet: PropTypes.object,
};

export default TweetCard;