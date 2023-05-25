import "./AddCategory.css";
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AddCategory({ categories }) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('');

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: ""
        },
        description: {
            error: false,
            message: ""
        },
        color: {
            error: false,
            message: ""
        }
    });

    return <section className="addcategory">
        <form className="form" onSubmit={(event) => {
            event.preventDefault();
            let data = {
                name,
                description,
                color
            }
        }}>
            <h2 className="form__title">Nueva Categoría</h2>
            <TextField
                label="Nombre"
                type="text"
                variant="standard"
                onChange={(event) => {
                    setName(event.target.value);
                }}
                value={name}
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
            />
            <TextField
                label="Color"
                type="color"
                variant="standard"
                onChange={(event) => {
                    setColor(event.target.value);
                }}
                value={color}
            />
            <div className="buttons__container--category">
                <Button variant="contained" type="submit">Guardar</Button>
                <Button variant="outlined">Limpiar</Button>
            </div>
        </form>

        <TableContainer component={Paper} sx={{ margin: "40px 0px" }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell align="center">Descripción</TableCell>
                        <TableCell align="center">Editar</TableCell>
                        <TableCell align="center">Remover</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categories.map((categorie) => (
                        <TableRow
                            key={categorie.nombre}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {categorie.nombre}
                            </TableCell>
                            <TableCell align="center">{categorie.descripcion}</TableCell>
                            <TableCell align="center"><Button color="success" variant="outlined" startIcon={<EditIcon />}>Editar</Button></TableCell>
                            <TableCell align="center"><Button color="error" variant="outlined" startIcon={<DeleteIcon />}>Eliminar</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </section>
}

export default AddCategory;