import React from "react";

type ProductAddProps = {
  price?: string;
};

const ProductAdd = ({ price }: ProductAddProps) => {
  return <div>{price}</div>;
};

export default ProductAdd;
