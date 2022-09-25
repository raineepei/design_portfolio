import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import "@fontsource/roboto-mono"
import styles from '../../styles/designco.module.css'
import "@fontsource/chivo"
import "@fontsource/cormorant"

export default function DesignCo() {
    return (
        <div>
            <div>
                <h1 className={styles.pagetitle}>DESIGN CO</h1>
            </div>

            <div>
                <div>
                    <h2 className={styles.roletitle}>ROLE</h2>  
                    <p className={styles.sectiontext}>I&apos;m currently help lead <span className={styles.boldblueunder}><a href="https://ucsddesign.co/">Design Co</a></span>, the largest 
                    pre-professional design organization at UC San Diego that  connects young designers and industry.</p>
                    <p className={styles.sectiontext}>As a <span className={styles.boldblue}>Media Coordinator</span> on the marketing team, I help increase 
                    engagement and participation in our org events through media. I create photography and videography 
                    marketing campaigns and also edit photos and videos from events and photoshoots </p>
                </div>
            </div>

            <div>
                <div>
                    <h2 className={styles.roletitle}>SKILLS</h2>  
                    <p className={styles.sectiontext}>Adobe Lightroom, Photoshop, Premiere Pro</p>
                </div>
            </div>

            <div>
                <h3 className={styles.sectiontitle}>Events &amp; Intiatives</h3>  
                <p className={styles.sectiontext}>I also help organize and lead workshops, talks, careers fairs, design sprints, and GBMs for a community of over 300 designers. Here are a few of them!</p>  
            </div> 

            <div className={styles.row}>
                <div className={styles.column}>
                    <Image src="/images/design-co/hci-research.jpg" width={250} height={250} className={styles.column}/>
                </div>
                <div className={styles.column}>
                    <Image src="/images/design-co/portfolio-workshop.jpg" width={250} height={250} className={styles.column}/>
                </div>
                <div className={styles.column}>
                    <Image src="/images/design-co/figma-workshop.jpg" width={250} height={250} className={styles.column}/>
                </div>
            </div> 
            <div className={styles.row} style={{paddingTop: "1%"}}>
                <div className={styles.column}>
                    <Image src="/images/design-co/accessibility-design.jpg" width={250} height={250} className={styles.column}/>
                </div>
                <div className={styles.column}>
                    <Image src="/images/design-co/design-develop.jpg" width={250} height={250} className={styles.column}/>
                </div>
            </div> 

            <div className={styles.backbutton}>
                <Link href="/">BACK</Link>
            </div>
        </div>
    )
}