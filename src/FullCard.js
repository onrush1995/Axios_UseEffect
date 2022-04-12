import React from "react"
import { Link, useParams,useNavigate } from "react-router-dom";




const FullCard=({data})=>{
    const {title}=useParams();
    const navigate = useNavigate();
    navigate('/');
return(
    <section className="full">
    <div className="container">
    {data.filter((card) => card.title===title).map((card,index)=>(
        <div key={index} className="fullCard">
            <h1>{card.title}</h1>
            <p>{card.description}</p>
            <div className="button">
            <Link to={navigate}>Home</Link>
            </div>
        </div>
    ))}
    </div>
    </section>
)
}

export default FullCard;