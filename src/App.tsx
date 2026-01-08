import { useState } from "react";
import type { YGOCard } from "./types";
import "./App.scss";
import CardSearch from "./components/CardSearch/CardSearch";
import DeckList from "./components/DeckList/DeckList";
import CardInfo from "./components/CardInfo/CardInfo";

function App() {
  const [selectedCard, setSelectedCard] = useState<YGOCard>();
  const [deck, setDeck] = useState<YGOCard[]>([]);

  return (
    <main>
      {/* <h1>YGO Card Search</h1> */}
      <div className="app">
        <section className="card-info-container">
          <CardInfo card={selectedCard} />
        </section>
        <section className="deck-list-container">
          <DeckList />
        </section>
        <section className="card-search-container">
          <CardSearch setSelectedCard={setSelectedCard}/>
        </section>
      </div>
    </main>
  );
}

export default App;
