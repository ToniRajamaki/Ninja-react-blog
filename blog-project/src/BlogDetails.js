import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { deleteData } from "./useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ShowDate from "./Date";

const BlogDetails = () => {
  const { id } = useParams();
  const blogs = useFetch();

  const blog = blogs.find((blog) => blog.id === id);

  return (
    <div className="blog-details">
      <article>
        <h2>{blog.title}</h2>

        <div className="display-linebreak">
          <p style={{ textAlign: "justify" }}>{blog.body}</p>
        </div>
        <br></br>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Written by {blog.author}</span>
          <span style={{ textAlign: "right" }}>
            {ShowDate(blog.creationDate)}
          </span>
        </p>
        {/* HOME Button */}
        <div className="container3">
          <div>
            <Link to="/">
              <button> Home</button>
            </Link>
          </div>
          {/* DELETE Button */}
          <div className="right">
            <Link to="/">
              <button
                className="button2 custom-button"
                onClick={() => deleteData(blog.id)}
              >
                Delete
              </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
