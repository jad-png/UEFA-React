import { useParams } from "react-router";
import { useMatchStore } from "../stores/matchStore";

export function MatchDetails() {
    const { matches } = useMatchStore();
    const { id } = useParams();
    const match = matches.find((m) => m.id === parseInt(id));

    if (!match) return <div className="text-center text-red-500">Match non trouvé</div>;

    return (
       <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-6">Détails du Match</h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <img src={match.teams.home.logo} alt={match.teams.home.name} className="w-16 h-16" />
                <span className="text-xl font-semibold">{match.teams.home.name}</span>
                <span className="text-2xl font-bold">{match.goals.home}</span>
              </div>
              <span className="text-gray-500 text-xl">vs</span>
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold">{match.goals.away}</span>
                <span className="text-xl font-semibold">{match.teams.away.name}</span>
                <img src={match.teams.away.logo} alt={match.teams.away.name} className="w-16 h-16" />
              </div>
            </div>
            <p className="text-gray-600">Date : {match.date}</p>
            <p className="text-gray-600">Homme du match : {match.manOfTheMatch.name} ({match.manOfTheMatch.team})</p>
            <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Retour
            </Link>
          </div>
        </div>
    );
};