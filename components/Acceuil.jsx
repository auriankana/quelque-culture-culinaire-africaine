// import styles from "./Acceuil.module.css";
// import Link from "next/link";

// const Acceuil = () => {
//   return (
//     <main className={styles.main}>
//       <h1>
//         Bienvenue dans notre page de presentation des traditions culinaires
//         africaines variees
//       </h1>
//       <div className={styles.divStyle}>
//         <ul className={styles.listeUl}>
//           <li>
//             <Link href="#">Cameroun</Link>
//           </li>
//           <li>
//             <Link href="#">Cote d'Ivoire</Link>
//           </li>
//           <li>
//             <Link href="#">Senegal</Link>
//           </li>
//         </ul>
//       </div>

//       <p>Des menus varies et divers </p>
      
//     </main>
//   );
// };
// export default Acceuil;

import styles from "./Acceuil.module.css";
import Link from "next/link";

const Acceuil = () => {
  return (
    <main className={styles.main}>
      <div className={styles.contentWrapper}>
        <h1>
          Bienvenue dans notre page de presentation des traditions culinaires
          africaines variees
        </h1>
        <div className={styles.divStyle}>
          <ul className={styles.listeUl}>
            <li>
              <Link href="#">Cameroun</Link>
            </li>
            <li>
              <Link href="#">Cote d'Ivoire</Link>
            </li>
            <li>
              <Link href="#">Senegal</Link>
            </li>
          </ul>
        </div>
        <p>Des menus varies et divers</p>
      </div>
    </main>
  );
};

export default Acceuil;
