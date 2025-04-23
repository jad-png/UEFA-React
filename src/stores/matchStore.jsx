import { create } from "zustand";
import api from "../services/api";

const useMatchStore = create((set) => ({
  matches: [],
  loading: false,
  error: null,
  fetchMatches: async () => {
    set({ loading: true });
    try {
      const response = await api.get(
        "/sport/football/scheduled-events/2025-04-16"
      );
      const championsLeagueMatches = response.data.events
        .filter(
          (event) =>
            event.tournament.uniqueTournament?.id === 7 &&
            event.roundInfo?.round === "Quarter-finals"
        )
        .map((event) => ({
          id: event.id,
          date: new Date(event.startTimestamp * 1000)
            .toISOString()
            .split("T")[0],
          teams: {
            home: {
              name: event.homeTeam.name,
              logo: `https://api.sofascore.app/api/v1/team/${event.homeTeam.id}/image`,
            },
            away: {
              name: event.awayTeam.name,
              logo: `https://api.sofascore.app/api/v1/team/${event.awayTeam.id}/image`,
            },
          },
          goals: {
            home: event.homeScore?.current || 0,
            away: event.awayScore?.current || 0,
          },
          manOfTheMatch: {
            name: event.manOfTheMatch?.name || `Player${(event.id % 4) + 1}`, // Simulated
            team: event.manOfTheMatch?.team || event.homeTeam.name,
          },
        }));
      set({ matches: championsLeagueMatches, loading: false, error: null });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useMatchStore;
