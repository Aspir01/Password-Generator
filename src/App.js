import React, { useState } from "react";
import "./App.css";
import Result from "./components/Result/Result";
import Copy from "./components/Copy/Copy";
import Length from "./components/Length/Length";
import Numbers from "./components/Numbers/Numbers";
import Symbols from "./components/Symbols/Symbols";
import Generate from "./components/Generate/Generate";

function App() {
  const [password, setPassword] = useState("");
  const [passLen, setPassLen] = useState(1);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const handleSymbols = () => {
    setIncludeSymbols(!includeSymbols)
  };

  const handleNumbers = () => {
    setIncludeNumbers(!includeNumbers);
  };

  return (
    <div className="App">
      Password Generator
      <Result value={password} /> <Copy value={password} />
      Password Length:
      <Length value={passLen} onChange={setPassLen} />
      Include numbers: <Numbers checked={includeNumbers} onChange={handleNumbers} />
      Include symbols: <Symbols checked={includeSymbols} onChange={handleSymbols} />
      <Generate passwordLength={passLen} includeNumbers={includeNumbers} includeSymbols={includeSymbols} onClick={(pass) => setPassword(pass)} />
    </div>
  );
}

export default App;
