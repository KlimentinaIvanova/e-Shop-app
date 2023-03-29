import './css/Header.css'
import { Link } from "react-router-dom";
import { AuthContext } from "../Services/AuthContext";
import { useContext } from "react";

const Header = () => {

    const {user}=useContext(AuthContext)
    //console.log(user)
    return (
<header>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
 <div  class="head_top">
       <div class="header">
          <div class="container">
             <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                   <div class="full">
                      <div class="center-desk">
                         <div class="logo"></div>
        <a href="/"><img src="images/logo.png" alt="logo" /></a>
        </div>
                      </div>
                   </div>
                </div>
                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                   <nav class="navigation navbar navbar-expand-md navbar-dark ">
      <div className="collapse navbar-collapse" id="navbarNav">
        {user && user.email && <span>{user.email}</span>}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/catalog">
              Catalog
            </Link>
          </li>
          {user && user.email && <span>{user.email}</span> 
           ? <div id="user">
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Create Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
              </div>
           : 
            <div id="guest">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </div>
          }
          <li className="nav-item">
            <Link className="nav-link" to="/contacts">
              Contact Us
            </Link>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      </nav>
    </div>
    </div>
  </div>
  <section className="banner_main">
  <div class="container-fluid">
             <div class="row d_flex">
                <div class="col-md-5">
    <div className="text-bg">
      <h1>
    Welcome to eShop!
      </h1>
    <span>We are offering electronic technique with a great quality and the best price!</span>
    </div>
    </div>
    <div class="col-md-7 padding_right1">
                   <div class="text-img">
                      <figure><img src="images/top_img.png" alt="#"/></figure>
                      </div>
                </div>
             </div>
          </div>
  </section>
  </div>
</header>
  
    );
  };
  export default Header;
  