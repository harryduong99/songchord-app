import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Vietnamese Songchord</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Hợp âm nhanh
        </h1>

        <p className="mt-3 text-2xl">
          
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
        
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Power by HarryDuong
      </footer>
    </div>
  )
}

export default Home
