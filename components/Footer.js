import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import "@fontsource/roboto-mono"

export const three = 3;

const Footer = () => {
    return (
        <nav className={styles.footerbar}>
            <ul className={styles.footermenu}>
                <li className={styles.footeritemfirst}>
                    <Link href='/'>
                        <a className={styles.footerlink}><u>EMAIL</u></a>
                    </Link>
                </li>
                <li className={styles.footeritem}>
                    <Link href='/'>
                        <a className={styles.footerlink}><u>LINKEDIN</u></a>
                    </Link>
                </li>
                <li className={styles.footeritem}>
                    <Link href='/'>
                        <a className={styles.footerlink}><u>GITHUB</u></a>
                    </Link>
                </li>
            </ul>
            <li className={styles.footeritemlast}>
                <Link href='/'>
                    <a className={styles.footerlink}>Made with <span className={styles.footerheart}><b>&lt;3</b></span> by Rainee</a>
                </Link>
            </li>
        </nav>
    )
}

export default Footer