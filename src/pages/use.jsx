import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import TelegramLoginButton, { TelegramUser } from "telegram-login-button";
import Layout from "../components/Layout/Layout";
import BotPanel from "../components/Layout/BotPanel";

export default function Use() {
  const router = useRouter();
  const { id, first_name, last_name, username, photo_url, auth_date, hash } =
    router.query;

  const isLoggedIn = Boolean(id);

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
          <div className=" flex flex-row h-[70px] w-full  border border-[#DCD2C7]">
            <div className="w-[160px] px-[40px] py-[21px] items-center border-r">
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className=" outline-none font-[700] text-grey text-[20px]"
              >
                <option value="ethereum">ETH</option>
                <option value="usd-coin">USDC</option>
                <option value="tether">USDT</option>
                <option value="chainlink">LINK</option>
              </select>
            </div>
            <div className="absolute top-[125px] right-[30px]">
              {!isLoggedIn && (
                <TelegramLoginButton
                  botName="EntropyTesting_Bot"
                  dataOnauth={(user) => console.log(user)}
                  dataAuthUrl="https://trading-bott.netlify.app/"
                  cornerRadius={5}
                />
              )}
            </div>
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
