import React from "react";
import "./Result.css";

const Result = ({ value }) => {

    return (
        <input
            type="text"
            className="res"
            value={value}
            readOnly
        />
    );
};

export default Result;

