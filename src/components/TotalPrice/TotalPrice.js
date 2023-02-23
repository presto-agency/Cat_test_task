import React, {useEffect, useState} from 'react';
import * as styles from "./totalPrice.module.scss";

const TotalPrice = ({products = []}) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const formatNum = (num) => (Math.round((num) * 100) / 100).toFixed(2);
  let sumOfAssetsPrice = formatNum(totalPrice);
  let discountPrice = formatNum((totalPrice/100)*10);


  useEffect(() => {
    setTotalPrice(0)
    for (let i = 0; i < products.length; i++) {
      setTotalPrice(prevPrice => prevPrice + (products[i].count * products[i].price))
    }
  }, [products, setTotalPrice])

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
              ${sumOfAssetsPrice}
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
              -${discountPrice}
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
                ${sumOfAssetsPrice - discountPrice}
              </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default TotalPrice;