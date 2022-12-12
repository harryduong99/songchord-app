

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
export const scaleMap = (mainChordName: string, change: number) => {
  const map = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

  const rawIndex = map.indexOf(mainChordName) + change;
  let targetIndex = rawIndex;
  if (rawIndex > 11) {
    targetIndex =  map.indexOf(mainChordName) + change - 12;
  } else if (rawIndex < 0) {
    targetIndex =  map.indexOf(mainChordName) + change + 12;
  }
  return map[targetIndex];
}