import Chord from '@tombatossals/react-chords/lib/Chord';
import chordDefinitions from '../utils/guitar.json';

const styles = {
  chordName: `text-center text-xl font-semibold`,
  mainWrap: `flex flex-wrap flex-1 flex-row`,
  chord: `basis-1/2 bg-white pb-2`,
}

const Chords = (props: any) => {

  const isNumeric = (n: string) => {
    return !isNaN(parseFloat(n));
  }

  const instrument = {
      strings: 6,
      fretsOnChord: 4,
      name: 'Guitar',
      keys: [],
      tunings: {
          standard: ['E', 'A', 'D', 'G', 'B', 'E']
      }
  }
  const lite = false // defaults to false if omitted

  const chords: string[] = props.chord;

  let mapper: { [key: string]: string | object; } = {};

  const renderChords = chords.map((chord: string) => {
    let key = chord.charAt(0);
    let suffix = 'major';
    if (chord.length > 1) {
      if (chord.charAt(1) === 'm') {
        suffix = 'minor';
      } else if (chord.charAt(1) === 'b' || chord.charAt(1) === '#') {
        key = chord.slice(0, 2);
        if (chord.length > 2 && chord.charAt(2) === 'm') {
          suffix = 'minor';
        }
      } else if (isNumeric(chord.charAt(1))) {
        suffix = 'maj' + chord.charAt(1);
      } else {
        suffix = chord.slice(1,0);
      }
    }

    const chordList: { [key: string]: { [key: string]: string | object[]; }[]; } = chordDefinitions.chords;
    if (chordList[key] === undefined) {
      return;
    }
    let targetChord;
    for (const sChord of chordList[key]) {
      if (sChord.suffix === suffix) {
        targetChord = sChord;
        mapper[chord] = targetChord.positions[0];

        return (
          <div className={styles.chord}>
              <Chord
                chord={sChord.positions[0]}
                instrument={instrument}
                lite={lite}
              />
              <h3 className={styles.chordName}>{chord}</h3>
          </div>
        )
      }
    }
  })

  return (
    <div className={styles.mainWrap}>
      {renderChords}
    </div>
  )
}

export default Chords
