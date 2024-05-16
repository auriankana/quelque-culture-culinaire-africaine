import styles from './Menu_nav.module.css'
// import { IoHome } from "react-icons/io5";

export default function Menu_Nav (){
    return <nav className={styles.nav}>
         {/* <IoHome /> */}
        <ul>
            <li> <a href="#"> Nom societe </a></li>
            <li> <a href="#"> Home </a></li>
            <li> <a href="#"> Home </a></li>
            <li> <a href="#"> Search </a></li>
        </ul>
    </nav>
}