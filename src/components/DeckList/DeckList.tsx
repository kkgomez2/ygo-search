import React from "react";
import "./DeckList.scss";

type Props = {};

const DeckList = (props: Props) => {
  const cardSpaces = () => {
    let spaces = [];
    for (let i = 0; i < 60; i++) {
      spaces.push(<div className="card-space"><img src="cards/monster.jpg"/></div>);
    }
    return spaces;
  };
  return <div className="deck-list">{cardSpaces()}</div>;
};

export default DeckList;
