import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import DataFetch from "./DataFetch";
import axios from "axios";
import Display from "./Display";
const Card=()=>{

const [post,setPost]= useState([]);
const [id,setId]= useState("");


useEffect(()=>{
  axios.get("https://api.openbrewerydb.org/breweries").then((res)=>{
    setPost(res.data);
  }).catch((err)=>{console.log(err)})
},[id]);

return(<>
    {post.map((item,index)=>(<div key={index} className="card">
      <h1>{item.name}</h1>
      <p>{item.brewery_type}</p>
      <Link to={"./"}>View more</Link>

    </div>))}
</>)
}

export default Card;