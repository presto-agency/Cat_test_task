import React, {useEffect, useState} from "react";
import * as styles from "./totalPrice.module.scss";

const TotalPrice = ({products = [], selected = null}) => {
  const [totalPrice, setTotalPrice] = useState(0)
  const formatNum = (num) => (Math.round((num) * 100) / 100).toFixed(2);
  const sumOfAssetsPrice = totalPrice;
  const discountPrice = 20;
  const shipping = Number(selected);


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
              ${formatNum(sumOfAssetsPrice)}
            </span>
          </p>
        </li>
        <li>
          <p>
            <small>
              Shipping
            </small>
            <span>
              ${selected === null
              ? "calculated next step"
              : formatNum(shipping)}
            </span>
          </p>
        </li>
        <li>
          <p>
            <small>
              Discounts
            </small>
            <span>
              -${formatNum(discountPrice)}
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
              ${formatNum(selected === null
              ? sumOfAssetsPrice - discountPrice
              : sumOfAssetsPrice - discountPrice + shipping)}
              </span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default TotalPrice;