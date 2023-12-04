import React from "react";
import Layout from "../components/Layout/Layout";
import SidePanel from "../components/Layout/SidePanel";

const Personalise = () => {
  return (
    <Layout>
      <div className="flex flex-row gap-[20px]">
        <SidePanel />
        <div className="flex flex-col">
          <p className="text-[24px] font-[700]">PERSONALISE NINJA BOT</p>
        </div>
      </div>
    </Layout>
  );
};

export default Personalise;
