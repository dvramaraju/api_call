import { useState, useEffect } from "react";
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="App">
      <h1 className="clearfix">Cool App</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <img
            src={post.url}
            className="img-fluid img-thumbnail rounded sticky-sm-top"
            alt=""
          />
        ))
      ) : (
        <div className="text-center text-success">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
