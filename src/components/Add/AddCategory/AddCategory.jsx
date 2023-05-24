import "./AddCategory.css";
import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function AddCategory() {
    return <section className="addcategory">
        <form className="form">
            <h2 className="form__title">Nueva Categoría</h2>
            <TextField
                label="Nombre"
                type="text"
                variant="standard"
            />
            <TextField
                label="Descripción"
                type="text"
                variant="standard"
                multiline
                rows={5}
            />
            <TextField
                label="Nombre"
                type="color"
                variant="standard"
            />
            <div className="buttons__container--category">
                <Button variant="contained" type="submit">Guardar</Button>
                <Button variant="outlined">Limpiar</Button>
            </div>
        </form>
    </section>
}

export default AddCategory;