import React, { useState, useEffect } from "react";
import ProductCard from "@/components/product/product-card";
import Layout from "@/components/layout/layout";
import productData from "@/data/products.json";
import ProductSort from "@/components/product/product-sort";

const Products = () => {
  // states
  const [sort, setSort] = useState(0);
  const [data, setData] = useState(productData);

  // useEffect to sort data when sort state changes
  useEffect(() => {
    if (sort === 0) {
      // sort by default
      setData(productData);
    } else if (sort === 1) {
      // sort from low to high
      setData(productData.slice().sort((a, b) => b.lowPrice - a.lowPrice));
    } else if (sort === 2) {
      // sort from high to low
      setData(productData.slice().sort((a, b) => a.lowPrice - b.lowPrice));
    }
  }, [sort]);

  return (
    <Layout>
      <div className="my-3">
        <p>Page 1 of about 10 results</p>
      </div>
      <div className="my-3">
        <ProductSort sort={sort} setSort={setSort} />
      </div>
      <div className="grid grid-cols-6 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.images[0].url}
            uniqueTitle={product.uniqTitle}
            lowPriceOriginal={product.lowPriceOriginal || undefined}
            highPriceOriginal={product.highPriceOriginal || undefined}
            lowPrice={product.lowPrice || undefined}
            highPrice={product.highPrice || undefined}
            currencySymbol={product.currencySymbol || undefined}
            moq={product.moq > 1 ? product.moq : undefined}
            bulkDiscountFlag={product.bulkDiscountFlag}
            vipPriceFlag={product.vipPriceFlag}
            lowPricePretty={product.lowPricePretty || undefined}
            highPricePretty={product.highPricePretty || undefined}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Products;
