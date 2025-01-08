import { BsFillPersonFill, BsBagHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const bag = useSelector((Store) => Store.bag);

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-black text-white">
        <Link to="/" className="flex items-center">
          <FaHome style={{ height: '40px', width: '40px', marginRight: '10px', color: '#ffffff' }} />
          <span className="text-xl no-underline" style={{ color: '#ffffff' }}>Home</span>
        </Link>

        <div className="action_bar flex items-center space-x-4">
          <Link to="/profile" className="action_container flex items-center space-x-2 no-underline">
            <BsFillPersonFill size={24} style={{ color: '#ffffff' }} />
            <span className="action_name" style={{ color: '#ffffff' }}>Profile</span>
          </Link>

          <Link className="action_container flex items-center space-x-2 no-underline" to="/bag">
            <BsBagHeartFill size={24} style={{ color: '#ffffff' }} />
           
            <span className="bag-item-count ml-1 bg-red-500 rounded-full px-2 py-1 text-xs text-white flex items-center justify-center">
              {bag.length}
            </span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
