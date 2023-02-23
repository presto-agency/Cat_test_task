import React from 'react';
import {Link} from "gatsby";
import * as styles from "./promo.module.scss"

const Promo = () => {
  return (
    <p className={styles.promo}>
      Promo Code? <Link to={'/'}>Enter Code</Link>
    </p>
  );
};

export default Promo;