import React from "react";
import Layout from "../components/Layout/Layout";
import SidePanel from "../components/Layout/SidePanel";
import AddFunds from "../components/UI/AddFunds";

const Personalise = () => {
  return (
    <Layout>
      <div className="flex flex-row gap-[20px]">
        <SidePanel />
        <div className="flex flex-col">
          <p className="text-[24px] font-[700]">PERSONALISE NINJA BOT</p>
          <AddFunds />
        </div>
      </div>
    </Layout>
  );
};

export default Personalise;
