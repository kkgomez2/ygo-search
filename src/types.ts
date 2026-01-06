export interface YGOCardResponse {
  id: number;
  name: string;
  category: string;
  type: string;
  typeLine: string[];
  level: number;
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
  category: string;
  type: string;
  typeLine: string[];
  level: number;
  attribute: string;
  atk: number;
  def: number;
  desc: string;
  genesysPoints: number;
  images: string[];
}
