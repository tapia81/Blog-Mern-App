import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../shared/Layout";
import axios from "axios";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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
  const blogsData = blogs
    .sort((id1, id2) => id2 - id1)
    .map((blog) => {
      return (
        <li key={blog._id}>
          <NavLink to={`/blogs/${blog._id}`}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="150"
                  image="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </NavLink>
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
