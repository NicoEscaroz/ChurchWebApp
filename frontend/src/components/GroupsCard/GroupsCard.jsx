// GroupsCard.jsx
import React from 'react';
import './GroupsCard.css';
import { MdGroups, MdArrowForwardIos } from 'react-icons/md';

const GroupsCard = () => {
  return (
    <div className="card">
      <div className="cardInfo">
        <div className="icon-box-groups">
          <MdGroups />
        </div>
        <h2 className="card-title">Grupos</h2>
        <div className="cardMoreInfo">Ver todos</div>
      </div>
      <div className="groups">
        <div className="groups-item">
          <h1>Comunidad de fe</h1>
          <h2>Tomar asistencia</h2>
          <div className="arrow">
            <MdArrowForwardIos />
          </div>
        </div>
        <div className="groups-item">
          <h1>Conexión cristiana</h1>
          <h2>Tomar asistencia</h2>
          <div className="arrow">
            <MdArrowForwardIos />
          </div>
        </div>
        <div className="groups-item">
          <h1>Unidos en Oración</h1>
          <h2>Tomar asistencia</h2>
          <div className="arrow">
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupsCard;
