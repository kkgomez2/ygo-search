import type { YGOCard } from "../../types";
import { formattedPoints } from "../../utils/PointFormatter/PointFormatter";
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
                {card.type !== "link" && (card.level || card.level === 0) && (
                  <div className="card-info-level">
                    {card.type === "xyz" ? "Rank: " : "LV: "} {card.level}
                  </div>
                )}
                {(card.atk || card.atk === 0) && (
                  <div className="card-info-atk">
                    ATK: {formattedPoints(card.atk)}
                  </div>
                )}
                {(card.def || card.def === 0) && (
                  <div className="card-info-def">
                    DEF: {formattedPoints(card.def)}
                  </div>
                )}
                {card.type === "link" && card.linkRating && (
                  <div className="card-info-link-rating">
                    LINK-{card.linkRating}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="card-info-descriptor">{card.descriptor}</div>
          <div className="card-info-desc">
            <p>{card.desc}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="card-info">Select a card for more info.</div>;
  }
};

export default CardInfo;
