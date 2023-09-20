import React from "react";

const Navbar = () => {
  return (
    <div className="navBar flex justify-between item-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-primaryBlue">
          <strong>Job</strong>los
        </h1>
      </div>

      <div className="menu flex gap-8">
        <li className="menuList text-textColor hover:text-secondaryBlue">
          Jobs
        </li>
      </div>
    </div>
  );
};

export default Navbar;