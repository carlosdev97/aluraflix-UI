import "./AddCategory.css";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { create, remove } from "../../../api/api";
import { v4 as uuidv4 } from 'uuid';
import { LoaderForm } from "../../Loader/LoaderForm";
import Alert from '@mui/material/Alert';

function AddCategory({ categories, updateData }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const [errors, setErrors] = useState({
    name: {
      error: false,
      message: "",
    },
    description: {
      error: false,
      message: "",
    },
    color: {
      error: false,
      message: "",
    },
  });

  function clearInputs() {
    setName('');
    setDescription('');
    setColor('');
  }

  async function deleteCategory(id) {
    try {
      await remove('/categorias', id);
      updateData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="addcategory">
      <form
        className="form"
        onSubmit={async (event) => {
          event.preventDefault();

          let isValid = true;
          for (let key in errors) {
            if (errors[key].error === true) {
              isValid = false;
              break;
            }
          }

          if (isValid) {
            const data = {
              id: uuidv4(),
              nombre: name,
              color: color,
              descripcion: description
            };
            setLoading(true);
            await create('/categorias', data)
            setLoading(false)
            setConfirmation(true)
            clearInputs()
            setTimeout(() => {
              setConfirmation(false)
            }, 5000);
            updateData();
          } else {

          }
        }}
      >
        <h2 className="form__title">Nueva Categoría</h2>
        <TextField
          label="Nombre"
          type="text"
          variant="standard"
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
          onBlur={(event) => {
            if (event.target.value === "") {
              setErrors({
                ...errors,
                name: {
                  error: true,
                  message: "El campo nombre no puede estar vacío.",
                },
              });
            } else {
              setErrors({
                ...errors,
                name: {
                  error: false,
                  message: "",
                },
              });
            }
          }}
          error={errors.name.error}
          helperText={errors.name.message}
        />
        <TextField
          label="Descripción"
          type="text"
          variant="standard"
          multiline
          rows={5}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          value={description}
          onBlur={(event) => {
            if (event.target.value === "") {
              setErrors({
                ...errors,
                description: {
                  error: true,
                  message: "El campo descripción no puede estar vacío."
                }
              })
            } else {
              setErrors({
                ...errors,
                description: {
                  error: false,
                  message: ""
                }
              })
            }
          }}
          error={errors.description.error}
          helperText={errors.description.message}
        />
        <TextField
          label="Color"
          type="color"
          variant="standard"
          onChange={(event) => {
            setColor(event.target.value);
          }}
          value={color}
          onBlur={(event) => {
            if (event.target.value === "#000000") {
              setErrors({
                ...errors,
                color: {
                  error: true,
                  message: "Por favor seleccione un color diferente."
                }
              })
            } else {
              setErrors({
                ...errors,
                color: {
                  error: false,
                  message: ""
                }
              })
            }
          }}
          error={errors.color.error}
          helperText={errors.color.message}
        />
        <div className="buttons__container--category">
          <Button variant="contained" type="submit">Guardar</Button>
          <Button variant="outlined">Limpiar</Button>
          {loading ? <LoaderForm /> : <></>}
          {confirmation ? <Alert severity="success" variant="outlined">¡Datos enviados con exito!</Alert> : <></>}
        </div>
      </form>

      <TableContainer component={Paper} sx={{ margin: "40px 0px" }}>
        <Table sx={ window.innerWidth <= 425 ? { width: "100%" } : { minWidth: 650 } } aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align={ window.innerWidth <= 425 ? "left" : "center" }>Nombre</TableCell>
              { window.innerWidth <= 425 
                ? ( <TableCell align="center">Acciones</TableCell> ) 
                : (<> <TableCell align="center">Descripción</TableCell> 
                    <TableCell align="center">Editar</TableCell>
                    <TableCell align="center">Eliminar</TableCell>
                  </>
                  ) 
              }
            </TableRow>
          </TableHead>
          <TableBody>
            { categories.map( (categorie) => (
              <TableRow
                key={categorie.nombre}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">{categorie.nombre}</TableCell>
                { window.innerWidth <= 425 
                  ? ( <TableCell align="center" sx={{ display: "flex", justifyContent: "space-between"}} >
                        <EditIcon align="center" color="success" />
                        <DeleteIcon align="center" color="error" />
                      </TableCell> ) 
                  : ( <> <TableCell align="center">{categorie.descripcion}</TableCell> 
                        <TableCell align="center">
                          <Button color="success" variant="outlined" startIcon={<EditIcon />}>Editar</Button>
                        </TableCell>
                        <TableCell align="center">
                          <Button color="error" variant="outlined" startIcon={<DeleteIcon />} onClick={() => deleteCategory(categorie.id)} disabled>Eliminar</Button>
                        </TableCell> </> 
                    )
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}

export default AddCategory;
