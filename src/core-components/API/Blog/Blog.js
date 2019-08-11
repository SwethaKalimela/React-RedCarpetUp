import React from 'react';
import './Blog.css';

const blog = (props) => {
    return(
        <div className="Blog">
        <div style={{
            backgroundColor: "#00bfff",
            color: "white",
            textAlign: "left",
            marginTop: "4px",
            paddingLeft: "30px",
            paddingBottom: "5px",
            paddingTop: "5px",
            fontStyle: "oblique"
        }}>{props.field}</div>
        <h1>{props.title}</h1>
        <img src={`https://media.graphcms.com/resize=w:506,h:150,fit:crop/${props.imgPath}`} alt={props.title} />
        <p>{props.content}</p>
        </div>
    );
}
export default blog;