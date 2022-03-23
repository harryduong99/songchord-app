import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import SongCard from '../../../components/SongCard'

const styles = {
  pageWrap: `flex min-h-screen flex-col items-center justify-center py-2`,
  mainWrap: `flex w-full flex-1 flex-row items-center justify-center lg:px-20 sm:px-10 px-5 bg-[#f5f6fa] pt-10`,
  left: `basis-2/3 mr-6`,
  right: `basis-1/3`,
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
          <div className={styles.wrapCard}>
            <SongCard />
          </div>
          <div className={styles.wrapCard}>
            <SongCard />
          </div>
          <div className={styles.wrapCard}>
            <SongCard />
          </div>
          <div className={styles.wrapCard}>
            <SongCard />
          </div>
          
        </div>
        <div className={styles.right}></div>

      </main>
      <Footer />
    </div>
  )
}

export default Collection