import { SocialIcon } from "react-social-icons"
import styles from '../layout/Footer.module.css'
function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.social_list}>
                <SocialIcon url="https://www.facebook.com/" bgColor="white" />
                </li>
                <li>
                <SocialIcon url="https://www.instagram.com/" bgColor="#c9c599" />
                </li>
                <li>
                <SocialIcon url="https://www.linkedin.com/feed/" />
                </li>
            </ul>
            <br/>
            <p className={styles.copy_right}><span>Costs</span> &copy; 2023</p>
        </footer>
    )
}


export default Footer