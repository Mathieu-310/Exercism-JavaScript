/// <reference path="./global.d.ts" />
// @ts-check


export function getFirstCard(deck) {
  const [firstCard] = deck;
  return firstCard;
}


export function getSecondCard(deck) {
  const [,secondCard] = deck;
  return secondCard;
}


export const swapTwoCards = (deck) => {
  const arr = deck.values || deck;
  [arr[0], arr[1]] = [arr[1], arr[0]];
  return arr;
};





export function shiftThreeCardsAround(deck) {
  const arr = deck.values || deck;
  const [firstCard, secondCard, thirdCard] = arr;
   arr[0] = secondCard;
   arr[1] = thirdCard;
   arr[2] = firstCard;
    return arr;

}


export function pickNamedPile(piles) {
  if (Array.isArray(piles)) {
    return { values: piles };
  } else if (typeof piles === "object") {
    const { chosen } = piles;
    if (chosen && typeof chosen === "object" && "values" in chosen) {
      return chosen;
    }
  }
  return { values: [] };
}


export function swapNamedPile(piles) {
  
  const [chosen, disregarded] = Object.values(piles);
  return { chosen: disregarded, disregarded: chosen };
}
