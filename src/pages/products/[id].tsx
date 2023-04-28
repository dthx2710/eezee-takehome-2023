import Product from "@/components/product/product";
import { useRouter } from 'next/router';
import React from "react";

const ProductPage = () => {
    const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Product uniqueTitle={id} />
    </>
  );
};

export default ProductPage;
