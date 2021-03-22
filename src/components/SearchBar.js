import React, { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../state/Store";
import { UPDATE_TWEETS_FROM_SEARCH, ERROR } from "../state/Types";
import { Col, InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";

const SearchBar = () => {    
    const [state, dispatch] = useContext(Context);

    // eslint-disable-next-line no-unused-vars
    const [query, updateQuery] = useState(state.query);

    const handleSearch = async (search_parameters) => {
        try {
            const request = await axios.get(`/api/searchTweets/?searchQuery=${search_parameters}`);
            const response = request.data;
            dispatch({ type: UPDATE_TWEETS_FROM_SEARCH, payload: response, query: search_parameters });
        } catch (error) {
            dispatch({ type: ERROR, payload: error.message });
        };
    };

    return (
        <Col xs={{ size: 12, order: 1 }} md={{ size: 8, order: 1 }}>
            <h2 className="mt-3 mb-3">Tweet Feed</h2>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <i className="fas fa-search"></i>
                    </InputGroupText>
                </InputGroupAddon>
                <Input value={query} placeholder="Search by keyword" onChange={(e) => updateQuery(e.target.value)} onKeyUp={(e) => handleSearch(e.target.value)} />
            </InputGroup>
        </Col>
    );
};

export default SearchBar;