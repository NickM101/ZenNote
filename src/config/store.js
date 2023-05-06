import { create } from 'zustand'

const useNotesStore = create((set) => ({
  notes: [],
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
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
}))

export default useNotesStore;


//  searchNotes: (searchText) =>
//     set((state) => ({
//       searchText,
//       filteredNotes: state.notes.filter((note) =>
//         note.title.toLowerCase().includes(searchText.toLowerCase())
//       ),
//     })),