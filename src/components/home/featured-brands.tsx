import React from "react";
import BrandCard from "@/components/brand/brand-card";
import brandData from "@/data/brands.json";
import Section from "../layout/section";

const FeaturedBrands = () => {
  return (
    <Section title="Featured Brands" subtitle="Browse the full catalog of brands today" link="brands">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {brandData.map((brand) => {
          if (brand.featured) {
            return <BrandCard key={brand.id} id={brand.id} name={brand.name} image={brand.image?.url} productCount={brand.productCount} />;
          }
        })}
      </div>
    </Section>
  );
};

export default FeaturedBrands;
