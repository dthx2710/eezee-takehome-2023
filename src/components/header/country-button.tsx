import React from "react";
import styles from "./header.module.css";
import Image from 'next/image';
import SGIcon from 'public/header/sg.png';

const CountryButton = () => {
  return (
    <>
      <Image src={SGIcon} alt="Country" className={styles.country}/>
      <span>Singapore</span>
    </>
  );
};

export default CountryButton;
