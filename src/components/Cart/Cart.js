import React from "react";
import * as styles from "./cart.module.scss"
import Asset from "../Asset/Asset";
import Advertising from "../Advertising/Advertising";
import {Link} from "gatsby";
import {useSelector} from "react-redux";
import TotalPrice from "../TotalPrice/TotalPrice";
import Promo from "../Promo/Promo";

const Cart = () => {
  const products = useSelector(state => state.assets.products)

  return (
    <section className={styles.cart}>
      <div className={styles.cart__top}>
        <h2>
          Your Cart
        </h2>
        <ul>
          {products.map(product => <Asset
            product={product}
            key={product.id}
          />)}
        </ul>
        <Advertising/>
        <Promo/>
      </div>
      <TotalPrice products={products}/>
      <Link to={"/checkout"} className="myButton black">Checkout now</Link>
    </section>
  );
};

export default Cart;