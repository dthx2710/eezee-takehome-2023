import BrandCard from "@/components/brand/brand-card";
import Layout from "@/components/layout/layout";
import React from "react";
import brandData from "@/data/brands.json";

const Brands = () => {
  // sort brand by name
  const sortedBrands = brandData.sort((a, b) => a.name.localeCompare(b.name));
  // every alphabet has its own array
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  // array of brands that start with each alphabet
  const brands = alphabet.map((letter) =>
    sortedBrands.filter((brand) =>
      brand.name.toLowerCase().startsWith(letter.toLowerCase())
    )
  );

  return (
    <Layout>
      {brands.map((brand, index) => (
        <div key={index}>
          {brand.length > 0 && (
            <>
              <div className="mt-10 mb-4">
                <span className="bg-gray-200 py-2 px-5">{alphabet[index]}</span>
              </div>
              <div className="grid grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-4">
                {brand.map((brand) => (
                  <BrandCard
                    key={brand.id}
                    id={brand.id}
                    name={brand.name}
                    image={brand.image?.url}
                    productCount={brand.productCount}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </Layout>
  );
};

export default Brands;
