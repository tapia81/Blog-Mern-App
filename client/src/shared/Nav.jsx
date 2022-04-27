import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/create-blog">Create Blog</NavLink>
    </nav>
  );
};

export default Nav;
