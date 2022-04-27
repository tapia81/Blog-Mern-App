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
      <div className="blog-post">
        <h4>{blog.title}</h4>
        <p>Content: {blog.content}</p>
      </div>
      <div className="blog-links">
        <NavLink to={`/blogs/${id}/edit`}>
          <button>Edit</button>
        </NavLink>
        <button onClick={() => destroy()}>Delete Blog</button>

        <NavLink to={"/blogs"}>
          <button>Back to all blogs</button>
        </NavLink>
      </div>
    </Layout>
  );
}

export default Blog;
