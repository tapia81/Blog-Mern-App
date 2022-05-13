import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";
const BlogForm = ({ blog, handleSubmit, handleChange, cancelPath }) => {
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="blog-form-container">
        <input
          type="text"
          id="outlined-basic"
          variant="outlined"
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
            <Button variant="outlined" startIcon={<DoneIcon />} type="submit">
              Submit
            </Button>

            <Link to={cancelPath}>
              <Button variant="outlined" startIcon={<CancelIcon />}>
                Cancel
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
