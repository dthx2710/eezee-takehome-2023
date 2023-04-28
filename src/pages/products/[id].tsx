import Layout from "@/components/layout/layout";
import Product from "@/components/product/product";
import { useRouter } from "next/router";
import React from "react";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Layout>
        <Product uniqueTitle={id} />
      </Layout>
    </>
  );
};

export default ProductPage;
