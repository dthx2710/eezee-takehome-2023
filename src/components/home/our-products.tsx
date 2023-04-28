import React from "react";
import ProductCard from "@/components/product/product-card";
import Link from "next/link";
import productData from "@/data/products.json";
import Section from "../layout/section";

const OurProducts = () => {
  return (
    <Section title="Our Products" subtitle="Trusted by the best companies in Asia" link="products">
      <div className="grid grid-cols-6 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {productData.slice(0,6).map((product) => (
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
    </Section>
  );
};

export default OurProducts;
