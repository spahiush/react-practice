import './App.css';
import About from './Pages/About'
import Contact from './Pages/Contact';
import axios from 'axios'
import React from 'react';

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);
//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }


const baseURL = "https://dog.ceo/api/breeds/image/random";
export default function App() {
  const [post, setPost] = React.useState(null);



  function changeImage() {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    })
  }

  React.useEffect(() => {
    changeImage()
  }, []);

  if (!post) return null;


  return (


    <div>
      <img width="400" src={post.message}></img>
      <button onClick={changeImage}>Next</button>
    </div>
  );
}
