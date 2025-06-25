const dogContainer = document.getElementById('dog-container');
const refreshBtn = document.getElementById('refresh-btn');
const breedInput = document.getElementById('breed-input');

let allBreeds = [];

// Fetch 5 random dog images or based on breed
async function fetchDogs(breed = '') {
  dogContainer.innerHTML = '🐶 Loading...';

  let url = breed && allBreeds.includes(breed.toLowerCase())
    ? `https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random/5`
    : `https://dog.ceo/api/breeds/image/random/5`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== 'success') throw new Error('API Error');

    displayDogs(data.message);
  } catch (err) {
    dogContainer.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
  }
}

// Display images
function displayDogs(images) {
  dogContainer.innerHTML = '';
  images.forEach(img => {
    const imgEl = document.createElement('img');
    imgEl.src = img;
    dogContainer.appendChild(imgEl);
  });
}

// Fetch all breeds for filtering
async function loadBreeds() {
  const res = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await res.json();
  allBreeds = Object.keys(data.message);
}

refreshBtn.addEventListener('click', () => {
  const breed = breedInput.value.trim();
  fetchDogs(breed);
});

// Initial load
loadBreeds();
fetchDogs();
