// EventsCard.jsx
import React from 'react';
import './EventsCard.css';
import { MdEventNote, MdArrowForwardIos } from 'react-icons/md';

const EventsCard = () => {
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
