import React from 'react';
import { Link } from 'react-router-dom';

//Render any time the URL path cannot be located
const NotFound = () => (
  <div>
    <h1>Error, you seem lost</h1>
    <img src='404.jpeg'></img>
    <br></br>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;