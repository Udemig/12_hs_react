import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTag } from "../../redux/slices/tagsSlice";
import { RootState } from "../../redux/store";

interface Props {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagSelect: FC<Props> = ({ selectedTags, setSelectedTags }) => {
  const { tags } = useSelector((store: RootState) => store.tags);
  const dispatch = useDispatch();

  return (
    <Autocomplete
      multiple
      freeSolo
      options={tags}
      value={selectedTags}
      onChange={(_, inputTags) => {
        // input'taki etiket sayısı 5'ten fazla ise uyarı ver
        if (inputTags.length === 5) {
          return alert("Maksimum sayıda etiket eklediniz");
        }

        // input'taki sonuncu etiket tanımlysa reducer'a gönder
        if (inputTags[inputTags.length - 1]) {
          dispatch(addTag(inputTags[inputTags.length - 1]));
        }

        // input'taki etiketleri state'e gönder
        setSelectedTags(inputTags);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Etiketler"
          placeholder="Etiket ekle"
        />
      )}
    />
  );
};

export default TagSelect;
