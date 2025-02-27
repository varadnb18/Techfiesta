import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div 
          className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
          onClick={() => navigate('/chat')}
        >
          <img
            src="https://images.unsplash.com/photo-1599236449650-e512da4c3e97?q=80&w=400"
            alt="Poco the Penguin"
            className="rounded-full w-48 h-48 mx-auto mb-6 shadow-lg"
          />
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Meet Poco!</h2>
          <p className="text-blue-700">
            Click to chat with your virtual rehabilitation assistant
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;