import { useState } from "react";
import { City } from "../types/city";
import db from "./../../../assets/db.json";
import { haversineDistance } from "../../../utils/haversine";

export const useCities = () => {
  const [closestCities, setClosetsCities] = useState<City[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const findClosestCities = (lat: number, lng: number): void => {
    setLoading(true);
    const nearest = db
      .map((city) => ({
        ...city,
        distance: haversineDistance(
          lat,
          lng,
          parseFloat(city.lat),
          parseFloat(city.lng)
        ),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(1, 5);
    setClosetsCities(nearest);
    setLoading(false);
  };

  const clearResult = () => {
    setClosetsCities([]);
  }

  return {
    items: db as City[],
    findClosestCities,
    closestCities,
    loading,
    clearResult
  };
};
