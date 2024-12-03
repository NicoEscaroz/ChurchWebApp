import React, { useState } from 'react';
import { Heart, CreditCard, QrCode } from 'lucide-react';
import './DonationsCard.css';

const DonationsCard = () => {
  const donationPurposes = ['Mantenimiento del templo', 'Ayuda comunitaria'];

  return (
    <div className="card">
      <div className="cardInfo">
        <div className="icon-box-money">
          <Heart size={24} />
        </div>
        <h2>Donaciones</h2>
        <div className="cardMoreInfo">
          <h2>Apoya nuestra misión</h2>
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <select
          style={{
            width: '100%',
            padding: '8px',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            marginBottom: '15px',
          }}
        >
          {donationPurposes.map((purpose) => (
            <option key={purpose} value={purpose}>
              {purpose}
            </option>
          ))}
        </select>
        <button
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginBottom: '10px',
          }}
        >
          <CreditCard size={20} />
          Donar con tarjeta
        </button>
        <button
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#059669',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          <QrCode size={20} />
          Donar con QR
        </button>
      </div>
    </div>
  );
};

export default DonationsCard;
