import Head from 'next/head'
import Detail from '../../components/Detail'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Chord from '../../components/Chord'
import { useEffect, useState } from 'react'
import Suggestion from '../../components/Suggestion'

const styles = {
  pageWrap: `flex min-h-screen flex-col items-center justify-center`,
  mainWrap: `md:flex w-full max-w-7xl md:flex-1 md:flex-row lg:px-20 sm:px-10 px-5 md:pt-10 pt-5 md:pb-10 pb-5`,
  content: `w-full bg-[#f5f6fa] flex justify-center`,
  left: `md:basis-2/3 md:mr-6`,
  right: `md:basis-1/3 bg-white p-4 mt-4 md:mt-0`,
  wrapCard: `mb-3`,
}

const Song = (props: any) => {
  const [chords, setChords] = useState<string[]>([]);
  
  useEffect(() => {
    let listChords: string[] = [];
    const elements = props.song.content.split(/[| ]/);
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

  return (
    <div className={styles.pageWrap}>
      <Head>
        <title>Hợp âm {props.song.title} - {props.song.author}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={props.song.content.slice(0, 150) + '...'} />
      </Head>
      
      <Header />
      <div className={styles.content}>
        <main className={styles.mainWrap}>
          <div className={styles.left}>
            <Detail handleChangeTone={handleChangeTone} song={props.song} chord={chords}/>
            <Suggestion songsAuthor={props.songsAuthor} songsCategory={props.songsCategory} />
          </div>
          <div className={styles.right}>
            <Chord song={props.song} chord={chords}/>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const song = await fetch(`${process.env.API_CLIENT}/song/slug/${context.query.slug}`)
  .then(response => response.json())

  const songsAuthor = await fetch(`${process.env.API_CLIENT}/song/suggest-by-author/${song._id}`)
  .then(response => response.json()) ?? [];
  const songsCategory = await fetch(`${process.env.API_CLIENT}/song/suggest-by-category/${song._id}`)
  .then(response => response.json()) ?? [];

  return {
    props: {
      song,
      songsAuthor,
      songsCategory
    },
  }
}

export default Song