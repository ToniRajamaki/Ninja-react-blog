import { Link } from "react-router-dom/cjs/react-router-dom.min";
import useFetch, { deleteData } from "./useFetch";
import { LuGlasses } from "react-icons/lu";

const BlogList = ({ blogs, title }) => {
  blogs = useFetch();
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ marginRight: "auto" }}>Written by {blog.author}</p>
              <LuGlasses
                size={15}
                strokeWidth={1.0}
                colors={"white"}
                className="LuGlasses"
              />
              <p
                className="whiteHover"
                style={{ paddingLeft: "15px", fontSize: "10px" }}
              >
                {" "}
                6 min
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
