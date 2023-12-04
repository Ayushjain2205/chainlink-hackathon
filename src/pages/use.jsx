import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import Layout from "../components/Layout/Layout";

export default function App() {
  const [btcData, setBtcData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=2"
      );
      const formattedData = [["Day", "Low", "Open", "Close", "High"]];

      // Format the data
      response.data.prices.forEach((price, index) => {
        if (index > 0) {
          // Assuming 'prices' and 'market_caps' have the same length
          const open = response.data.prices[index - 1][1];
          const close = price[1];
          const low = Math.min(open, close); // Simplified for example
          const high = Math.max(open, close); // Simplified for example
          formattedData.push([
            new Date(price[0]).toLocaleDateString(),
            low,
            open,
            close,
            high,
          ]);
        }
      });

      setBtcData(formattedData);
    };

    fetchData();
  }, []);

  const options = {
    legend: "none",
    bar: { groupWidth: "100%" }, // Remove space between bars
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
      risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
    },
    hAxis: {
      showTextEvery: 20, // Adjust this number as needed
      slantedText: false, // Set to true if you want slanted text
      textStyle: {
        fontSize: 12, // Adjust the font size as needed
        // You can also add other styling properties here
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
      <Chart
        chartType="CandlestickChart"
        width="800px"
        height="790px"
        data={btcData}
        options={options}
      />
    </Layout>
  );
}
