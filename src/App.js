import './App.css';
import React, { Component, useState, useEffect } from "react";


function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://6239ddb128bcd99f02763cfe.mockapi.io/blogs?limit=5&page=1`);
      const json = await data.json();
      setBlogs(json);
      console.log(json)
    }
    fetchData()
      .catch(console.error);;
  }, [])




  return (
    <div className="App">
      <header className="App-header">
This is the new React App
      </header>
    </div>
  );
}

export default App;
