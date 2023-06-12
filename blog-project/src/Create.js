import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { postData } from "./useFetch";

function generateUniqueId() {
  return uuidv4();
}

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");

  const handleSubmit = (e) => {
    e.preventDefault(); //this prevents default action of the button, in this case refreshing the site
    const id = generateUniqueId(); //gatherin unique ID
    const blog = { title, body, author, id }; //creating blog element
    postData(blog);
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Blog name
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Body
          <textarea
            type="text"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>
        <label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
        </label>
        <button>Create!</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
