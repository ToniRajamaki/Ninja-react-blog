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
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0px" }}>
          <span>Written by {blog.author}</span>
          <span style={{ textAlign: "right" }}>
            {ShowDate(blog.creationDate)}
          </span>
        </div>
        {/* HOME Button */}
        <div className="container3 right">
          <div>
          <Link to="/" className="button-secondary">Home</Link>

          </div>
         
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
