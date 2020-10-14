import React from 'react';
import './App.css';
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Contact avatar={"https://randomuser.me/api/portraits/women/15.jpg"} 
      name={"Myrtle Burke"} 
      online={false}/>
      <Contact avatar={"https://randomuser.me/api/portraits/women/38.jpg"} 
      name={"Arlene Rivera"} 
      online={true}/>
      <Contact avatar={"https://randomuser.me/api/portraits/men/15.jpg"} 
      name={"Tommy Hanson"} 
      online={false}/>
      
    </div>
  );
}

export default App;
