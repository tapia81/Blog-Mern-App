import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../shared/Layout";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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
      return navigate("/blogs");
    }
  }, [deleted, navigate]);

  return (
    <Layout>
      <div className="blog-post-container">
        <Card
          sx={{
            minWidth: 700,
            maxWidth: 700,
            marginTop: "20px",
            minHeight: 550,
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              textAlign="center"
            >
              {blog.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {blog.content}
            </Typography>
          </CardContent>
        </Card>
        <div className="blog-post-buttons">
          <NavLink to={`/blogs/${id}/edit`}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          </NavLink>

          <Button
            variant="outlined"
            color="secondary"
            onClick={() => destroy()}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>

          <NavLink to={"/blogs"}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<ArrowBackIosNewIcon />}
            >
              Back
            </Button>
          </NavLink>
        </div>
      </div>
    </Layout>
  );
}

export default Blog;
