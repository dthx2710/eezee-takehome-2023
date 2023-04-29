import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, createContext } from "react";
import Head from "next/head";

export const CartContext = createContext({
  cart: 0,
  setCart: (cart: number) => {},
});

export default function App({ Component, pageProps }: AppProps) {
  const [cart, setCart] = useState(0);
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <CartContext.Provider value={{ cart, setCart }}>
        <Component {...pageProps} />
      </CartContext.Provider>
    </>
  );
}
