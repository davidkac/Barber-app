import React from 'react'
import './MainNavigation.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Drawer from './Drawer.js';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <div className='header'>
       <div className='header-left'>
            <h2 className='header-left-title'><Link to='/'>BARBERS</Link></h2>
       </div>
       <div className='header-right'>
            <nav className='navigation'>
                <ul className='nav-items'>
                    <li className='nav-item'><ShoppingCartOutlinedIcon style={{ fontSize: 33}} /></li>
                    <li className='nav-item'><Drawer /></li>
                </ul>
            </nav>
       </div>
    </div>
  )
}

export default MainNavigation