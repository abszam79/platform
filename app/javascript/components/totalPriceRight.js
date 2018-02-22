const checkin = document.getElementById("range_startRight");
const checkout = document.getElementById("range_endRight");
if (checkin&&checkout) {
const computePriceRight = () => {
  const start = document.getElementById("range_startRight").value;
  const start_date = new Date(start.split('-')[0], start.split('-')[1], start.split('-')[2]);
  const end = document.getElementById("range_endRight").value;
  const end_date = new Date(end.split('-')[0], end.split('-')[1], end.split('-')[2]);
  const diffDays = parseInt((end_date - start_date + 1) / (1000 * 60 * 60 * 24));
  const price = parseInt(document.getElementById("price_per_nightRight").innerText.split("€")[0]);
  const total_price = price * diffDays;
  if (isNaN(total_price)){
    console.log("") ;
  }
  else{
    document.getElementById("total_price_right").innerHTML = '<p><strong> Total: ' + total_price + '€ </strong></p>';
  }
}

const computePriceOnChangeRight = () => {
  [checkin, checkout].forEach((input) => {
    input.addEventListener(("change"), computePriceRight);
  })
}
computePriceRight();
computePriceOnChangeRight();
}
