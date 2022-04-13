import React, { useState ,useEffect} from "react";
import axios from "axios";
import Display from "./Display";
import Card from "./Card";
import { Link, Router } from "react-router-dom";

const DataFetch=()=>{
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
          <Link to={``}>View more</Link>
        </div>))}
    </>)
};

export default DataFetch;