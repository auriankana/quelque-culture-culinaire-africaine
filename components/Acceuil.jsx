import React from "react";
import Image from "next/image";
import styles from '@/components/Acceuil.module.css'
import BannerBackground from "../public/imagesPageAcceuil/home-banner-background.webp";
import BannerImage from "../public/imagesPageAcceuil/home-banner-image.webp";
// import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className={styles.home_container}>
      {/* <Navbar /> */}
      <div className={styles.home_banner_container}>
        <div className={styles.home_bannerImage_container}>
            <Image src={BannerBackground} alt="imageBackground"/>          
        </div>
        <div className={styles.home_text_section}>
          <h1 className={styles.primary_heading}>
            Vos repas favoris cuisines avec soins 
            par des chefs issus du grand continent 
            servis et livre a chaud.
          </h1>
          <p className={styles.primary_text}>
            N'hesitez plus, peu importe vos origines, venez a la rencontre des saveurs 
            des coins du continent africain 
          </p>
          <div className={styles.payStyle}>
             <button className={styles.secondary_button}>
            Cameroun <FiArrowRight />{" "}
          </button>
          <button className={styles.secondary_button}>
            Senegal <FiArrowRight />{" "}
          </button>
          <button className={styles.secondary_button}>
            Afrique du Sud <FiArrowRight />{" "}
          </button>
          </div>
         
        </div>
        <div className={styles.home_image_section}>
            <Image src={BannerImage} alt="exemple de plat"/>
          
        </div>
      </div>
    </div>
  );
};

export default Home;