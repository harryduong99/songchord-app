

export const changeTone = (content: string, halfStepChange: number = 0) => {
  const elements = content.split(/[|]/);
  for (let i = 0; i < elements.length; i++) {
     // if is not chord
    if (!elements[i].includes("[")) {
      continue;
    }

  }
}

/**
 * 
 * Cm7 => ['C', 'minor', '7']
 */
export const parsingChordName = (chordName: string) => {

}
/**
 * 
 * change: 1 if a half tone, for example, change 3 with main chord is C => return Eb
 */
export const scaleMap = (chordName: string, change: number) => {
  const key = chordName.charAt(0);
  const map = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

  const rawIndex = map.indexOf(key) + change;
  let targetIndex = rawIndex;
  if (rawIndex > 11) {
    targetIndex =  map.indexOf(key) + change - 12;
  } else if (rawIndex < 0) {
    targetIndex =  map.indexOf(key) + change + 12;
  }
  if (chordName.length > 1) {
    return map[targetIndex] + chordName.slice(1);
  }
  return map[targetIndex];
}