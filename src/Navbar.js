import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { NinjaIcon } from './Icons'
import { postData } from './useFetch'
import { FaUserNinja } from 'react-icons/fa'
import { FaRegPlusSquare } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import DropDown from './DropDown'

// import { deleteData } from "./useFetch";

const Navbar = () => {
  return (
    <nav className='navbar' id='home'>
      <div>
        <Link to='/'>
          <h1
            style={{
              color: 'var(--font-color)',
              display: 'flex',
              alignItems: 'center',
            }}>
            <FaUserNinja
              fill='var(--main)'
              size={30}
              style={{ marginRight: '10px' }}
            />
            Ninja Blog
          </h1>
        </Link>
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/create' className="centered-link">
          <FaRegPlusSquare /> New Blog
        </Link>
        <span className="centered-link">
          <DropDown /><IoIosArrowDropdown size={20} />
        </span>    
        <span className='profile-pic2'>N</span>
      </div>
    </nav>
  )
}

export default Navbar
