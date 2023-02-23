import React from 'react';
import * as styles from "./totalPrice.module.scss";
import {Link} from "gatsby";

const TotalPrice = () => {
  return (
    <div className={styles.totalPrice}>
      <ul>
        <li>
          <p>
            <small>
              Subtotal
            </small>
            <span>
              $368.00
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
      <Link to={'/checkout'} className='myButton black'>Checkout now</Link>
    </div>
  );
};

export default TotalPrice;