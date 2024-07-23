export function onMarckupCreate(data) {
  let i = 0;
  return data
    .toSorted((a, b) => b.price - a.price)
    .map(({ arrayName, price }) => {
      i = i + 1;
      return `
        <tr>
       <td>${i}</td>
    <td>${arrayName}</td>
    <td>${price}</td>
       </tr>`;
    })
    .join("");
}
