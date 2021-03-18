import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
    const [page, updatePage] = useState(0);
    const [search_parameters, updateSearch] = useState("");
    const [compiledData, setCompiledData] = useState(new Map()); 
    
    const handleSearch = async (search_parameters) => {
        try {
            const request = await axios.get(`/api/searchTweets/?query=${search_parameters}`);
            const response = request.data;
            return response;
        } catch (error) {
            return error.message;
        };
    };

    useEffect(() => {
        handleSearch(search_parameters).then(data => {
            setCompiledData(compiledData.set(page, data));
        });
    }, [search_parameters, compiledData, page]);

    return (
        <Fragment>
            <input type="text" onKeyUp={(e) => updateSearch(e.target.value)} />
        </Fragment>
    );
};

export default SearchBar;