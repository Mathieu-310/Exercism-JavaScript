// @ts-check


export function cardTypeCheck(stack, card) {
  let cardTypeCount = 0;
  stack.forEach((type) => {
    if (type === card) {
      cardTypeCount++;
    }
  });
  return cardTypeCount;
}


export function determineOddEvenCards(stack, type) {
  let cardCount = 0;
  for (const card of stack) {
    if (card % 2 === 0 && type === true) {
      cardCount++;
    } else if (card % 2 !== 0 && type === false) {
      cardCount++;
    }
  }
  return cardCount;
}
