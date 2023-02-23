import React from 'react';
import {Link} from "gatsby";
import * as styles from './header.module.scss'
import logo from '../../images/icons/logo.svg'

const Header = ({title}) => {
  return (
    <header className={title === 'Checkout' ? `${styles.header} ${styles.checkout}` : styles.header}>
      <div className='container'>
        <div className={styles.header__content}>
          <div className={styles.header__content_logo}>
            <Link to={'/'}>
              <img src={logo} alt="logo"/>
            </Link>
          </div>
          {title === 'Checkout' && <div className={styles.header__content_description}>
            <h1>
              {title}
            </h1>
          </div>}
        </div>
      </div>
    </header>
  );
};

export default Header;