import { Link } from "react-router-dom";
const BlogForm = ({ blog, handleSubmit, handleChange, cancelPath }) => {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter New Blog Title"
          defaultValue={blog.title}
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Enter New Blog Message"
          defaultValue={blog.content}
          name="content"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Submit</button>

        <Link to={cancelPath}>
          <button>Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default BlogForm;
