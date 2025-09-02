// @ts-check

export function canExecuteFastAttack(knightIsAwake) {
  
  return !knightIsAwake;
}

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {

  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
 
  return !archerIsAwake && prisonerIsAwake;
}


export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
 if (petDogIsPresent) {
    // Le chien neutralise le chevalier, donc seul l’archer compte
    return !archerIsAwake;
  } else {
    // Pas de chien → il faut que le prisonnier soit réveillé et aucun garde réveillé
    return prisonerIsAwake && !knightIsAwake && !archerIsAwake;
  }
}
