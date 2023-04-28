import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <Link href="/"> Home </Link>
      <hr/>
      <Link href="/brands"> View All Brands </Link>
    </>

    // todo:
    // - grey sg/contact
    // - logo
    // - view all brands (link to /brands)
    // - cart button (with persistent count of items in cart)
    // - search bar (future)
  );
};

export default Header;
