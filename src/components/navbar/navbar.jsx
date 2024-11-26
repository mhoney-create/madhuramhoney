import logo from "../../assets/navbar.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div
            className="flex items-center space-x-2"
            onClick={() => handleNavigation("/")}
          >
            <img
              src={logo}
              alt="Honey Logo"
              className="imagecontainer cursor-pointer"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => handleNavigation("/")}>Home</NavLink>
            <NavLink onClick={() => handleNavigation("/about")}>About</NavLink>
            <NavLink onClick={() => handleNavigation("/products")}>
              Products
            </NavLink>
            <NavLink onClick={() => handleNavigation("/login")}>Login</NavLink>
            <button
              className="p-2 hover:bg-amber-50 rounded-full transition-colors"
              onClick={() => handleNavigation("/cart")}
            >
              <div className="relative">
                <ShoppingBag className="h-6 w-6 text-amber-600" />
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-amber-50"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-amber-600" />
              ) : (
                <Menu className="h-6 w-6 text-amber-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink onClick={() => handleNavigation("/")}>
                Home
              </MobileNavLink>
              <MobileNavLink onClick={() => handleNavigation("/about")}>
                About
              </MobileNavLink>
              <MobileNavLink onClick={() => handleNavigation("/products")}>
                Products
              </MobileNavLink>
              <MobileNavLink onClick={() => handleNavigation("/login")}>
                Login
              </MobileNavLink>
              <MobileNavLink onClick={() => handleNavigation("/cart")}>
                Cart
              </MobileNavLink>
            </div>
          </div>
        )}
      </div>

      {/* Honey-themed decorative element */}
      <div className="h-1 bg-gradient-to-r from-honey-normal via-honey-dark to-honey-normal" />
    </nav>
  );
};

// Reusable NavLink component for desktop
const NavLink = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="text-gray-600 hover:text-amber-600 font-medium transition-colors"
  >
    {children}
  </button>
);

// Reusable NavLink component for mobile
const MobileNavLink = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-md"
  >
    {children}
  </button>
);

export default Navbar;
