import { create } from "zustand";


const useMatchStore = create((set) => ({
    matches: [],
    loading: false,
    error: null,
    fetchMatches: async () => {
        set({ loading: true });
        try {
            const response = await 
        }
    }
}));
