const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

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
  td.innerText = `Total Price: Rs ${sum}`;
  td.style.textAlign = "center";

  tr.appendChild(td);
  table.appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

