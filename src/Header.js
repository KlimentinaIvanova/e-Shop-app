/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import "../src/styles/Header.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontTwoToneIcon from '@material-ui/icons/StorefrontTwoTone';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';



export const Header = () => {
  
  const [{basket},dispatch]=useStateValue()

 
  return (
    <div className='header'>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className="header_logo">
          <StorefrontTwoToneIcon className='header_logoImage' fontSize='large' />
          <h2 className='header_logoTitle'>eShop</h2>
        </div>
      </Link>



      <div className="header_search">
        <input type='text' className='header_searchInput' />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className='dropdown'>
  <button className='dropbtn'>Hello,User !</button>
  <div className="dropdown-content">
<a href='/logout'>Logout</a>
  </div>
</div>

      <div className="header_nav">
        <Link to='/login' style={({textDecoration: 'none'})}>
        <div className="nav_item">
          <span className="nav_itemLineTwo">Sign in</span>
          </div>
        </Link>

        <Link to='/register' style ={({textDecoration:'none'})}>
        <div className="nav_item">
          <span className="nav_itemLineThree">Register</span>
          </div>
          </Link>

          <Link to='/logout' style ={({textDecoration:'none'})}>
        <div className="nav_item">
          <span className="nav_itemLineFour">Logout</span>
          </div>
          </Link>
          
          <Link to='/catalog'style ={({textDecoration:'none'})}>
        <div className="nav_item">
          <span className='nav_itemLineSix'>Catalog</span>
          </div>
          </Link>
          
          <Link to='/contacts'style ={({textDecoration:'none'})}>
          <div className="nav_item">
          <span className='nav_itemLineFive'>Contacts</span>
        </div>
        </Link>

        <Link to='/details'style ={({textDecoration:'none'})}>
          <div className="nav_item">
          <span className='nav_itemLineSeven'>Details</span>
          </div>
          </Link>

          <Link to='/create' style={({textDecoration: 'none'})}>
          <div className='nav_item'>
          <span className='nav_itemLineEight'>Create</span>
          </div>
          </Link>
          
        <Link to='/checkout' style={{ textDecoration: 'none' }}>
          <div className="nav_item">
            <ShoppingCartIcon className='itemBasket' />
            <span className="nav_itemLineTwo nav_basketCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
