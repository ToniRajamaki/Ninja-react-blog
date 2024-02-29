import { Link } from "react-router-dom";
import useFetch from "./useFetch"; // Removed unused deleteData import
import { FaGlasses } from "react-icons/fa"; // Replaced LuGlasses with FaGlasses (FontAwesome)
import ShowDate from "./Date";
import "./Styles/ShowDate.css";
import LoadingAnimation from "./LoadingAnimation";
import React, { useState, useEffect } from "react";

const BlogList = ({ title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const blogs = useFetch('http://example.com/blogs'); // Added URL to useFetch

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 20); // Delay of 2 seconds
  }, []);

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {isLoading && <LoadingAnimation />}
      {!isLoading &&
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              <h2>{blog.title}</h2>
              <div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                >
                <span style={{ marginRight: "auto" }}>Written by {blog.author}</span>
                <span style={{ marginRight: "auto" }}>{ShowDate(blog.creationDate)}</span>
                <FaGlasses
                  size={15}
                  strokeWidth={1.0}
                  color={"white"} // Replaced colors with color
                  className="LuGlasses"
                  />
                <p className="whiteHover" style={{ paddingLeft: "15px", fontSize: "10px" }}>
                  6 min
                </p>
              </div>
                  </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BlogList;