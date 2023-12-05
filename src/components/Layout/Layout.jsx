import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="w-screen overflow-hidden">
      <div className="flex flex-col justify-center p-[26px] h-[80px] bg-[#DCD2C7]">
        <Link href="/">
          <span className="font-[700] text-[24px]"> Navbar</span>
        </Link>
      </div>
      <div className="px-[30px] py-[32px]"> {children}</div>
    </div>
  );
};

export default Layout;
