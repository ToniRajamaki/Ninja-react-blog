import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const blogs = useFetch();

  const blog = blogs.find((blog) => blog.id === Number(id));

  console.log("blog::::!!!!", blog);
  console.log("id!!!", id);
  return (
    <div className="blog-details">
      <h2>Blog details ({id})</h2>
      <p>{blog.body}</p>
    </div>
  );
};

export default BlogDetails;
