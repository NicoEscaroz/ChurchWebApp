import { BookOpen, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const PrayersCard = () => {
  const [currentPrayer, setCurrentPrayer] = useState(0);

  const prayers = [
    {
      title: "Juan 3:16",
      text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree no se pierda, mas tenga vida eterna.",
      type: "Salvación",
    },
    {
      title: "Salmos 23:1-3",
      text: "El Señor es mi pastor, nada me faltará. En lugares de delicados pastos me hará descansar; junto a aguas de reposo me pastoreará. Confortará mi alma.",
      type: "Confianza",
    },
    {
      title: "Filipenses 4:13",
      text: "Todo lo puedo en Cristo que me fortalece.",
      type: "Fortaleza",
    },
    {
      title: "Jeremías 29:11",
      text: "Porque yo sé los pensamientos que tengo acerca de vosotros, dice el Señor, pensamientos de paz, y no de mal, para daros el fin que esperáis.",
      type: "Esperanza",
    },
    {
      title: "Proverbios 3:5-6",
      text: "Confía en el Señor con todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas.",
      type: "Sabiduría",
    },
    {
      title: "Mateo 11:28",
      text: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
      type: "Consuelo",
    },
    {
      title: "Isaías 41:10",
      text: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi justicia.",
      type: "Protección",
    },
    {
      title: "Romanos 8:28",
      text: "Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.",
      type: "Fe",
    },
  ];

  const nextPrayer = () => {
    setCurrentPrayer((prev) => (prev + 1) % prayers.length);
  };

  const currentPrayerData = prayers[currentPrayer];

  return (
    <div className="card">
      <div className="cardInfo">
        <div className="icon-box-prayers">
          <BookOpen size={24} />
        </div>
        <h2>Versículos</h2>
        <div className="cardMoreInfo">
          <h2>Versículo del día</h2>
        </div>
      </div>
      <div style={{ padding: "20px", marginTop: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
              }}
            >
              {currentPrayerData.title}
            </h3>
            <span
              style={{
                fontSize: "0.875rem",
                padding: "4px 8px",
                backgroundColor: "#fff3e0",
                borderRadius: "9999px",
              }}
            >
              {currentPrayerData.type}
            </span>
          </div>
          <p
            style={{
              color: "#4b5563",
              fontSize: "0.875rem",
              lineHeight: "1.5",
            }}
          >
            {currentPrayerData.text}
          </p>
          <button
            onClick={nextPrayer}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#2563eb",
              cursor: "pointer",
              marginTop: "16px",
              border: "none",
              background: "none",
              padding: "0",
            }}
            onMouseOver={(e) => (e.target.style.color = "#1d4ed8")}
            onMouseOut={(e) => (e.target.style.color = "#2563eb")}
          >
            Siguiente versículo
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrayersCard;
