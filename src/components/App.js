import React, {useEffect, useState} from 'react'
import '../styles/App.css';
const App = () => {
let [css, setCss]=useState(true)
function change(){
  if(css===true){
  setCss(false)
  }else{
    setCss(true)
  }
}

//code here 
  return (
    <div id="main">
      <p className={css?"redColor":"blueColor"} >Newton School</p>
      <button id='button' onClick={change}>Change Style</button>
    </div>
  )
}


export default App;
