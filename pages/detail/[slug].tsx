import Head from 'next/head'
import { useRouter } from 'next/router'
import Detail from '../../components/Detail'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Chord from '../../components/Chord'
import { useEffect, useState } from 'react'

const styles = {
  pageWrap: `flex min-h-screen flex-col items-center justify-center py-2`,
  mainWrap: `md:flex w-full md:flex-1 md:flex-row justify-center lg:px-20 sm:px-10 px-5 bg-[#f5f6fa] md:pt-10 pt-5 md:pb-10 pb-5`,
  left: `md:basis-2/3 p-4 md:mr-6 bg-white`,
  right: `md:basis-1/3 bg-white p-4 mt-3 md:mt-0`,
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
        <title>{song.song.title} | Hợp âm xưa</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={song.song.content.slice(0, 150) + '...'} />
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
  const data = await fetch(`${process.env.API_CLIENT}/song/slug/${context.query.slug}`)
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