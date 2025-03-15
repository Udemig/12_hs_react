import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note, NoteData } from "../../types";
import { v4 } from "uuid";

const initialState: { notes: Note[] } = {
  notes: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // PayloadAction: Redux'ta action'ın payload'ının tipini belirtmek için kullanılır.
    addNote(state, action: PayloadAction<NoteData>) {
      // noteData'ya id ekleyip note'a çeviririz
      const newNote: Note = { ...action.payload, id: v4() };

      // state'e yeni notu ekleriz
      state.notes.push(newNote);
    },

    // Note'u silmek için kullanılır
    deleteNote(state, action: PayloadAction<string>) {
      // note'un index'ini bul
      const i = state.notes.findIndex((note) => note.id === action.payload);

      // note'u sil
      state.notes.splice(i, 1);
    },

    // Note'u güncellemek için kullanılır
    updateNote(state, action: PayloadAction<Note>) {
      // note'un index'ini bul
      const i = state.notes.findIndex((note) => note.id === action.payload.id);

      // note'u güncelle
      state.notes.splice(i, 1, action.payload);
    },
  },
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
