export default function Services() {
  return (
    <main style={page}>

      {/* HEADER */}
      <section style={header}>
        <h1 style={h1}>Servicios de redes sociales</h1>
        <p style={headerText}>
          Elige el servicio que necesitas y empieza a crecer hoy mismo.
        </p>
      </section>

      <ServiceBlock
        title="Instagram"
        color="#e1306c"
        bg="#fff1f6"
        services={[
          "Seguidores Instagram",
          "Likes Instagram",
          "Visualizaciones Instagram",
          "Comentarios Instagram"
        ]}
      />

      <ServiceBlock
        title="TikTok"
        color="#000000"
        bg="#f1f5f9"
        services={[
          "Seguidores TikTok",
          "Likes TikTok",
          "Visualizaciones TikTok",
          "Compartidos TikTok"
        ]}
      />

      <ServiceBlock
        title="YouTube"
        color="#ff0000"
        bg="#fff5f5"
        services={[
          "Visualizaciones YouTube",
          "Likes YouTube",
          "Suscriptores YouTube",
          "Horas de visualización"
        ]}
      />

      <ServiceBlock
        title="Facebook"
        color="#1877f2"
        bg="#eff6ff"
        services={[
          "Likes Facebook",
          "Seguidores Facebook",
          "Reacciones Facebook",
          "Compartidos Facebook"
        ]}
      />
<ServiceBlock
  title="Kick & Twitch"
  color="#9146ff"
  bg="#f5f3ff"
  services={[
    "Seguidores Twitch",
    "Visualizaciones Twitch",
    "Seguidores Kick",
    "Visualizaciones Kick"
  ]}
/>

    </main>
  );
}

/* COMPONENTES */

function ServiceBlock({ title, services, color, bg }) {
  return (
    <section style={{ ...section, background: bg }}>
      <h2 style={{ ...h2, color }}>{title}</h2>

      <div style={grid}>
        {services.map((s) => (
          <div key={s} style={{ ...card, borderColor: color }}>
            <div style={{ ...icon, background: color }}>
              {title.includes("Twitch") ? "T" : "K"}
            </div>
            <h3 style={cardTitle}>{s}</h3>
            <p style={cardText}>
              Servicio rápido y estable para mejorar tu presencia.
            </p>
            <p style={{ ...price, color }}>Desde 0,79€</p>
            <a href="/order" style={{ ...buy, background: color }}>
              Comprar
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ESTILOS */

const page = {
  fontFamily: "Arial",
  background: "#ffffff",
  color: "#1e293b"
};

const header = {
  background: "#0f172a",
  color: "#ffffff",
  padding: "90px 20px",
  textAlign: "center"
};

const h1 = {
  fontSize: "42px",
  marginBottom: "20px"
};

const headerText = {
  fontSize: "18px",
  opacity: 0.9
};

const section = {
  padding: "70px 20px"
};

const h2 = {
  fontSize: "34px",
  textAlign: "center",
  marginBottom: "40px"
};

const grid = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "30px"
};

const card = {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "16px",
  border: "2px solid",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
};

const icon = {
  width: "48px",
  height: "48px",
  borderRadius: "50%",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "18px",
  margin: "0 auto 15px"
};

const cardTitle = {
  fontSize: "18px",
  marginBottom: "10px"
};

const cardText = {
  color: "#475569",
  fontSize: "14px",
  marginBottom: "15px"
};

const price = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "15px"
};

const buy = {
  display: "inline-block",
  padding: "10px 24px",
  color: "#ffffff",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "bold"
};
