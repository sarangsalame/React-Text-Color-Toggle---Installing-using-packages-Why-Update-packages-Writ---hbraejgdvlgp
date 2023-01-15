import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
  let [css, setCss]=useState(true)
  let [classs, setClasss]=useState("redColor")
  useEffect(() => {
    if(css){
      setClasss("redColor")
    }else{
      setClasss("blueColor")
    }    
  }, [css])
  

  function change(){
    setCss(!css)
  }
//code here 

  return (
    <div id="main">
      <p className={classs} >Newton School</p>
      <button id='button' onKeyPress={change}>Change Style</button>
    </div>
  )
}


export default App;
