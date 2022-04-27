import Nav from "./Nav";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="layout">
      <h1>✨ Blogs App ✨</h1>
      <Nav />
      <main className="main">{props.children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
