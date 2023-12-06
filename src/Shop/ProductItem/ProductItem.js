import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductItem.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import shopItems from "../../Items/Items";

const ProductItem = () => {
  const [shopItem, setShopItem] = useState({});

  const { prodId } = useParams();

  const findShopItem = () => {
    const prodItem = shopItems.find((el) => el.id === prodId);
    setShopItem(prodItem);
    console.log(prodItem);
  };

  useEffect(() => {
    findShopItem();
  }, []);

  const onSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="shop-container">
      <div className="shop-header">
        <div className="box-heading">
          <h1 className="box-title">Avada Grooming Products</h1>
        </div>
      </div>
      <div className="social-media">
        <div className="media-title">
          <h2>Share With Your Friends!</h2>
        </div>
        <div className="media-btns">
          <button className="media-btn">
            <FacebookIcon sx={{ fontSize: "20px" }} />
          </button>
          <button className="media-btn">
            <InstagramIcon sx={{ fontSize: "20px" }} />
          </button>
          <button className="media-btn">
            <YouTubeIcon sx={{ fontSize: "20px" }} />
          </button>
          <button className="media-btn">
            <LinkedInIcon sx={{ fontSize: "20px" }} />
          </button>
          <button className="media-btn">
            <WhatsAppIcon sx={{ fontSize: "20px" }} />
          </button>
          <button className="media-btn">
            <TwitterIcon sx={{ fontSize: "20px" }} />
          </button>
          <button className="media-btn">
            <MailOutlineIcon sx={{ fontSize: "20px" }} />
          </button>
        </div>
      </div>
      <div className="product-container">
        <div className="product-box">
          <div className="product-cart">
            <div className="product-inf">
              <h2 className="inf-name">Brush</h2>
              <p className="inf-comm">Be frist to leave a review.</p>
              <p className="inf-price">$ 15.00</p>
              <p className="inf-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                sit amet felis sed nibh pulvinar dictum condimentum ac nibh.
              </p>
            </div>
            <form onSubmit={onSubmitForm} className="form">
              <div className="form-div">
                <button className="btn-increase">-</button>
                <input className="form-input" defaultValue="0" type="text" />
                <button className="btn-decrease">+</button>
              </div>
              <button type="submit" className="form-btn">
                ADD TO CART
              </button>
            </form>
          </div>
          <div className="product-right-box">
            <img src={shopItem.img} alt={shopItem.img} className="item-img" />
          </div>
        </div>
      </div>
      <div className="description-content">
        <div className="description-btns">
          <button className="desc-btn">Description</button>
          <button className="rev-btn">Review (0) </button>
        </div>
        <div className="description-container">
          <div className="description-detail">
          <h2 className="description-title">Description</h2>
          <p className="description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit
            amet felis sed nibh pulvinar dictum condimentum ac nibh. Duis dictum
            molestie orci, et malesuada purus finibus eu. Nunc laoreet, dui
            lacinia egestas ultrices, diam neque varius nibh, ac tristique arcu
            tellus vel mauris. Sed eget mauris volutpat arcu congue tempus et
            congue tellus.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
