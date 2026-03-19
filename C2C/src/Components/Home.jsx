import React, { useRef } from 'react';
import './Home.css';
import filmsData from '../films.json';

const Home = () => {
  const trendingMovies = filmsData.slice(0, 5);
  const explorerRef = useRef(null);
  const comedyRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const getPoster = (id) => {
    const posters = {
      1: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      2: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg", 
      3: "https:www.themoviedb.org/t/p/original/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
      4: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      5: "https://upload.wikimedia.org/wikipedia/en/5/53/Amelie_poster.jpg",
      6: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/08/the-dark-knight-joker-and-batman.jpg",
      7: "https://th.bing.com/th/id/R.b03a69216b3108c2d697016975371978?rik=%2b0PsCxXNgR57Bw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f7%2fe%2f4%2f258483.jpg&ehk=ZZV%2fZX2A%2fy4POWYTpsxqOOAHCxS5%2fllSXjeN9vM%2fvmE%3d&risl=&pid=ImgRaw&r=0",
      8: "https://tse4.mm.bing.net/th/id/OIP.n07LIQbCoks3QO0njZKFogHaKx?rs=1&pid=ImgDetMain&o=7&rm=3",
      9: "https://th.bing.com/th/id/OIP.YvIK6BQjAK0teZUnGFDifgHaK-?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
      10: "https://www.themoviedb.org/t/p/original/5f4elwxWEH2J9h0bnYmsj2AKcml.jpg"
    };
    return posters[id] || "https://via.placeholder.com/300x450";
  };

  return (
    <div className="home-container">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Inception</h1>
          <p className="hero-description">A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O</p>
          <div className="hero-buttons">
            <button className="btn-details">▶ View Details</button>
            <button className="btn-favorites">💖 Add to Favorites</button>
          </div>
        </div>
      </section>
{/* --- SECTION 1: TRENDING NOW --- */}
<section className="trending-section">
  <div className="section-header">
    <h2 className="trending-main-title">Trending Now </h2>
    <span className="view-all-red">View All</span>
  </div>

  <div className="movies-grid">
    {trendingMovies.map((film) => (
      <div className="movie-card" key={film.id}>
        <div className="card-image-wrapper">
          <img src={getPoster(film.id)} alt={film.title} />
          <div className="movie-overlay">
            <h3 className="overlay-title">{film.title}</h3>
            <p className="overlay-meta">{film.year} • {film.imdb_score} </p>
          </div>
        </div>
        <button className="favorite-icon-btn">💜</button>
      </div>
    ))}
  </div>
</section>
      {/* 2. EXPLORER SECTION */}
      <section className="explorer-section">
        <div className="section-header">
          <h2 className="trending-main-title">Popular on Explorer</h2>
          <div className="arrows">
            <button onClick={() => scroll(explorerRef, 'left')}>‹</button>
            <button onClick={() => scroll(explorerRef, 'right')}>›</button>
          </div>
        </div>
        <div className="explorer-grid-container" ref={explorerRef}>
          <div className="explorer-wrapper" style={{ display: 'flex', gap: '20px', overflowX: 'auto' }}>
            {filmsData.map((film) => (
              <div className="explorer-card" key={film.id}>
                <img src={getPoster(film.id)} alt={film.title} />
                <div className="explorer-overlay"><h3>{film.title}</h3></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ACTION SECTION */}
      <section className="action-slider-section">
        <div className="section-header">
          <h2 className="action-title">Action Movies </h2>
        </div>
        <div className="slider-wrapper" style={{ display: 'flex', gap: '15px', overflowX: 'auto' }}>
          
            {filmsData
             .filter(film => film.genre && String(film.genre).includes("Comedy"))
             .map((film) => (
               <div className="comedy-card" key={film.id}>
               <img src={getPoster(film.id)} alt={film.title} />
                <h4>{film.title}</h4>
              </div>
              ))}
        </div>
      </section>

      {/* 4. COMEDY SECTION */}
      <section className="section-container">
        <div className="section-header">
          <h2>Comedy Movies </h2>
          <div className="arrows">
            <button onClick={() => scroll(comedyRef, 'left')}>‹</button>
            <button onClick={() => scroll(comedyRef, 'right')}>›</button>
          </div>
        </div>
        <div className="slider-scroll-container" ref={comedyRef} style={{ display: 'flex', gap: '20px', overflowX: 'auto' }}>
          
            {filmsData
        .filter(film => film.genre && String(film.genre).includes("Action"))
        .map((film) => (
          <div className="action-card-mini" key={film.id}>
          <img src={getPoster(film.id)} alt={film.title} />
          <h4>{film.title}</h4>
          </div>
         ))}
        </div>
      </section>

    </div>
  );
};

export default Home;