import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlogForm from "../shared/BlogForm";
import axios from "axios";

const BlogCreate = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });

  const [createdBlog, setCreatedBlog] = useState(null);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedBlog = Object.assign(blog, updatedField);
    setBlog(editedBlog);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:3002/api/blogs`,
      method: "POST",
      data: blog,
    })
      .then((res) => setCreatedBlog(res.data.blog))
      .catch(console.error);
  };

  useEffect(() => {
    if (createdBlog) {
      return navigate("/blogs");
    }
  }, [createdBlog, navigate]);
  return (
    <div>
      <BlogForm
        blog={blog}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath="/"
      />
    </div>
  );
};

export default BlogCreate;
