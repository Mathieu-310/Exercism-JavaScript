// @ts-check

export function totalBirdCount(birdsPerDay) {
  let sum = 0;
  for (let index = 0; index < birdsPerDay.length ; index++) {
    sum += birdsPerDay[index];
  };
  return sum;
}


export function birdsInWeek(birdsPerDay, n) {
  const start = (n - 1) * 7;
  let total = 0;
  for (let i = start; i < start + 7; i++) {
    total += birdsPerDay[i];
  }
  return total;
}




 
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      birdsPerDay[i] += 1;
    }
  }
  return birdsPerDay;
}

