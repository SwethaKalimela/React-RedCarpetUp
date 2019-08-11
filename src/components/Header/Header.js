import React from 'react';
import './Header.css';

const header = () => {
  return (
    <div className="headerStyle">
    <header>
        <div style={{
            fontSize: "28px", 
            display:"inline-block",
            color: "white",
            cursor: "pointer"}}>Your Blogs</div>
        <ul>
            <li>Tech</li>
            <li>Science</li>
            <li>Culture</li>
            <li><button style={{
                backgroundColor: "blue",
                borderRadius: "15px",
                color: "white",
                cursor: "pointer",
                border: "none",
                height: "30px",
                fontSize: "16px",
            }}>Create New Blog</button></li>
            <li>Find your blogs</li>
        </ul>
    </header>
    </div>
  );
}

export default header;