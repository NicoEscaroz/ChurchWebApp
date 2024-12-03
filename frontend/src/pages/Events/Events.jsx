import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Events/Events.css';

function Events() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="main-card">
      <div className="title">
        <h1>Calendario Iglesia</h1>
      </div>
      <div className="calendar-container">
        <div className="calendar">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
          />
          {/* <button className="calendar-button">View Master Calendar</button> */}
        </div>
        <div className="events-list">
          <div className="event">Event 1</div>
          <div className="event">Event 2</div>
          <div className="event">Event 3</div>
        </div>
      </div>
    </div>
  );
}

export default Events;
