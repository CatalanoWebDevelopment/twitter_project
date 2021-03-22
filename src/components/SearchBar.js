import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../state/Store";
import { UPDATE_TWEETS_FROM_SEARCH, ERROR } from "../state/Types";
import { Col, InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

const SearchBar = () => {    
    const [state, dispatch] = useContext(Context);
    const [searchTerm, setSearchTerm] = useState(state.query);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            try {
                axios.get(`/api/searchTweets/?searchQuery=${searchTerm}`).then(res => {
                    if (res.data.response === "No relevant Tweets found, try another search.") {
                        dispatch({ type: ERROR, payload: res.data.response })
                    } 
                    else {
                        dispatch({ type: UPDATE_TWEETS_FROM_SEARCH, payload: res.data, query: searchTerm });
                    };
                });
            } catch (error) {
                dispatch({ type: ERROR, payload: error.message });
            };
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [dispatch, searchTerm])

    useEffect(() => {
        setSearchTerm(state.query)
    }, [state.query]);

    return (
        <Col xs={{ size: 12, order: 1 }} md={{ size: 8, order: 1 }} style={{ height: "fit-content" }}>
            <h2 className="mt-3 mb-3">Tweet Feed</h2>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <i className="fas fa-search"></i>
                    </InputGroupText>
                </InputGroupAddon>
                <Input 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by keyword"   
                />
            </InputGroup>
        </Col>
    );
};

export default SearchBar;