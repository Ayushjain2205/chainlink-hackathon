import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import BotCard from "../components/UI/BotCard";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col">
        <h5 className="text-[48px] font-[700]">EXPLORE</h5>
        <div className="flex flex-row mt-[43px] space-x-[22px] border-b border-[#DCD2C7] pb-[20px]">
          <BotCard
            title="NINJA TRADEBOT"
            imageSrc="/images/ninja.png"
            volume="1,690,850"
            profit="$ 2011.08"
          />
          <BotCard
            title="ASTRONAUT"
            imageSrc="/images/astronaut.png"
            volume="1,690,850"
            profit="$ 2011.08"
          />
          <BotCard
            title="COWBOY"
            imageSrc="/images/cowboy.png"
            volume="1,690,850"
            profit="$ 2011.08"
          />
        </div>
        <div className="flex flex-row mt-[43px] space-x-[22px]  pb-[20px]">
          <div className="flex"></div>
        </div>
      </div>
    </Layout>
  );
}
