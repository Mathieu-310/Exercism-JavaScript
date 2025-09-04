// @ts-check

export function frontDoorResponse(line) {
  const cleanLine = line.trim()
return cleanLine[0].toUpperCase();
}


export function frontDoorPassword(word) {
   const cleanWord = word.trim()
  return (
    cleanWord[0].replace(cleanWord[0], cleanWord[0].toUpperCase()) +
    cleanWord.slice(1).toLowerCase()
  );
}




export function backDoorResponse(line) {
  const cleanLine = line.replace(/\s+$/, '')
 return line.charAt(cleanLine.length -1);
}


export function backDoorPassword(word) {
  return `${frontDoorPassword(word)}, please`;
}
