import Head from 'next/head'
import { useRouter } from 'next/router'
import Detail from '../../components/Detail'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Suggestion from '../../components/Suggestion'
import client from "../../api/apollo-client";
import { gql } from "@apollo/client";

const styles = {
  pageWrap: `flex min-h-screen flex-col items-center justify-center py-2`,
  mainWrap: `flex w-full flex-1 flex-row justify-center lg:px-20 sm:px-10 px-5 bg-[#f5f6fa] pt-10 pb-10`,
  left: `basis-2/3 p-4 mr-6 bg-white`,
  right: `basis-1/3 bg-white p-4`,
  wrapCard: `mb-3`,
}

const Collection = (song: any) => {
  console.log(song.data)
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
          <Detail {...song.data}/>
        </div>
        <div className={styles.right}>
          <Suggestion />
        </div>

      </main>
      <Footer />
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://my-json-server.typicode.com/typicode/demo/posts')
  const songs = await res.json()
  const paths = songs.map((song: any) => ({
    params: { songId: song.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps( params: any) {
  const variables = {
    title: "Minhnam",  
  };  
  const { data } = await client.query({
    query: gql`
      query getSong($title: String!){ 
        song(title: $title) {
            content,
            author,
            title,
            category
        }
      }
    `,
    variables
  })

  return {
    props: {
      data,
    },
  }

}


export default Collection