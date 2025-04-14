import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser, BiCart } from "react-icons/bi";
import { FaCentos } from "react-icons/fa"; // Import loading spinner icon
import "./Navbar.css";

function Navbar() {
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    setLoading(true); // Show loader

    setTimeout(() => {
      setLoading(false); // Hide loader after delay
      navigate(path);
    }, 2000); // Simulating a 2-second loading effect
  };

  return (
    <div>
      {/* Full-screen loading animation */}
      {loading && (
        <div className="loading-container fade-in">
          <FaCentos className="loader-icon" />
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-top">
          <Link to="/">
            <h2>FoosZone</h2>
          </Link>

          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search for products..."
            />
            <button className="search-btn">Search</button>
          </div>

          {/* Icons Section */}
          <div className="icons">
            <div className="profile-group">
              <BiUser className="icon" />
              <div className="dropdown-menu">
                <Link to="/login">
                  <p className="dropdown-item">Account</p>
                </Link>
                <p className="dropdown-item">Logout/sign up</p>
                <p className="dropdown-item">order</p>
                <p>Logout</p>
              </div>
            </div>

            <div className="cart-icon" onClick={() => handleNavigation("/cart")}>
              <BiCart className="icon" />
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="nav-bottom">
          <div className="nav-container">
            <div
              onClick={() => handleNavigation("/category/Men")}
              className="navbar-link"
            >
              Men
            </div>
            <div
              onClick={() => handleNavigation("/category/Women")}
              className="navbar-link"
            >
              Women
            </div>
            <div
              onClick={() => handleNavigation("/category/Kids")}
              className="navbar-link"
            >
              Kids
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;