import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-amber-400 text-xl font-bold mb-4">
              Madhuram Honey
            </h3>
            <p className="text-gray-400 text-sm">
              Delivering pure and natural honey, straight from the hive to your
              home. Our commitment to quality and sustainability ensures the
              finest honey products.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-400 text-xl font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-amber-400 transition-colors inline-flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-amber-400 transition-colors inline-flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-amber-400 transition-colors inline-flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-amber-400 transition-colors inline-flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-amber-400 text-xl font-bold mb-4">
              Our Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/wild-forest"
                  className="text-gray-400 hover:text-amber-400 transition-colors inline-flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Wild Forest Honey
                </Link>
              </li>
              <li>
                <Link
                  to="/products/raw"
                  className="text-gray-400 hover:text-amber-400 transition-colors inline-flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Raw Honey
                </Link>
              </li>
              <li>
                <Link
                  to="/products/organic"
                  className="text-gray-400 hover:text-amber-400 transition-colors inline-flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Organic Honey
                </Link>
              </li>
              <li>
                <Link
                  to="/products/specialty"
                  className="text-gray-400 hover:text-amber-400 transition-colors inline-flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Specialty Honey
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-amber-400 text-xl font-bold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="text-amber-400 mr-2 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">
                  123 Honey Street, Bee Colony,
                  <br />
                  Sweet City, 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="text-amber-400 mr-2 flex-shrink-0"
                />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-amber-400 mr-2 flex-shrink-0" />
                <a
                  href="mailto:info@madhuram.com"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  info@madhuram.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Madhurum Honey. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Shipping Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
