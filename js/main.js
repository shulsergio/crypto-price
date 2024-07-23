import { getArrayForMarkup, getCryptoNames } from "./data.js";
import { onMarckupCreate } from "./markup.js";
const buttonOK = document.querySelector(".js-btn-ok");
const tableToMarckup = document.querySelector(".js-table-list");

buttonOK.addEventListener("click", handleClick);

async function handleClick() {
  const globalData = await getArrayForMarkup("USDT");
  console.log("GlobalData");
  console.log(globalData);
  tableToMarckup.insertAdjacentHTML("beforeend", onMarckupCreate(globalData));
}
// getCryptoNames();
