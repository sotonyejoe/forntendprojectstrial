import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Load favourites safely
  useEffect(() => {
    try {
      const storedFavs = localStorage.getItem("favourites");
      if (storedFavs) {
        setFavourites(JSON.parse(storedFavs));
      }
    } catch (error) {
      console.error("Failed to load favourites", error);
      setFavourites([]);
    }
  }, []);

  // Save favourites
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavourites = (movie) => {
    setFavourites(prev =>
      prev.some(m => m.id === movie.id) ? prev : [...prev, movie]
    );
  };

  const removeFromFavourites = (movieId) => {
    setFavourites(prev => prev.filter(movie => movie.id !== movieId));
  };

  const isFavourite = (movieId) => {
    return favourites.some(movie => movie.id === movieId);
  };

  const value = {
    favourites,
    addFavourites,
    removeFromFavourites,
    isFavourite,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
