import Link from "next/link";
import React from "react";
import ContactBar from "./contact-bar";
import HeaderBanner from "./header-banner";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.headerbar}>
      <ContactBar />
      <HeaderBanner />
    </div>
  );
};

export default Header;
