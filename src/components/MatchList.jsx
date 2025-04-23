import React, { useEffect, useState } from "react";
import { useMatchStore } from "../stores/matchStore";

export function MatchList() {
  const { matches, loading, error, fetchedMatches } = useMatchStore();
  const [currentPage, setCurrentPage] = useState(1);

  const matchesPerPage = 2;

  useEffect(() => {
    fetchedMatches();
  }, [fetchedMatches]);

  if (loading)
    return <div className="text-center text-gray-500">Chargement...</div>;
  if (error)
    return <div className="text-center text-red-500">Erreur : {error}</div>;
}
