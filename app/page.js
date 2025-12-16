"use client";
export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section style={hero}>
        <h1 style={heroTitle}>Explota tu Crecimiento en Redes Sociales</h1>
        <p style={heroText}>
          Seguidores, likes y visualizaciones premium para Instagram, TikTok,
          YouTube, Twitch y Kick. Entrega instantánea. Sin registro.
        </p>
        <a href="/services" style={heroBtn}>Empezar ahora</a>
      </section>

      {/* SERVICES */}
      <section style={section}>
        <h2 style={sectionTitle}>Nuestros Servicios</h2>

        <div style={grid}>
          <ServiceCard
            title="Instagram"
            desc="Seguidores y likes reales"
            color="#E1306C"
            bg="#fde4ef"
          />
          <ServiceCard
            title="TikTok"
            desc="Likes, seguidores y vistas"
            color="#000000"
            bg="#eeeeee"
          />
          <ServiceCard
            title="YouTube"
            desc="Visualizaciones y suscriptores"
            color="#FF0000"
            bg="#ffe5e5"
          />
          <ServiceCard
            title="Twitch / Kick"
            desc="Seguidores en directo"
            color="#00C853"
            bg="#e6f7ee"
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={sectionAlt}>
        <h2 style={sectionTitle}>Cómo Funciona</h2>

        <div style={grid}>
          <Step
            number="1"
            title="Elige Paquete"
            text="Selecciona el servicio y cantidad que necesitas."
          />
          <Step
            number="2"
            title="Introduce Detalles"
            text="Solo tu usuario o enlace. Nunca pedimos contraseña."
          />
          <Step
            number="3"
            title="Mira Creciendo"
            text="Tu pedido empieza en minutos."
          />
        </div>
      </section>
    </div>
  );
}

/* COMPONENTS */

function ServiceCard({ title, desc, color, bg }) {
  return (
    <div
      style={{
        ...serviceCard,
        background: bg,
        borderColor: color
      }}
      onMouseEnter={(e) =>
        Object.assign(e.currentTarget.style, {
          transform: "translateY(-10px)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.18)"
        })
      }
      onMouseLeave={(e) =>
        Object.assign(e.currentTarget.style, {
          transform: "none",
          boxShadow: serviceCard.boxShadow
        })
      }
    >
      <div style={{ ...icon, background: color }}>{title[0]}</div>
      <h3 style={{ ...cardTitle, color }}>{title}</h3>
      <p style={cardText}>{desc}</p>
      <a href="/services" style={{ ...cardBtn, background: color }}>
        Ver servicios
      </a>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div
      style={stepCard}
      onMouseEnter={(e) =>
        Object.assign(e.currentTarget.style, {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
        })
      }
      onMouseLeave={(e) =>
        Object.assign(e.currentTarget.style, {
          transform: "none",
          boxShadow: stepCard.boxShadow
        })
      }
    >
      <div style={stepNum}>{number}</div>
      <h3 style={cardTitle}>{title}</h3>
      <p style={cardText}>{text}</p>
    </div>
  );
}

/* STYLES */

const hero = {
  padding: "120px 20px",
  background: "linear-gradient(135deg, #111, #333)",
  color: "#fff",
  textAlign: "center"
};

const heroTitle = {
  fontSize: "46px",
  fontWeight: "800",
  maxWidth: "800px",
  margin: "0 auto 20px"
};

const heroText = {
  fontSize: "18px",
  maxWidth: "650px",
  margin: "0 auto 40px",
  opacity: 0.9
};

const heroBtn = {
  background: "#00C853",
  color: "#fff",
  padding: "16px 30px",
  borderRadius: "12px",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none"
};

const section = {
  padding: "90px 20px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const sectionAlt = {
  ...section,
  background: "#f9f9f9"
};

const sectionTitle = {
  fontSize: "36px",
  fontWeight: "800",
  textAlign: "center",
  marginBottom: "60px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "30px"
};

const serviceCard = {
  padding: "35px 25px",
  borderRadius: "18px",
  border: "2px solid",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  transition: "all 0.35s ease",
  cursor: "pointer"
};

const icon = {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  color: "#fff",
  fontSize: "26px",
  fontWeight: "700",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 20px"
};

const cardTitle = {
  fontSize: "20px",
  fontWeight: "700",
  marginBottom: "10px"
};

const cardText = {
  fontSize: "15px",
  color: "#555",
  marginBottom: "25px"
};

const cardBtn = {
  padding: "12px 22px",
  borderRadius: "10px",
  color: "#fff",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "600"
};

const stepCard = {
  background: "#fff",
  padding: "35px 25px",
  borderRadius: "18px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  transition: "all 0.35s ease",
  textAlign: "center"
};

const stepNum = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  background: "#00C853",
  color: "#fff",
  fontSize: "22px",
  fontWeight: "700",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 20px"
};
