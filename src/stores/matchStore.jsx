import { create } from "zustand";
import api from "../services/api";

const useMatchStore = create((set) => ({
  matches: [],
  loading: false,
  error: null,
  fetchMatches: async () => {
    set({ loading: true });
    try {
      const response = await api.get("#");
      set({ matches: response.data, error: null });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useMatchStore;
