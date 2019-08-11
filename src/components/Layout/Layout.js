import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Bloglist from '../../core-components/API/Bloglist';

const layout = () => {
  return (
    <div style={{backgroundColor: "#D3D3D3"}}>
    <div><Header/></div>
    <div><Bloglist/></div>
    <div><Footer/></div>
    </div>
  );
}

export default layout;