import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SongCard from '../components/SongCard'
import Router from 'next/router';

const styles = {
  pageWrap: `flex min-h-screen flex-col items-center justify-center py-2`,
  mainWrap: `flex w-full flex-1 flex-col items-center justify-center lg:px-20 sm:px-10 px-5`,
  listSong: `grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4`,
  pani: `bg-violet-500 hover:bg-violet-600 cursor-pointer focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700 px-5 py-2 text-sm leading-5 rounded-full font-semibold text-white mr-3`,
  simplePagi: `d-flex text-center p-4 mt-4`
}

const Home:NextPage = ({songs, page = 0}) => {
  console.log(page);
  const nextPage = () => {
    console.log('adfsdfasd');
    Router.push({
      pathname: '/',
      query: { page: parseInt(page) + 1 },
    })
  }
  const prevPage = () => {
    if (page <= 0) {
      return;
    }

    Router.push({
      pathname: '/',
      query: { page: parseInt(page) - 1 },
    })
  }

  return (
    <div className={styles.pageWrap}>
      <Head>
        <title>Vietnamese Songchord</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <main className={styles.mainWrap}>
        <h1 className="text-6xl font-bold mb-8 mt-5">
          <a href="/"> Hợp âm nhanh</a> 
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
  const page = context.query.page ?? 0;
  const perPage = 12;

  const data = await fetch(`http://localhost:3000/song?page=${page}&per_page=${perPage}`)
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
