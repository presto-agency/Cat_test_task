import React, {useState} from 'react';
import * as styles from "./asset.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {decrementCreator, incrementCreator} from "../../../store/productReducer";


const Asset = ({name, price, src}) => {
  const dispatch = useDispatch()
  // const count = useSelector(state => state.assets.count)

  // const decValue = (count) => {
  //   dispatch(incrementCreator(count))
  // }
  //
  // const incValue = (count) => {
  //   dispatch(decrementCreator(count))
  // }

  const [count, setCount] = useState(1)

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
            <button disabled={count <= 0} onClick={() => setCount(count - 1)}></button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)} className={styles.variant}></button>
          </div>
          <span>{(Math.round((price * count) * 100) / 100).toFixed(2)}</span>
        </div>
      </div>
    </li>
  );
};

export default Asset;