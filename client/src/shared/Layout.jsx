import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="header">
        <NavLink to="/">
          <p>✨ Blog App ✨</p>
        </NavLink>
        <div className="nav-links">
          <Nav />
        </div>
      </div>
      <main className="main">{props.children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
