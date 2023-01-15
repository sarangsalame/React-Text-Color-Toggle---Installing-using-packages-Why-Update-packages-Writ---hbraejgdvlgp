import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {


  const [toggle,setToggle] = useState(true)
   function handleClick(){
     setToggle(false)
  }

  function released(){
    setToggle(true)
  }

  return (
    <div id="main">
      <p className={`redColor ${toggle ? "" : 'blueColor'}`} >Newton School</p>
      <button id='button' onMouseDown={handleClick} onMouseLeave={released}>Change Style</button>
    </div>
  )
}


export default App;
