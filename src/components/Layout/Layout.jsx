import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="max-w-screen overflow-hidden">
      <div className="flex flex-col justify-center p-[26px] h-[80px] border-b border-black ">
        <Link href="/">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-[20px] items-center ml-[180px]">
              <img src="/bot.svg" alt="" />
              <span className="font-[700] text-[24px]"> Navbar</span>
            </div>
            <div className="flex flex-row gap-[30px] items-center">
              <Link href="/" className="text-[20px] text-primary font-[500]">
                Explore
              </Link>
              <Link href="/use" className="text-[20px] text-primary font-[500]">
                My Bots
              </Link>
              <button className="w-[160px] h-[40px] bg-primary text-white font-[500] rounded-[5px]">
                Connect Wallet
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div className="px-[30px] py-[32px] overflow-hidden"> {children}</div>
    </div>
  );
};

export default Layout;
