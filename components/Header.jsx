import styles from './Header.module.css'
import Menu_Nav from './Menu_Nav'
import { IoHome } from "react-icons/io5";


export default function Header(setPage) {
return <header className={styles.header}>
        <IoHome />

       <Menu_Nav setPage = {setPage}/>
    </header>
}