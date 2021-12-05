import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Conjob</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}
