import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DzynFox Handicrafts</title>
        <meta name="description" content="DzynFox Handicrafts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className={styles.title}>
          Coming Soon!
        </h1>
    </div>
  )
}
