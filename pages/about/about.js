import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '/styles/about.module.css'
import "@fontsource/roboto-mono"

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.aboutimage}>
          <Image src='/images/about_img.jpg' width={400} height={500} />
        </div>

        <div className={styles.card}>
          <p>Hey there! I’m currently a student at UC San Diego studying Human-Computer Interaction &amp; Bioinformatics.</p>
          <p>I’m passionate about the intersection of accessibility, design, and research.</p>
          <p>In my free time, I love to rock climb, shoot film photography, and punch needle. I also love chillin’ with my two cats!</p>
        </div>
      </div>
    </div>
  );
}
  
