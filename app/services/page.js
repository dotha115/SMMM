export default function Services() {
  return (
    <main style={page}>

      {/* HEADER */}
      <section style={header}>
        <h1 style={h1}>Servicios de redes sociales</h1>
        <p style={headerText}>
          Compra seguidores, likes y visualizaciones para Instagram, TikTok,
          YouTube y más. Servicios rápidos, seguros y sin registro.
        </p>
      </section>

      {/* INSTAGRAM */}
      <ServiceSection
        title="Servicios para Instagram"
        services={[
          "Comprar seguidores Instagram",
          "Comprar likes Instagram",
          "Comprar visualizaciones Instagram",
          "Comprar comentarios Instagram",
          "Comprar guardados Instagram"
        ]}
      />

      {/* TIKTOK */}
      <ServiceSection
        title="Servicios para TikTok"
        services={[
          "Comprar seguidores TikTok",
          "Comprar likes TikTok",
          "Comprar visualizaciones TikTok",
          "Comprar compartidos TikTok"
        ]}
      />

      {/* YOUTUBE */}
      <ServiceSection
        title="Servicios para YouTube"
        services={[
          "Comprar visualizaciones YouTube",
          "Comprar likes YouTube",
          "Comprar suscriptores YouTube",
          "Comprar horas de visualización"
        ]}
      />

      {/* FACEBOOK */}
      <ServiceSection
        title="Servicios para Facebook"
        services={[
          "Comprar likes Facebook",
          "Comprar seguidores Facebook",
          "Comprar reacciones Facebook",
          "Comprar compartidos Facebook"
        ]}
      />

      {/* SEO TEXT */}
      <section style={seo}>
        <h2 style={h2}>Comprar seguidores y likes de forma segura</h2>
        <p style={p}>
          En nuestra plataforma puedes comprar seguidores, likes y visitas para
          redes sociales de forma rápida y segura. Ofrecemos servicios de alta
          calidad para mejorar la visibilidad de perfiles personales, marcas e
          influencers.
        </p>
        <p style={p}>
          Todos nuestros servicios funcionan sin necesidad de registro y con
          entrega automática. Los pedidos se procesan en minutos y contamos con
          soporte profesional para resolver cualquier duda.
        </p>
      </section>

    </main>
  );
}

/* COMPONENTES */

function ServiceSection({ title, services }) {
  return (
    <section style={section}>
      <h2 style={h2}>{title}</h2>

      <div style={grid}>
        {services.map((s) => (
          <div key={s} style={card}>
            <h3 style={cardTitle}>{s}</h3>
            <p style={cardText}>
              Servicio rápido y estable. Ideal para mejorar tu presencia online.
            </p>
            <p style={price}>Desde 0,79€</p>
            <a href="/order" style={buy}>Comprar</a>
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
  background: "#f1f5f9",
  padding: "80px 20px",
  textAlign: "center"
};

const h1 = {
  fontSize: "42px",
  marginBottom: "20px"
};

const headerText = {
  fontSize: "18px",
  color: "#475569",
  maxWidth: "800px",
  margin: "0 auto"
};

const section = {
  padding: "70px 20px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const h2 = {
  fontSize: "30px",
  marginBottom: "40px",
  textAlign: "center"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "25px"
};

const card = {
  background: "#f8fafc",
  padding: "30px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 6px 18px rgba(0,0,0,0.05)"
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
  background: "#2563eb",
  color: "#ffffff",
  padding: "10px 22px",
  borderRadius: "6px",
  textDecoration: "none"
};

const seo = {
  background: "#f8fafc",
  padding: "80px 20px"
};

const p = {
  maxWidth: "900px",
  margin: "0 auto 20px",
  fontSize: "16px",
  color: "#475569"
};
