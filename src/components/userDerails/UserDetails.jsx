import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const goBack =()=>{
        navigate (-1);
    }
    const {name, email, username} = user;
    return (
        <div >
            <h2>Details about user:{name}</h2>
            <p>Email :{email}</p>
            <p>Username :{username}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;