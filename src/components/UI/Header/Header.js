import React from 'react';
import {Link} from "gatsby";
import * as styles from './header.module.scss'
import logo from '../../../images/icons/logo.svg'

const Header = ({title}) => {
  return (
    <header className={title === 'Checkout page' ? `${styles.header} ${styles.checkout}` : styles.header}>
      <div className='container'>
        <div className={styles.header__content}>
          <div className={styles.header__content_logo}>
            <Link to={'/'}>
              <img src={logo} alt="logo"/>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;