import React, { useState } from 'react';
import './App.css';
import VoteForm from './components/VoteForm';
import VoteList from './components/VoteList';
import Result from './components/Result';
import LoginPage from './components/LoginPage';
import ThankYouPage from './components/ThankYouPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [voted, setVoted] = useState(false);

  const handleLogin = (username, password) => {
    // Perform authentication logic
    setIsLoggedIn(true);
  };

  const handleVote = () => {
    // Set voted state to true
    setVoted(true);
  };

  let content;

  if (!isLoggedIn) {
    // Render the login page if not logged in
    content = <LoginPage onLogin={handleLogin} />;
  } else if (!voted) {
    // Render the voting section if logged in and not voted yet
    content = (
      <div className="voting-section">
        <div className="vote-form">
          <h2>Vote Here</h2>
          <VoteForm onVote={handleVote} />
        </div>
        <div className="vote-list">
          <VoteList />
        </div>
        <div className="result">
          <Result />
        </div>
      </div>
    );
  } else {
    // Render the ThankYouPage if logged in and voted
    content = <ThankYouPage />;
  }

  return (
    <div className="App">
      <h1>Online Voting System</h1>
      {content}
    </div>
  );
}

export default App;
