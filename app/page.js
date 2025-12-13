export default function Home() {
  return (
    <main style={page}>

      {/* HERO */}
      <section style={hero}>
        <h1 style={h1}>
          Compra seguidores y likes reales al mejor precio
        </h1>
        <p style={heroText}>
          Crece en Instagram, TikTok y YouTube sin registro.
          Entrega rápida · Pago seguro · Soporte activo
        </p>
        <a href="/order" style={heroBtn}>Comprar ahora</a>
      </section>

      {/* SERVICES */}
      <section style={section}>
        <h2 style={h2}>Nuestros servicios</h2>

        <div style={grid}>
          <Service
            title="Instagram Seguidores"
            desc="Seguidores de alta calidad para perfiles personales y negocios."
            price="Desde 1,99€"
          />
          <Service
            title="Instagram Likes"
            desc="Likes rápidos para mejorar alcance y credibilidad."
            price="Desde 0,99€"
          />
          <Service
            title="TikTok Views"
            desc="Visualizaciones reales para vídeos virales."
            price="Desde 0,79€"
          />
          <Service
            title="YouTube Views"
            desc="Aumenta reproducciones y posiciona tus vídeos."
            price="Desde 1,49€"
          />
        </div>
      </section>

      {/* WHY */}
      <section style={why}>
        <h2 style={h2}>¿Por qué elegirnos?</h2>

        <div style={whyGrid}>
          <Why text="Entrega rápida y automática" />
          <Why text="Sin registro ni cuenta" />
          <Why text="Pagos 100% seguros" />
          <Why text="Precios competitivos" />
          <Why text="Servicios estables" />
          <Why text="Soporte profesional" />
        </div>
      </section>

      {/* CTA */}
      <section style={cta}>
        <h2 style={ctaTitle}>
          Empieza a crecer hoy mismo
        </h2>
        <a href="/order" style={ctaBtn}>Hacer un pedido</a>
      </section>

    </main>
  );
}

/* COMPONENTES */

function Service({ title, desc, price }) {
  return (
    <div style={card}>
      <h3 style={cardTitle}>{title}</h3>
      <p style={cardDesc}>{desc}</p>
      <p style={price}>{price}</p>
      <a href="/order" style={buy}>Comprar</a>
    </div>
  );
}

function Why({ text }) {
  return (
    <div style={whyCard}>
      ✔ {text}
    </div>
  );
}

/* ESTILOS */

const page = {
  fontFamily: "Arial",
  background: "#f8fafc",
  color: "#0f172a"
};

const hero = {
  background: "#ffffff",
  padding: "90px 20px",
  textAlign: "center"
};

const h1 = {
  fontSize: "42px",
  maxWidth: "800px",
  margin: "0 auto"
};

const heroText = {
  marginTop: "20px",
  fontSize: "18px",
  color: "#475569",
  maxWidth: "700px",
  marginInline: "auto"
};

const heroBtn = {
  display: "inline-block",
  marginTop: "35px",
  background: "#2563eb",
  color: "#fff",
  padding: "14px 34px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold"
};

const section = {
  padding: "80px 20px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const h2 = {
  textAlign: "center",
  fontSize: "32px",
  marginBottom: "50px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "30px"
};

const card = {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "14px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
  textAlign: "center"
};

const cardTitle = {
  fontSize: "20px",
  marginBottom: "10px"
};

const cardDesc = {
  fontSize: "15px",
  color: "#475569",
  marginBottom: "20px"
};

const price = {
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "20px"
};

const buy = {
  display: "inline-block",
  background: "#22c55e",
  color: "#fff",
  padding: "10px 22px",
  borderRadius: "6px",
  textDecoration: "none"
};

const why = {
  background: "#ffffff",
  padding: "80px 20px"
};

const whyGrid = {
  maxWidth: "1000px",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  gap: "20px"
};

const whyCard = {
  background: "#f1f5f9",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center"
};

const cta = {
  background: "#2563eb",
  color: "#fff",
  padding: "90px 20px",
  textAlign: "center"
};

const ctaTitle = {
  fontSize: "36px",
  marginBottom: "30px"
};

const ctaBtn = {
  background: "#22c55e",
  padding: "14px 34px",
  borderRadius: "8px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold"
};
