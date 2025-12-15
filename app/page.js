export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <h1>Compra seguidores y crece en redes sociales</h1>
        <p>Servicios rápidos, seguros y sin registro. Resultados visibles en minutos.</p>
        <a href="/services" className="btn btn-primary">Ver servicios</a>
      </section>

      {/* SERVICIOS */}
      <section className="container">
        <h2 style={{ textAlign: "center", marginBottom: 50 }}>Servicios populares</h2>

        <div className="cards">
          <ServiceCard title="Instagram" color="#e1306c" desc="Seguidores, likes y visualizaciones." />
          <ServiceCard title="TikTok" color="#000000" desc="Impulsa tus vídeos y viralízalos." />
          <ServiceCard title="YouTube" color="#ff0000" desc="Views, likes y suscriptores." />
          <ServiceCard title="Twitch" color="#9146ff" desc="Crece en directos y canales." />
          <ServiceCard title="Kick" color="#00e701" desc="Haz despegar tu canal en Kick." />
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="container" style={{ background: "#ffffff" }}>
        <h2 style={{ textAlign: "center", marginBottom: 60 }}>Cómo funciona</h2>

        <div className="cards">
          <Step number="1" title="Elige paquete" text="Selecciona el servicio y la cantidad que necesitas." />
          <Step number="2" title="Introduce detalles" text="Solo tu usuario o enlace. Nunca pedimos contraseña." />
          <Step number="3" title="Mira creciendo" text="Relájate y observa cómo suben tus métricas." />
        </div>
      </section>

      {/* POR QUE ELEGIRNOS */}
      <section className="container">
        <h2 style={{ textAlign: "center", marginBottom: 60 }}>Por qué elegirnos</h2>

        <div className="cards">
          <Benefit title="100% Seguro" text="Nunca pedimos contraseñas ni accesos." />
          <Benefit title="Entrega rápida" text="Los pedidos empiezan en minutos." />
          <Benefit title="Alta calidad" text="Perfiles premium y estables." />
          <Benefit title="Soporte 24/7" text="Atención constante ante cualquier duda." />
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="hero">
        <h2>Empieza a crecer hoy mismo</h2>
        <p>Compra en segundos. Sin registro. Sin complicaciones.</p>
        <a href="/services" className="btn btn-primary">Comprar ahora</a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2024 Social Boost Pro · Todos los derechos reservados<br />
        <a href="#">Términos de servicio</a> · <a href="#">Política de privacidad</a>
      </footer>
    </>
  );
}

/* COMPONENTES */

function ServiceCard({ title, desc, color }) {
  return (
    <div className="card" style={{ borderTop: `5px solid ${color}` }}>
      <h3 style={{ color }}>{title}</h3>
      <p>{desc}</p>
      <a href="/services" className="btn btn-primary">Ver servicios</a>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="card step">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Benefit({ title, text }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
