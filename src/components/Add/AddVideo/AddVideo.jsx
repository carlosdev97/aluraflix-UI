import "./AddVideo.css";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { create } from "../../../api/api";
import { v4 as uuidv4 } from 'uuid';
import { LoaderForm } from "../../Loader/LoaderForm";
import { Link } from 'react-router-dom';

function AddVideo({ categories }) {

  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [categorie, setCategorie] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const [errors, setErrors] = useState({
    title: {
      error: false,
      message: ""
    },
    videoUrl: {
      error: false,
      message: ""
    },
    imageUrl: {
      error: false,
      message: ""
    },
    categorie: {
      error: false,
      message: ""
    },
    description: {
      error: false,
      message: ""
    }
  });

  function clearInputs() {
    setTitle('');
    setVideoUrl('');
    setImageUrl('');
    setCategorie('');
    setDescription('');
  }

  return <section className="addvideo">
    <form className='form' onSubmit={ async (event) => {
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
              titulo: title, 
              videoUrl: videoUrl, 
              imageUrl: imageUrl, 
              categoria: categorie, 
              description: description};
            setLoading(true);
            await create('/videos', data)
            setLoading(false)
            setConfirmation(true)
            clearInputs()
            setTimeout(() => {
              setConfirmation(false)
            }, 5000);
          } else {
            
          }
        }}>
      <h2 className="form__title">Nuevo video</h2>
      <TextField 
        id="title"
        label="Titulo"
        type="text"
        variant="standard"
        onChange={(event) =>{
          setTitle(event.target.value)
        }}
        value={title}
        onBlur={(event) => {
          if (event.target.value == "") {
            const newErrors = {...errors}
            newErrors.title.error = true;
            newErrors.title.message = "El campo no puede estar vacio.";
            setErrors(newErrors);
          } else {
            const newErrors = {...errors}
            newErrors.title.error = false;
            newErrors.title.message = "";
            setErrors(newErrors);
          }
        }}
        helperText={errors.title.message}
        error={errors.title.error}
      />
      <TextField 
        id="videoUrl"
        label="URL video"
        type="text"
        variant="standard"
        onChange={(event) =>{
          setVideoUrl(event.target.value)
        }}
        value={videoUrl}
        onBlur={(event) => {
          if (event.target.value == "") {
            const newErrors = {...errors}
            newErrors.videoUrl.error = true;
            newErrors.videoUrl.message = "El campo no puede estar vacio.";
            setErrors(newErrors);
          } else {
            const newErrors = {...errors}
            newErrors.videoUrl.error = false;
            newErrors.videoUrl.message = "";
            setErrors(newErrors);
          }
        }}
        helperText={errors.videoUrl.message}
        error={errors.videoUrl.error}
      />
      <TextField 
        id="imageUrl"
        label="URL imagen"
        type="text"
        variant="standard"
        onChange={(event) =>{
          setImageUrl(event.target.value)
        }}
        value={imageUrl}
        onBlur={(event) => {
          if (event.target.value == "") {
            const newErrors = {...errors}
            newErrors.imageUrl.error = true;
            newErrors.imageUrl.message = "El campo no puede estar vacio.";
            setErrors(newErrors);
          } else {
            const newErrors = {...errors}
            newErrors.imageUrl.error = false;
            newErrors.imageUrl.message = "";
            setErrors(newErrors);
          }
        }}
        helperText={errors.imageUrl.message}
        error={errors.imageUrl.error}
      />
      <TextField
        id="categoria"
        label='Categoria'
        variant="standard"
        select
        onChange={(event) => {
          setCategorie(event.target.value)
        }}
        value={categorie}
        onBlur={(event) => {
          if (!event.target.value) {
            const newErrors = {...errors}
            newErrors.categorie.error = true;
            newErrors.categorie.message = "Debe seleccionar una categoria.";
            setErrors(newErrors);
          } else {
            const newErrors = {...errors}
            newErrors.categorie.error = false;
            newErrors.categorie.message = "";
            setErrors(newErrors);
          }
        }}
        helperText={errors.categorie.message}
        error={errors.categorie.error}
      >
        {
            categories.map((categorie, index) => {
              return <MenuItem key={index} value={categorie.nombre}>{categorie.nombre}</MenuItem>
            })
          }
      </TextField>
      <TextField
        id="description"
        variant="standard"
        label="Descripción"
        multiline
        rows={5}
        onChange={(event) => {
          setDescription(event.target.value)
        }}
        value={description}
        onBlur={(event) => {
          if (event.target.value == "") {
            const newErrors = {...errors}
            newErrors.description.error = true;
            newErrors.description.message = "El campo no puede estar vacio."
            setErrors(newErrors);
          } else {
            if (event.target.value.length > 250) {
              const newErrors = {...errors}
              newErrors.description.error = true;
              newErrors.description.message = "El campo no puede superar los 250 caracteres."
              setErrors(newErrors);
            } else {
              const newErrors = {...errors}
              newErrors.description.error = false;
              newErrors.description.message = ""
              setErrors(newErrors);
            }
          }
        }}
        helperText={errors.description.message}
        error={errors.description.error}
      />
      <div className="buttons__container">
        <Button variant="contained" type="submit">Guardar</Button>
        <Button variant="outlined" onClick={clearInputs}>Limpiar</Button>
        {loading ? <LoaderForm /> : <></>}
        {confirmation ? <Alert severity="success" variant="outlined">¡Datos enviados con exito!</Alert> : <></>}
        <Button variant="contained" component={Link} to="/addcategory">Nueva categoria</Button>
      </div>
    </form>
  </section>
}

export default AddVideo;
