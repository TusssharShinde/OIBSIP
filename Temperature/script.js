let celsius = document.getElementById('c');
let fahrenheit = document.getElementById('f');
let celsius1 = document.getElementById('c1');
let fahrenheit1 = document.getElementById('f1');

// celcius to fahrenheit
celsius.oninput = () => {
  let outcel = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(outcel.toFixed(2));
};

fahrenheit.oninput = () => {
  let outfah = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(outfah.toFixed(2));
};

// fahrenheit to celsius
celsius1.oninput = () => {
    let outcel1 = (parseFloat(celsius1.value) * 9) / 5 + 32;
    fahrenheit1.value = parseFloat(outcel1.toFixed(2));
  };
  
  fahrenheit1.oninput = () => {
    let outfah1 = ((parseFloat(fahrenheit1.value) - 32) * 5) / 9;
    celsius1.value = parseFloat(outfah1.toFixed(2));
  };
