import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  async function handleClick() {
    const response = await fetch("/api/hello");
    const resData = await response.json();
    setMessage(resData.message);
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: 40 }}>
      <h1>React + Express Fullstack</h1>
      <button onClick={handleClick}>Get the message</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
