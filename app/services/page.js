"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";

const services = [
  {
    category: "Instagram",
    color: "#E1306C",
    items: [
      { name: "Seguidores Instagram", price: "Desde 3€" },
      { name: "Likes Instagram", price: "Desde 2€" },
      { name: "Vistas Instagram", price: "Desde 1€" }
    ]
  },
  {
    category: "TikTok",
    color: "#000000",
    items: [
      { name: "Seguidores TikTok", price: "Desde 3€" },
      { name: "Likes TikTok", price: "Desde 2€" },
      { name: "Vistas TikTok", price: "Desde 1€" }
    ]
  },
  {
    category: "YouTube",
    color: "#FF0000",
    items: [
      { name: "Suscriptores YouTube", price: "Desde 5€" },
      { name: "Likes YouTube", price: "Desde 3€" },
      { name: "Vistas YouTube", price: "Desde 2€" }
    ]
  },
  {
    category: "Twitch / Kick",
    color: "#00E701",
    items: [
      { name: "Seguidores Twitch", price: "Desde 4€" },
      { name: "Seguidores Kick", price: "Desde 4€" },
      { name: "Espectadores en Directo", price: "Desde 10€" }
    ]
  }
];

export default function ServicesPage() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Servicios Disponibles</h1>
      <p style={styles.subtitle}>
        Selecciona un servicio y comienza a crecer hoy mismo
      </p>

      <div style={styles.grid}>
        {services.map((service, i) => (
          <div
            key={i}
            style={{
              ...styles.card,
              borderTop: `6px solid ${service.color}`
            }}
          >
            <h2 style={{ ...styles.cardTitle, color: service.color }}>
              {service.category}
            </h2>

            {service.items.map((item, j) => (
              <div key={j} style={styles.item}>
                <span>{item.name}</span>
                <span style={styles.price}>{item.price}</span>
              </div>
            ))}

            <Link href="/" style={styles.button}>
              Comprar Ahora
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont"
  },
  title: {
    fontSize: "42px",
    fontWeight: "800",
    textAlign: "center"
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "50px",
    color: "#666",
    fontSize: "18px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px"
  },
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    transition: "transform .3s, box-shadow .3s"
  },
  cardTitle: {
    fontSize: "24px",
    marginBottom: "16px"
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid #eee",
    fontSize: "15px"
  },
  price: {
    fontWeight: "600"
  },
  button: {
    display: "block",
    marginTop: "20px",
    padding: "12px",
    textAlign: "center",
    background: "#111",
    color: "#fff",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600"
  }
};

