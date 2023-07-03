import { Link } from "react-router-dom";
import useFetch, { deleteData } from "./useFetch";
import { LuGlasses } from "react-icons/lu";
import ShowDate from "./Date";
import "./Styles/ShowDate.css";
import LoadingAnimation from "./LoadingAnimation";
import React, { useState, useEffect } from "react";

const BlogList = ({ title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const blogs = useFetch();

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Delay of 2 seconds
  }, []);

  return (
    <div className="blog-list">
      <h1>{title}</h1>

      {/* Render the LoadingAnimation component if isLoading is true */}
      {isLoading && <LoadingAnimation />}

      {/* Render the blog list if isLoading is false */}
      {!isLoading &&
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              <h2>{blog.title}</h2>
              <div
                container
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p style={{ marginRight: "auto" }}>Written by {blog.author}</p>
                <p style={{ marginRight: "auto" }}>
                  {ShowDate(blog.creationDate)}
                </p>
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
