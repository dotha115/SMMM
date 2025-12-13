export default function Home() {
  return (
    <main style={{ background: "#0b0f1a", color: "#ffffff", minHeight: "100vh", fontFamily: "Arial" }}>
      
      {/* HERO */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Servicios SMM automáticos en menos de 60 segundos
        </h1>
        <p style={{ fontSize: "18px", color: "#cbd5e1", maxWidth: "700px", margin: "0 auto 30px" }}>
          Seguidores, likes y visualizaciones para Instagram, TikTok y YouTube.
          Entrega instantánea. Sin contraseña. Plataforma 24/7.
        </p>
        <div>
          <a href="/dashboard" style={btnPrimary}>Ver servicios</a>
          <a href="/dashboard" style={btnSecondary}>Acceder al panel</a>
        </div>
      </section>

      {/* STATS */}
      <section style={statsSection}>
        <Stat number="+120.000" text="Pedidos entregados" />
        <Stat number="99.9%" text="Uptime del sistema" />
        <Stat number="24/7" text="Soporte activo" />
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={sectionTitle}>Servicios principales</h2>
        <div style={grid}>
          <Service title="Instagram" items={["Seguidores", "Likes", "Visualizaciones"]} />
          <Service title="TikTok" items={["Views", "Likes", "Followers"]} />
          <Service title="YouTube" items={["Views", "Likes", "Suscriptores"]} />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "60px 20px", background: "#0f172a" }}>
        <h2 style={sectionTitle}>Cómo funciona</h2>
        <div style={grid}>
          <Step number="1" text="Elige el servicio" />
          <Step number="2" text="Introduce el enlace" />
          <Step number="3" text="Recibe resultados al instante" />
        </div>
      </section>

      {/* ADVANTAGES */}
      <section style={{ padding: "60px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={sectionTitle}>Por qué elegirnos</h2>
        <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
          <li>✔ Entrega automática</li>
          <li>✔ Sin contraseña</li>
          <li>✔ Sin riesgo</li>
          <li>✔ Precios de panel SMM</li>
          <li>✔ API para revendedores</li>
          <li>✔ Pagos seguros</li>
        </ul>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 20px", textAlign: "center", background: "#020617" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          Empieza ahora. Resultados en minutos.
        </h2>
        <a href="/dashboard" style={btnPrimary}>Crear cuenta / Ver servicios</a>
      </section>

    </main>
  );
}

/* COMPONENTES */

const btnPrimary = {
  background: "#22c55e",
  color: "#000",
  padding: "14px 28px",
  borderRadius: "8px",
  marginRight: "10px",
  textDecoration: "none",
  fontWeight: "bold"
};

const btnSecondary = {
  border: "1px solid #22c55e",
  color: "#22c55e",
  padding: "14px 28px",
  borderRadius: "8px",
  textDecoration: "none"
};

const sectionTitle = {
  fontSize: "32px",
  textAlign: "center",
  marginBottom: "40px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px"
};

const statsSection = {
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  padding: "40px 20px",
  background: "#020617"
};

function Stat({ number, text }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ fontSize: "28px" }}>{number}</h3>
      <p style={{ color: "#94a3b8" }}>{text}</p>
    </div>
  );
}

function Service({ title, items }) {
  return (
    <div style={{ background: "#020617", padding: "30px", borderRadius: "12px" }}>
      <h3>{title}</h3>
      <ul>
        {items.map(i => <li key={i}>{i}</li>)}
      </ul>
      <a href="/dashboard" style={{ color: "#22c55e" }}>Comprar ahora →</a>
    </div>
  );
}

function Step({ number, text }) {
  return (
    <div style={{ background: "#020617", padding: "30px", borderRadius: "12px", textAlign: "center" }}>
      <h3 style={{ fontSize: "28px" }}>{number}</h3>
      <p>{text}</p>
    </div>
  );
}
