import React from "react";
import "./Generate.css";

function getRandom(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min) + min);
}

const Generate = ({ passwordLength = 15, includeNumbers, includeSymbols, onClick }) => {

    let source = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) {
        source += "0123456789"
    }
    if (includeSymbols) {
        source += "!@#$%^&*()"
    }
    function getRandomString(len = 15) {
        let result = "";
        while (result.length < len) {

            result += source[getRandom(0, source.length)];
        }
        return result;
    }

    return (
        <button className="generate" onClick={() => onClick(getRandomString(passwordLength))}>
            Generate Password
        </button>
    );
};

export default Generate;