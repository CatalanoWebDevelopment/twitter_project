import React from 'react'
import PropTypes from 'prop-types'

function TweetCard(props) {
    const user = props.authors[props.tweet.author_id];
    const tweet = props.tweet;

    const TweetBox = (props) => {
        return (
            <div className="tweet-body">
                {props.children}
            </div>
        );
    };

    const Image = () => {
        return (
            <img src={user.profile_image_url} alt="Logo" className="author_image" />
        );
    };

    const Handle = () => {
        return (
            <div className="author_handle">
                {user.username}
            </div>
        );
    };

    const Name = () => {
        return (
            <div className="author_name">
                {user.name}
            </div>
        );
    };

    const Tweet = () => {
        return (
            <div className="tweet">
                {tweet.text}
            </div>
        );
    };

    const HashTag = hashtag => {
        return (
            <div className="tweet_hashtags">
                #{hashtag}
            </div>
        );
    };

    return (
        <TweetBox>
            <div className="inner-body">
                <Image />
                <div className="tweet_context_container">
                    <div className="inner-body">
                        <Name />
                        <Handle />
                    </div>
                    <Tweet />
                </div>

                <div className="hashtag_container">
                    {tweet.entities && tweet.entities.hashtags ? (tweet.entities.hashtags.map((hashtag, index) => { return <HashTag key={index} hashtag={hashtag} /> })) : ""}
                </div>
            </div>
        </TweetBox>
    )
};

TweetCard.propTypes = {
    key: PropTypes.number,
    tweet: PropTypes.object,
};

export default TweetCard;