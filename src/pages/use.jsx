import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import SidePanel from "../components/Layout/SidePanel";
import BotPanel from "../components/Layout/BotPanel";

export default function App() {
  const [btcData, setBtcData] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("ethereum");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${selectedCurrency}/ohlc?vs_currency=usd&days=7`
      );
      const formattedData = [["Day", "Low", "Open", "Close", "High"]];

      // Format the data
      response.data.forEach((ohlc) => {
        const time = new Date(ohlc[0]).toLocaleDateString();
        const open = ohlc[1];
        const high = ohlc[2];
        const low = ohlc[3];
        const close = ohlc[4];
        formattedData.push([time, low, open, close, high]);
      });

      setBtcData(formattedData);
    };

    fetchData();
  }, [selectedCurrency]);

  const options = {
    legend: "none",
    bar: { groupWidth: "100%" }, // Remove space between bars
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#a52714" },
      risingColor: { strokeWidth: 0, fill: "#0f9d58" },
    },
    hAxis: {
      showTextEvery: 20,
      slantedText: false,
      textStyle: {
        fontSize: 12,
      },
    },
    vAxis: {
      textStyle: {
        fontSize: 12,
      },
    },
  };

  return (
    <Layout>
      <div className="flex flex-row gap-[20px]">
        <BotPanel />
        <div className="w-full flex-shrink-0 -mx-[200px] overflow-clip">
          <div className="z-50 absolute w-full mx-[180px] px-[20px] border border-[#DCD2C7]">
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
          <div className="-mt-[50px]">
            <Chart
              chartType="CandlestickChart"
              width="100%"
              height="790px"
              data={btcData}
              options={options}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
