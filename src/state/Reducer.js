const Reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_TWEETS_FROM_SEARCH":
            return {
                ...state,
                query: action.query,
                page: 1,
                next: action.payload.response.meta,
                tweets: action.payload.response.tweets,
                displayedTweets: (action.payload.response.tweets && action.payload.response.tweets.length > 0) ? action.payload.response.tweets.slice(0, (5 * state.page)) : "",
                authors: action.payload.response.authors,
                error: ""
            };
        case "LOAD_NEXT_TWEETS":
            return {
                ...state,
                page: state.page += 1,
                next: action.payload.response.meta,
                tweets: state.tweets.concat(action.payload.response.tweets),
                displayedTweets: (action.payload.response.tweets && action.payload.response.tweets.length > 0) ? action.payload.response.tweets.slice(0, (5 * state.page)) : "",
                authors: { ...state.authors, ...action.payload.response.authors },
                error: ""
            }
        case "UPDATE_SEARCH":
            return {
                ...state,
                query: action.payload,
                error: ""
            };
        case "ERROR":
            return {
                ...state,
                error: action.payload,
                tweets: [],
                displayedTweets: []
            };
        default:
            return state;
    };
};

export default Reducer;