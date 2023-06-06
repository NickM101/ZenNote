import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

 const useNotesStore = create((set) => ({
  notes: [],
  addNote: (note) => set((state) => ({ notes: [note, ...state.notes] })),
  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id)
    })),
  searchNotes: (searchText) => set((state) => ({ searchText })),
  getFilteredNotes: () => {
    return state.notes.filter((note) =>
      note.title.toLowerCase().includes(state.searchText.toLowerCase())
    )
  }
}));

export default useNotesStore;
// export const usePlainStore = create(devtools(useNotesStore));