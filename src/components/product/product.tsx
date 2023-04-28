import React from "react";
import productData from "@/data/products.json";
import ProductAdd from "@/components/product/product-add";
import Image from "next/image";

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
          <h1>{product.title}</h1>
          {product.images[0].url && <Image src={product.images[0].url} alt={product.title} width={200} height={200} />}
        
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />

          <ProductAdd price={product.lowPricePretty} />
        </>
      )}
    </>
  );
};

export default Product;
