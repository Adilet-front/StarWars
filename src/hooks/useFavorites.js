import { useCallback, useEffect, useState } from "react";

const FAVORITES_KEY = "swFavorites";

const readFavorites = () => {
  if (typeof window === "undefined") {
    return [];
  }
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
  } catch {
    return [];
  }
};

const writeFavorites = (items) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("favorites-updated"));
};

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => readFavorites());

  const syncFavorites = useCallback(() => {
    setFavorites(readFavorites());
  }, []);

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === FAVORITES_KEY) {
        syncFavorites();
      }
    };
    const handleCustom = () => syncFavorites();

    window.addEventListener("storage", handleStorage);
    window.addEventListener("favorites-updated", handleCustom);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("favorites-updated", handleCustom);
    };
  }, [syncFavorites]);

  const isFavorite = useCallback(
    (id) => favorites.some((item) => item.id === id),
    [favorites]
  );

  const toggleFavorite = useCallback(
    (item) => {
      setFavorites((prev) => {
        const exists = prev.some((favorite) => favorite.id === item.id);
        const next = exists
          ? prev.filter((favorite) => favorite.id !== item.id)
          : [...prev, item];
        writeFavorites(next);
        return next;
      });
    },
    []
  );

  return { favorites, toggleFavorite, isFavorite };
};


