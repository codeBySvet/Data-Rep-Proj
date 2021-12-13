import React from 'react';
import { Link } from 'react-router-dom';

//Render any time the URL path cannot be located
const operationError = () => (
  <div>
    <h1>Could not complete the request.</h1>
    <img src='opError.png'></img>
    <br></br>
    <Link to="/">Go Home</Link>
  </div>
);

export default operationError;