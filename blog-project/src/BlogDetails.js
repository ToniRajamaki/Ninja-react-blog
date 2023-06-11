import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

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

        <div>{blog.body}</div>
      </article>
    </div>
  );
};

export default BlogDetails;
