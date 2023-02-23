import React, {useState} from 'react';
import * as styles from "./asset.module.scss"


const Asset = ({name, price, src, returnTotal, id}) => {
  const [count, setCount] = useState(1)
  const totalPrice = (Math.round((price * count) * 100) / 100).toFixed(2);
  const product = {
    'id':id,
    'total': totalPrice
  }


  const decValue = () => {
    setCount(count - 1)
    returnTotal(product)
  }

  const incValue = () => {
    setCount(count + 1)
    returnTotal(product)
  }


  return (
    <li className={styles.asset}>
      <div className={styles.asset__img}>
        <img src={src} alt="asset"/>
      </div>
      <div className={styles.asset__content}>
        <p>
          {name}
        </p>
        <div className={styles.asset__content_nav}>
          <div>
            <button disabled={count <= 0} onClick={decValue}></button>
            <span>{count}</span>
            <button className={styles.variant} onClick={incValue}></button>
          </div>
          <span>{totalPrice}</span>
        </div>
      </div>
    </li>
  );
};

export default Asset;