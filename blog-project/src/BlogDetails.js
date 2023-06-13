import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { deleteData } from "./useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
  const { id } = useParams();
  const blogs = useFetch();

  const blog = blogs.find((blog) => blog.id === Number(id));

  return (
    <div className="blog-details">
      <article>
        <h2>{blog.title}</h2>
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Written by {blog.author}</span>
          <span style={{ fontWeight: "bold", textAlign: "right" }}>
            id: {id}
          </span>
        </p>
        <div className="display-linebreak">
          <p style={{ textAlign: "justify" }}>{blog.body}</p>
        </div>
        <Link to="/">
          <button onClick={() => deleteData(blog.id)}>DELETE!</button>
        </Link>
      </article>
    </div>
  );
};

export default BlogDetails;
