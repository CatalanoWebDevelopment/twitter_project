import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'reactstrap';

const TweetCard = (props) => {
    const user = props.authors[props.tweet.author_id];
    const tweet = props.tweet;

    return (
        <Row className="p-3 m-0 tweet_row_container">
            <Col xs="1">
                <img src={user.profile_image_url} alt="Logo" className="author_image" />
            </Col>

            <Col xs="11">
                <div className="handle--container">
                    {user.username}
                </div>

                <div className="tweet_text--container">
                    {tweet.text}
                </div>

                <div className="hashtags--container">

                </div>
            </Col>
        </Row>
    );
};

TweetCard.propTypes = {
    key: PropTypes.number,
    tweet: PropTypes.object,
};

export default TweetCard;