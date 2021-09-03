
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const spanValue = document.querySelector("#value");
let counterValue = 0;

const increment = () => (spanValue.textContent = counterValue += 1);
const decrement = () => (spanValue.textContent = counterValue -= 1);
btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);
