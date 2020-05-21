import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../service/api';

import { Container } from './styles';


function New() {
  const history = useHistory();

  const [ author, setAuthor ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ place, setPlace ] = useState('');
  const [ hashtags, setHashtags ] = useState('');
  const [ image, setImage ] = useState([]);

  async function handleSubmit(e){
    e.preventDefault();

    const data = new FormData();

    data.append('author', author);
    data.append('place', place);
    data.append('description', description);
    data.append('hashtags', hashtags);
    data.append('image', image);

    try{
      await api.post('posts', data)
      history.push('/');
    }catch(err){
      alert('Algo de errado não deu certo')
    }

  } 
  
  return (
    <Container>
      <form onSubmit={handleSubmit} id="new-post">
        <input type="file"
        onChange={e => setImage(e.target.files[0])}
        />

        <input type="text"
        name="author"
        placeholder="Autor do post"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        />

        <input type="text"
        name="place"
        placeholder="Local do post"
        value={place}
        onChange={e => setPlace(e.target.value)}
        />  

        <input type="text"
        name="description"
        placeholder="Descrição do post do post"
        value={description}
        onChange={e => setDescription(e.target.value)}
        />

        <input type="text"
        name="hashtags"
        placeholder="Hashtags do post do post"
        value={hashtags}
        onChange={e => setHashtags(e.target.value)}
        />

        <button type="submit">
          Enviar
        </button>
      </form>
    </Container>
  );
}

export default New;