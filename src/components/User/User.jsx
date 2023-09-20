/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./User.css"

const User = ({user}) => {
    // eslint-disable-next-line no-unused-vars
    const {id, name, phone, email }= user;
    
    return(
        <div className="cart" >
            <h2>Name:{name}</h2>
            <p>Phone:{phone}</p>
            <p>Email:{email}</p>
            <Link to={`/user/${id}`}>
            show Details</Link>

            
        </div>
    );
};

export default User;