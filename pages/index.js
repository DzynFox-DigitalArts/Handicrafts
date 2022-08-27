import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Section from '../components/Section'


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

      <Section imgSrc='/images/carving.jpg' reverse>

        <h2>Our services can help you grow your business</h2>

        <ul>
          <li><strong>Website</strong> – Business website, Ecommerce website</li>
          <li><strong>Graphic designing</strong> – Brochures, catalogues, business cards, display materials</li>
          <li><strong>Video presentations</strong> – Company profile, Products profile</li>
          <li><strong>Social Media Visuals</strong> – posters, short videos, reels, stories, carousels, etc.</li>
        </ul>

        <p>
          For more details, kindly visit our main website <a href='https://dzynfox.com' target="_blank" rel="noreferrer">https://dzynfox.com</a>
        </p>

      </Section>

    </div>
  )
}
