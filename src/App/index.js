import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Auth from './Auth';
import { isLoggedIn } from '../utils/AuthHelper';

function App() {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn());

  return loggedIn ? <Dashboard /> : <Auth onAuthUpdate={setLoggedIn} />
}

export default App;
