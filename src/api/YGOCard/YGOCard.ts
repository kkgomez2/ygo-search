import type { YGOCard, YGOCardResponse } from "../../types";

function formatCard(data: YGOCardResponse): YGOCard {
  return {
    id: data.id,
    name: data.name,
    category: data.category,
    type: data.type,
    typeLine: data.typeLine,
    level: data.level,
    attribute: data.attribute,
    atk: data.atk,
    def: data.def,
    desc: data.desc,
    genesysPoints: data?.misc_info[0]?.genesys_points,
    images: [],
  };
}

export function formattedResponse(data: YGOCardResponse[]): YGOCard[] {
  let res: YGOCard[] = [];
  data.forEach((d) => {
    res.push(formatCard(d));
  });

  return res;
}
