import { Autocomplete, Grid2 as Grid, TextField } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface Props {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const Filter: FC<Props> = ({ setTitle, setSelectedTags }) => {
  const { tags } = useSelector((store: RootState) => store.tags);

  return (
    <Grid container mt={5} spacing={6}>
      <Grid size={6}>
        <TextField
          label="Başlığa Göre Ara"
          fullWidth
          onChange={(e) => setTitle(e.target.value)}
        />
      </Grid>

      <Grid size={6}>
        <Autocomplete
          multiple
          id="tag-search"
          options={tags}
          onChange={(e, allTags) => setSelectedTags(allTags)}
          renderInput={(params) => (
            <TextField {...params} label="Etikete Göre Ara" />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default Filter;
