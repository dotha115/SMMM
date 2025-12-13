export default function Dashboard() {
  return (
    <main style={page}>
      <h1 style={title}>Panel de control</h1>
      <p style={subtitle}>Resumen general de la plataforma</p>

      <div style={grid}>
        <Card title="Pedidos hoy" value="124" />
        <Card title="Ingresos" value="1.240€" />
        <Card title="Servicios activos" value="18" />
        <Card title="Estado del sistema" value="Operativo" />
      </div>

      <section style={section}>
        <h2 style={sectionTitle}>Últimos pedidos</h2>

        <table style={table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Servicio</th>
              <th>Cantidad</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#10231</td>
              <td>Instagram Seguidores</td>
              <td>1.000</td>
              <td style={ok}>Completado</td>
            </tr>
            <tr>
              <td>#10230</td>
              <td>TikTok Views</td>
              <td>5.000</td>
              <td style={progress}>En progreso</td>
            </tr>
            <tr>
              <td>#10229</td>
              <td>YouTube Views</td>
              <td>2.000</td>
              <td style={pending}>Pendiente</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}

/* COMPONENTES */

function Card({ title, value }) {
  return (
    <div style={card}>
      <p style={cardTitle}>{title}</p>
      <h2 style={cardValue}>{value}</h2>
    </div>
  );
}

/* ESTILOS */

const page = {
  minHeight: "100vh",
  background: "#f8fafc",
  padding: "60px 20px",
  fontFamily: "Arial",
  color: "#0f172a"
};

const title = {
  fontSize: "36px",
  marginBottom: "10px"
};

const subtitle = {
  color: "#64748b",
  marginBottom: "40px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
  marginBottom: "60px"
};

const card = {
  background: "#ffffff",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
};

const cardTitle = {
  color: "#64748b",
  fontSize: "14px"
};

const cardValue = {
  fontSize: "28px",
  marginTop: "8px"
};

const section = {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
};

const sectionTitle = {
  fontSize: "22px",
  marginBottom: "20px"
};

const table = {
  width: "100%",
  borderCollapse: "collapse"
};

const ok = { color: "#16a34a", fontWeight: "bold" };
const progress = { color: "#f59e0b", fontWeight: "bold" };
const pending = { color: "#dc2626", fontWeight: "bold" };
