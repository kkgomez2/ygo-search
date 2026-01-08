import React from "react";
import "./DeckList.scss";

type Props = {};

const DeckList = (props: Props) => {
  const mainDeckCardSpaces = () => {
    let spaces = [];
    for (let i = 0; i < 40; i++) {
      spaces.push(
        <div className="card-space">
          <img src="cards/monster.jpg" />
        </div>
      );
    }
    return spaces;
  };

  const extraDeckCardSpaces = () => {
    let spaces = [];
    for (let i = 0; i < 15; i++) {
      spaces.push(
        <div className="card-space">
          <img src="cards/extra.jpg" />
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
