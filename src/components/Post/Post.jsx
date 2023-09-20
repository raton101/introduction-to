/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";



const Post = ({post}) => {
    
    const {id,title, body} =post;
    return (
        <div className="cart">
            <h3>Post of Id: {id}</h3>
            <p>title: {title}</p>
            <p><small>body:{body}</small></p>
            <Link to ={`/post/${id}`}>Details More </Link>
        </div>
    );
};

export default Post;