const form = document.querySelector('#topupForm');
const result = document.querySelector('#result');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const game = document.querySelector('#game').value;
  const userId = document.querySelector('#userId').value.trim();
  const packageValue = Number(document.querySelector('#package').value);

  if (!game || !userId || !packageValue) {
    result.textContent = 'Please complete all fields before checkout.';
    return;
  }

  const fee = 0.5;
  const total = (packageValue + fee).toFixed(2);

  result.textContent = `Success! ${game} top up for ID ${userId} has been queued. Total payment: $${total}.`;

  form.reset();
});
