import React from "react";
const ProductContext = React.createContext({
  all: [
    {
      name: "Sennheiser SKM 9000",
      uom: "PC",
      qty: 20,
      cost: 8700,
      price: 18000,
      active: true,
    },
    {
      name: "3.0mm Speaker Cable Roll - Nicco",
      uom: "PC",
      qty: 10,
      cost: 2000,
      price: 4500,
      active: true,
    },
    {
      name: "BNK B5",
      uom: "PC",
      qty: 6,
      cost: 1200,
      price: 2500,
      active: false,
    },
    {
      name: "BNK B6S",
      uom: "PC",
      qty: 54,
      cost: 1000,
      price: 2000,
      active: true,
    },
    {
      name: "DS115 - EV",
      uom: "PC",
      qty: 22,
      cost: 18000,
      price: 22000,
      active: true,
    },
  ],
});
export default ProductContext;
