import React from 'react';
import MainContent from './MainContent';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to my App👋</h1>
      <MainContent //using components and passing props
        title="Introduction" 
        content="This is a simple Next.js app demonstrating multiple React concepts." 
      />
    </div>
  );
}

export default Home;