import React from "react";
import "./DeckList.scss";
import type { YGOCard, YGODeck } from "../../types";

type Props = {
  deck: YGODeck;
};

const DeckList = ({ deck }: Props) => {
  const mainDeckCardSpaces = () => {
    let spaces = [];
    for (let i = 0; i < deck.mainDeck.length ; i++) {
      spaces.push(
        <div className="card-space">
          <img src={`${deck.mainDeck[i].images[0]}`} />
        </div>
      );
    }
    return spaces;
  };

  const extraDeckCardSpaces = () => {
    let spaces = [];
    for (let i = 0; i < deck.extraDeck.length; i++) {
      spaces.push(
        <div className="card-space">
          <img src={`${deck.extraDeck[i].images[0]}`} />
        </div>
      );
    }
    return spaces;
  };
  return (
    <div className="deck-list">
      <div className="main-deck-list">{mainDeckCardSpaces()}</div>
      <div className="extra-deck-list">{extraDeckCardSpaces()}</div>
    </div>
  );
};

export default DeckList;
