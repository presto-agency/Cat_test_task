import React, {useState} from 'react';
import * as styles from "./cart.module.scss"
import Asset from "../Asset/Asset";
import Advertising from "../Advertising/Advertising";
import {Link} from "gatsby";
import {useSelector} from "react-redux";
import TotalPrice from "../TotalPrice/TotalPrice";
import Promo from "../Promo/Promo";

const Cart = () => {

  const products = useSelector(state => state.assets.product)
  // const [total, setTotal] = useState([
  //   {
  //     id: 0,
  //     total: 0
  //   }
  // ]);

  // const returnTotal = (data) => {
  //   let array2 = [...total]
  //   array2.map((item) => {
  //     if (item.id === data.id) {
  //       item.total = data.total
  //       setTotal(
  //         [...array2]
  //       )
  //     } else {
  //       setTotal(
  //         [...total, data]
  //       )
  //     }
  //   })
  // }
  return (
    <section className={styles.cart}>
      <div className={styles.cart__top}>
        <h2>
          Your Cart
        </h2>
        <ul>
          {products.map(product => <Asset
            product={product}
            // returnTotal={returnTotal}
          />)}
        </ul>
        <Advertising/>
        <Promo/>
      </div>
      <TotalPrice products={products}/>
      <Link to={'/checkout'} className='myButton black'>Checkout now</Link>
    </section>
  );
};

export default Cart;