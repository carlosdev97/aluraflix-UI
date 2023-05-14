import "./AddVideo.css";
import { useState } from "react";
import TextField from "../../TextField/TextField";
import OptionsList from "../../OptionsList/OptionsList";
import Button from "../../Button/Button";
import { create } from "../../../api/api";
import { v4 as uuidv4 } from 'uuid';

function AddVideo({ categories }) {
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categorie, setCategorie] = useState("");
  const [description, setDescription] = useState("");

  return (
    <section className="addvideo">
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          const data = {
            id: uuidv4(),
            title, 
            videoUrl, 
            imageUrl, 
            categorie, 
            description};
            const response = create('/videos', data)
        }}
      >
        <h2 className="form__title">Nuevo video</h2>
        <TextField
          type="text"
          name="title"
          value={title}
          placeholder="Ingresa el titulo"
          valuesUpdate={setTitle}
        />
        <TextField
          type="text"
          name="videoUrl"
          value={videoUrl}
          placeholder="Ingresa el link del video"
          valuesUpdate={setVideoUrl}
        />
        <TextField
          type="text"
          name="imageUrl"
          value={imageUrl}
          placeholder="Ingresa el link de la imagen del video"
          valuesUpdate={setImageUrl}
        />
        <OptionsList
          categories={categories}
          value={categorie}
          updateCategorie={setCategorie}
        />
        <textarea
          className="input__form"
          name="description"
          value={description}
          rows="3"
          cols="50"
          placeholder="Ingrese la descripción"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        ></textarea>
        <div className="buttons__container">
          <Button
            type="submit"
            text="Guardar"
            bgColor="#2A7AE4"
            fontColor="#fff"
          />
          <Button text="Limpiar" bgColor="#9E9E9E" fontColor="#000" />
          <Button text="Nueva Categoria" bgColor="#2A7AE4" fontColor="#fff" />
        </div>
      </form>
    </section>
  );
}

export default AddVideo;
