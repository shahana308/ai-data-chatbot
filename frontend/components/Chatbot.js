import React, { useState } from "react";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleQuerySubmit = async () => {
    // Fetch response from backend AI endpoint
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleQuerySubmit}>Ask</button>
      <div>{response}</div>
    </div>
  );
};

export default Chatbot;
