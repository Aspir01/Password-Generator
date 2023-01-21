import React from "react";
import "./Length.css";

const Length = ({ value = 15, onChange = () => { } }) => {
    return (
        <input
            value={value}
            type="number"
            className="length"
            min="1"
            max="15"
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default Length;