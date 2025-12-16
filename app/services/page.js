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
    <main className="container">
      <h1 className="title">Servicios Disponibles</h1>
      <p className="subtitle">
        Selecciona un servicio y comienza a crecer hoy mismo
      </p>

      <div className="grid">
        {services.map((service, i) => (
          <div
            key={i}
            className="card"
            style={{ borderTop: `6px solid ${service.color}` }}
          >
            <h2 style={{ color: service.color }}>{service.category}</h2>

            {service.items.map((item, j) => (
              <div key={j} className="item">
                <span>{item.name}</span>
                <strong>{item.price}</strong>
              </div>
            ))}

            <Link href="/" className="button">
              Comprar Ahora
            </Link>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          padding: 60px 20px;
          max-width: 1200px;
          margin: 0 auto;
          font-family: system-ui, -apple-system, BlinkMacSystemFont;
        }

        .title {
          font-size: 42px;
          font-weight: 800;
          text-align: center;
        }

        .subtitle {
          text-align: center;
          margin-bottom: 50px;
          color: #666;
          font-size: 18px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }

        .card {
          background: #ffffff;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #eee;
          font-size: 15px;
        }

        .button {
          display: block;
          margin-top: 20px;
          padding: 12px;
          text-align: center;
          background: #111;
          color: #fff;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>
    </main>
  );
}
