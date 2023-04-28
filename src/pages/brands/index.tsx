import BrandCard from "@/components/brand/brand-card";
import Layout from "@/components/layout/layout";
import React from "react";
import brandData from "@/data/brands.json";

const Brands = () => {
  return (
    <Layout>
      {brandData.map((brand) => (
        <BrandCard key={brand.id} id={brand.id} name={brand.name} image={brand.image?.url} />
      ))}
    </Layout>
  );
};

export default Brands;
