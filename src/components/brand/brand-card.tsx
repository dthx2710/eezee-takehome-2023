import Image from "next/image";
import React from "react";

type BrandCardProps = {
  id: string;
  name: string;
  productCount?: number;
  featured?: boolean;
  image?: string;
};

const BrandCard = ({ id, name, productCount, image }: BrandCardProps) => {
  return (
    <>
      <div className="flex">
        {image && <Image src={image} alt={name} width={200} height={200} />}
        {name}
      </div>
    </>
  );
};

export default BrandCard;
