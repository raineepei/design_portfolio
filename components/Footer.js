import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navmenu}>
                <li className={styles.navitem}>
                    <Link href='/'>
                        <a className={styles.navlink}>EMAIL</a>
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link href='/'>
                        <a className={styles.navlink}>LINKEDIN</a>
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link href='/'>
                        <a className={styles.navlink}>GITHUB</a>
                    </Link>
                </li>
            </ul>
            <ul>
                <li className={styles.navitem}>
                    <Link href='/'>
                        <a className={styles.navlink}>Made with Love by Rainee</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Footer