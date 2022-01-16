import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const User = () => {
  const currentUser = useSelector((state) => state.user.profile);
  const [openPopup, setOpenPopup] = useState(false);
  useEffect(() => {
    const saveUser = async () => {
      try {
        const response = await axios.post("http://localhost:3001/api/user", {
          username: currentUser.display_name,
          email: currentUser.email,
        });

        console.log(response.data);
      } catch (error) {
        console.log({ error });
      }
    };
    if (currentUser) {
      saveUser();
    }
  }, [currentUser]);
  const handleOpenPopup = () => {
    setOpenPopup(!openPopup);
  };
  return (
    <button
      className="flex items-center space-x-2 bg-black_181818 py-1 pl-1 pr-2 rounded-full cursor-pointer hover:bg-black_2a2a2a shadow relative"
      onClick={handleOpenPopup}
    >
      <div className="w-7 h-7 ">
        <img
          src={currentUser && currentUser.images[0].url}
          alt="f"
          className="w-full h-full rounded-full object-cover object-center"
        />
      </div>
      <span className="text-sm font-bold">
        {currentUser && currentUser.display_name}
      </span>
      <div>
        {openPopup ? (
          <i className="fas fa-caret-up"></i>
        ) : (
          <i className="fas fa-caret-down"></i>
        )}
      </div>

      <div
        style={{
          top: "135%",
        }}
        className={`absolute right-0 z-40 bg-black_282828 rounded w-198 ${
          !openPopup && "hidden"
        }`}
      >
        <div className="p-1">
          <ul>
            <li className="cursor-pointer py-3 px-3 hover:bg-gray_3e3e3e">
              <NavLink
                to="/browser/account"
                className="text-gray-300 text-sm font-medium block text-left w-full h-full"
              >
                Account
              </NavLink>
            </li>
            <li className="cursor-pointer py-3 px-3 hover:bg-gray_3e3e3e">
              <NavLink
                to="/browser/user/:userId"
                className="text-gray-300 text-sm font-medium block text-left w-full h-full"
              >
                Profile
              </NavLink>
            </li>
            <li className="cursor-pointer py-3 px-3 hover:bg-gray_3e3e3e">
              <NavLink
                to="/browser/upgrade"
                className="text-gray-300 text-sm font-medium block text-left w-full h-full"
              >
                Upgrade to Premium
              </NavLink>
            </li>
            <li className="cursor-pointer py-3 px-3 hover:bg-gray_3e3e3e">
              <NavLink
                to="/browser/logout"
                className="text-gray-300 text-sm font-medium block text-left w-full h-full"
              >
                Log out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </button>
  );
};

export default User;
