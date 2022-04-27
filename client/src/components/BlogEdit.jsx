import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import BlogForm from "../shared/BlogForm";

function BlogEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:3002/api/blogs/${id}`);
        console.log(response);
        setBlog(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedItem = Object.assign(blog, updatedField);
    setBlog(editedItem);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:3002/api/blogs/${id}`,
      method: "PUT",
      data: blog,
    })
      .then(() => setUpdated(true))
      .catch(console.error);
  };

  useEffect(() => {
    if (updated) {
      return navigate(`/blogs/${id}`);
    }
  });

  return (
    <Layout>
      <BlogForm
        blog={blog}
        handleChange={(e) => handleChange(e)}
        handleSubmit={(e) => handleSubmit(e)}
        cancelPath={`/blogs/${id}`}
      />
    </Layout>
  );
}

export default BlogEdit;
