import React from 'react';
import * as styles from "./cart.module.scss"
import {myButton, black} from "../MyButton/myButton.module.scss"
import Asset from "../Asset/Asset";
import Advertising from "../../Advertising/Advertising";
import {Link} from "gatsby";
import {useSelector} from "react-redux";

const Cart = () => {
  const products = useSelector(state => state.assets.product)


  return (
    <section className={styles.cart}>
      <div className={styles.cart__top}>
        <h2>
          Your Cart
        </h2>
        <ul>
          {products.map(product => <Asset key={product.id} name={product.name} price={product.price} src={product.src} />)}
        </ul>
        <Advertising/>
        <p>
          Promo Code? <Link to={'/'}>Enter Code</Link>
        </p>
      </div>
      <div className={styles.cart__bottom}>
        <ul>
          <li>
            <p>
              <small>
                Subtotal
              </small>
              <span>
              $368.00
            </span>
            </p>
          </li>
          <li>
            <p>
              <small>
                Shipping
              </small>
                <span>
                  calculated next step
                </span>
            </p>
          </li>
          <li>
            <p>
              <small>
                Discounts
              </small>
              <span>
              -$22.15
            </span>
            </p>
          </li>
          <li className={styles.total}>
            <p>
              <small>
                TOTAL
              </small>
              <span>
                <strong>
                  AUD
                </strong>
                $368.00
              </span>
            </p>
          </li>
        </ul>
        <Link to={'/checkout'} className={`${myButton} ${black}`}>Checkout now</Link>
      </div>
    </section>
  );
};

export default Cart;