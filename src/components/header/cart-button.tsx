import React from "react";
import styles from "./header.module.css";
import Image from 'next/image';

const CartButton = () => {
  return (
    <>
      <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          <circle cx="20" cy="5" r="6" fill="#5885e0" stroke="" strokeWidth={0} />
        </svg>
        <span className={`absolute top-0 right-2.5 ${styles.cardcounter}` }>4</span>
      </div>
      <span className="font-bold">Cart</span>
    </>
  );
};

export default CartButton;
