import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Badge } from 'reactstrap';

const TweetCard = ({ tweet, authors }) => {
    const user = authors[tweet.author_id];
    let hashtags;

    if (tweet.entities && tweet.entities.hashtags) {
        hashtags = tweet.entities.hashtags;
    };

    const profileImage = (user && user.profile_image_url) ? user.profile_image_url : "";

    return (
        <Fragment>
            {!user ? "" : (
                <Row className="p-3 m-0 tweet_row_container">
                    <Col xs="2">
                        <img src={profileImage} alt="Logo" className="author_image" />
                    </Col>

                    <Col xs="10">
                        <div className="handle--container">
                            @{user.username}
                        </div>

                        <div className="tweet_text--container">
                            {tweet.text}
                        </div>

                        {!hashtags ? "" : (hashtags.map((hashtag, index) => {
                            return (
                                <Badge key={index} className="hashtag" pill>
                                    #{hashtag.tag}
                                </Badge>
                            )
                        }))}
                    </Col>
                </Row>
            )}
        </Fragment>
    );
};

TweetCard.propTypes = {
    authors: PropTypes.object,
    tweet: PropTypes.object,
};

export default TweetCard;