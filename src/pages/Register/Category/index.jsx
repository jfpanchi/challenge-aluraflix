import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Input from "../../../components/Shared/Input";
import Button from "../../../components/Shared/Button";
import { DataContext } from "../../../Context";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import Form from "../../../components/Shared/Form";

const RegisterCategory = () => {
  const data = useContext(DataContext);
  const [id, setId] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#000000");
  const [isEditable, setIsEditable] = useState(false);

  const Clear = () => {
    setName("");
    setDescription("");
    setColor("#000000");
    setIsEditable(false);
  };

  const onSubmitAddCategory = () => {
    data.onCreateCategory(name, description, color);
  };

  const onSubmitDeleteCategory = (id) => {
    data.onDeleteCategory(id);
  };

  const onEdit = (category) => {
    setName(category.name);
    setDescription(category.description);
    setColor(category.color);
    setIsEditable(true);
    setId(category.id);
  };

  const onSubmitEdit = () => {
    if (!id) return;
    data.onUpdateCategory(name, description, color, id);
  };

  return (
    
    <Form title={"Nueva categoría"}>
      <Input placeholder={"Nombre"} value={name} setValue={setName} required />

      <Input
        placeholder={"Descripción"}
        value={description}
        setValue={setDescription}
        required
      />

      <Input
        placeholder={"Color"}
        value={color}
        setValue={setColor}
        required
        type="color"
      />
      <Grid container marginTop={2} marginBottom={2}>
        {isEditable ? (
          <Grid item marginRight={2}>
            <Button
              text="Save"
              variant="contained"
              color="success"
              onClick={onSubmitEdit}
            />{" "}
          </Grid>
        ) : (
          <Grid item marginRight={2}>
            <Button
              text="Guardar"
              variant="contained"
              onClick={onSubmitAddCategory}
            />
          </Grid>
        )}
        <Grid item>
          <Button
            text="Limpiar"
            variant="contained"
            color="secondary"
            onClick={Clear}
          />
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead sx={{ bgcolor: "black" }}>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Descripción</TableCell>
                <TableCell align="center">Color</TableCell>
                <TableCell align="center">Editar</TableCell>
                <TableCell align="center">Eliminar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.categories.map((category) => (
                <TableRow
                  key={category.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="category">
                    {category.name}
                  </TableCell>
                  <TableCell align="right">{category.description}</TableCell>
                  <TableCell align="center">
                    {" "}
                    <ColorLensIcon sx={{ color: category.color }} />{" "}
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <Button text="Editar" onClick={()=> onEdit(category)} />{" "}
                  </TableCell>
                  <TableCell align="center">
                    {" "}
                    <Button text="Eliminar" color={"error"} onClick={()=> onSubmitDeleteCategory(category.id)}/>{" "}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Form>
    
    
  );
};

export default RegisterCategory;
