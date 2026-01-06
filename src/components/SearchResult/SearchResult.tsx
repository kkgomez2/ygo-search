import type { YGOCard } from "../../types";
import { formattedPoints } from "../../utils/PointFormatter/PointFormatter";
import "./SearchResult.scss";

type Props = {
  card: YGOCard;
};

function SearchResult({ card }: Props) {
  return (
    <div className="search-result">
      <div className="search-result-image-container">
        <img className="search-result-image" src={card.images[0]} />
      </div>
      <div className="search-result-info-container">
        <div className="search-result-info">
          <div className="search-result-info-text">
            <div className="search-result-name">{card.name}</div>

            <div>{card.type}</div>
          </div>

          <div className="search-result-point">
            <div>{formattedPoints(card.genesysPoints)}</div>
          </div>
        </div>

        <button>Add to Deck</button>
      </div>
    </div>
  );
}

export default SearchResult;
