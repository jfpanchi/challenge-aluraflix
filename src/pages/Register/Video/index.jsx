import { Grid, MenuItem } from "@mui/material";
import Input from "../../../components/Shared/Input";
import { useContext, useState } from "react";
import Button from "../../../components/Shared/Button";
import { DataContext } from "../../../Context";
import Form from "../../../components/Shared/Form";

const RegisterVideo = () => {
  const data = useContext(DataContext);

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const Clear = () => {
    setTitle("");
    setDescription("");
    setCategory("");
    setLink("");
  };

  const onSubmitAddVideo = () => {
    data.onCreateVideo(title, link, category, description);
  };

  return (
    <Form title={"Nuevo Video"}>
      <Input placeholder={"Title"} value={title} setValue={setTitle} required />

      <Input
        placeholder={"Link del video (Youtube)"}
        value={link}
        setValue={setLink}
        required
      />

      <Input
        placeholder={"Categoria"}
        value={category}
        setValue={setCategory}
        required
        select={true}
      >
        {data.categories.map((category) => (
          <MenuItem key={category.id} value={category.name}>
            {category.name}
          </MenuItem>
        ))}
      </Input>

      <Input
        placeholder={"Descripcion"}
        value={description}
        setValue={setDescription}
        required
      />

      <Grid container marginTop={2} marginBottom={2}>
        <Grid item marginRight={2} marginBottom={2}>
          <Button
            text="Guardar"
            variant="contained"
            onClick={onSubmitAddVideo}
          />
        </Grid>

        <Grid item marginRight={2} marginBottom={2}>
          <Button
            text="Limpiar"
            variant="contained"
            color="secondary"
            onClick={Clear}
          />
        </Grid>

        <Grid item marginLeft={"auto"}>
          <Button
            text="Nueva Categoria"
            variant="contained"
            color="secondary"
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default RegisterVideo;
