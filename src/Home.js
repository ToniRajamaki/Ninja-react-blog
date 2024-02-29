import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import Featured from "./Featured";

const Home = () => {
  const [blogs, setBlogs] = useState();

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  // useEffect(() => {
  //   console.log("use effect ran");
  //   console.log(blogs);
  // }, [name]);

  return (
    
    <div className="home">
      <Featured />
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
