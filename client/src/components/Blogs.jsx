import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../shared/Layout";
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
    console.log(blog);
    return (
      <li key={blog._id}>
        <div className="blog-entry">
          <p>{blog.title}</p>
          <p>Created On: {blog.createdAt}</p>
          <p>Updated On: {blog.updatedAt}</p>
          <NavLink to={`/blogs/${blog._id}`}>
            <img
              src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              alt=""
            />
          </NavLink>
        </div>
      </li>
    );
  });

  useEffect(() => {
    fetchData();
  });

  return (
    <Layout>
      <div className="blogs-container">
        <h1>Blogs</h1>
        <ul>{blogsData}</ul>
      </div>
    </Layout>
  );
};

export default Blogs;
