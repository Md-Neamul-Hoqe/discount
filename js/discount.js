console.clear();

const couponField = document.getElementById("coupon");
const regularPriceString = document.getElementById("regularPrice").innerText;
const payArea = document.getElementById("pay");
const couponBtn = document.getElementById("couponBtn");
const discountArea = document.getElementById("discount");

couponBtn.addEventListener("click", function () {
  const regularPrice = parseFloat(regularPriceString).toFixed(2);

  if (couponField.value === "XCAT30") {
    const percentString = couponField.value.split(/\D+/).filter(Boolean);
    const percent = parseInt(percentString);
    console.log(parseInt(percentString));
    const Discount = (regularPrice * percent) / 100;
    discountArea.innerText = percent;
    payArea.innerText = regularPrice - Discount;
  }
});

/* For Admin */
const couponSetBtn = document.getElementById("couponSetBtn");
const setCoupon = document.getElementById("setCoupon");
const describe = document.getElementById("describe");
const couponList = document.getElementById("couponList");
couponSetBtn.addEventListener("click", function () {
  if (setCoupon.value) {
    const li = document.createElement("li");
    li.setAttribute("class", "flex justify-between p-2 border-t");
    li.innerHTML = `${setCoupon.value} <span>${describe.value}</span> <button
  class="text-red-800 border rounded-full w-7 h-7 hover:opacity-75" onclick="removeTheCoupon(this)">x</button>`;
    setCoupon.value = "";
    describe.value = "";
    couponList.appendChild(li);
  }
});

function removeTheCoupon(target) {
  target.parentNode.remove();
}
