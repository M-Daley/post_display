import { useState } from 'react';
import HeaderBar from './components/header';
import UserBar from './components/userBar';
import PostPreview from './components/postPreview';
import './App.css';

const App = () => {
  // Replace w/ React-Redux/Redux-Thunk Later
  const [currentUser, setCurrentUser] = useState(1);

  return (
    <div className="appWrapper">
      <HeaderBar />
      <UserBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <PostPreview currentUser={currentUser} />
    </div>
  );
};

export default App;
