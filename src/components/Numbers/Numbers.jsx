import React from "react";
import "./Numbers.css"

const Numbers = ({ checked, onChange }) => {
    return (
        <input
            type="checkbox"
            className="numbers"
            checked={checked}
            onChange={onChange}
        />
    )
}


export default Numbers