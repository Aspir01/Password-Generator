import React from "react";
import "./Symbols.css"

const Symbols = ({ checked, onChange }) => {
    return (
        <input type="checkbox"
            className="symbols"
            onChange={onChange}
            checked={checked}
        />
    )
}


export default Symbols