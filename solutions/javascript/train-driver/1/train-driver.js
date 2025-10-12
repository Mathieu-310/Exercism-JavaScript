// @ts-check

export function getListOfWagons(...wagonsIds) {
  return [...wagonsIds];
}


export function fixListOfWagons(ids) {
  const [first, second, ...rest] = ids;
  
  return ids = [...rest, first,second];  
}


export function correctListOfWagons(ids, missingWagons) {
  const [locomoId, ...rest] = ids;
  const updateIds = [locomoId, ...missingWagons, ...rest];
  return updateIds;
}


export function extendRouteInformation(information, additional) {
  return {...information ,...additional};
}


export function separateTimeOfArrival(information) {
  const { timeOfArrival, ...rest } = information;
  return [timeOfArrival, { ...rest }];
}