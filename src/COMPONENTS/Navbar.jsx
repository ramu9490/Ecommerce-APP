import React, { useState } from 'react';
import { BrowserRouter, Link, Routes, Route, useNavigate } from 'react-router-dom';
import Signin from './Signin';
import Card from './card';
import AddProduct from './AddProduct';
import SearchResults from './SearchResults';
import ContactUs from './ContactUs'; 

function Navbar(props) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  const logOut = () => {
    window.location.pathname = '/signin';
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#232f3e' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: '#ffffff' }}>Eshop Cart🛒</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown me-3"> {/* Added margin-right */}
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/category/electronics">Electronics</Link></li>
                  <li><Link className="dropdown-item" to="/category/fashion">Fashion</Link></li>
                  <li><Link className="dropdown-item" to="/category/home">Home</Link></li>
                </ul>
              </li>
              <li className="nav-item me-3"> {/* Added margin-right */}
                <Link to='/contact' className="nav-link">Contact Us</Link>
              </li>
              <li className="nav-item me-3"> {/* Added margin-right */}
                <button type="button" id='mypopover' data-html='true' className="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                  Cart
                </button>
              </li>
              {props.initial ? (
                <>
                  <li className="nav-item me-3"> {/* Added margin-right */}
                    <Link to='/home' className="nav-link active">Home</Link>
                  </li>
                  <li className="nav-item me-3"> {/* Added margin-right */}
                    <button className="btn btn-outline-light" onClick={logOut}>Sign out</button>
                  </li>
                </>
              ) : (
                <li className="nav-item me-3"> {/* Added margin-right */}
                  <Link to='/signin' className="nav-link">Hello, Sign in</Link>
                </li>
              )}
            </ul>
            <form className="d-flex" onSubmit={handleSearchSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ color: '#000000', backgroundColor: '#ffffff' }}
              />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
