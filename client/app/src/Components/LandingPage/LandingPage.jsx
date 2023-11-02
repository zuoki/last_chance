import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <>
      <h1>LandingPage</h1>
      <p>Welcome to Poke Center</p>
      <Link to="/Home">Home</Link>
    </>
  );
}

