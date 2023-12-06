import React from 'react'
import './Shop.css';
import ShopProducts from './ShopProducts';

const Shop = () => {
  return (
    <div className='shop-container'>
        <div className='shop-header'>
            <div className='box-heading'>
                <h1 className='box-title'>Avada Grooming Products</h1>
            </div>
        </div>
        <div className='shop-main'>
            <ShopProducts />
        </div>
    </div>
  )
}

export default Shop