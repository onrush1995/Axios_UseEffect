import React from "react";
import { Link } from "react-router-dom";


const Card=({data})=>{
return(<>
    {data.map((item,index)=>(<div key={index} className="card">
      <h1>{item.name}</h1>
      <p>{item.username}</p>
      <Link to={`/cards/${item.name}`}>View more</Link>

    </div>))}
</>)
}

export default Card;