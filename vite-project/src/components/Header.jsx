import { BsFillPersonFill, BsBagHeartFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const bag = useSelector((Store) => Store.bag);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-black text-white w-full">
      <Link to="/" className="flex items-center no-underline">
        <FaHome size={40} className="mr-2 text-white" />
        <span className="hidden sm:inline text-gray-300">Home</span>
      </Link>
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex action_bar items-center space-x-6">
          <Link to="/profile" className="action_container flex items-center space-x-2 no-underline">
            <BsFillPersonFill size={24} className="text-white" />
            <span className="hidden sm:inline text-gray-300">Profile</span>
          </Link>
          <Link to="/bag" className="action_container flex items-center space-x-2 no-underline">
            <BsBagHeartFill size={24} className="text-white" />
            <span className="hidden sm:inline text-gray-300">Bag ({bag.length})</span>
          </Link>
        </div>
        <button className="md:hidden" onClick={toggleSidebar}>
          <GiHamburgerMenu size={24} className="text-white" />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 bg-black bg-opacity-75 md:hidden`}>
        <div className="flex flex-col items-start p-4 space-y-4">
          <button className="self-end mb-4 text-white" onClick={toggleSidebar}>
            <GiHamburgerMenu size={24} />
          </button>
          <Link to="/" className="action_container flex items-center space-x-2 no-underline text-white" onClick={toggleSidebar}>
            <FaHome size={24} />
            <span>Home</span>
          </Link>
          <Link to="/profile" className="action_container flex items-center space-x-2 no-underline text-white" onClick={toggleSidebar}>
            <BsFillPersonFill size={24} />
            <span>Profile</span>
          </Link>
          <Link to="/bag" className="action_container flex items-center space-x-2 no-underline text-white" onClick={toggleSidebar}>
            <BsBagHeartFill size={24} />
            <span>Bag ({bag.length})</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
