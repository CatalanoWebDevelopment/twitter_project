const Reducer = (state, action) => {
    switch (action.type) {
        case "LOAD TWEETS":
            return {
                ...state,
                tweets: state.tweets.concat(action.payload)
            };
        case "SEARCH TWEETS":
            return {
                ...state,
                query: state.query + action.payload,
            };
        default:
            return state;
    };
};

export default Reducer;