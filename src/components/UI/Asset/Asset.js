import React from 'react';
import asset from "../../../images/pictures/white.webp";
import * as styles from "./asset.module.scss"

const Asset = () => {
  return (
    <li className={styles.asset}>
      <div className={styles.asset__img}>
        <img src={asset} alt="asset"/>
      </div>
      <div className={styles.asset__content}>
        <p>
          Bouclé Bungalow “Creme” Cover
        </p>
        <div className={styles.asset__content_nav}>
          <div>
            <button></button>
            <span>1</span>
            <button className={styles.variant}></button>
          </div>
          <span>239</span>
        </div>
      </div>
    </li>
  );
};

export default Asset;