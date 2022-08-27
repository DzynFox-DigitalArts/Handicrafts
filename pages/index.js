import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DzynFox Handicrafts</title>
        <meta name="description" content="DzynFox Handicrafts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header imgSrc='/images/handicrafts.jpg'>
        <h1>People buy handicraft not as products, <br/> but as art.</h1>
        <h2>It’s about the perceptible value of your product in your customer’s mind.</h2>
      </Header>

    </div>
  )
}
