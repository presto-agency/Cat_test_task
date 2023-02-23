import React from 'react';
import asset from "../../images/pictures/cat.webp";
import * as styles from "./advertising.module.scss";

import MyButton from "../UI/MyButton/MyButton";

const Advertising = () => {
  return (
    <div className={styles.advertising}>
      <h3>
        Only For Cool Cats...
      </h3>
      <div className={styles.advertising__content}>
        <div className={styles.advertising__content_img}>
          <img src={asset} alt="asset"/>
        </div>
        <div className={styles.advertising__content_data}>
          <p>
            Add the “Catnip” cover to your order and save 5%
          </p>
          <span>
            $122.55
          </span>
          <span>
            $129.00
          </span>
          <MyButton className='myButton' description={'Add now'}/>
        </div>
      </div>
    </div>
  );
};

export default Advertising;