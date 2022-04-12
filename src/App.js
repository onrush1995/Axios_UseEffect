import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display from './Display';
import FullCard from './FullCard';


const App=()=>{
  const data = [
    {
      title: "Html",
      description : "This is Html"
    },
    {
      title: "Css",
      description : "This is css"
    },
    {
      title: "Js",
      description : "This is js"
    },
    {
      title: "React",
      description : "This is React"
    },
    {
      title: "Angular",
      description : "This is Angular"
    },
    {
      title: "Vue",
      description : "This is Vue"
    }
  ]
return(
  <BrowserRouter>
  <Routes>
    <Route  path='/' element={<Display data={data}/>}/>
    <Route  path='/cards/:title' element={<FullCard data={data}/>}/>
  </Routes>
  </BrowserRouter>
)
}

export default App;
