import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" 



function Calendar() {
  const handleDateClick = (arg) => {
    alert(arg.dateStr)
  }
    return (
      <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
      />
    )
  }
  
  
export default Calendar