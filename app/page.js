"use client";
export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section style={hero}>
        <span style={badge}>🚀 #1 Social Media Growth Service</span>

        <h1 style={heroTitle}>Explota tu Crecimiento en Redes</h1>

        <p style={heroText}>
          Seguidores premium, likes y vistas para Instagram, TikTok, YouTube y
          Twitch/Kick. Entrega instantánea, interacción real.
        </p>

        <a href="/services" style={heroBtn}>Empezar Ahora</a>

        <div style={stats}>
          <Stat value="50K+" label="Pedidos Completados" />
          <Stat value="4.9/5" label="Valoración Clientes" />
          <Stat value="24/7" label="Soporte Activo" />
        </div>
      </section>

      {/* SERVICES */}
      <section style={section}>
        <h2 style={sectionTitle}>Nuestros Servicios</h2>

        <div style={grid}>
          <ServiceCard title="Instagram" desc="Seguidores y likes reales" color="#E1306C" bg="#fde4ef" />
          <ServiceCard title="TikTok" desc="Likes, seguidores y vistas" color="#000" bg="#eee" />
          <ServiceCard title="YouTube" desc="Visualizaciones y suscriptores" color="#FF0000" bg="#ffe5e5" />
          <ServiceCard title="Twitch / Kick" desc="Seguidores en directo" color="#00C853" bg="#e6f7ee" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={sectionAlt}>
        <h2 style={sectionTitle}>Cómo Funciona</h2>

        <div style={grid}>
          <Step number="1" title="Elige Paquete" text="Selecciona el servicio y cantidad que necesitas." />
          <Step number="2" title="Introduce Detalles" text="Proporciona tu usuario o enlace. No se requiere contraseña." />
          <Step number="3" title="Mira Creciendo" text="Relájate y observa cómo explota tu presencia en redes." />
        </div>
      </section>

      {/* WHY US */}
      <section style={section}>
        <h2 style={sectionTitle}>Por Qué Elegirnos</h2>

        <div style={grid}>
          <Feature title="100% Seguro" text="Nunca pedimos tu contraseña. Tu cuenta está protegida." />
          <Feature title="Entrega Rápida" text="Los pedidos comienzan minutos tras la confirmación." />
          <Feature title="Alta Calidad" text="Perfiles premium para crecimiento auténtico." />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <div style={footerLogo}>S</div>
        <p>© 2024 Social Boost Pro. Todos los derechos reservados.</p>
        <div style={footerLinks}>
          <a href="#">Términos de Servicio</a>
          <a href="#">Política de Privacidad</a>
        </div>
      </footer>
    </div>
  );
}

/* COMPONENTS */

function Stat({ value, label }) {
  return (
    <div style={statCard}>
      <strong style={statValue}>{value}</strong>
      <span style={statLabel}>{label}</span>
    </div>
  );
}

function ServiceCard({ title, desc, color, bg }) {
  return (
    <div
      style={{ ...serviceCard, background: bg, borderColor: color }}
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

function Feature({ title, text }) {
  return (
    <div style={featureCard}>
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

const badge = {
  background: "#00C853",
  color: "#fff",
  padding: "8px 16px",
  borderRadius: "20px",
  fontSize: "13px",
  fontWeight: "600",
  display: "inline-block",
  marginBottom: "20px"
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

const stats = {
  display: "flex",
  gap: "30px",
  justifyContent: "center",
  marginTop: "50px",
  flexWrap: "wrap"
};

const statCard = {
  textAlign: "center"
};

const statValue = {
  fontSize: "32px",
  fontWeight: "800",
  display: "block"
};

const statLabel = {
  fontSize: "14px",
  opacity: 0.8
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

const featureCard = {
  background: "#fff",
  padding: "35px 25px",
  borderRadius: "18px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  textAlign: "center"
};

const footer = {
  padding: "60px 20px",
  background: "#111",
  color: "#fff",
  textAlign: "center"
};

const footerLogo = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  background: "#00C853",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "22px",
  fontWeight: "800",
  margin: "0 auto 15px"
};

const footerLinks = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "15px"
};
