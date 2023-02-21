import React from 'react';
import asset from "../../../images/pictures/white.webp";
import * as styles from "./asset.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {decrementCreator, incrementCreator} from "../../../store/productReducer";


const Asset = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count.count)

  const addCash = (count) => {
    dispatch(incrementCreator(count))
  }

  const removeCash = (count) => {
    dispatch(decrementCreator(count))
  }

  return (
    <li className={styles.asset}>
      <div className={styles.asset__img}>
        <img src={asset} alt="asset"/>
      </div>
      <div className={styles.asset__content}>
        <p>
          Bouclé Bungalow “Creme” Cover
        </p>
        <div className={styles.asset__content_nav}>
          <div>
            <button onClick={removeCash}></button>
            <span>{count}</span>
            <button onClick={addCash} className={styles.variant}></button>
          </div>
          <span>239</span>
        </div>
      </div>
    </li>
  );
};

export default Asset;