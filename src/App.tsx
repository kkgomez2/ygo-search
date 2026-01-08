import { useState } from "react";
import type { YGOCard } from "./types";
import "./App.scss";
import CardSearch from "./components/CardSearch/CardSearch";
import DeckList from "./components/DeckList/DeckList";
import CardInfo from "./components/CardInfo/CardInfo";

function App() {
  const [selectedCard, setSelectedCard] = useState<YGOCard>({
    id: 10602628,
    name: "Blackwing - Boreastorm the Wicked Wind",
    type: "Synchro Tuner Monster",
    typeLine: ["Winged Beast", "Synchro", "Tuner", "Effect"],
    level: 6,
    attribute: "DARK",
    atk: 2400,
    def: 1600,
    desc: '1 DARK Tuner + 1+ non-Tuner monsters\r\nIf this card is Synchro Summoned: You can send 1 "Blackwing" monster from your Deck to the GY, and if you do, this card\'s Level becomes the same as that monster\'s. When this card destroys a monster by battle and sends it to the GY: You can banish 1 "Blackwing" monster from your GY or face-up field, except the destroyed monster; Special Summon the destroyed monster to your field in Defense Position. You can only use each effect of "Blackwing - Boreastorm the Wicked Wind" once per turn.',
    genesysPoints: 20,
    images: ["https://images.ygoprodeck.com/images/cards_small/10602628.jpg"],
  });
  const [deck, setDeck] = useState<YGOCard[]>([]);

  return (
    <main>
      {/* <h1>YGO Card Search</h1> */}
      <div className="app">
        <section className="card-info">
          <CardInfo card={selectedCard} />
        </section>
        <section className="deck-list">
          <DeckList />
        </section>
        <section className="card-search">
          <CardSearch />
        </section>
      </div>
    </main>
  );
}

export default App;
