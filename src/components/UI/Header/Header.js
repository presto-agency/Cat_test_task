import React from 'react';
import {Link} from "gatsby";
import {header, header__content, header__content_logo} from './header.module.scss'

const Header = () => {
  return (
    <header className={header}>
      <div className='container'>
        <div className={header__content}>
          <div className={header__content_logo}>
            <Link to={'/'}>
              dd
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;