import React, { useState } from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';
import './PrayersCard.css';

const PrayersCard = () => {
  const [currentPrayer, setCurrentPrayer] = useState(0);

  const prayers = [
    {
      title: 'Padre Nuestro',
      text: 'Padre nuestro que estás en los cielos...',
      type: 'Oración Principal',
    },
    {
      title: 'Ave María',
      text: 'Dios te salve María...',
      type: 'Oración Mariana',
    },
    { title: 'Gloria', text: 'Gloria al Padre...', type: 'Alabanza' },
  ];

  const nextPrayer = () =>
    setCurrentPrayer((prev) => (prev + 1) % prayers.length);

  const currentPrayerData = prayers[currentPrayer];

  return (
    <div className="card">
      <div className="cardInfo">
        <div className="icon-box-prayers">
          <BookOpen size={24} />
        </div>
        <h2>Oraciones</h2>
        <div className="cardMoreInfo">
          <h2>Oración del día</h2>
        </div>
      </div>
      <div style={{ padding: '20px', marginTop: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h3>{currentPrayerData.title}</h3>
            <span>{currentPrayerData.type}</span>
          </div>
          <p>{currentPrayerData.text}</p>
          <button onClick={nextPrayer}>
            Siguiente oración <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrayersCard;
