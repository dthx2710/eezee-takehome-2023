import React, { useState, useContext } from "react";
import { CartContext } from "@/pages/_app";

type ProductAddProps = {
  price?: string;
};

const ProductAdd = ({ price }: ProductAddProps) => {
  // cart context
  const { cart, setCart } = useContext(CartContext);

  // quantity state
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    // reset quantity to 1
    setQuantity(1);
    // set cart context
    setCart(cart + quantity);
    // add quantity to cart
    window.alert(`Added ${quantity} item(s) to cart`);
  };

  const manualQuantity = () => {
    const prompt = window.prompt("Enter quantity");
    if (prompt === null) {
      window.alert("Invalid quantity");
      return;
    }
    const qty = parseInt(prompt);
    if (qty > 0) {
      setQuantity(qty);
    } else {
      window.alert("Invalid quantity");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center bg-white px-10 py-5 rounded-xl">
        <div className="text-2xl font-bold text-blue-600 mb-3 text-center">{price}</div>
        <hr />
        <div className="flex my-3 items-center">
          <div className="font-semibold">Quantity:</div>
          <div className="ml-5">
            <button
              className="bg-white hover:bg-blue-200 text-blue-800 py-2 px-4 rounded-l border"
              onClick={() =>
                quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
              }
            >
              -
            </button>
            <button
              className="bg-white hover:bg-blue-200 text-black py-2 px-4 border"
              onClick={manualQuantity}
            >
              {quantity}
            </button>
            <button
              className="bg-white hover:bg-blue-200 text-blue-800 py-2 px-4 rounded-r border"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addToCart}
          >
            Add to Cart
          </button>
          <div className="mb-1"></div>
          <button className="bg-transparent hover:bg-orange-700 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-700 hover:border-transparent rounded">
            Add to Favourites
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductAdd;
