import { useEffect, useState } from "react";
import { scaleMap } from "../utils/chords";

const styles = {
  wrapInfo: `flex flex-row`,
  infoChild: `mr-2`,
  title: `text-4xl font-bold mb-5`,
  content: `mt-5 leading-7`,
  chord: `text-2xl`,
  upTone: `bg-violet-500 hover:bg-violet-600 cursor-pointer focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-2 py-1 text-xs leading-5 rounded-full font-light text-white mr-2`,
  downTone: `bg-green-500 hover:bg-green-600 cursor-pointer focus:outline-none focus:ring focus:ring-green-300 active:bg-green-700 px-2 py-1 text-xs leading-5 rounded-full font-light text-white mr-2`
}
const Detail = (props: any) => {
  const [htmlContent, setHtmlContent] = useState('');
  const [toneChange, setToneChange] = useState(0);
  const elements = props.song.content.split(/[| ]/);
  
  const renderContent = () => {
    const content = markContent('', elements);
    return content;
  }

  const markContent = (content: string, elements: string[]) => {
    let newChangeToneChords = {};
    let newChords = [];
    elements.map(e => {
      let markHighlight = e;
      let pureChord;
      let newChord;

      if (e.includes("[") && e.includes("]")) {
        let leftIndex = e.indexOf("[");
        let rightIndex = e.indexOf("]");
        if (leftIndex != 0 || rightIndex != e.length - 1) {
          pureChord = e.slice(leftIndex + 1, rightIndex);
          newChord = scaleMap(pureChord, toneChange);
          newChangeToneChords[pureChord] = newChord;
          markHighlight = `${e.slice(0, leftIndex + 1)}<b>${newChord}</b>${e.slice(rightIndex)}`;
        } else {
          pureChord = e.slice(1,-1);
          newChord = scaleMap(pureChord, toneChange);
          newChangeToneChords[pureChord] = newChord;
          markHighlight = `<b>[${newChord}]</b>`
        }

        if (!newChords.includes(newChord)) {
          newChords.push(newChord);
        }
      }
      content = content + markHighlight + ' '
    });
    if (toneChange != 0) {
      props.handleChangeTone(newChords);
    }
    return content;
  }

  useEffect(() => {
    setHtmlContent(renderContent);
  }, [toneChange]);

  
  const upTone = () => {
    let newTone: number = toneChange + 1;
    if (newTone > 12) {
      newTone = newTone - 12
    }
    if (newTone < -12) {
      newTone = newTone + 12
    }
    setToneChange(newTone);
  }

  const downTone = () => {
    let newTone: number = toneChange - 1;
    if (newTone > 12) {
      newTone = newTone - 12
    }
    if (newTone < -12) {
      newTone = newTone + 12
    }
    setToneChange(newTone);
  }

  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.wrapInfo}>
        <div className={styles.infoChild}><span>Sáng tác:</span> <b>{props.author}</b><span> | </span></div>
        <div className={styles.infoChild}>Thể loại: <b>{props.category}</b></div>
        <div>
          <span className={styles.downTone} onClick={downTone}>Giảm tone &#8595;</span>
          <span className={styles.upTone} onClick={upTone}>Tăng tone &#8593;</span>
        </div>
      </div>
      
      <div className={styles.content}>
        <p dangerouslySetInnerHTML={{__html: htmlContent}}></p>
      </div>
    </div>
  )
}

export default Detail
  