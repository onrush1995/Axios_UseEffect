import React from "react";
import "./App.css"
import { Link } from "react-router-dom";


const Card=({data})=>{
return(<>
    {data.map((item,index)=>(<div key={index} className="card">
      <h1 className="circle">{item.name.charAt(0)}</h1>
      <h3>{item.name}</h3>
      <p>@{item.username}</p>
      <a href={"http://{item.website"}>http://{item.website}</a>
      <div>
      <Link  style={{background:"#FA4616"}} to={`/cards/${item.name}`}>View more</Link>
      </div>
    </div>))}
</>)
}

export default Card;