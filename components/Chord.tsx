import Chord from '@tombatossals/react-chords/lib/Chord';
import chordDefinitions from '../utils/guitar.json';
import { useEffect, useState } from 'react';

const styles = {
  chordName: `text-center text-xl font-semibold`,
  mainWrap: `flex flex-wrap flex-1 flex-row`,
  chord: `basis-1/2 bg-white pb-2 text-center`,
  changePositions: ``,
  leftArrow: `mr-2 cursor-pointer`,
  rightArrow: `cursor-pointer`,
}

const Chords = (props: any) => {
  let chords: string[] = props.chord;

  const [rendering, setRendering] = useState<any>();
  const [chordsMain, setChordMain] = useState<string[]>([]);
  const [positionMapper, setPositionMapper] = useState<{ [key: string]: number; }>({});

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

  useEffect(() => {
    let positions: { [key: string]: number; } = {};
    // init position
    chords.map((chord: string | number) => {
      positions[chord] = 0;
    });
    setChordMain(props.chord);
    setPositionMapper(positions);
    setRendering(render(props.chord, positions));
  }, [props.chord])


  let mapper: { [key: string]: string | object; } = {};

  const changePosition = (chord: string, numOfPosition: number, positionMapper: { [key: string]: number; }, higher = true) => {
    let targetPosition:number = higher ? positionMapper[chord] + 1:  positionMapper[chord] - 1;
    if (targetPosition > numOfPosition - 1) {
      targetPosition = 0;
    }
    if (targetPosition < 0) {
      targetPosition = numOfPosition - 1;
    }

    positionMapper[chord] = targetPosition;
    setPositionMapper(positionMapper);
    setChordMain([...chords])
    setRendering(render([...chords], positionMapper))
  }

  const render = (chordsMain: string[], positionMapper: {[key: string]: number;}) => {
    return chordsMain.map((chord: string) => {
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
      for (const chordInDB of chordList[key]) {
        if (chordInDB.suffix === suffix) {
          const chordInfo = chordInDB.positions[positionMapper[chord]];
          mapper[chord] = chordInDB.positions[positionMapper[chord]];
          return (
            <div className={styles.chord} key={`${chord}-position-${positionMapper[chord]}`}>
                <Chord
                  chord={chordInfo}
                  instrument={instrument}
                  lite={lite}
                />
                <div className={styles.changePositions}>
                  <span className={styles.leftArrow} onClick={() => changePosition(chord, chordInDB.positions.length, positionMapper, false)}>&#9664;</span>
                  <span className={styles.rightArrow} onClick={() => changePosition(chord, chordInDB.positions.length, positionMapper)}> &#9654;</span> 
                </div>
                <h3 className={styles.chordName}>{chord}</h3>
            </div>
          )
        }
      }
    })
  
  }

  return (
    <div className={styles.mainWrap}>
      {rendering}
    </div>
  )
}

export default Chords
