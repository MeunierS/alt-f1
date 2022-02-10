import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Challenge | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Laudantium nesciunt quis perspiciatis placeat exercitationem recusandae illo vel nobis debitis cupiditate cum consequatur suscipit,
          ipsum expedita cumque maiores aperiam, neque dolor.</p>
      </div>
    </>
  )
}
