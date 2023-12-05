import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import Layout from "../components/Layout/Layout";
import BotPanel from "../components/Layout/BotPanel";

export default function Use() {
  const [series, setSeries] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("ethereum");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${selectedCurrency}/ohlc?vs_currency=usd&days=14`
      );
      const formattedData = response.data.map((ohlc) => ({
        x: new Date(ohlc[0]),
        y: [ohlc[1], ohlc[2], ohlc[3], ohlc[4]],
      }));
      setSeries([{ data: formattedData }]);
    };

    fetchData();
  }, [selectedCurrency]);

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },

    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <Layout>
      <div className="flex flex-row">
        <BotPanel />
        <div className="w-full flex-shrink-0 ">
          <div className="w-full  border border-[#DCD2C7]">
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              className="outline-none font-[700] text-grey text-[20px]"
            >
              <option value="ethereum">ETH</option>
              <option value="usd-coin">USDC</option>
              <option value="tether">USDT</option>
              <option value="chainlink">LINK</option>
            </select>
          </div>
          <div className="">
            <div className="chart">
              <ApexChart
                options={options}
                series={series}
                type="candlestick"
                height={800}
                width={1300}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
