import ImdbCard from "./ImdbCard";
import car from "../img/scene.jpg";

function ImdbGallery() {

  const movies = [
    { rank: 1, name: "Superman" },
    { rank: 2, name: "Weapons" },
    { rank: 3, name: "Sinners" },
    { rank: 4, name: "One Battle After Another" },
    { rank: 5, name: "Jurassic World: Rebirth" },
    { rank: 6, name: "Frankenstein" },
    { rank: 7, name: "Happy Gilmore 2" },
    { rank: 8, name: "Thunderbolts*" },
    { rank: 9, name: "Mission: Impossible" },
    { rank: 10, name: "F1: The Movie" }
  ];

  return (
    <div style={{
      backgroundColor: "#2864a7",
      color: "white",
      width: "800px",
      margin: "auto",
      padding: "20px"
    }}>

      <h1>IMDb Best of 2025</h1>

      <h2>Most Popular Movies</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
      }}>

        <div>
          {movies.slice(0, 5).map((movie) => (
            <ImdbCard
              rank={movie.rank}
              name={movie.name}
              img={car}
            />
          ))}
        </div>

        <div>
          {movies.slice(5, 10).map((movie) => (
            <ImdbCard
              rank={movie.rank}
              name={movie.name}
              img={car}
            />
          ))}
        </div>

      </div>

    </div>
  );
}

export default ImdbGallery;