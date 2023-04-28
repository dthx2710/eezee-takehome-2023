import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductCardProps = {
  id: string;
  title: string;
  image: string;
  uniqueTitle: string;
  vipPriceFlag?: boolean;
  bulkDiscountFlag?: boolean;
  lowPrice?: number;
  lowPricePretty?: string;
  lowPriceOriginal?: number;
  lowPriceOriginalPretty?: string;
  highPrice?: number;
  highPricePretty?: string;
  highPriceOriginal?: number;
  highPriceOriginalPretty?: string;
  currencySymbol?: string;
};

const ProductCard = ({ id, title, image, uniqueTitle, lowPricePretty }: ProductCardProps) => {
  return (
    <>
      <div className="flex">
        {image && <Image src={image} alt={title} width={200} height={200} />}
        <Link href={`/products/${uniqueTitle}`}>{title}</Link>
        <p>{lowPricePretty}</p>
      </div>
    </>
  );
};

export default ProductCard;
