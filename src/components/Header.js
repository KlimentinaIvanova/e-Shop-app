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
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="img_logo">
        <a href="/">
          <img src="images/logo.png" alt="logo" />
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
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
          {user && user.email ? (
            <div id="user">
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
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {user.email}
                </Link>
              </li>
            </div>
          ) : (
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
          )}
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
    </div>
  </nav>
  <section className="banner_main">
    <div className="text-bg">
      <h1>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni ea minima quam autem iste voluptatem fugit quod praesentium, neque vitae consequuntur harum aliquid facilis natus, voluptatibus explicabo assumenda ex soluta.
      </h1>
    </div>
  </section>
</header>
  
    );
  };
  export default Header;
  