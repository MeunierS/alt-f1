import styles from '../styles/Home.module.css'
import Head from 'next/head';

const About = () => {
    return ( 
        <>
            <Head>
                <title>Challenge | About</title>
            </Head>
            <div>
                <h1 className={styles.title}>About</h1>
                <p className={styles.text}>The objective is to be able to call a specific API and display some information received by it.</p>
                <p className={styles.text}>This site is a recruitment challenge for alt-f1.</p>
                <p className={styles.text}>Tutorial used to learn next.js : The Net Ninja - next.js Tutorial</p>
            </div>
        </>
     );
}
 
export default About;