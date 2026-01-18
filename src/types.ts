export interface YGOCardResponse {
  id: number;
  name: string;
  type: string;
  humanReadableCardType: string;
  frameType: string;
  typeLine: string[];
  level: number;
  linkval: number;
  attribute: string;
  atk: number;
  def: number;
  desc: string;
  misc_info: any[];
  card_images: any[];
}

export interface YGOCard {
  id: number;
  name: string;
  descriptor: string;
  type: string;
  typeLine: string[];
  level: number;
  linkRating?: number;
  attribute: string;
  atk: number;
  def: number;
  desc: string;
  genesysPoints: number;
  images: string[];
}

export interface YGODeck {
  mainDeck: YGOCard[];
  extraDeck: YGOCard[];
  sideDeck: YGOCard[];
}
