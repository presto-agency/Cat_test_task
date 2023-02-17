import React from 'react';
import * as styles from "./cart.module.scss"
import Asset from "../Asset/Asset";
import {Link} from "gatsby";

const Cart = () => {
  return (
    <section className={styles.cart}>
      <h2>
        Your Cart
      </h2>
      <ul>
        <Asset/>
      </ul>
      <p>
        Promo Code? <Link to={'/'}>Enter Code</Link>
      </p>
    </section>
  );
};

export default Cart;