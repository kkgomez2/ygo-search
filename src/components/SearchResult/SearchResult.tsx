import type { YGOCard } from "../../types";
import { formattedPoints } from "../../utils/PointFormatter/PointFormatter";
import "./SearchResult.scss";

type Props = {
  card: YGOCard;
};

function SearchResult({ card }: Props) {
  return (
    <div className="search-result">
      <div className="search-result-image"></div>
      <div className="search-result-info">
        <div className="search-result-info-header">
          <div className="search-result-name">
            <h4>{card.name}</h4>
          </div>
          <div className="search-result-point">
            <h3>{formattedPoints(card.genesysPoints)}</h3>
          </div>
        </div>
        <span>{card.type}</span>
        <button>Add</button>
      </div>
    </div>
  );
}

export default SearchResult;
