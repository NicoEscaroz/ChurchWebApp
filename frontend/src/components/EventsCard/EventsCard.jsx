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
          <h2>Evento1</h2>
          <MdArrowForwardIos />
        </div>
        <div className="event-item">
          <h2>Evento2</h2>
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
