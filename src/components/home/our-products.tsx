import React from "react";
import ProductCard from "@/components/product/product-card";
import Link from "next/link";
import productData from "@/data/products.json";

const OurProducts = () => {
  return (
    <>
      <div>
        <h2>Our Products</h2>
      </div>
      <div>
        <p>Trusted by the best companies in Asia</p>
        <Link href="/products">View More</Link>
      </div>
      <div className="grid grid-cols-6 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {productData.slice(0,6).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.images[0].url}
            uniqueTitle={product.uniqTitle}
          />
        ))}
      </div>
    </>
  );
};

export default OurProducts;
