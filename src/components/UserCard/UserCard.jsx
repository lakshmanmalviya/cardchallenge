import React, { useEffect, useState } from "react";
import styles from "./UserCard.module.css";

const UserCard = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBeerData = async () => {
    try {
      const response = await fetch("https://api.sampleapis.com/beers/ale");
      const data = await response.json();
      setBeers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchBeerData();
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Beer List</h1>
      <input
        type="text"
        placeholder="Search Beers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchBar}
      />
      <div className={styles.beerList}>
        {filteredBeers.map((beer) =>
          beer.image ? ( // Render only if beer.image exists
            <div key={beer.id} className={styles.beerCard}>
              <img src={beer.image} alt={beer.name} className={styles.beerImage} />
              <h6 className={styles.beerName}>{beer.name}</h6>
              <p className={styles.beerStyle}>{beer.style}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default UserCard;
