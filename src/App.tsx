import { useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <h1>YGO Card Search</h1>
      <input
        type="text"
        placeholder="Search for cards here"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <span>{searchTerm}</span>
    </main>
  );
}

export default App;
