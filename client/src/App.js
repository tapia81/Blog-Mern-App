import "./App.css";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import BlogCreate from "./components/BlogCreate";
import Blog from "./components/Blog";
import BlogEdit from "./components/BlogEdit";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div>
      <h3>{location.state ? location.state.message : null}</h3>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/create-blog" element={<BlogCreate />} />
        <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/blogs/:id/edit" element={<BlogEdit />} />
      </Routes>
    </div>
  );
}

export default App;
