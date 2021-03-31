import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Header from "./header";

import "../styles/layout.css";
import * as styles from "../styles/layout.module.css";

export const query = graphql`
  query MyQuery {
    sanitySiteSettings {
      title
    }
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(query);
  return (
    <>
      <Header siteTitle={data.sanitySiteSettings.title} />
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.siteInfo}>
            &copy; {new Date().getFullYear()}, FRONTEM
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
