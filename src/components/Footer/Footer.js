import React from 'react';
import './Footer.css';

const footer = () => {
  return (
    <div className="footerStyles">
    <div className="title">Your Blogs</div>
    <div>One Place to find and publish different blogs</div>
    <div>For any queries write to us @<span>yourblogs@gmail.com</span></div>
    <div>To Publish a new blog, please submit @<span>submitblogs@yourblogs.com</span></div>  
    </div>
  );
}

export default footer;