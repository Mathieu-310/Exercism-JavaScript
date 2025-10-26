/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  // J'utilse deux objets ( basePrices, extraPrices) pour la structure de donnees et J'utilise l'approche data-driven pour la maitenabilite et l'extension
  const basePrices = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10,
  };

  const extraPrices = {
    ExtraSauce: 1,
    ExtraToppings: 2,
  };

  if (!(pizza in basePrices)) {
    throw new Error(`Invalid pizza type: ${pizza}`);
  }

  let totalPrice = basePrices[pizza];

  for (const extra of extras) {
    totalPrice += extraPrices[extra] ?? 0; // ignore extras inconnus
  }

  return totalPrice;

  //##############################
  
  // On peut aussi utiliser .reduce pour plus de concision  au lieu de la boucle for .. of.
  
  /*
      const totalPrice = extras.reduce(
        (total, extra) => total + (extraPrices[extra] ?? 0),
        basePrices[pizza]
      );
  */
}


/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(PizzaOrder) {
  let total = 0;

  for (const order of PizzaOrder) {
    total += pizzaPrice(order.pizza, ...order.extras);
  }

  return total;
}