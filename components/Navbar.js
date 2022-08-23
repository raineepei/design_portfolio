import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import "@fontsource/roboto-mono"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href='/'>
                <a>
                    <span>
                        <Image src='/images/cat-logo.svg' alt="Home" width={47} height={50} />
                    </span>
                </a>
            </Link>
            <ul className={styles.navmenu}>
                <li className={styles.navitem}>
                    <Link href='about'>
                        <a className={styles.navlink}>ABOUT</a>
                    </Link>
                </li>
                <li className={styles.navitem}>
                    <Link href='/'>
                        <a className={styles.navlink}>RESUME</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar