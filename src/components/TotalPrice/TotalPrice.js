import React, {useEffect, useState} from 'react';
import * as styles from "./totalPrice.module.scss";
import {Link} from "gatsby";

const TotalPrice = ({products = []}) => {

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setTotalPrice(0)
    for (let i = 0; i < products.length; i++) {
      setTotalPrice(prevPrice => prevPrice + (products[i].count * products[i].price))
    }
  }, [products, setTotalPrice])

  // console.log('totalPrice'+ totalPrice)


  if (products.length === 0 && totalPrice === 0) {
    return <p>loading</p>
  }
  return (
    <div className={styles.totalPrice}>
      <ul>
        <li>
          <p>
            <small>
              Subtotal
            </small>
            <span>
              ${totalPrice}
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
              total
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
    </div>
  );
};

export default TotalPrice;