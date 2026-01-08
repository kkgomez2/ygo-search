import type { YGOCard } from "../../types";
import { formattedPoints } from "../../utils/PointFormatter/PointFormatter";
import GenesysPoints from "../GenesysPoints/GenesysPoints";
import "./SearchResult.scss";

type Props = {
  card: YGOCard;
  setSelectedCard: Function;
};

function SearchResult({ card, setSelectedCard }: Props) {
  return (
    <div className="search-result" onClick={() => setSelectedCard(card)}>
      <div className="search-result-image-container">
        <img className="search-result-image" src={card.images[0]} />
      </div>
      <div className="search-result-info-container">
        <div className="search-result-info">
          <div className="search-result-info-text">
            <div className="search-result-name">{card.name}</div>

            <div>{card.type}</div>
          </div>

          <GenesysPoints points={card.genesysPoints} />
        </div>

        <button>Add to Deck</button>
      </div>
    </div>
  );
}

export default SearchResult;
