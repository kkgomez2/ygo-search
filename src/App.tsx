import { useState } from "react";
import type { YGOCard, YGODeck } from "./types";
import "./App.scss";
import CardSearch from "./components/CardSearch/CardSearch";
import DeckList from "./components/DeckList/DeckList";
import CardInfo from "./components/CardInfo/CardInfo";

const mainDeckMonster : YGOCard = {
  id: 26202165,
  name: "Sangan",
  descriptor: "Effect Monster",
  type: "effect",
  typeLine: ["Fiend", "Effect"],
  level: 3,
  desc: 'If this card is sent from the field to the GY: Add 1 monster with 1500 or less ATK from your Deck to your hand, but you cannot activate cards, or the effects of cards, with that name for the rest of this turn. You can only use this effect of "Sangan" once per turn.',
  atk: 1000,
  def: 600,
  attribute: "DARK",
  genesysPoints: 0,
  images: ["https://images.ygoprodeck.com/images/cards_small/26202165.jpg",
  ],
};
const extraDeckMonster : YGOCard = {
  id: 54082269,
  name: "Blackwing Full Armor Master",
  typeLine: ["Winged Beast", "Synchro", "Effect"],
  descriptor: "Synchro Effect Monster",
  type: "synchro",
  desc: "1 \"Blackwing\" Tuner + 1+ non-Tuner monsters\r\nUnaffected by other cards' effects. Each time a monster your opponent controls activates its effect, place 1 Wedge Counter on that opponent's monster (max. 1) after that effect resolves. Once per turn: You can target 1 monster your opponent controls with a Wedge Counter; take control of it. Once per turn, during your End Phase: You can destroy all monsters on the field that have a Wedge Counter.",
  atk: 3000,
  def: 3000,
  level: 10,
  attribute: "DARK",
  genesysPoints: 0,
  images: [
    "https://images.ygoprodeck.com/images/cards_small/54082269.jpg"
  ],
};


const testDeck : YGODeck = {
  mainDeck: [mainDeckMonster, mainDeckMonster, mainDeckMonster],
  extraDeck: [extraDeckMonster, extraDeckMonster],
  sideDeck: []
}

function App() {
  const [selectedCard, setSelectedCard] = useState<YGOCard>();
  const [deck, setDeck] = useState<YGODeck>(testDeck);

  return (
    <main>
      {/* <h1>YGO Card Search</h1> */}
      <div className="app">
        <section className="card-info-container">
          <CardInfo card={selectedCard} />
        </section>
        <section className="deck-list-container">
          <DeckList deck={deck} />
        </section>
        <section className="card-search-container">
          <CardSearch setSelectedCard={setSelectedCard}/>
        </section>
      </div>
    </main>
  );
}

export default App;
