import { FC } from "react";
import { Note, NoteData } from "../../types";
import { useNavigate, useOutletContext } from "react-router-dom";
import PageContainer from "../../styled/page-container";
import { Typography } from "@mui/material";
import Form from "../../components/form";
import { useDispatch } from "react-redux";
import { updateNote } from "../../redux/slices/notesSlice";

const Edit: FC = () => {
  const note = useOutletContext<Note>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data: NoteData) => {
    if (!data.title || !data.markdown || data.tags.length < 1)
      return alert("Lütfen not içeriğini giriniz");

    dispatch(updateNote({ id: note.id, ...data }));

    navigate(`/note/${note.id}`);
  };

  return (
    <PageContainer>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Yeni Not Oluştur
      </Typography>

      <Form note={note} handleSubmit={handleSubmit} />
    </PageContainer>
  );
};

export default Edit;
