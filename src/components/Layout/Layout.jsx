import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col justify-center p-[26px] h-[80px] bg-[#DCD2C7]">
        Navbar
      </div>
      {children}
    </div>
  );
};

export default Layout;
