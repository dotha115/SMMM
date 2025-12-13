export default function Dashboard() {
  return (
    <div style={container}>
      
      {/* SIDEBAR */}
      <aside style={sidebar}>
        <h2 style={{ color: "#22c55e" }}>SMM Express</h2>
        <nav style={menu}>
          <a href="/dashboard" style={item}>Dashboard</a>
          <a href="/dashboard" style={item}>Nuevo pedido</a>
          <a href="/dashboard/orders" style={item}>Mis pedidos</a>
          <a href="/dashboard/balance" style={item}>Añadir saldo</a>
          <a href="/dashboard/support" style={item}>Soporte</a>
        </nav>
      </aside>

      {/* MAIN */}
      <main style={main}>
        <h1>Nuevo pedido</h1>
        <p style={{ color: "#94a3b8" }}>
          Selecciona el servicio, introduce el enlace y crea tu pedido.
        </p>

        <div style={card}>
          <label>Servicio</label>
          <select style={input}>
            <option>Instagram – Seguidores</option>
            <option>Instagram – Likes</option>
            <option>TikTok – Views</option>
            <option>YouTube – Views</option>
          </select>

          <label>Cantidad</label>
          <input type="number" placeholder="Ej: 1000" style={input} />

          <label>Enlace</label>
          <input type="text" placeholder="https://..." style={input} />

          <button style={button}>Crear pedido</button>
        </div>
      </main>

    </div>
  );
}

/* STYLES */

const container = {
  display: "flex",
  minHeight: "100vh",
  background: "#0b0f1a",
  color: "#fff"
};

const sidebar = {
  width: "240px",
  background: "#020617",
  padding: "30px",
  borderRight: "1px solid #020617"
};

const menu = {
  display: "flex",
  flexDirection: "column",
  marginTop: "30px",
  gap: "15px"
};

const item = {
  color: "#cbd5e1",
  textDecoration: "none"
};

const main = {
  flex: 1,
  padding: "40px"
};

const card = {
  background: "#020617",
  padding: "30px",
  borderRadius: "12px",
  maxWidth: "500px",
  marginTop: "30px",
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};

const input = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #020617",
  background: "#0f172a",
  color: "#fff"
};

const button = {
  marginTop: "10px",
  padding: "12px",
  background: "#22c55e",
  color: "#000",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer"
};
