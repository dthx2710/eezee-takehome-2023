import React from "react";
import Card from "../card/card";

type BrandCardProps = {
  id: string;
  name: string;
  productCount?: number;
  featured?: boolean;
  image?: string;
};

const BrandCard = ({ id, name, productCount, image }: BrandCardProps) => {
  return (
    <Card image={image} altText={name}>
      <span className="font-bold text-center">{name}</span>
      <span className="text-xs text-center text-slate-600">{productCount} Product{(productCount && productCount > 1) ? "s" : ""}</span>
    </Card>
  );
};

export default BrandCard;
