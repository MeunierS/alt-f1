import Link from "next/link";
import Head from "next/head";

const NotFound = () => {
    return ( 
        <>
            <Head>
                <title>Challenge | 404</title>
            </Head>
            <div className="not-found">
            <iframe src='https://gfycat.com/ifr/DiscreteDizzyAiredaleterrier' scrolling='no' width='640' height='484'></iframe>
            <h1>Sorry</h1>
                <h2>That page cannot be found.</h2>
                <p>Go back to the <Link href="/">Homepage</Link></p>
            </div>
        </>
     );
}
 
export default NotFound;