import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios(`http://localhost:3002/api/blogs`);
      setBlogs(res.data.blogs);
    } catch (err) {
      console.log(err);
    }
  };

  const blogsData = blogs.map((blog) => {
    return (
      <li key={blog._id}>
        <NavLink to={`/blogs/${blog._id}`}>{blog.title}</NavLink>
      </li>
    );
  });

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <h1>Blogs</h1>
      <ul>{blogsData}</ul>
    </div>
  );
};

export default Blogs;
