import React, { useState , useEffect} from 'react';
import io from 'socket.io-client';

import api from '../../service/api';

import { Container, Stories, FeedList } from './styles';

import more from '../../assets/more.svg'
import like from '../../assets/like.svg'
import comment from '../../assets/comment.svg'
import send from '../../assets/direct.svg'
import save from '../../assets/save.svg'

function Feed() {

  const [ posts, setPosts ] = useState([]);
  const [ likes, setLikes] =  useState('');

  function registerSocket(){
    const socket = io('http://localhost:3333');

    socket.on('post', newPost => {
      setPosts([newPost, ...posts]);
    })

    socket.on('like', likedPost => {
      setLikes([likedPost,...likes])
    });
  }

  async function handleClickLike(id){
    await api.post(`/posts/${id}/like`);
  }

  useEffect(() => {
    registerSocket()
    api.get('posts').then(response => {
      setPosts(response.data);
    })
  }, [registerSocket])



  return (
    <Container>
      
      <Stories>
      {posts.map(post => (
        <div key={post._id} className="profiles">
          <img src={`http://localhost:3333/files/${post.image}`} alt="profile"/>
          <p>{post.author}</p>
        </div>
      ))}
      </Stories>


      {posts.map(post => (
        <FeedList>
        <header key={post._id}>
            <div className="user-info">
              <span>{post.author}</span>
              <span className="place">{post.place}</span>
            </div>
  
            <img src={more} alt="More"/>
          </header>
  
          <img src={`http://localhost:3333/files/${post.image}`} alt="img" />
  
          <footer>
            <div className="actions">
              <div className="right">
                <img  onClick={() => handleClickLike(post._id)} src={like} alt="Like"/>
                <img src={comment} alt="Comment"/>
                <img src={send} alt="Send"/>
              </div>
              <div className="left">
              <img src={save} alt="Send"/>
              </div>
            </div>
  
            <strong>{post.likes} curtidas</strong>
            <p>{post.description}
              <span>{post.hashtags}</span>
            </p>
          </footer>
        </FeedList>   
      ))}
      
    </Container>
  )
}

export default Feed;