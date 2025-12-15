export default function ServicesPage() {
  return (
    <div style={page}>
      <h1 style={title}>Servicios SMM</h1>
      <p style={subtitle}>
        Compra seguidores, likes y visualizaciones en segundos. Sin registro.
      </p>

      <div style={grid}>
        <PriceCard
          service="Instagram Seguidores"
          qty="1.000"
          price="9,99€"
          color="#E1306C"
        />
        <PriceCard
          service="TikTok Likes"
          qty="5.000"
          price="7,99€"
          color="#000000"
        />
        <PriceCard
          service="YouTube Visualizaciones"
          qty="10.000"
          price="12,99€"
          color="#FF0000"
        />
        <PriceCard
          service="Twitch / Kick Seguidores"
          qty="1.000"
          price="8,99€"
          color="#00C853"
        />
      </div>
    </div>
  );
}

function PriceCard({ service, qty, price, color }) {
  return (
    <div
      style={{ ...card, borderTop: `5px solid ${color}` }}
      onMouseEnter={(e) =>
        Object.assign(e.currentTarget.style, {
          transform: "translateY(-8px)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
        })
      }
      onMouseLeave={(e) =>
        Object.assign(e.currentTarget.style, {
          transform: "none",
          boxShadow: card.boxShadow
        })
      }
    >
      <h3 style={{ ...cardTitle, color }}>{service}</h3>
      <p style={qtyText}>{qty}</p>
      <p style={priceText}>{price}</p>

      <button
        style={{ ...buyBtn, background: color }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Comprar ahora
      </button>
    </div>
  );
}

/* STYLES */

const page = {
  padding: "80px 20px",
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center"
};

const title = {
  fontSize: "42px",
  fontWeight: "800",
  marginBottom: "10px"
};

const subtitle = {
  fontSize: "18px",
  color: "#555",
  marginBottom: "60px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "30px"
};

const card = {
  background: "#fff",
  padding: "35px 25px",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  transition: "all 0.35s ease"
};

const cardTitle = {
  fontSize: "20px",
  marginBottom: "15px"
};

const qtyText = {
  fontSize: "28px",
  fontWeight: "700",
  marginBottom: "10px"
};

const priceText = {
  fontSize: "26px",
  fontWeight: "800",
  marginBottom: "25px"
};

const buyBtn = {
  border: "none",
  color: "#fff",
  padding: "14px 25px",
  borderRadius: "10px",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "opacity 0.25s ease"
};
