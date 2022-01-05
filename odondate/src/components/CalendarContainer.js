import React from 'react'
import Calendar from './Calendar'
import './CalendarContainer.css'

function CalendarContainer() {  
    return (
      <div className="calendar-container">
        <Calendar className="calendar-style"></Calendar>
      </div>
    );
  }
  
  export default CalendarContainer;
  