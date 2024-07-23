const arrayCryptoNames = [
  "BTC",
  "ETH",
  "USDT",
  "BNB",
  "SOL",
  "USDC",
  "XRP",
  "DOGE",
  "TON",
  "ADA",
  "AVAX",
  "TRX",
  "SHIB",
  "LINK",
  "NEAR",
  "PEPE",
];
const options = {
  method: "GET",
  headers: { "X-Api-Key": "kfw8G/XH8SaR+4EH8nNHRg==MhaNIkyhROXsj9yj" },
};

export async function getJsonApiData(urlData) {
  const response = await fetch(urlData, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

/**
 * візіваєм тільки якщо треба якусь валюту подивитись (на будущее)
 *
 */
async function getCryptoNames() {
  try {
    const alldata = await getJsonApiData(
      `https://api.api-ninjas.com/v1/cryptosymbols`
    );
    console.log(Array.isArray(alldata.symbols));
    const ArrayUSDT = alldata.symbols.filter((item) => item.includes("USDT")); // вібираем валюту в фильтр
    // console.log(Array.isArray(ArrayUSDT));
    // console.log(ArrayUSDT);
  } catch (error) {
    console.error(error);
  }
}
export async function getArrayForMarkup(fname = "USDT") {
  let newData = [];

  try {
    for (let i = 0; i < 1; i++) {
      let dataSplit = arrayCryptoNames[i] + fname;
      console.log("dataSplit");
      console.log(dataSplit);
      const dataPrice = await getJsonApiData(
        `https://api.api-ninjas.com/v1/cryptoprice?symbol=${dataSplit}`
      );
      console.log("dataPrice");
      console.log(dataPrice);
      newData.push({
        arrayName: arrayCryptoNames[i],
        filterName: fname,
        price: dataPrice.price,
      });
    }
  } catch (error) {
    console.error(error);
  }
  return newData;
}
