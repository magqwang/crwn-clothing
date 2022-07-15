import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Crwnlogo } from "../../assets/crown.svg";
import "./index.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crwnlogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
