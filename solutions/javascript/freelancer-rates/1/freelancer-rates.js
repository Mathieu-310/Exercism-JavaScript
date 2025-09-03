// @ts-check
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}


export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget/dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dayRateValue = dayRate(ratePerHour);
  const fullMonths = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;

  const priceForFullMonths = fullMonths * 22 * dayRateValue * (1 - discount);
  const priceForRemainingDays = remainingDays * dayRateValue;

  return Math.ceil(priceForFullMonths + priceForRemainingDays);
}

