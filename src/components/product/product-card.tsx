import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../card/card";

type ProductCardProps = {
  id: string;
  title: string;
  image: string;
  uniqueTitle: string;
  vipPriceFlag?: boolean;
  bulkDiscountFlag?: boolean;
  moq?: number;
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

const ProductCard = ({ id, title, image, uniqueTitle, lowPrice, highPrice, lowPriceOriginal, highPriceOriginal, currencySymbol, vipPriceFlag, bulkDiscountFlag, moq, lowPricePretty, highPricePretty }: ProductCardProps) => {
  let originalPrice = undefined;
  if (lowPriceOriginal && highPriceOriginal) {
    originalPrice = `${currencySymbol}${lowPriceOriginal.toFixed(2)} - ${currencySymbol}${highPriceOriginal.toFixed(2)}`;
  } else if (lowPriceOriginal) {
    originalPrice = `${currencySymbol}${lowPriceOriginal.toFixed(2)}`;
  } else if (highPriceOriginal) {
    originalPrice = `${currencySymbol}${highPriceOriginal.toFixed(2)}`;
  }

  const tags = [];

  if (vipPriceFlag) {
    tags.push({name: "VIP Price", color: "text-blue-700 bg-blue-300"});
  }

  if (bulkDiscountFlag) {
    tags.push({name: "Bulk Discount", color: "text-amber-700 bg-amber-300"});
  }

  if (moq) {
    tags.push({name: `MOQ: ${moq}`, color: "bg-slate-300"});
  }

  return (
    <Link href={`/products/${uniqueTitle}`}>
      <Card image={image} altText={title} className="h-full" tags={tags}>
        <div className="flex flex-col mt-2 mb-2">
          <span className={`text-slate-500 text-xs line-through ${originalPrice ? "visible" : "invisible"}`}>{originalPrice ? originalPrice : "&nbsp;"}</span>
          <span className="text-lg text-sky-700 font-bold">{lowPricePretty}{highPricePretty&&(` — ${highPricePretty}`)}</span>
        </div>
        <hr/>
        <span className="mt-2">{title}</span>
      </Card>
    </Link>
  );
};

export default ProductCard;
