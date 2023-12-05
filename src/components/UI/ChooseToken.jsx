import React, { useState } from "react";

const ChooseToken = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedTokens, setSelectedTokens] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const tokens = [
    {
      name: "ETH",
      percentage: 50,
      image:
        "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1696501628",
    },
    {
      name: "LINK",
      percentage: 50,
      image:
        "https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png?1547034700",
    },
    {
      name: "USDT",
      percentage: 50,
      image:
        "https://assets.coingecko.com/coins/images/325/small/Tether-logo.png?1598003707",
    },
    {
      name: "USDC",
      percentage: 50,
      image:
        "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
    },
    {
      name: "UNI",
      percentage: 50,
      image:
        "https://assets.coingecko.com/coins/images/12504/small/uniswap-uni.png?1600306604",
    },
    {
      name: "AAVE",
      percentage: 50,
      image:
        "https://assets.coingecko.com/coins/images/12645/small/AAVE.png?1601374110",
    },
    {
      name: "MKR",
      percentage: 50,
      image:
        "https://assets.coingecko.com/coins/images/1364/small/Mark_Maker.png?1585191826",
    },
    {
      name: "COMP",
      percentage: 50,
      image:
        "https://assets.coingecko.com/coins/images/10775/small/COMP.png?1592625425",
    },
  ];

  const selectToken = (tokenName) => {
    setSelectedTokens((prevSelectedTokens) => {
      if (prevSelectedTokens.includes(tokenName)) {
        return prevSelectedTokens.filter((name) => name !== tokenName);
      } else {
        return [...prevSelectedTokens, tokenName];
      }
    });
  };

  const getTokenDetails = (tokenName) => {
    return tokens.find((token) => token.name === tokenName);
  };

  const unselectToken = (tokenName) => {
    setSelectedTokens(selectedTokens.filter((name) => name !== tokenName));
  };

  return (
    <div className="mt-[33px] relative">
      <div
        className="flex flex-row gap-[5px] w-[600px] h-[53px] rounded-[10px] justify-center items-center bg-primary cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-[1] font-[500] text-white">Choose tokens</span>
      </div>
      {isDropdownVisible && (
        <div className="absolute pt-[10px] top-[53px] w-[600px] h-[275px] overflow-scroll border border-[#DCD2C7] rounded-[10px] bg-white z-10">
          {tokens.map((token) => (
            <div
              key={token.name}
              className={`flex flex-row h-[50px] px-[30px] items-center gap-[10px] cursor-pointer ${
                selectedTokens.includes(token.name) ? "bg-blue-200" : ""
              }`}
              onClick={() => selectToken(token.name)}
            >
              <img
                className="h-[30px] w-[30px]"
                src={token.image}
                alt={token.name}
              />
              <span className="font-[16px] text-[500]">{token.name}</span>
            </div>
          ))}
        </div>
      )}
      {selectedTokens.length > 0 && (
        <div className="mt-[20px]">
          {selectedTokens.length > 0 && (
            <div className="mt-[20px] flex flex-col gap-[10px]">
              {selectedTokens.map((tokenName) => {
                const tokenDetails = getTokenDetails(tokenName);
                return (
                  <div className="flex flex-row items-center gap-[20px]">
                    <div
                      key={tokenName}
                      className="flex flex-row items-center justify-center gap-[10px] h-[40px] w-[194px] border border-primary rounded-[10px] bg-white"
                    >
                      <img
                        className="h-[30px] w-[30px]"
                        src={tokenDetails.image}
                        alt={tokenDetails.name}
                      />
                      <span className="font-[16px] text-[500]">
                        {tokenDetails.name}
                      </span>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-[10px] px-[12px] h-[40px] w-[194px] border border-primary rounded-[10px] bg-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                      >
                        <path
                          d="M6 0.566406C6.19891 0.566406 6.38968 0.645424 6.53033 0.786076C6.67098 0.926729 6.75 1.11749 6.75 1.31641V5.81641H11.25C11.4489 5.81641 11.6397 5.89542 11.7803 6.03608C11.921 6.17673 12 6.36749 12 6.56641C12 6.76532 11.921 6.95608 11.7803 7.09674C11.6397 7.23739 11.4489 7.31641 11.25 7.31641H6.75V11.8164C6.75 12.0153 6.67098 12.2061 6.53033 12.3467C6.38968 12.4874 6.19891 12.5664 6 12.5664C5.80109 12.5664 5.61032 12.4874 5.46967 12.3467C5.32902 12.2061 5.25 12.0153 5.25 11.8164V7.31641H0.75C0.551088 7.31641 0.360322 7.23739 0.21967 7.09674C0.0790178 6.95608 0 6.76532 0 6.56641C0 6.36749 0.0790178 6.17673 0.21967 6.03608C0.360322 5.89542 0.551088 5.81641 0.75 5.81641H5.25V1.31641C5.25 1.11749 5.32902 0.926729 5.46967 0.786076C5.61032 0.645424 5.80109 0.566406 6 0.566406Z"
                          fill="black"
                        />
                      </svg>
                      <span className="font-[500]">
                        {tokenDetails.percentage} %
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                      >
                        <path
                          d="M6 12.5664C6 12.3675 6.07902 12.1767 6.21967 12.0361C6.36032 11.8954 6.55109 11.8164 6.75 11.8164H17.25C17.4489 11.8164 17.6397 11.8954 17.7803 12.0361C17.921 12.1767 18 12.3675 18 12.5664C18 12.7653 17.921 12.9561 17.7803 13.0967C17.6397 13.2374 17.4489 13.3164 17.25 13.3164H6.75C6.55109 13.3164 6.36032 13.2374 6.21967 13.0967C6.07902 12.9561 6 12.7653 6 12.5664Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <svg
                      onClick={() => unselectToken(tokenName)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M6.96936 7.53479C7.03903 7.46495 7.1218 7.40953 7.21291 7.37172C7.30403 7.33391 7.40171 7.31445 7.50036 7.31445C7.59901 7.31445 7.6967 7.33391 7.78781 7.37172C7.87893 7.40953 7.9617 7.46495 8.03136 7.53479L12.0004 11.5053L15.9694 7.53479C16.0391 7.46506 16.1219 7.40975 16.213 7.37201C16.3041 7.33427 16.4017 7.31485 16.5004 7.31485C16.599 7.31485 16.6966 7.33427 16.7877 7.37201C16.8788 7.40975 16.9616 7.46506 17.0314 7.53479C17.1011 7.60453 17.1564 7.68731 17.1941 7.77842C17.2319 7.86953 17.2513 7.96718 17.2513 8.06579C17.2513 8.16441 17.2319 8.26206 17.1941 8.35317C17.1564 8.44428 17.1011 8.52706 17.0314 8.59679L13.0609 12.5658L17.0314 16.5348C17.1011 16.6045 17.1564 16.6873 17.1941 16.7784C17.2319 16.8695 17.2513 16.9672 17.2513 17.0658C17.2513 17.1644 17.2319 17.2621 17.1941 17.3532C17.1564 17.4443 17.1011 17.5271 17.0314 17.5968C16.9616 17.6665 16.8788 17.7218 16.7877 17.7596C16.6966 17.7973 16.599 17.8167 16.5004 17.8167C16.4017 17.8167 16.3041 17.7973 16.213 17.7596C16.1219 17.7218 16.0391 17.6665 15.9694 17.5968L12.0004 13.6263L8.03136 17.5968C7.96163 17.6665 7.87885 17.7218 7.78774 17.7596C7.69663 17.7973 7.59898 17.8167 7.50036 17.8167C7.40175 17.8167 7.3041 17.7973 7.21299 17.7596C7.12188 17.7218 7.0391 17.6665 6.96936 17.5968C6.89963 17.5271 6.84432 17.4443 6.80658 17.3532C6.76884 17.2621 6.74942 17.1644 6.74942 17.0658C6.74942 16.9672 6.76884 16.8695 6.80658 16.7784C6.84432 16.6873 6.89963 16.6045 6.96936 16.5348L10.9399 12.5658L6.96936 8.59679C6.89952 8.52713 6.8441 8.44436 6.80629 8.35324C6.76849 8.26213 6.74902 8.16444 6.74902 8.06579C6.74902 7.96714 6.76849 7.86946 6.80629 7.77834C6.8441 7.68723 6.89952 7.60446 6.96936 7.53479Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChooseToken;
