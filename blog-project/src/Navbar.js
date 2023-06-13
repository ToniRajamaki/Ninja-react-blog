import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { NinjaIcon } from "./Icons";
import { postData } from "./useFetch";
import ColorSwitches from "./testing";

// import { deleteData } from "./useFetch";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <h1>
          The Dojo Blog
          <NinjaIcon />
        </h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
      <handleAddRow />
    </nav>
  );
};

export default Navbar;
