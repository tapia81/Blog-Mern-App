import { Link } from "react-router-dom";
const BlogForm = ({ blog, handleSubmit, handleChange, cancelPath }) => {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="blog-form-container">
        <input
          type="text"
          placeholder="Enter New Blog Title"
          defaultValue={blog.title}
          name="title"
          onChange={(e) => handleChange(e)}
          className="post-title"
        />
        <input
          type="text"
          placeholder="Enter New Blog Post"
          defaultValue={blog.content}
          name="content"
          onChange={(e) => handleChange(e)}
          className="post"
        />
        <div>
          <div className="blog-form-buttons">
            <button type="submit">Submit</button>

            <Link to={cancelPath}>
              <button>Cancel</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
