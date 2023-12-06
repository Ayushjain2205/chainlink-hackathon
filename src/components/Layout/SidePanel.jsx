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

const SidePanel = () => {
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
    <div>
      <div className="flex flex-col w-[393px] border border-[#DCD2C7]">
        <div className="flex flex-row justify-end py-[11px] px-[12px]">
          <span className="w-[63px] h-[28px] bg-accent rounded-[6px] flex justify-center items-center text-[20px] font-[500] text-primary">
            3M
          </span>
        </div>
        <div className="flex flex-col ">
          <div className="border-b-[0.25px] border-[#DCD2C7] p-[20px] pt-[5px]">
            <div className="h-[240px] flex flex-row justify-center">
              <img src="/images/ninja.png" alt="" />
            </div>
            <p className="text-[28px] font-[700] text-primary">
              NINJA TRADEBOT
            </p>
            <p className="text-[16px] text-grey">
              Lorem ipsum dolor sit amet consectetur. Quis varius turpis purus
              rhoncus scelerisque eget donec consequat diam. Ultricies auctor
              sed justo molestie sollicitudin habitant eleifend nisl viverra.
            </p>
            <div className="flex flex-row justify-between mt-[24px]">
              <div className="flex flex-col">
                <span className="text-[14px] font-[500] text-grey">Volume</span>
                <span className="text-[20px] text-primary font-[500]">
                  1,690,850
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-[500] text-grey">Profit</span>
                <span className="text-[20px] text-primary font-[500]">
                  $ 2011.08
                </span>
              </div>
            </div>
          </div>
          <div className="border-b-[0.25px] border-[#DCD2C7] p-[20px]">
            <p className="text-[14px] font-[500] text-grey">Trend Forecast</p>
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
                    stroke="#6E5B98"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="Estimate" stroke="#C0B5D9" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="border-b-[0.25px] border-[#DCD2C7] p-[20px]">
            <p className="text-[14px] font-[500] text-grey mb-[12px]">Alpha</p>
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-row justify-between items-center">
                <p className="w-[288px] h-[38px] font-[400] text-grey text-[16px]">
                  ARG pumping, buyers increase 65% in 2 days, TVL up 9%
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.0592 2.99805C14.0592 2.86544 14.0065 2.73826 13.9128 2.64449C13.819 2.55073 13.6918 2.49805 13.5592 2.49805H7.55922C7.42662 2.49805 7.29944 2.55073 7.20567 2.64449C7.1119 2.73826 7.05922 2.86544 7.05922 2.99805C7.05922 3.13066 7.1119 3.25783 7.20567 3.3516C7.29944 3.44537 7.42662 3.49805 7.55922 3.49805H12.3522L2.20523 13.644C2.15874 13.6905 2.12186 13.7457 2.0967 13.8065C2.07154 13.8672 2.05859 13.9323 2.05859 13.998C2.05859 14.0638 2.07154 14.1289 2.0967 14.1896C2.12186 14.2504 2.15874 14.3056 2.20523 14.352C2.25171 14.3985 2.3069 14.4354 2.36764 14.4606C2.42838 14.4857 2.49348 14.4987 2.55923 14.4987C2.62497 14.4987 2.69007 14.4857 2.75081 14.4606C2.81155 14.4354 2.86674 14.3985 2.91323 14.352L13.0592 4.20505V8.99805C13.0592 9.13065 13.1119 9.25783 13.2057 9.3516C13.2994 9.44537 13.4266 9.49805 13.5592 9.49805C13.6918 9.49805 13.819 9.44537 13.9128 9.3516C14.0065 9.25783 14.0592 9.13065 14.0592 8.99805V2.99805Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="flex flex-row justify-between items-center">
                <p className="w-[288px] h-[38px] font-[400] text-grey text-[16px]">
                  Can ETH reach $2500 before 2024? Find out more.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.0592 2.99805C14.0592 2.86544 14.0065 2.73826 13.9128 2.64449C13.819 2.55073 13.6918 2.49805 13.5592 2.49805H7.55922C7.42662 2.49805 7.29944 2.55073 7.20567 2.64449C7.1119 2.73826 7.05922 2.86544 7.05922 2.99805C7.05922 3.13066 7.1119 3.25783 7.20567 3.3516C7.29944 3.44537 7.42662 3.49805 7.55922 3.49805H12.3522L2.20523 13.644C2.15874 13.6905 2.12186 13.7457 2.0967 13.8065C2.07154 13.8672 2.05859 13.9323 2.05859 13.998C2.05859 14.0638 2.07154 14.1289 2.0967 14.1896C2.12186 14.2504 2.15874 14.3056 2.20523 14.352C2.25171 14.3985 2.3069 14.4354 2.36764 14.4606C2.42838 14.4857 2.49348 14.4987 2.55923 14.4987C2.62497 14.4987 2.69007 14.4857 2.75081 14.4606C2.81155 14.4354 2.86674 14.3985 2.91323 14.352L13.0592 4.20505V8.99805C13.0592 9.13065 13.1119 9.25783 13.2057 9.3516C13.2994 9.44537 13.4266 9.49805 13.5592 9.49805C13.6918 9.49805 13.819 9.44537 13.9128 9.3516C14.0065 9.25783 14.0592 9.13065 14.0592 8.99805V2.99805Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
