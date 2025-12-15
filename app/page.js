export default function Home() {
  return (
    <main style={page}>

      {/* HERO */}
      <section style={hero}>
        <h1 style={heroTitle}>Compra seguidores y crece en redes sociales</h1>
        <p style={heroText}>
          Servicios rápidos, seguros y sin registro. Empieza ahora.
        </p>
        <a href="/services" style={heroBtn}>Ver servicios</a>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={section}>
        <h2 style={h2}>Nuestros servicios más populares</h2>

        <div style={grid}>

          <ServiceCard
            title="Instagram"
            color="#e1306c"
            bg="#fff1f6"
            desc="Seguidores, likes, visualizaciones y comentarios."
          />

          <ServiceCard
            title="TikTok"
            color="#000000"
            bg="#f1f5f9"
            desc="Impulsa tus vídeos y gana visibilidad."
          />

          <ServiceCard
            title="YouTube"
            color="#ff0000"
            bg="#fff5f5"
            desc="Visualizaciones, likes y suscriptores reales."
          />

          <ServiceCard
            title="Facebook"
            color="#1877f2"
            bg="#eff6ff"
            desc="Likes, seguidores y reacciones."
          />

        </div>
      </section>

      {/* CTA */}
      <section style={cta}>
        <h2 style={ctaTitle}>Empieza a crecer hoy</h2>
        <p style={ctaText}>
          Compra en segundos sin crear cuenta.
        </p>
        <a href="/services" style={ctaBtn}>Comprar ahora</a>
      </section>

    </main>
  );
}

/* COMPONENTES */

function ServiceCard({ title, desc, color, bg }) {
  return (
    <div style={{ ...card, background: bg, borderColor: color }}>
      <div style={{ ...icon, background: color }}>{title[0]}</div>
      <h3 style={{ ...cardTitle, color }}>{title}</h3>
      <p style={cardText}>{desc}</p>
      <a href="/services" style={{ ...cardBtn, background: color }}>
        Ver servicios
      </a>
    </div>
  );
}

/* ESTILOS */

const page = {
  fontFamily: "Arial",
  background: "#ffffff",
  color: "#1e293b"
};

const hero = {
  background: "linear-gradient(135deg,#0f172a,#020617)",
  color: "#ffffff",
  padding: "110px 20px",
  textAlign: "center"
};

const heroTitle = {
  fontSize: "46px",
  marginBottom: "20px"
};

const heroText = {
  fontSize: "18px",
  opacity: 0.9,
  marginBottom: "30px"
};

const heroBtn = {
  background: "#22c55e",
  padding: "14px 36px",
  borderRadius: "8px",
  color: "#ffffff",
  fontWeight: "bold",
  textDecoration: "none"
};

const section = {
  padding: "90px 20px",
  textAlign: "center"
};

const h2 = {
  fontSize: "36px",
  marginBottom: "50px"
};

const grid = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: "30px"
};

const card = {
  padding: "35px",
  borderRadius: "18px",
  border: "2px solid",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
};

const icon = {
  width: "52px",
  height: "52px",
  borderRadius: "50%",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "20px",
  margin: "0 auto 18px"
};

const cardTitle = {
  fontSize: "20px",
  marginBottom: "10px"
};

const cardText = {
  color: "#475569",
  fontSize: "14px",
  marginBottom: "18px"
};

const cardBtn = {
  display: "inline-block",
  padding: "10px 26px",
  color: "#ffffff",
  borderRadius: "6px",
  fontWeight: "bold",
  textDecoration: "none"
};

const cta = {
  background: "#0f172a",
  color: "#ffffff",
  padding: "90px 20px",
  textAlign: "center"
};

const ctaTitle = {
  fontSize: "34px",
  marginBottom: "15px"
};

const ctaText = {
  opacity: 0.9,
  marginBottom: "25px"
};

const ctaBtn = {
  background: "#22c55e",
  padding: "14px 36px",
  borderRadius: "8px",
  color: "#ffffff",
  fontWeight: "bold",
  textDecoration: "none"
};
