import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    404 Sorry, we can't find that. - 
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;