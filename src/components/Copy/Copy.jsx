import React from "react";
import "./Copy.css";

function copyToClipboard(stringForCopy) {
    navigator.clipboard.writeText(stringForCopy);
}

const Copy = ({ value = "" }) => {
    return (
        <button className="copy" onClick={() => copyToClipboard(value)}>
            Copy
        </button>
    );
};

export default Copy;