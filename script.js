//your JS code here. If required.
// Select the input, button, and output elements
const inputElement = document.getElementById("ip");
const buttonElement = document.getElementById("btn");
const outputDiv = document.getElementById("output");

// Function to return a promise that resolves after a specified delay
const createPromise = (value, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
};

// Add onClick event listener to the button
buttonElement.addEventListener("click", () => {
  // Get the number from the input
  const number = parseFloat(inputElement.value);

  // Validate the input
  if (isNaN(number)) {
    outputDiv.textContent = "Please enter a valid number.";
    return;
  }

  outputDiv.textContent = "Processing...";

  // Chain promises as per the requirements
  createPromise(number, 2000)
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return createPromise(result * 2, 1000);
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return createPromise(result - 3, 1000);
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return createPromise(result / 2, 1000);
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return createPromise(result + 10, 1000);
    })
    .then((finalResult) => {
      outputDiv.textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      outputDiv.textContent = `Error: ${error.message}`;
    });
});
