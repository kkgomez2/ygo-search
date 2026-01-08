import type { YGOCard } from "../../types";
import "./CardInfo.scss";

type Props = {
  card: YGOCard;
};

const CardInfo = ({ card }: Props) => {
  return <div>{card.name}</div>;
};

export default CardInfo;
