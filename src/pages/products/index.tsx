import React from "react";
import ProductCard from "@/components/product/product-card";
import Layout from "@/components/layout/layout";
import productData from "@/data/products.json";
import ProductSort from "@/components/product/product-sort";

const Products = () => {
  return (
    <Layout>
      <p>Page 1 of about 10 results</p>
      <ProductSort />
      {productData.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.images[0].url}
          uniqueTitle={product.uniqTitle}
        />
      ))}
    </Layout>
  );
};

export default Products;
