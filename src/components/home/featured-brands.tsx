import React from "react";
import BrandCard from "@/components/brand/brand-card";
import Link from "next/link";
import brandData from "@/data/brands.json";

const FeaturedBrands = () => {
  return (
    <>
      <div>
        <h2>Featured Brands</h2>
      </div>
      <div>
        <p>Browse the full catalog of brands today</p>
        <Link href="/brands">View More</Link>
      </div>
      <div className="grid grid-cols-6 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {brandData.map((brand) => {
          if (brand.featured) {
            return <BrandCard key={brand.id} id={brand.id} name={brand.name} image={brand.image?.url} />;
          }
        })}
      </div>
    </>
  );
};

export default FeaturedBrands;
