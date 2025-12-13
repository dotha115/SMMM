export default function Home() {
  return (
    <main style={{ background: "#0b0f1a", color: "#fff", fontFamily: "Arial" }}>

      {/* HERO */}
      <section style={hero}>
        <h1 style={{ fontSize: "48px", maxWidth: "800px" }}>
          Panel SMM automático para crecer en redes sociales
        </h1>
        <p style={heroText}>
          Compra seguidores, likes y visualizaciones sin registro.
          Entrega inmediata. Plataforma activa 24/7.
        </p>
        <a href="/order" style={ctaPrimary}>Comprar ahora</a>
      </section>

      {/* SERVICES GRID */}
      <section style={section}>
        <h2 style={title}>Servicios más vendidos</h2>

        <div style={grid}>
          <ServiceCard
            platform="Instagram"
            price="Desde 1,99€"
            features={["Seguidores", "Likes", "Views"]}
          />
          <ServiceCard
            platform="TikTok"
            price="Desde 0,99€"
            features={["Views", "Likes", "Followers"]}
          />
          <ServiceCard
            platform="YouTube"
            price="Desde 1,49€"
            features={["Views", "Likes", "Subs"]}
          />
        </div>
      </section>

      {/* PRICING */}
      <section style={sectionAlt}>
        <h2 style={title}>Precios claros y sin sorpresas</h2>

        <div style={grid}>
          <PriceBox
            name="Starter"
            price="0,79€"
            text="Ideal para probar el servicio"
          />
          <PriceBox
            name="Popular"
            price="1,49€"
            text="El más elegido por creadores"
            highlight
          />
          <PriceBox
            name="Reseller"
            price="Panel price"
            text="Para agencias y revendedores"
          />
        </div>
      </section>

      {/* BENEFITS */}
      <section style={section}>
        <h2 style={title}>Por qué elegir SMM Express</h2>

        <div style={grid}>
          <Benefit text="Entrega automática en minutos" />
          <Benefit text="Sin contraseña ni registro" />
          <Benefit text="Pagos 100% seguros" />
          <Benefit text="Servicios testeados y estables" />
          <Benefit text="Soporte activo 24/7" />
          <Benefit text="Precios de panel profesional" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={finalCta}>
        <h2 style={{ fontSize: "36px" }}>
          Empieza ahora. Resultados en minutos.
        </h2>
        <a href="/order" style={ctaPrimary}>Comprar sin registro</a>
      </section>

    </main>
  );
}

/* COMPONENTES VISUALES */

function ServiceCard({ platform, price, features }) {
  return (
    <div style={card}>
      <h3>{platform}</h3>
      <p style={{ color: "#22c55e" }}>{price}</p>
      <ul>
        {features.map(f => <li key={f}>{f}</li>)}
      </ul>
      <a href="/order" style={link}>Comprar →</a>
    </div>
  );
}

function PriceBox({ name, price, text, highlight }) {
  return (
    <div style={{
      ...card,
      border: highlight ? "2px solid #22c55e" : "1px solid #020617"
    }}>
      <h3>{name}</h3>
      <h2 style={{ color: "#22c55e" }}>{price}</h2>
      <p>{text}</p>
      <a href="/order" style={ctaSmall}>Elegir</a>
    </div>
  );
}

function Benefit({ text }) {
  return (
    <div style={benefit}>
      ✔ {text}
    </div>
  );
}

/* STYLES */

const hero = {
  padding: "100px 20px",
  textAlign: "center",
  background: "linear-gradient(180deg,#020617,#0b0f1a)"
};

const heroText = {
  color: "#cbd5e1",
  maxWidth: "700px",
  margin: "20px auto 40px"
};

const section = {
  padding: "80px 20px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const sectionAlt = {
  padding: "80px 20px",
  background: "#020617"
};

const title = {
  fontSize: "32px",
  textAlign: "center",
  marginBottom: "40px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
  gap: "25px"
};

const card = {
  background: "#020617",
  padding: "30px",
  borderRadius: "12px"
};

const benefit = {
  background: "#020617",
  padding: "20px",
  borderRadius: "10px"
};

const finalCta = {
  padding: "100px 20px",
  textAlign: "center",
  background: "#020617"
};

const ctaPrimary = {
  background: "#22c55e",
  color: "#000",
  padding: "14px 30px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold"
};

const ctaSmall = {
  display: "inline-block",
  marginTop: "15px",
  background: "#22c55e",
  color: "#000",
  padding: "10px 20px",
  borderRadius: "6px",
  textDecoration: "none"
};

const link = {
  color: "#22c55e",
  marginTop: "10px",
  display: "inline-block"
};
