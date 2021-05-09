import React, { useState } from 'react';
// import './App.css';
import Home from './components/Home';
import { BsFillBrightnessHighFill ,BsMoon} from "react-icons/bs";


function App() {
  const [toggle,setToggle] = useState<boolean>(false)

 const handleChangeTheme = ()=>{
  setToggle(!toggle)
 }

  return (
    <div className={`${toggle ? 'App__toogle' : 'App'}`}>
      <div className="heading">
        <h1>Users List</h1>
        <div className="heading__icon" onClick={handleChangeTheme}>{toggle ? <BsFillBrightnessHighFill /> : < BsMoon /> }</div>
      </div>
      <div className="App__home">
           <Home toggle={toggle}/> 
         </div>
      <div className="footer">
        @copyright
      </div>
    </div>
  );
}

export default App; 
  