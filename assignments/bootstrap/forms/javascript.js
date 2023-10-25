document.addEventListener('DOMContentLoaded', function() {
  const addMovieModal = document.getElementById('add-movie-modal');
  const movieTitleInput = document.getElementById('movie-title');
  const form = document.getElementById('movie-form');

  addMovieModal.addEventListener('hidden.bs.modal', () => {
    form.classList.remove('was-validated');
  });

  addMovieModal.addEventListener('shown.bs.modal', () => {
    movieTitleInput.focus();
  });

  const movieScore = document.getElementById('movie-score');
  movieScore.onchange = () => {
    let helperText;
    switch(movieScore.value) {
      case '1':
        helperText = 'Horrible';
        break;
      case '2':
        helperText = 'Bad';
        break;
      case '3':
        helperText = 'Okay';
        break;
      case '4':
        helperText = 'Good';
        break;
      case '5':
        helperText = 'Excellent';
        break;
    }

    const movieScoreHelper = document.getElementById('movie-score-helper');
    movieScoreHelper.innerHTML = helperText;
  }

  form.onsubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if(!form.checkValidity()) {
      console.log('invalid');
    }
    else {
      const movieTr = document.createElement('tr');
      const movieHtml =
        `<td>${document.getElementById('movie-title').value}</td>` +
        `<td>${document.getElementById('movie-genre').value}</td>` +
        `<td>${document.getElementById('movie-score').value}</td>`;

      movieTr.innerHTML = movieHtml;
      document.getElementById('movies-body').appendChild(movieTr);

      const modal = bootstrap.Modal.getInstance(document.getElementById('add-movie-modal'));
      modal.hide();
    }

    form.classList.add('was-validated');
  }
});
