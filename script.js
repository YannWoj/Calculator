const display = document.getElementById("display");

function appendToDisplay(input) {
   if (display.value === "Error") {
      display.value = input;
   } else {
      display.value += input;
   }
   adjustFontSize();
}

function clearDisplay() {
   display.value = "";
   adjustFontSize();
}

function deleteLast() {
   let display = document.getElementById("display");
   display.value = display.value.slice(0, -1);
}

function calculatePercentage() {
   let display = document.getElementById("display");
   display.value = parseFloat(display.value) / 100;
}

function calculate() {
   try {
      display.value = eval(display.value);
   } catch (error) {
      display.value = "Error";
   }
   adjustFontSize();
}

function adjustFontSize() {
   const maxLength = 9;
   const baseFontSize = 5;
   const minFontSize = 2;

   if (display.value.length > maxLength) {
      const newSize = baseFontSize - (display.value.length - maxLength) * 0.3;
      display.style.fontSize = `${Math.max(newSize, minFontSize)}rem`;
   } else {
      display.style.fontSize = `${baseFontSize}rem`;
   }
}
