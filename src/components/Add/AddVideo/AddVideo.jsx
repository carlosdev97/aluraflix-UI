import "./AddVideo.css";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { create } from "../../../api/api";
import { v4 as uuidv4 } from 'uuid';
import { LoaderForm } from "../../Loader/LoaderForm";
import { Confirmation } from "../../Confirmation/Confirmation";

function AddVideo({ categories }) {

  const [title, setTitle] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [categorie, setCategorie] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  function clearInputs() {
    setTitle('')
    setCategorie('');
    setVideoUrl('');
    setImageUrl('');
    setCategorie('');
    setDescription('');
  }

  return <section className="addvideo">
    <form className='form' onSubmit={ async (event) => {
          event.preventDefault();
          const data = {
            id: uuidv4(),
            title, 
            videoUrl, 
            imageUrl, 
            categorie, 
            description};
            setLoading(true);
            await create('/videos', data)
            setLoading(false)
            setConfirmation(true)
            clearInputs()
            setTimeout(() => {
              setConfirmation(false)
            }, 5000);
        }}>
      <h2 className="form__title">Nuevo video</h2>
      <TextField 
        id="outlined-basic" 
        label="Titulo" 
        variant="standard" 
        onChange={(event) => {
          setTitle(event.target.value)
        }}
        value={title}
      />
      <TextField 
        id="outlined-basic" 
        label="Link del video" 
        variant="standard" 
        onChange={(event) => {
          setVideoUrl(event.target.value)
        }}
        value={videoUrl}  
      />
      <TextField 
        id="outlined-basic" 
        label="Link de la imagen" 
        variant="standard" 
        onChange={(event) => {
          setImageUrl(event.target.value)
        }}
        value={imageUrl}  
      />
      <TextField
        label='Categoria'
        variant="standard"
        select
        onChange={(event) => {
          setCategorie(event.target.value)
        }}
        value={categorie}
      >
        {
            categories.map((categorie, index) => {
              return <MenuItem key={index} value={categorie}>{categorie}</MenuItem>
            })
          }
      </TextField>
      <TextField 
        variant="standard"
        label="Descripción"
        multiline
        rows={5}
        onChange={(event) => {
          setDescription(event.target.value)
        }}
        value={description}
      />
      <div className="buttons__container">
        <Button variant="contained" type="onSumit">Guardar</Button>
        <Button variant="outlined" onClick={clearInputs}>Limpiar</Button>
        {loading ? <LoaderForm /> : <></>}
        {confirmation ? <Confirmation /> : <></>}
        <Button variant="contained">Nueva categoria</Button>
      </div>
    </form>
  </section>
}

export default AddVideo;
