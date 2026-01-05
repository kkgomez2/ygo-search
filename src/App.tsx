import { useEffect, useState } from "react";
import type { YGOCard } from "./types";
import "./App.css";
import { useDebounce } from "react-use";
import SearchResult from "./components/SearchResult/SearchResult";
import { formattedResponse } from "./api/YGOCard/YGOCard";

const API_BASE_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchCards, setSearchCards] = useState<YGOCard[]>([]);
  const [deck, setDeck] = useState<YGOCard[]>([]);

  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchCards = async (query: string) => {
    try {
      const endpoint = `${API_BASE_URL}?fname=${query}&misc=yes&format=genesys`;

      setLoading(true);
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch cards");
      }

      const result = await response.json();
      if (result.Response === "False") {
        setSearchCards([]);
        return;
      }

      const formattedData = formattedResponse(result.data);

      setSearchCards(formattedData || []);
    } catch (err) {
      let errorStr = `Error fetching movies: ${err}`;
      console.error(errorStr);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm.length > 0) {
      fetchCards(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <main>
      <h1>YGO Card Search</h1>
      <input
        type="text"
        placeholder="Search for cards here"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {loading && <>Loading...</>}
      {searchCards.length > 0 && (
        <ul>
          {searchCards.map((card: YGOCard, index) => (
            <li key={index}>
              <SearchResult card={card} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
