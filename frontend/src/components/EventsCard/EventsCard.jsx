// EventsCard.jsx
import axios from "axios";
import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { MdArrowForwardIos, MdEventNote } from "react-icons/md";
import "./EventsCard.css";

const EventsCard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const auth = getAuth();
  const userID = auth.currentUser ? auth.currentUser.uid : null;

  useEffect(() => {
    const fetchEvents = async () => {
      if (!userID) return;
      try {
        const idToken = await auth.currentUser.getIdToken(true);
        const response = await axios.get("/api/events", {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });
        const eventsArray = Array.isArray(response.data)
          ? response.data
          : Object.values(response.data);
        console.log("API Response:", response.data);
        setEvents(eventsArray);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch events");
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };
    fetchEvents();
  }, [userID]);

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="card">
      <div className="cardInfo">
        <div className="icon-box-event">
          <MdEventNote />
        </div>
        <h2 className="card-title">Eventos</h2>
        <div className="cardMoreInfo">Ver todos</div>
      </div>
      <div className="events">
        <div className="event-item">
          <div className="eventInfo">
            <h1>Concierto de Música Cristiana</h1>
            <h2>Participantes</h2>
          </div>
          <div className="arrow">
            <MdArrowForwardIos />
          </div>
        </div>
        <div className="event-item">
          <div className="eventInfo">
            <h1>Retiro Espiritual</h1>
            <h2>Participantes</h2>
          </div>
          <div className="arrow">
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
