import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <span>router tutorial</span>
      <div>
        <Link className="menu-item" to="/">
          Home
        </Link>
        <Link className="menu-item" to="/products">
          Products
        </Link>
      </div>
    </header>
  );
};

export default Header;
