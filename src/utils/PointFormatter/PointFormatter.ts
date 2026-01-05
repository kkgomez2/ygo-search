export function formattedPoints(points : number) {
  return points || points === 0 ? `${points === -1 ? "?" : points}` : ``;
};
