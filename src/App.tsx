import { useState } from "react";
import type { YGOCard } from "./types";
import "./App.css";
import CardSearch from "./components/CardSearch/CardSearch";

function App() {
  const [highlightedCard, setHighlightedCard] = useState<YGOCard[]>();
  const [deck, setDeck] = useState<YGOCard[]>([]);

  return (
    <main>
      <h1>YGO Card Search</h1>
      <section className="card-info"></section>
      <section className="deck"></section>
      <CardSearch />
    </main>
  );
}

export default App;
