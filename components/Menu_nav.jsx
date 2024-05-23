import styles from './Menu_nav.module.css'
// import { IoHome } from "react-icons/io5";

export default function Menu_Nav (setPage){
    return <nav className={styles.nav}>
         {/* <IoHome /> */}
        <ul>
            <li> <a href="#" onClick={() => setPage('acceuil')}> Acceuil </a></li>
            <li> <a href="#" onClick={() => setPage('testimonies')} > Testimonies </a></li>
            <li> <a href="#" onClick={() => setPage('About Us')}> About Us </a></li>
            <li> <a href="#" onClick={() => setPage('Connexion')}> Connexion </a></li>
        </ul>
    </nav>
}