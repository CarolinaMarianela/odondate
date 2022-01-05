import './App.css';
import React from 'react';
import CalendarContainer from './components/CalendarContainer';
import Sidebar from './components/sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <div className="sidebar">
       <Sidebar></Sidebar>
      </div>
      <div className="calendar">
      <CalendarContainer></CalendarContainer>
      </div>
     
    </div>
  );
}

export default App;
