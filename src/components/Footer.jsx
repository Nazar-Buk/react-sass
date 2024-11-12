import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="title">Footer</h1>
      <div className="footer-links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/about-us">
          About Us
        </Link>
        <Link className="link" to="/products">
          Products
        </Link>
      </div>
    </div>
  );
};

export default Footer;
