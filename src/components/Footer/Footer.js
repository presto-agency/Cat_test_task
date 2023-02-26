import React from "react";
import * as styles from "./footer.module.scss"
import iconOne from "../../../static/images/icon-footer-1.svg"
import iconTwo from "../../../static/images/icon-footer-2.svg"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <div className={styles.footer__content_top}>
            <p>
              Secured & Encrypted Checkout
            </p>
          </div>
          <div className={styles.footer__content_bottom}>
            <img src={iconOne} alt="icon"/>
            <img src={iconTwo} alt="icon"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;