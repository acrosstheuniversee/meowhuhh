const btn = document.getElementById('surpriseBtn');
const surpriseDiv = document.getElementById('surprise');

btn.addEventListener('click', () => {
  surpriseDiv.classList.toggle('hidden');
});
