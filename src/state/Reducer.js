const Reducer = (state, action) => {
    console.log("PAYLOAD", action.payload.response)
    switch (action.type) {
        case "LOAD_MORE_TWEETS":
            return {
                ...state,
                displayedTweets: state.tweets.length > 0 ? state.tweets.slice(0, (5 * (state.page + 1))) : "",
                page: state.page + 1
            };
        case "UPDATE_TWEETS_FROM_SEARCH":
            return {
                ...state,
                query: action.query,
                page: 1,
                next: action.payload.response.meta,
                tweets: action.payload.response.tweets,
                displayedTweets: action.payload.response.tweets.length > 0 ? action.payload.response.tweets.slice(0, (5 * state.page)) : "",
                authors: action.payload.response.authors
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