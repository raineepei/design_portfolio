import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import "@fontsource/roboto-mono"
import styles from '../../styles/kini.module.css'
import "@fontsource/chivo"
import "@fontsource/cormorant"

export default function KiniKoffee() {
    return (
        <div>
            <h1 className={styles.kinititle}>KINI KOFFEE</h1>

            <div className={styles.aboutcolscont}>
                <div className={styles.aboutcols}>
                    <h2 className={styles.abouttitle}>ROLE</h2>
                    <p className={styles.aboutdescription}>UX Researcher</p>
                </div>

                <div className={styles.aboutcols}>
                    <h2 className={styles.abouttitle}>TIMELINE</h2>
                    <p className={styles.aboutdescription}>Jun - Sep 2021</p>
                </div>

                <div className={styles.aboutcols}>
                    <h2 className={styles.abouttitle}>TEAM</h2>
                    <p className={styles.aboutdescription}>Edward De Leon, Stella Seki, Chynna Tumalad, Deepika Vuppala</p>
                </div>

                {/* blank */}
                <div className={styles.aboutcols}>
                    <h2></h2>
                    <p></p>
                </div>
            </div>

            <div>
                <h3 className={styles.sectiontitle}>OVERVIEW</h3>
                <p className={styles.sectiontext}>Located in Del Mar and Encinitas (San Diego), Kini Koffee is a female-owned coffee shop 
                featuring unique and creative drinks. Its aim is to build a community of women who work unconventional jobs 
                while also creating a fun place for people to grab a quick drink on their way to the nearby beaches.</p>
            </div>

            <div>
                <h3 className={styles.sectiontitle}>ROLE</h3>
                <p className={styles.sectiontext}>As the team’s UX Researcher, I spearheaded the research and interview process, 
                including the end-to-end process, which involved recruitment and synthesis. In collaboration with the UI/UX 
                and Visual Designers, I helped pull key insights from our research and interviews to help inform our design decisions. 
                The work showcased below are my <span className={styles.bolded}>primary contributions.</span></p>
            </div>

            <div className={styles.buttoncontainer}>
                <a className={styles.sitebutton}>CHECK OUT THE SITE!</a>
            </div>

            {/* horizontal linebreak */}
            <header className={styles.breakline}></header>

        </div>
    );
}