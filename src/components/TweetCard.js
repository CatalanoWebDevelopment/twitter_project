import React from 'react'
import PropTypes from 'prop-types'

function TweetCard(props) {
    console.log(props)
    return (
        <div>
            
        </div>
    )
};

TweetCard.propTypes = {
    key: PropTypes.number,
    tweet: PropTypes.object,
};

export default TweetCard;

