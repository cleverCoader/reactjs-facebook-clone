import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import RightSideBar from './RightSideBar';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app_body">
        <Sidebar />  
        <Feed />
        <RightSideBar />
      </div>

    </div>
  );
}

export default App;
