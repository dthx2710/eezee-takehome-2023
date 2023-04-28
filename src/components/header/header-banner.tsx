import React from "react";
import Image from "next/image";
import styles from "./header.module.css";
import CartButton from "./cart-button";

import Logo from "public/header/eezee-logo.svg";
import Link from "next/link";

const HeaderBanner = () => {
  return (
    <div className={`flex items-center justify-between ${styles.headerbanner}`}>
      <div className="min-w-0 flex-1 py-2 px-8 flex flex-col max-w-screen-2xl mx-auto">
        <div className="flex flex-row">
          <div>
            <Image src={Logo} alt="Eezee" className={`my-4 ${styles.logo}`}/>
          </div>
          <div className="flex-1"></div>
          <div>
            <CartButton />
          </div>
        </div>
        <div>
          <Link href="/brands" className="link">View All Brands</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
