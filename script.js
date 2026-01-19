

const getSum = () => {
  const prices = document.querySelectorAll("td.price");
  let sum = 0;

  prices.forEach((price) => {
    sum += Number(price.innerText);
  });

  const table = document.querySelector("table");

  // remove old total row if exists
  const oldTotal = document.getElementById("total-row");
  if (oldTotal) {
    oldTotal.remove();
  }

  // create new row
  const tr = document.createElement("tr");
  tr.id = "total-row";

  const td = document.createElement("td");
  td.colSpan = 2;
  td.innerText = ` ${sum}`;
  

  tr.appendChild(td);
  table.appendChild(tr);
};

getSum();
