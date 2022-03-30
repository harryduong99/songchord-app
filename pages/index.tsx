import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SongCard from '../components/SongCard'

const styles = {
  pageWrap: `flex min-h-screen flex-col items-center justify-center py-2`,
  mainWrap: `flex w-full flex-1 flex-col items-center justify-center lg:px-20 sm:px-10 px-5`,
  listSong: `grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4`,
}

const Home:NextPage = ({songs}) => {
  return (
    <div className={styles.pageWrap}>
      <Head>
        <title>Vietnamese Songchord</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <main className={styles.mainWrap}>
        <h1 className="text-6xl font-bold mb-8">
          Hợp âm nhanh
        </h1>

        <div className={styles.listSong}>
          {
            songs.map((song: any, i: any) => 
              <SongCard {...song} />
            )
          }
        </div>

      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
  const songs = await res.json()

  return {
    props: {
      songs,
    },
  }
}

export default Home
