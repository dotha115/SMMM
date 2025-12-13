export default function Pricing() {
  return (
    <main style={{ padding: "60px 40px", maxWidth: "1100px", margin: "0 auto" }}>
      <h1>Precios transparentes</h1>
      <p style={{ color: "#94a3b8", marginBottom: "40px" }}>
        Paga solo por lo que usas. Sin cuotas mensuales. Resultados inmediatos.
      </p>

      <div style={grid}>
        <Card
          title="Starter"
          price="Desde 0,79€"
          items={[
            "Acceso a todos los servicios",
            "Entrega automática",
            "Sin contraseña",
            "Soporte 24/7"
          ]}
        />

        <Card
          title="Professional"
          price="Mejor precio"
          highlight
          items={[
            "Precios más bajos",
            "Mayor prioridad",
            "Pedidos ilimitados",
            "Ideal para creadores"
          ]}
        />

        <Card
          title="Reseller"
          price="Precios de panel"
          items={[
            "Descuentos por volumen",
            "API disponible",
            "Uso comercial",
            "Ideal para agencias"
          ]}
        />
      </div>
    </main>
  );
}

function Card({ title, price, items, highlight }) {
  return (
    <div style={{
      background: highlight ? "#020617" : "#0f172a",
      border: highlight ? "2px solid #22c55e" : "1px solid #020617",
      padding: "30px",
      borderRadius: "12px"
    }}>
      <h3>{title}</h3>
      <h2 style={{ color: "#22c55e" }}>{price}</h2>
      <ul>
        {items.map(i => <li key={i}>{i}</li>)}
      </ul>
      <a href="/dashboard" style={cta}>Empezar ahora</a>
    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px"
};

const cta = {
  display: "inline-block",
  marginTop: "20px",
  background: "#22c55e",
  color: "#000",
  padding: "10px 20px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "bold"
};
