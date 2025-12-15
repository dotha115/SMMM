export default function Home() {
  return (
    <main style={page}>

      {/* HERO */}
      <section style={hero}>
        <h1 style={h1}>
          Comprar seguidores, likes y visitas al mejor precio
        </h1>
        <p style={heroText}>
          Aumenta tu popularidad en redes sociales de forma rápida y segura.
          Servicios activos 24/7 · Sin registro · Entrega automática.
        </p>
        <div style={heroBtns}>
          <a href="/order" style={btnPrimary}>Comprar seguidores</a>
          <a href="/services" style={btnSecondary}>Ver servicios</a>
        </div>
      </section>

      {/* SERVICES */}
      <section style={section}>
        <h2 style={h2}>Nuestros servicios más populares</h2>

        <div style={grid}>
          <Service title="Seguidores Instagram" text="Mejora tu imagen y credibilidad con seguidores de alta calidad." />
          <Service title="Likes Instagram" text="Aumenta el alcance de tus publicaciones y genera más interacción." />
          <Service title="Visualizaciones TikTok" text="Haz que tus vídeos se vuelvan virales con miles de visitas reales." />
          <Service title="Visualizaciones YouTube" text="Posiciona tus vídeos y aumenta tu autoridad en YouTube." />
          <Service title="Seguidores TikTok" text="Gana seguidores y destaca frente a otros perfiles." />
          <Service title="Likes Facebook" text="Incrementa la interacción en tus publicaciones y páginas." />
        </div>
      </section>

      {/* TEXT SEO */}
      <section style={seo}>
        <h2 style={h2}>Comprar seguidores reales y baratos</h2>
        <p style={p}>
          Comprar seguidores es una estrategia cada vez más utilizada por influencers,
          empresas y creadores de contenido que buscan aumentar su visibilidad en redes sociales.
          En nuestra plataforma puedes comprar seguidores, likes y visualizaciones de forma segura,
          sin necesidad de registro y con entrega rápida.
        </p>
        <p style={p}>
          Ofrecemos servicios para Instagram, TikTok, YouTube y otras redes sociales.
          Nuestros precios son competitivos y nuestros servicios están diseñados para
          ofrecer estabilidad y resultados visibles desde el primer momento.
        </p>
      </section>

      {/* WHY */}
      <section style={why}>
        <h2 style={h2}>¿Por qué comprar seguidores con nosotros?</h2>

        <div style={whyGrid}>
          <Why text="Entrega rápida y automática" />
          <Why text="Sin necesidad de crear cuenta" />
          <Why text="Pagos seguros y protegidos" />
          <Why text="Soporte profesional" />
          <Why text="Precios económicos" />
          <Why text="Servicios activos 24/7" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={cta}>
        <h2 style={ctaTitle}>
          Empieza hoy a crecer en redes sociales
        </h2>
        <a href="/order" style={ctaBtn}>
          Comprar ahora
        </a>
      </section>

    </main>
  );
}

/* COMPONENTES */

function Service({ title, text }) {
  return (
    <div style={card}>
      <h3>{title}</h3>
      <p style={cardText}>{text}</p>
      <a href="/order" style={cardBtn}>Comprar</a>
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
  background: "#ffffff",
  color: "#1e293b"
};

const hero = {
  background: "linear-gradient(180deg,#2563eb,#1e40af)",
  color: "#ffffff",
  padding: "100px 20px",
  textAlign: "center"
};

const h1 = {
  fontSize: "44px",
  maxWidth: "900px",
  margin: "0 auto"
};

const heroText = {
  marginTop: "20px",
  fontSize: "18px",
  maxWidth: "800px",
  marginInline: "auto"
};

const heroBtns = {
  marginTop: "40px",
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  flexWrap: "wrap"
};

const btnPrimary = {
  background: "#22c55e",
  color: "#ffffff",
  padding: "14px 30px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "bold"
};

const btnSecondary = {
  background: "#ffffff",
  color: "#1e40af",
  padding: "14px 30px",
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
  fontSize: "32px",
  marginBottom: "40px",
  textAlign: "center"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "30px"
};

const card = {
  background: "#f8fafc",
  padding: "30px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
};

const cardText = {
  color: "#475569",
  margin: "15px 0"
};

const cardBtn = {
  display: "inline-block",
  background: "#2563eb",
  color: "#ffffff",
  padding: "10px 22px",
  borderRadius: "6px",
  textDecoration: "none"
};

const seo = {
  background: "#f1f5f9",
  padding: "80px 20px"
};

const p = {
  maxWidth: "900px",
  margin: "0 auto 20px",
  fontSize: "16px",
  color: "#475569"
};

const why = {
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
  background: "#e2e8f0",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center"
};

const cta = {
  background: "#1e40af",
  color: "#ffffff",
  padding: "90px 20px",
  textAlign: "center"
};

const ctaTitle = {
  fontSize: "36px",
  marginBottom: "30px"
};

const ctaBtn = {
  background: "#22c55e",
  padding: "14px 36px",
  borderRadius: "8px",
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: "bold"
};
