// @ts-check

export function timeToMixJuice(name) {
  const menu = {
    'Pure Strawberry Joy': 0.5,
    'Energizer': 1.5,
    'Green Garden': 1.5,
    'Tropical Island': 3,
    'All or Nothing': 5
  };
  return menu[name] ?? 2.5;
}

export function limesToCut(wedgeGoal, limes) {
  let wedgesCut = 0;
  let limesCut = 0;
  let i = 0;

  while (wedgesCut < wedgeGoal && i < limes.length) {
    switch (limes[i]) {
      case 'small':
        wedgesCut += 6;
        break;
      case 'medium':
        wedgesCut += 8;
        break;
      case 'large':
        wedgesCut += 10;
        break;
    }
    limesCut++;
    i++;
  }

  return limesCut;
}

export function remainingOrders(timeLeft, orders) {
  let index = 0;

  
  while (index < orders.length && timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[index]);
    index++;
  }

  
  return orders.slice(index);
}
