import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react-v1';
import { EditProfile, NavBar } from './ui-components';

function App() {


  return (
    <div className="App">
      <div class="centre">
        <NavBar />
        <EditProfile />
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);