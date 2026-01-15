import type { YGOCard, YGOCardResponse } from "../../types";

function formatCard(data: YGOCardResponse): YGOCard {
  return {
    id: data.id,
    name: data.name,
    descriptor: data.humanReadableCardType,
    type: data.frameType,
    typeLine: data.typeLine,
    level: data.level,
    linkRating: data?.linkval,
    attribute: data.attribute,
    atk: data.atk,
    def: data.def,
    desc: data.desc,
    genesysPoints: data?.misc_info[0]?.genesys_points,
    images: data?.card_images?.map((d) => d?.image_url_small),
  };
}

export function formattedResponse(data: YGOCardResponse[]): YGOCard[] {
  let res: YGOCard[] = data.map((d) => formatCard(d));
  return res;
}
