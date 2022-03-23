import Head from 'next/head'
import { useRouter } from 'next/router'
import Detail from '../../components/Detail'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SongCard from '../../components/SongCard'
import Suggestion from '../../components/Suggestion'

const styles = {
  pageWrap: `flex min-h-screen flex-col items-center justify-center py-2`,
  mainWrap: `flex w-full flex-1 flex-row justify-center lg:px-20 sm:px-10 px-5 bg-[#f5f6fa] pt-10 pb-10`,
  left: `basis-2/3 p-4 mr-6 bg-white`,
  right: `basis-1/3 bg-white p-4`,
  wrapCard: `mb-3`,
}

const Collection = () => {
  const router = useRouter()
  const { categoryId } = router.query

  return (
    <div className={styles.pageWrap}>
      <Head>
        <title>Vietnamese Songchord</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />

      <main className={styles.mainWrap}>
        <div className={styles.left}>
          <Detail />
        </div>
        <div className={styles.right}>
          <Suggestion />
        </div>

      </main>
      <Footer />
    </div>
  )
}

export default Collection