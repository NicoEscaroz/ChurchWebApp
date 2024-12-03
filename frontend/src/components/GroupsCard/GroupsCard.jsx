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
          <h2>Grupo1</h2>
          <MdArrowForwardIos />
        </div>
        <div className="groups-item">
          <h2>Grupo2</h2>
          <MdArrowForwardIos />
        </div>
        <div className="groups-item">
          <h2>Grupo3</h2>
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default GroupsCard;
