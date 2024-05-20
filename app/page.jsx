import Acceuil from '@/components/Acceuil'
import styles from './page.module.css'

//import Acceuil from "@/components/Acceuil";

const Home = () => {
  return(
    <main className={styles.welcome}>
      <Acceuil/>
    </main>
  )
}

export default Home