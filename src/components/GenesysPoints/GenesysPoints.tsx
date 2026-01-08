import { formattedPoints } from "../../utils/PointFormatter/PointFormatter";
import "./GenesysPoints.scss";

type Props = {
  points: number;
};

const GenesysPoints = ({ points }: Props) => {
  return (
    <div className="genesys-points">
      <div>{formattedPoints(points)}</div>
    </div>
  );
};

export default GenesysPoints;
