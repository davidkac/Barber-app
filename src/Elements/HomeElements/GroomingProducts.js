import React from "react";
import "./GroomingProducts.css";
import product1 from "../../assets/brush_dark-400x400.webp";
import product2 from "../../assets/hot_oil_dark-400x400.webp";
import product3 from "../../assets/scissors-400x400.webp";
import product4 from "../../assets/straight_razor_dark-400x400.webp"

const GroomingProducts = () => {
  const products = [
    { img: product1, name: "Brush", price: "15.00" },
    { img: product3, name: "Scissors", price: "85.00" },
    { img: product2, name: "Hot Oil", price: "15.00" },
    { img: product4, name: "Straigh Razor", price: "30.00" },
  ];
  return (
    <div className="grooming-container">
      <div className="grooming-top">
        <p className="top-text">WE HAVE YOU COVERED</p>
        <h1 className="top-title">Avada Grooming Products</h1>
      </div>
      <div className="grooming-products">
        {products
          ? products.map((prod, index) => {
              return (
                <div className="grooming-product">
                  <img src={prod.img} className="product-img" alt="adasda"/>
                  <h1 className="product-name">{prod.name}</h1>
                  <p className="product-price">${prod.price}</p>
                </div>
              );
            })
          : null}
      </div>
      <button className="product-btn">SHOP OUR PRODUCT RANGE</button>
    </div>
  );
};

export default GroomingProducts;
