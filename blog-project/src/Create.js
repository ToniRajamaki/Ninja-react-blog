import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { postData } from "./useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
var today = new Date();
var default_value = today.toISOString().slice(0, 10); // YYYY-MM-DD format

function generateUniqueId() {
  return uuidv4();
}

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("yoshi");
  const [creationDate, setCreationDate] = useState(new Date());
  const [id, setId] = useState(generateUniqueId());

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(); //this prevents default action of the button, in this case refreshing the site
    setCreationDate(new Date());
    const blog = { id, title, body, author, creationDate }; //creating blog element
    postData(blog).then(() => {
      // history.go(-1);
      history.push("/");
    });
  };
  /* FORM */
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

        <button>Add!</button>
      </form>
    </div>
  );
};

export default Create;
