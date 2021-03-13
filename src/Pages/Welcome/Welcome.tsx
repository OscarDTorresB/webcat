import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="container shadow-md max-w-lg pt-4 flex flex-col items-center justify-center bg-white cursor-default">
        <span className="text-center text-lg sm:text-md text-blue-800 px-1 mb-4">Welcome to Bowling 2D!</span>
        <Link to="/home" className="text-white container text-center font-semibold py-4 bg-blue-700 hover:bg-blue-800 shadow">
          New game
        </Link>
      </div>
    </div>
  )
};

export default WelcomePage;
