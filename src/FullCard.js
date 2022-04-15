import React from "react"
import { Link, useParams,useNavigate } from "react-router-dom";




const FullCard=({data})=>{
    const {title}=useParams();
    const navigate = useNavigate();
    navigate('/');
return(
    <section className="full">
    <div className="container">
    {data.filter((card) => card.name === title).map((card,index)=>(
        <div key={index} className="fullCard">
            <h3>Name: {card.name}</h3>
            <p>Username: {card.username}</p>
            <p>Email: {card.email}</p>
            <p>Phone: {card.phone}</p>
            <p>Company: {card.company.name}</p>
            <p>Address: <>
                <li>street: {card.address.street}</li> <li>city: {card.address.city}</li><li>suite: {card.address.suite}</li><li>zipcode: {card.address.zipcode}</li></></p>
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