export type Note = {
  id: string;
  title: string;
  markdown: string;
  tags: string[];
};

export type NoteData = Omit<Note, "id">;
