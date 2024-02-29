import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { NinjaIcon } from "./Icons";
import { postData } from "./useFetch";
import { FaUserNinja } from "react-icons/fa";

// import { deleteData } from "./useFetch";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <h1 style={{ display: "flex", alignItems: "center" }}>
            <FaUserNinja
              color="red"
              size={30}
              style={{ marginRight: "10px" }}
            />
            Ninja Blog
          </h1>
        </Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
