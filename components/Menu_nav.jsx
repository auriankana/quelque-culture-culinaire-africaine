import styles from './Menu_nav.module.css'
// import { IoHome } from "react-icons/io5";

export default function Menu_Nav (){
    return <nav className={styles.nav}>
         {/* <IoHome /> */}
        <ul>
            <li> <a href="#"> Acceuil </a></li>
            <li> <a href="#"> Testimonies </a></li>
            <li> <a href="#"> About Us </a></li>
            <li> <a href="#"> Connexion </a></li>
        </ul>
    </nav>
}