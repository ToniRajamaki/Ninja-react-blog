import { Link } from "react-router-dom/cjs/react-router-dom.min";
import useFetch, { deleteData } from "./useFetch";

const BlogList = ({ blogs, title }) => {
  blogs = useFetch();
  console.log(
    "%c🔎bloglist is being called",
    "color: black; background-color: white; font-weight: bold; font-size:15px;"
  );
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          <button onClick={() => deleteData(blog.id)}>DELETE!</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
