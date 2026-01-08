import type { YGOCard } from "../../types";
import GenesysPoints from "../GenesysPoints/GenesysPoints";
import "./CardInfo.scss";

type Props = {
  card: YGOCard | undefined;
};

const CardInfo = ({ card }: Props) => {
  if (card) {
    return (
      <div className="card-info">
        <div className="card-info-header">
          <div className="card-info-name">{card.name}</div>
          <GenesysPoints points={card.genesysPoints} />
        </div>
        <div className="card-info-body">
          <div className="card-info-summary">
            <div className="card-info-image-container">
              <img src={card.images[0]}></img>
            </div>
            <div className="card-info-stats-container">
              <div className="card-info-stats">
                {card.level && (
                  <div className="card-info-level">LV: {card.level}</div>
                )}
                {card.atk && (
                  <div className="card-info-atk">ATK: {card.atk}</div>
                )}
                {card.def && (
                  <div className="card-info-def">DEF: {card.def}</div>
                )}
              </div>
            </div>
          </div>
          <div className="card-info-type">{card.type}</div>
          <div className="card-info-desc">
            <p>{card.desc}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="card-info">Select a card for more info.</div>
  }
};

export default CardInfo;
