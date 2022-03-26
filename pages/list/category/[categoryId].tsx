import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import SongCard from '../../../components/SongCard'
import { fetchSongs } from '../../../store/songs/action'
import { wrapper } from '../../../store/store'
import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const styles = {
  pageWrap: `flex min-h-screen flex-col items-center justify-center py-2`,
  mainWrap: `flex w-full flex-1 flex-row items-center justify-center lg:px-20 sm:px-10 px-5 bg-[#f5f6fa] pt-10 pb-10`,
  left: `basis-2/3 mr-6`,
  right: `basis-1/3`,
  wrapCard: `mb-3`,
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ req }) => {
//       await store.dispatch(fetchSongs('harry'));
//       return {
//         props: {},
//       };
//     }
// );

const Collection = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const { categoryId } = router.query
  let {error, items, loading} = useSelector(state => state.songsReducer)
  useEffect(() => {
    dispatch(fetchSongs(categoryId))
  }, [])

  return (
    <div className={styles.pageWrap}>
      <Head>
        <title>Vietnamese Songchord</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
       <main className={styles.mainWrap}>
        { loading ? '' : 
          <div className={styles.left}>
            {items.map((song, i) => 
              <div className={styles.wrapCard}>
                <SongCard {...song}/>
            </div>
            )}
          </div>
        }

        <div className={styles.right}></div>

      </main>

     
      <Footer />
    </div>
  )
}

export default Collection