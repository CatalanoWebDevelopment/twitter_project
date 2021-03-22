import React, { Fragment, useContext, useEffect, useState } from "react";
import { Alert } from "reactstrap";
import { Context } from "../state/Store";

const Error = msg => {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useContext(Context);
    const [error, updateError] = useState(state.error);
    
    useEffect(() => {
        if (error) {
            setTimeout(() => {
                updateError("");
            }, 5000);
        };
    }, [error]);

    return (
        <Fragment>
            {!state.error ? "" : (
                <Alert color="warning">
                    {msg}
                </Alert>
            )}
        </Fragment>
    );
};

export default Error;