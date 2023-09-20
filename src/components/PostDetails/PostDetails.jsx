import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title} = post;

    const navigate = useNavigate();
    const goBack = () =>{
        navigate (-1);
    }
    return (
        <div>
            <h3>Post of Id: {id}</h3>
            <p>title: {title}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;