console.log("Movie site script loaded");
const movies = [
  { id: 1, title: "Dune: Part Two", year: 2024, rating: 8.5, genre: "Sci-Fi",
    badge: "trending", type: "movie" },
  { id: 2, title: "Oppenheimer", year: 2023, rating: 8.9, genre: "Drama",
    badge: "new", type: "movie" },
  // ... more movies
];

function getRatingClass(rating) {
  if (rating >= 8.5) {
    return "rating-high";
  } else if (rating >= 6) {
    return "rating-avg";
  } else {
    return "rating-low";
  }
}

function getBadgeHTML(badge) {
  switch (badge) {
    case "trending":
      return `<span class="card-tag tag-trending">TRENDING</span>`;
    case "new":
      return `<span class="card-tag tag-new">NEW</span>`;
    case "top":
      return `<span class="card-tag tag-top">TOP</span>`;
    default:
      return "";
  }
}

function createCardHTML(movie) {
  const ratingClass = getRatingClass(movie.rating);
  const badgeHTML = getBadgeHTML(movie.badge);

  return `
    <div class="movie-card">
      <div class="card-poster">
        <img src="https://via.placeholder.com/300x450" class="poster-img">
        ${badgeHTML}
        <button class="card-fav-icon">❤</button>
      </div>
      <div class="card-details">
        <h3 class="card-title">${movie.title}</h3>
        <div class="card-meta">
          <span>${movie.year}</span>
          <span>${movie.genre}</span>
        </div>
        <div class="card-rating ${ratingClass}">
          ⭐ ${movie.rating}
        </div>
      </div>
    </div>
  `;
}



function renderCards(data, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let html = "";

  for (let i = 0; i < data.length; i++) {
    html += createCardHTML(data[i]);
  }

  container.innerHTML = html;
}

renderCards(movies, "movies-grid");

