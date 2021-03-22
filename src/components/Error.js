import React, { Fragment, useContext, useEffect, useState } from "react";
import { Alert } from "reactstrap";
import { Context } from "../state/Store";

const Error = () => {
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
            {!error ? "" : (
                <Alert color="warning">
                    {error}
                </Alert>
            )}
        </Fragment>
    );
};

export default Error;