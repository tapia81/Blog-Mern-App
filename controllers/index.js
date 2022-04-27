const Blog = require("../models/blog");

const createBlog = async (req, res) => {
  try {
    const blog = await new Blog(req.body);
    await blog.save();
    return res.status(201).json({
      blog,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    return res.status(200).json({ blogs });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getBlogByID = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (blog) {
      return res.status(200).json({ blog });
    }
    return res.status(404).send("No Blog Exist with that ID");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const updateBlog = (req, res) => {
  try {
    const { id } = req.params;
    Blog.findByIdAndUpdate(id, req.body, { new: true }, (err, blog) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!blog) {
        res.status(500).send("Blog Not Found");
      }
      return res.status(200).json( blog );
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Blog.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Blog Deleted");
    }
    throw new Error("Blog Not Found");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogByID,
  updateBlog,
  deleteBlog,
};
