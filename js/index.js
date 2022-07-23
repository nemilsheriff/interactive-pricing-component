const values = [
      { pageViews: "10K", price: 8.00 },
      { pageViews: "50K", price: 12.00 },
      { pageViews: "100K", price: 16.00 },
      { pageViews: "500K", price: 24.00 },
      { pageViews: "1M", price: 36.00 }
];

const input = document.getElementById('input');
const checkBox = document.getElementById('checkbox');
const output = document.getElementById('output');
const price = document.getElementById('price');
let annualPrice = false;
let sliderValue;

const computePrice = () => {
      let index;
      let priceText;
      let computedPrice;

      if (sliderValue > 80) {
            index = 4;
      } else if (sliderValue > 60) {
            index = 3;
      } else if (sliderValue > 40) {
            index = 2;
      } else if (sliderValue > 20) {
            index = 1;
      } else {
            index = 0;
      }

      if (annualPrice) {
            computedPrice = values[index].price * 0.75;
      } else {
            computedPrice = values[index].price;
      }

      priceText = `$${computedPrice.toFixed(2)}`;
      output.innerHTML = values[index].pageViews;
      price.innerHTML = priceText;
      let color = `linear-gradient(90deg, hsl(174, 77%, 80%) ${sliderValue - 5}%, hsl(224, 65%, 95%) ${sliderValue - 5}%)`;
      input.style.background = color;
      console.log(`slider value - ${sliderValue - 5}`);
}

checkBox.onclick = function () {
      if (checkBox.checked) {
            annualPrice = true;
            computePrice();
            console.log(sliderValue);
      } else {
            annualPrice = false;
            computePrice();
            console.log(sliderValue);
      }

}

checkBox.onclick();

input.oninput = function () {
      sliderValue = parseInt(this.value);
      console.log(this.value);
      computePrice();
};

input.oninput(); //set default value

// 0	20	10K
// 21	40	50K
// 41	60	100K
// 61	80	500K
// 81	100	1M