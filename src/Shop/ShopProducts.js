import {useEffect ,useState}from "react";
import ShopFiltering from "./ShopFiltering";
import "./ShopProducts.css";
import { Link } from "react-router-dom";
import shopItems from '../Items/Items';

const ShopProducts = () => {


  return (
    <div className="shop-products">
      <div className="shop-filtering">
        <ShopFiltering />
      </div>
      <div className="box-products">
        {shopItems
          ? shopItems.map((prod, index) => {
              return (
                <div className="box-product" key={prod.id}> 
                  <Link to={`/shop/${prod.id}`}><img src={prod.img} alt={index} className="product-img" /></Link>
                  <p className="product-name">{prod.name}</p>
                  <p className="box-product-price">${prod.price}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ShopProducts;
