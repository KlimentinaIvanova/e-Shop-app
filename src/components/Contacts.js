import React from "react"
import './css/Contacts.css'
import { Link } from "react-router-dom"
const Contacts = () => {
    return (
        
        <div className="cont_call">
        <div className="nav_contacts"><Link className="nav-link" to="/">Home</Link></div>
        <h1 className="multi">We are here for you! </h1>
        <h1>Contact Us:</h1>
        <h2>Phone: </h2>
        <p> (+1) 12345667890</p>
        <h2>Or send us email:</h2>
        <p>eshop@gmail.com</p>
      </div>
      
    )
}
export default Contacts