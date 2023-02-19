import React from 'react';
import * as styles from "./myButton.module.scss"

const MyButton = ({description}) => {
  return (
    <button className={styles.myButton}>
      {description}
    </button>
  );
};

export default MyButton;