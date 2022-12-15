import Head from 'next/head'
import { useRouter } from 'next/router'
import Detail from '../../components/Detail'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Chord from '../../components/Chord'
import { useEffect, useState } from 'react'

const styles = {
  pageWrap: `flex min-h-screen flex-col items-center justify-center py-2`,
  mainWrap: `flex w-full flex-1 flex-row justify-center lg:px-20 sm:px-10 px-5 bg-[#f5f6fa] pt-10 pb-10`,
  left: `basis-2/3 p-4 mr-6 bg-white`,
  right: `basis-1/3 bg-white p-4`,
  wrapCard: `mb-3`,
}

const Song = (song: any) => {
  console.log(song);
  const [changeToneChords, setChangeToneChords] = useState({});
  const [chords, setChords] = useState([]);
  
  useEffect(() => {
    let listChords = [];
    const elements = song.song.content.split(/[| ]/);
    for (const e of elements) {
      if (e.includes("[") && e.slice(-1) === "]" && e.charAt(0) === "[") {
        let pureChord = e.slice(1,-1);
        if (!listChords.includes(pureChord)) {
          listChords.push(pureChord);
        }
      }
    }

    setChords(listChords);
  }, []);


  const handleChangeTone = (newChords: string[]) => {
    setChords(newChords);
  }

  useEffect(() => {
    console.log(changeToneChords);
  }, [changeToneChords]);


  return (
    <div className={styles.pageWrap}>
      <Head>
        <title>Vietnamese Songchord</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <Header />

      <main className={styles.mainWrap}>
        <div className={styles.left}>
          <Detail handleChangeTone={handleChangeTone} song={song.song} chord={chords}/>
        </div>
        <div className={styles.right}>
          <Chord song={song.song} chord={chords}/>
        </div>

      </main>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context: any) {
  // const data = await fetch(`http://localhost:3000/song/${context.query.songId}`)
  // .then(response => response.json())

  const data = await fetch(`http://localhost:3000/song/slug/${context.query.slug}`)
  .then(response => response.json())

  console.log(data);
  let song = data
  return {
    props: {
      song,
    },
  }
}

export default Song