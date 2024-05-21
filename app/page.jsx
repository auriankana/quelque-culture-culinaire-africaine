import Image from "next/image";
import styles from "./page.module.css";

import Home from "@/components/Acceuil";

function App() {
  return (
    <div className={styles.App}>
      <Home />
      
    </div>
  );
}

export default App;