import React, {useState} from 'react';
import * as styles from "./cart.module.scss"
import Asset from "../Asset/Asset";
import Advertising from "../../Advertising/Advertising";
import {Link} from "gatsby";
import {useSelector} from "react-redux";
import TotalPrice from "../../TotalPrice/TotalPrice";

const Cart = () => {
  const products = useSelector(state => state.assets.product)
  const [total, setTotal] = useState([
    {
      id: 0,
      total: 0
    }
  ]);

  const returnTotal = (data) => {
    let array2 = [...total]
    array2.map((item) => {
      if (item.id === data.id) {
        item.total = data.total
        setTotal(
          [...array2]
        )
      } else {
        setTotal(
          [...total, data]
        )
      }
    })
  }

  return (
    <section className={styles.cart}>
      <div className={styles.cart__top}>
        <h2>
          Your Cart
        </h2>
        <ul>
          {products.map(product => <Asset
            key={product.id}
            name={product.name}
            price={product.price}
            src={product.src}
            id={product.id}
            returnTotal={returnTotal}
          />)}
        </ul>
        <Advertising/>
        <p>
          Promo Code? <Link to={'/'}>Enter Code</Link>
        </p>
      </div>
      <TotalPrice/>
    </section>
  );
};

export default Cart;