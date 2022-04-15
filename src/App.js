import React, { useState ,useEffect} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display from './Display';
import FullCard from './FullCard';
import axios from 'axios';



const App =()=> {

  const [data,setData] = useState([]);

  useEffect(()=> {
      axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
          setData(res.data);
          
      }).catch((err)=>{console.log(err)})
  },[]);

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
