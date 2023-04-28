import React from "react";
import productData from "@/data/products.json";
import ProductAdd from "@/components/product/product-add";
import Image from "next/image";
import Card from "@/components/card/card";

type ProductProps = {
  uniqueTitle?: string | string[];
};

const Product = ({ uniqueTitle }: ProductProps) => {
  const product = productData.find(
    (product) => product.uniqTitle === uniqueTitle
  );

  return (
    <>
      {product && (
        <>
          <div className="flex">
            <div className="flex-1 bg-white">
              <div className="flex flex-col px-5">
                <div>
                  <h1 className="text-2xl font-bold mx-3 my-2">
                    {product.title}
                  </h1>
                </div>
                <div className="flex flex-row my-2">
                  <div className="flex-2 mr-5">
                    <Image
                      src={product.metadata.brandImage}
                      alt={product.metadata.brand}
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col">
                      <div className="flex">
                        <h2 className="font-light mr-2">Model:</h2>
                        <p className="link">{product.metadata.model}</p>
                      </div>
                      <div className="flex">
                        <h2 className="font-light mr-2">Brand:</h2>
                        <p className="link">{product.metadata.brand}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <Image
                  src={product.images[0].url}
                  alt={product.title}
                  height={250}
                  width={250}
                  className="mx-auto object-contain object-center"
                />

                <hr />
                <div className="mt-5">
                  <div>
                    <h2 className="text-lg font-bold">Product Description</h2>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.descriptionHtml,
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex ml-10">
                <ProductAdd price={product.lowPricePretty} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Product;
