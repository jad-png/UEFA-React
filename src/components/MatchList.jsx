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

  const indexOfLastMatch = currentPage * matchesPerPage;
  const indexOfFirstMatch = indexOfLastMatch - matchesPerPage;
  const currentMatches = matches.slice(indexOfFirstMatch, indexOfLastMatch);
  const totalPages = Math.ceil(matches.length / matchesPerPage);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Quarts de Finale - Ligue des Champions 2024/2025
      </h1>
      <div className="grid gap-4">
        {currentMatches.map((match) => (
          <div
            key={match}
            className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <img
                src={match.}
                alt={match.}
                className="w-12 h-12"
              />
              <span className="font-semibold">{match.}</span>
              <span className="text-lg font-bold">{match.}</span>
            </div>
            <span className="text-gray-500">vs</span>
            <div className="flex items-center space-x-4">
              <span className="text-lg font-bold">{match.}</span>
              <span className="font-semibold">{match.}</span>
              <img
                src={match.}
                alt={match.}
                className="w-12 h-12"
              />
            </div>
            <Link
              to={`/match/${match.}`}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Détails
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
