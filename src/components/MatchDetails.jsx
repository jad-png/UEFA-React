import { useParams } from "react-router";
import { useMatchStore } from "../stores/matchStore";

export function MatchDetails() {
    const { matches } = useMatchStore();
    const { id } = useParams();
    const match = matches.find((m) => m.); // finding a match based on it's id 
    
    if (!match) return <div className="text-center text-red-500">Match non trouvé</div>;

    return (
        
    );
};