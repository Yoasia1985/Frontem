import { Link } from "gatsby";
import React from "react";

import * as styles from "../styles/header.module.css";

const Header = ({ siteTitle }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link to="/">{siteTitle}</Link>
        </div>
        <nav className={styles.nav}>
          <li className={styles.branding}>
            <Link to="/projects/">Projects</Link>
          </li>
          <li className={styles.branding}>
            <Link to="/contact/">Contact</Link>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Header;
