import type { YGOCard } from "../types";

export class YGODeck {
  public mainDeck: YGOCard[] = [];
  public extraDeck: YGOCard[] = [];
  public sideDeck: YGOCard[] = [];

  addCard(card: YGOCard) {
    if (card.type === "skill" || card.type === "token") {
      return;
    }

    if (
      card.type.indexOf("fusion") > -1 ||
      card.type.indexOf("synchro") > -1 ||
      card.type.indexOf("xyz") > -1 ||
      card.type.indexOf("link") > -1
    ) {
      if (this.extraDeck.length < 15) {
        this.extraDeck.push(card);
      }
    } else if (this.mainDeck.length < 60) {
      this.mainDeck.push(card);
    }
  }
}
