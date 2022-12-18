import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SongCard from '../components/SongCard'
import Router from 'next/router';

const styles = {
  pageWrap: `flex min-h-screen flex-col items-center justify-center md:py-2`,
  mainWrap: `flex w-full flex-1 flex-col items-center justify-center lg:px-20 sm:px-10 px-5`,
  listSong: `grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4`,
  pani: `bg-violet-500 hover:bg-violet-600 cursor-pointer focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white mr-3`,
  simplePagi: `d-flex text-center p-4 mt-4`
}

const Home:NextPage<{songs: object[], page: number}> = ({songs, page = 0}) => {
  const nextPage = () => {
    Router.push({
      pathname: '/',
      query: { page: page + 1 },
    })
  }
  const prevPage = () => {
    if (page <= 0) {
      return;
    }

    Router.push({
      pathname: '/',
      query: { page: page - 1 },
    })
  }

  return (
    <div className={styles.pageWrap}>
      <Head>
        <title>Hợp âm xưa</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Hợp âm xưa | Hợp âm guitar cho bài hát, tiện lợi, chính xác" />
      </Head>
      
      <Header />

      <main className={styles.mainWrap}>
        <h1 className="text-6xl font-bold mb-8 mt-5">
          <a href="/"> Hợp âm xưa</a> 
        </h1>

        <div className={styles.listSong}>
          {
            songs.map((song: any, i: any) => 
              <SongCard {...song} />
            )
          }
        </div>
        <div className={styles.simplePagi}>
          {
            page > 0 && 
            <span className={styles.pani} onClick={prevPage}>Previous</span>
          }
          <span className={styles.pani} onClick={nextPage}>Next</span>
        </div>

      </main>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const page: number = context.query.page ?? 0;
  const perPage = 12;

  const data = await fetch(`${process.env.API_CLIENT}/song?page=${page}&per_page=${perPage}`)
  .then(response => response.json())

  let songs = data
  return {
    props: {
      songs,
      page
    },
  }
}



export default Home
