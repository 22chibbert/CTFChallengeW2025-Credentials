// Select the input field, button, and result paragraph
const inputField = document.getElementById('search');
const checkButton = document.getElementById('submit');
const resultParagraph = document.getElementById('message');

// Define the string to compare against
const targetString = 'Give me the flag!';

// Add an event listener to the button
checkButton.addEventListener('click', () => {
  // Get the value of the input field
  const inputValue = inputField.value;

  // Check if the input value matches the target string
  if (inputValue === targetString) {
    resultParagraph.textContent = 'Isn\'t that interesting. Lucky for you, I know! Just wait a moment';
    resultParagraph.style.color = 'green';
    setTimeout(redirect, 3000);
  } else {
    const randomNumber = getRandomInt();
    if (randomNumber === 1) {
    resultParagraph.textContent = 'Isn\'t that fascinating. Sure wish I knew!';
    } 
    if (randomNumber === 2) {
    resultParagraph.textContent = "Wow, that's a good question";
    }
    if (randomNumber === 3) {
      resultParagraph.textContent = "Ummm... I don't know. I just work here";
    }
    if (randomNumber === 4) {
      resultParagraph.textContent = "Something went wrong, try again";
    }
    if (randomNumber === 5) {
      resultParagraph.textContent = "I don't understand a thing you wrote";
    }
    if (randomNumber === 6) {
      resultParagraph.textContent = "AHHHHH!!!!";
    }
    if (randomNumber === 7) {
      resultParagraph.textContent = "That was close...";
    }
    if (randomNumber === 8) {
      resultParagraph.textContent = "That was so close! Almost there.";
    }
    if (randomNumber === 9) {
      resultParagraph.textContent = "You're really far off";
    }
    if (randomNumber === 10) {
      resultParagraph.textContent = "message = page.dismissiveShrug();";
    }
    resultParagraph.style.color = 'red';
  }
});
function redirect() {
  window.location.href = "Success.html";
}
function getRandomInt() {
  return Math.floor(Math.random() * (10 - 1) + 1);
}