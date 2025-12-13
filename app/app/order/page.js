export default function Order() {
  return (
    <main style={container}>
      <h1>Compra rápida</h1>
      <p style={subtitle}>
        Sin registro. Sin contraseña. Resultados en minutos.
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

        <label>Email (para enviar el estado)</label>
        <input type="email" placeholder="tu@email.com" style={input} />

        <button style={button}>
          Comprar ahora
        </button>

        <p style={note}>
          ✔ Pedido automático · ✔ Pago seguro · ✔ Sin login
        </p>
      </div>
    </main>
  );
}

const container = {
  minHeight: "100vh",
  background: "#0b0f1a",
  color: "#fff",
  padding: "60px 20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const subtitle = {
  color: "#94a3b8",
  marginBottom: "30px",
  textAlign: "center"
};

const card = {
  background: "#020617",
  padding: "30px",
  borderRadius: "12px",
  maxWidth: "420px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "15px"
};

const input = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #020617",
  background: "#0f172a",
  color: "#fff"
};

const button = {
  marginTop: "10px",
  padding: "14px",
  background: "#22c55e",
  color: "#000",
  border: "none",
  borderRadius: "6px",
  fontWeight: "bold",
  cursor: "pointer"
};

const note = {
  marginTop: "10px",
  fontSize: "14px",
  color: "#94a3b8",
  textAlign: "center"
};
