import React, { useState } from "react";

type ProductAddProps = {
  price?: string;
};

const ProductAdd = ({ price }: ProductAddProps) => {
  // quantity state
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    // add quantity to cart
    window.alert(`Added ${quantity} item(s) to cart`);
    // reset quantity to 1
    setQuantity(1);
    //set simple cookie for cart quantity persistence
    const cartCount = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cartCount"))
      ?.split("=")[1];
    if (cartCount) {
      document.cookie = `cartCount=${
        parseInt(cartCount) + quantity
      }; path=/; max-age=86400`;
    } else {
      document.cookie = `cartCount=${quantity}; path=/; max-age=86400`;
    }
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
      <div>{price}</div>
      <div className="flex">
        <div className="flex">Quantity</div>
        <div className="flex">
          <button
            className="bg-blue-100 hover:bg-blue-300 text-blue-800 py-2 px-4 rounded-l"
            onClick={() =>
              quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
            }
          >
            -
          </button>
          <button
            className="bg-blue-100 hover:bg-blue-300 text-black py-2 px-4"
            onClick={manualQuantity}
          >
            {quantity}
          </button>
          <button
            className="bg-blue-100 hover:bg-blue-300 text-blue-800 py-2 px-4 rounded-r"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <button
            className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded-l"
            onClick={addToCart}
          >
            Add to Cart
          </button>
          <button className="bg-blue-100 hover:bg-blue-300 text-blue-800 py-2 px-4 rounded-r">
            Add to Favourites
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductAdd;
