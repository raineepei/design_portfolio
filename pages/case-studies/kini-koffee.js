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
            </div>

        </div>
    );
}