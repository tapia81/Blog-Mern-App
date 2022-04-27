import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";

function Blog() {
  const [blog, setBlog] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:3002/api/blogs/${id}`);
        console.log(response);
        const result = response.data.blog;
        console.log(result);
        setBlog(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (!blog) {
      return <p>Loading...</p>;
    }
  }, [blog]);

  const destroy = () => {
    axios({
      url: `http://localhost:3002/api/blogs/${id}`,
      method: "DELETE",
    })
      .then(() => setDeleted(true))
      .catch(console.error);
  };
  useEffect(() => {
    if (deleted) {
      return navigate("/");
    }
  }, [deleted, navigate]);

  return (
    <Layout>
      <h4>{blog.title}</h4>
      <p>Content: {blog.content}</p>
      <button onClick={() => destroy()}>Delete Blog</button>
      <NavLink to={`/blogs/${id}/edit`}>
        <button>Edit</button>
      </NavLink>

      <NavLink to={"/blogs"}>Back to all blogs</NavLink>
    </Layout>
  );
}

export default Blog;
