import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SiteData from './api/site'

export default function Home() {
  return (
    <>
      <Head>
        <title>Challenge | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
          <SiteData/>
      </div>
    </>
  )
}
