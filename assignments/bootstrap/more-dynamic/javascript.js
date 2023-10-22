document.addEventListener('DOMContentLoaded', function() {
  fadeStuff();

  fetch('./cards.json')
    .then(res => res.json())
    .then(data => buildCards(data));
});

const fadeStuff = () => {
  const allMightDiv = document.getElementById('all-might');
  const animeContainerDiv = document.getElementById('anime-container');

  setTimeout(() => {
    allMightDiv.classList.add('faded-out');
    allMightDiv.classList.remove('faded-in');

    animeContainerDiv.classList.add('faded-in');
    animeContainerDiv.classList.remove('faded-out');
  }, 1000);
}

const buildCards = (cardData) => {
  const cardsRow = document.getElementById('cards');

  cardData.forEach(card => {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');

    const cardHtml =
    `<div class="card">\n` +
    `  <img src="${card.image}" alt="${card.title}" class="card-img" />\n` +
    `  <div class="card-body">\n` +
    `    <h5 class="card-title">${card.title}</h5>\n` +
    `    <p class="card-text">${card.description}</p>\n` +
    `  </div>\n` +
    `  <div class="card-footer">\n` +
    `    <a href="${card.link}" target="_blank" class="btn btn-primary">Learn more</a>\n` +
    `  </div>\n` +
    `</div>`;

    colDiv.innerHTML = cardHtml;
    cardsRow.appendChild(colDiv);
  });

      //  <div class="col">
      //   <div class="card">
      //     <img src="https://i.pinimg.com/originals/9f/1d/9f/9f1d9fde4c932a117843d9f43478722e.jpg" alt="Overlord" class="card-img">
      //     <div class="card-body">
      //       <h5 class="card-title">Overlord</h5>
      //       <p class="card-text">A player gets stuck in an MMORPG for real. He has ton of power and seems to be the only real player there.</p>
      //     </div>
      //     <div class="card-footer">
      //       <a href="https://www.imdb.com/title/tt4869896/" target="_blank" class="btn btn-primary">Learn more</a>
      //     </div>
      //   </div>
      // </div>
}