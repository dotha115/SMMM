export default function Services() {
  return (
    <main style={{ padding: "60px 40px" }}>
      <h1>Servicios SMM</h1>
      <p style={{ color: "#94a3b8" }}>
        Todos los servicios son automáticos y se procesan al instante.
      </p>

      <table style={table}>
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Plataforma</th>
            <th>Precio</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Row service="Seguidores" platform="Instagram" price="Desde 1,99€" />
          <Row service="Likes" platform="Instagram" price="Desde 0,99€" />
          <Row service="Views" platform="TikTok" price="Desde 0,79€" />
          <Row service="Views" platform="YouTube" price="Desde 1,49€" />
        </tbody>
      </table>
    </main>
  );
}

function Row({ service, platform, price }) {
  return (
    <tr>
      <td>{service}</td>
      <td>{platform}</td>
      <td>{price}</td>
      <td>
        <a href="/dashboard" style={{ color: "#22c55e" }}>
          Order →
        </a>
      </td>
    </tr>
  );
}

const table = {
  width: "100%",
  marginTop: "30px",
  borderCollapse: "collapse"
};
