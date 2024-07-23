export function onMarckupCreate(data) {
  let i = 0;
  return data
    .toSorted((a, b) => b.price - a.price)
    .map(({ arrayName, price }) => {
      let newprice = parseFloat(price).toFixed(8);
      i = i + 1;
      return `
        <tr>
       <td>${i}</td>
    <td>${arrayName}</td>
    <td>${newprice}</td>
       </tr>`;
    })
    .join("");
}
