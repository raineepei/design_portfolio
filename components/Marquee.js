import styles from '../styles/Home.module.css'
import "@fontsource/roboto-mono"

const Marquee = () => {
    return (
<div className={styles.marquee}>
  <div className={styles.marquee1}>
    &nbsp;LET'S CHAT. &nbsp;THANKS FOR VISITING! &nbsp;LET'S CHAT. &nbsp;THANKS FOR VISITING! &nbsp;LET'S CHAT. &nbsp;THANKS FOR VISITING!
    &nbsp;LET'S CHAT. &nbsp;THANKS FOR VISITING! &nbsp;LET'S CHAT. &nbsp;THANKS FOR VISITING! &nbsp;LET'S CHAT. &nbsp;THANKS FOR VISITING! 
    &nbsp;LET'S CHAT. &nbsp;THANKS FOR VISITING! 
  </div>
  <div className={styles.marquee2}>
  &nbsp;LET'S CHAT. &nbsp;THANKS FOR VISITING! &nbsp;LET'S CHAT. &nbsp;THANKS FOR VISITING! &nbsp;LET'S CHAT. &nbsp;THANKS FOR VISITING!
    &nbsp;LET'S CHAT. &nbsp;THANKS FOR VISITING! &nbsp;LET'S CHAT. &nbsp;THANKS FOR VISITING! &nbsp;LET'S CHAT. &nbsp;THANKS FOR VISITING! 
    &nbsp;LET'S CHAT. &nbsp;THANKS FOR VISITING! 
  </div>
</div>
    )
}

export default Marquee