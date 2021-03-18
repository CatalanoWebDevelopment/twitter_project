const Reducer = (state, action) => {
    switch (action.type) {
        case "LOAD_MORE_TWEETS":
            return {
                ...state,
                displayedTweets: state.tweets.slice(0, (5 * (state.page + 1))),
                page: state.page + 1
            };
        case "UPDATE_TWEETS_FROM_SEARCH":
            return {
                ...state,
                page: 1,
                tweets: state.tweets.concat(action.payload),
                displayedTweets: state.tweets.concat(action.payload).slice(0, (5 * state.page))
            };
        case "ERROR":
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    };
};

export default Reducer;