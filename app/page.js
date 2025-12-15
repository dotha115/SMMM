export default function Home() {
  return (
    <main style={page}>

      {/* HERO */}
      <section style={hero}>
        <h1 style={heroTitle}>
          Explota tu crecimiento en redes sociales
        </h1>
        <p style={heroText}>
          Seguidores premium, likes y vistas para Instagram, TikTok,
          YouTube y Twitch/Kick. Entrega instantánea, interacción real.
        </p>
        <a href="/services" style={heroBtn}>Empezar ahora</a>
      </section>

      {/* HOW IT WORKS */}
      <section style={section}>
        <h2 style={h2}>Cómo funciona</h2>

        <div style={grid}>
          <Step
            number="1"
            title="Elige paquete"
            text="Selecciona el servicio y la cantidad que necesitas."
          />
          <Step
            number="2"
            title="Introduce detalles"
            text="Proporciona tu usuario o enlace. Nunca pedimos contraseña."
          />
          <Step
            number="3"
            title="Mira creciendo"
            text="Relájate y observa cómo explota tu presencia en redes."
          />
        </div>
      </section>

      {/* WHY US */}
      <section style={darkSection}>
        <h2 style={{ ...h2, color: "#fff" }}>Por qué elegirnos</h2>

        <div style={grid}>
          <Feature
            title="100% Seguro"
            text="Nunca pedimos tu contraseña. Tu cuenta está protegida."
          />
          <Feature
            title="Entrega rápida"
            text="Los pedidos comienzan minutos tras la confirmación."
          />
          <Feature
            title="Alta calidad"
            text="Perfiles premium para un crecimiento auténtico."
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={cta}>
        <h2 style={ctaTitle}>Empieza hoy mismo</h2>
        <p style={ctaText}>
          Sin registro. Sin riesgos. Resultados visibles.
        </p>
        <a href="/services" style={ctaBtn}>Comprar seguidores</a>
      </section>

      {/* FOOTER */}
      <footer style={footer}>
        <p>© 2024 Social Boost Pro. Todos los derechos reservados.</p>
        <div style={footerLinks}>
          <a href="/terms">Términos de servicio</a>
          <a href="/privacy">Política de privacidad</a>
        </div>
      </footer>

    </main>
  );
}

/* COMPONENTES */

function Step({ number, title, text }) {
  return (
    <div style={card}>
      <div style={stepNum}>{number}</div>
      <h3 style={cardTitle}>{title}</h3>
      <p style={cardText}>{text}</p>
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div style={feature}>
      <h3 style={featureTitle}>{title}</h3>
      <p style={featureText}>{text}</p>
    </div>
  );
}

/* ESTILOS */

const page = {
  fontFamily: "Arial",
  color: "#1e293b",
  background: "#ffffff"
};

const hero = {
  background: "linear-gradient(135deg,#0f172a,#020617)",
  color: "#ffffff",
  padding: "120px 20px",
  textAlign: "center"
};

const heroTitle = {
  fontSize: "48px",
  maxWidth: "900px",
  margin: "0 auto 20px"
};

const heroText = {
  fontSize: "18px",
  maxWidth: "750px",
  margin: "0 auto 35px",
  opacity: 0.9
};

const heroBtn = {
  background: "#22c55e",
  padding: "16px 40px",
  borderRadius: "10px",
  color: "#ffffff",
  fontWeight: "bold",
  textDecoration: "none"
};

const section = {
  padding: "90px 20px",
  textAlign: "center"
};

const darkSection = {
  padding: "90px 20px",
  background: "#020617",
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
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "30px"
};

const card = {
  background: "#ffffff",
  padding: "35px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
};

const stepNum = {
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  background: "#22c55e",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 15px",
  fontWeight: "bold"
};

const cardTitle = {
  fontSize: "18px",
  marginBottom: "10px"
};

const cardText = {
  fontSize: "14px",
  color: "#475569"
};

const feature = {
  background: "#020617",
  border: "1px solid #1e293b",
  borderRadius: "16px",
  padding: "35px"
};

const featureTitle = {
  color: "#22c55e",
  fontSize: "20px",
  marginBottom: "10px"
};

const featureText = {
  color: "#cbd5f5",
  fontSize: "14px"
};

const cta = {
  padding: "100px 20px",
  textAlign: "center"
};

const ctaTitle = {
  fontSize: "36px",
  marginBottom: "15px"
};

const ctaText = {
  marginBottom: "30px",
  color: "#475569"
};

const ctaBtn = {
  background: "#22c55e",
  padding: "16px 40px",
  borderRadius: "10px",
  color: "#ffffff",
  fontWeight: "bold",
  textDecoration: "none"
};

const footer = {
  background: "#020617",
  color: "#94a3b8",
  padding: "40px 20px",
  textAlign: "center"
};

const footerLinks = {
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
  gap: "20px"
};
