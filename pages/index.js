import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import "@fontsource/roboto-mono"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rainee Pei - UX Researcher &amp; Designer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/big-cat.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello! I&apos;m Rainee ☻
          <br/>A UX Researcher &amp; Designer 
          <br/>from San Diego, CA.
        </h1>

        <p className={styles.description}>
          + Currently a Researcher at UC San Diego&apos;s 
          <br/><Link href='http://healthrobotics.ucsd.edu/'><a><u>Healthcare Robotics Lab.</u></a></Link>
        </p>
        {/* <span className={styles.bigcat}>
          <Image src='/images/big-cat.svg' alt="Home" width={150} height={150} />
        </span> */}

        {/* horizontal linebreak */}
        <header className={styles.breakline}></header>
        
        <div>
          <div className={styles.grid}>
              <div className={styles.card}>
                <a target="_blank" rel="noreferrer">
                  <h2>1. HEALTHCARE ROBOTICS LAB</h2>
                  <p>Work In Progress</p>
                </a>
              </div>

              <div className={styles.hoverimage}>
                <Image src='/images/robot.svg' className={styles.hoverimage} width={150} height={150} />
              </div>
          </div>

          <div className={styles.grid}>
              <div className={styles.card}>
                <Link href="/case-studies/kini-koffee">
                  <div>
                    <h2>2. KINI KOFFEE</h2>
                    <p>UX Researcher for the design and development of a website for women-led coffee shop, Kini Koffee.</p>
                  </div>
                </Link>
              </div>

              <div className={styles.hoverimage}>
                <Image src='/images/kini.svg' className={styles.hoverimage} width={150} height={150} />
              </div>
            </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <a href="https://medium.com/@pei.rainee/depop-redesign-73b1e2f7d8c5" target="_blank" rel="noreferrer">
                <h2>3. DEPOP REDESIGN</h2>
                <p>A web redesign focused on improving price-comparison functionalities on secondhand e-commerce webistes to encourage sustainable shopping.</p>
              </a>
            </div>

            <div className={styles.hoverimage}>
              <Image src='/images/big-cat.svg' className={styles.hoverimage} width={150} height={150} />
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <a target="_blank" rel="noreferrer">
                <h2>4. DESIGN CO</h2>
                <p>Media Coordinator</p>
              </a>
            </div>

            <div className={styles.hoverimage}>
              <Image src='/images/big-cat.svg' className={styles.hoverimage} width={150} height={150} />
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <a target="_blank" rel="noreferrer">
                <h2>5. ANALOG</h2>
                <p>Photography</p>
              </a>
            </div>

            <div className={styles.hoverimage}>
              <Image src='/images/big-cat.svg' className={styles.hoverimage} width={150} height={150} />
            </div>
          </div>

        </div>

        {/* horizontal linebreak */}
        <header className={styles.breakline}></header>

      </main>
    </div>
  )
}
