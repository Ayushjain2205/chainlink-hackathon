import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BotPanel = () => {
  const data = [
    {
      name: "Aug",
      Estimate: 4000,
      Actual: 2400,
      amt: 2400,
    },
    {
      name: "Sept",
      Estimate: 3000,
      Actual: 1398,
      amt: 2210,
    },
    {
      name: "Oct",
      Estimate: 2000,
      Actual: 9800,
      amt: 2290,
    },
    {
      name: "Nov",
      Estimate: 2780,
      Actual: 3908,
      amt: 2000,
    },
    {
      name: "Dec",
      Estimate: 1890,
      Actual: 4800,
      amt: 2181,
    },
  ];
  return (
    <div className="z-50">
      <div className="flex flex-col w-[393px] border border-[#DCD2C7]">
        <div className="flex flex-row justify-end py-[11px] px-[12px]"></div>
        <div className="flex flex-col ">
          <div className="border-b-[0.25px] border-[#DCD2C7] p-[20px] pt-[5px]">
            <div className="h-[240px] flex flex-row justify-center">
              <img src="/images/ninja.png" alt="" />
            </div>
            <p className="text-[28px] font-[700] text-primary">
              NINJA TRADEBOT
            </p>
          </div>
          <div className="border-b-[0.25px] border-[#DCD2C7] p-[20px]">
            <div className="flex flex-row justify-between mt-[24px]">
              <div className="flex flex-col">
                <span className="text-[14px] font-[500] text-grey">
                  Invested value
                </span>
                <span className="text-[20px] text-primary font-[500]">
                  69,850
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-[500] text-grey">Profit</span>
                <span className="text-[20px] text-primary font-[500]">
                  $ 2011.08
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-[500] text-grey">
                  Invested value
                </span>
                <span className="text-[20px] text-primary font-[500]">
                  69,850
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-[40px] mt-[24px]">
              <div className="flex flex-col">
                <span className="text-[14px] font-[500] text-grey">
                  Invested value
                </span>
                <span className="text-[20px] text-primary font-[500]">
                  69,850
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-[500] text-grey">
                  Realised profit
                </span>
                <span className="text-[20px] text-primary font-[500]">500</span>
              </div>
            </div>
          </div>
          <div className="border-b-[0.25px] border-[#DCD2C7] p-[20px]">
            <div className="flex flex-row gap-[40px]">
              <div className="flex flex-col">
                <span className="text-[14px] font-[500] text-grey">
                  Max Gainer
                </span>
                <span className="text-[20px] text-primary font-[500]">
                  LINK
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-[500] text-grey">
                  Max Loser
                </span>
                <span className="text-[20px] text-primary font-[500]">ETH</span>
              </div>
            </div>
          </div>
          <div className="border-b-[0.25px] border-[#DCD2C7] p-[20px]">
            <p className="text-[20px] font-[500] text-primary">
              Portfolio Forecast
            </p>
            <div className="h-[218px] pt-[20px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Actual"
                    stroke="#E26741"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="Estimate" stroke="#F5BEAD" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotPanel;
