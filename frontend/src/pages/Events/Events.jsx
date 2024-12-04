import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Events/Events.css";
import AddEvent from "./AddEvent";

function Events() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
        setEvents([]);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  // Fetch events from the backend
  useEffect(() => {
    const fetchEvents = async () => {
      if (!userId) return;

      setIsLoading(true);
      setError(null);

      try {
        const idToken = await auth.currentUser.getIdToken(true);
        const response = await axios.get(`http://localhost:5000/api/events`, {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });

        // Ensure response.data is an array
        const fetchedEvents = Array.isArray(response.data) ? response.data : [];

        console.log("Fetched events:", fetchedEvents);
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
        setError(error.response?.data?.message || "Failed to fetch events");
        setEvents([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [userId, auth]);

  const handleAddEventClick = () => {
    setShowAddEventModal(true);
  };

  const handleCloseModal = () => {
    setShowAddEventModal(false);
  };

  const handleEventAdded = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    handleCloseModal();
  };

  return (
    <div className="main-card">
      <div className="title">
        <h1>Calendario Iglesia</h1>
      </div>

      {isLoading && <div className="loading">Loading events...</div>}

      {error && <div className="error-message">{error}</div>}

      <div className="calendar-container">
        <div className="calendar">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
          />
          <button
            className="calendar-button"
            onClick={handleAddEventClick}
            disabled={!userId || isLoading}
          >
            Add Event
          </button>
        </div>

        <div className="events-list">
          {events.length > 0 ? (
            events.map((event) => (
              <div key={event._id || event.id} className="event">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p>{new Date(event.date).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>{isLoading ? "Loading events..." : "No events created"}</p>
          )}
        </div>
      </div>

      {showAddEventModal && (
        <AddEvent onClose={handleCloseModal} onEventAdded={handleEventAdded} />
      )}
    </div>
  );
}

export default Events;
