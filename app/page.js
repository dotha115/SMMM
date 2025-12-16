"use client";

import { useState } from "react";

export default function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setCartOpen(true);
  };

  return (
    <div style={app}>
      {/* TOP BAR */}
      <header style={topbar}>
        <div style={logo}>SMM</div>

        <nav style={nav}>
          <NavBtn text="Instagram" />
          <NavBtn text="TikTok" />
          <NavBtn text="YouTube" />
          <NavBtn text="Streaming" />
        </nav>

        <div style={cartIcon} onClick={() => setCartOpen(!cartOpen)}>
          🛒 <span style={cartCount}>{cart.length}</span>
        </div>
      </header>

      {/* CART */}
      {cartOpen && (
        <div style={cartPanel}>
          <h3>Carrito</h3>
          {cart.length === 0 && <p>Carrito vacío</p>}
          {cart.map((c, i) => (
            <div key={i} style={cartItem}>
              {c}
            </div>
          ))}
          {cart.length > 0 && (
            <button style={checkoutBtn}>Finalizar compra</button>
          )}
        </div>
      )}

      {/* HERO */}
      <section style={hero}>
        <span style={badge}>🚀 Social Media Growth</span>
        <h1 style={heroTitle}>Haz crecer tus redes como un profesional</h1>
        <p style={heroText}>
          Seguidores, likes y visualizaciones premium para Instagram, TikTok,
          YouTube y Streaming. Entrega rápida. Sin registro.
        </p>
      </section>

      {/* SERVICES */}
      <section style={section}>
        <div style={grid}>
          <Service
            title="Instagram Seguidores"
            price="9,99€"
            add={() => addToCart("Instagram Seguidores")}
          />
          <Service
            title="TikTok Likes"
            price="7,99€"
            add={() => addToCart("TikTok Likes")}
          />
          <Service
            title="YouTube Vistas"
            price="12,99€"
            add={() => addToCart("YouTube Vistas")}
          />
          <Service
            title="Twitch / Kick Seguidores"
            price="8,99€"
            add={() => addToCart("Streaming Seguidores")}
          />
        </div>
      </section>
    </div>
  );
}

/* COMPONENTS */

function NavBtn({ text }) {
  return <button style={navBtn}>{text}</button>;
}

function Service({ title, price, add }) {
  return (
    <div
      style={serviceCard}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-8px)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = "none")
      }
    >
      <h3>{title}</h3>
      <p style={price}>{price}</p>
      <button style={addBtn} onClick={add}>
        Añadir al carrito
      </button>
    </div>
  );
}

/* STYLES */

const app = {
  background: "#0b0b0f",
  color: "#fff",
  minHeight: "100vh"
};

const topbar = {
  position: "fixed",
  top: 0,
  width: "100%",
  background: "#0f0f17",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
  zIndex: 100
};

const logo = {
  fontWeight: "800",
  fontSize: "20px",
  color: "#b44cff"
};

const nav = {
  display: "flex",
  gap: "20px"
};

const navBtn = {
  background: "none",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  fontSize: "14px"
};

const cartIcon = {
  cursor: "pointer",
  fontSize: "18px"
};

const cartCount = {
  marginLeft: "6px",
  color: "#ff4ecd",
  fontWeight: "700"
};

const cartPanel = {
  position: "fixed",
  right: 20,
  top: 80,
  background: "#15151d",
  padding: "20px",
  borderRadius: "14px",
  width: "260px",
  boxShadow: "0 20px 50px rgba(0,0,0,.5)",
  zIndex: 200
};

const cartItem = {
  fontSize: "14px",
  marginBottom: "8px"
};

const checkoutBtn = {
  width: "100%",
  padding: "12px",
  background: "#b44cff",
  border: "none",
  borderRadius: "8px",
  color: "#fff",
  marginTop: "10px",
  cursor: "pointer"
};

const hero = {
  padding: "160px 20px 80px",
  textAlign: "center"
};

const badge = {
  color: "#ff4ecd",
  fontSize: "14px"
};

const heroTitle = {
  fontSize: "44px",
  fontWeight: "800",
  margin: "20px 0"
};

const heroText = {
  maxWidth: "600px",
  margin: "0 auto",
  opacity: 0.85
};

const section = {
  padding: "60px 20px",
  maxWidth: "1200px",
  margin: "0 auto"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
  gap: "25px"
};

const serviceCard = {
  background: "#15151d",
  padding: "30px",
  borderRadius: "18px",
  transition: "all .3s ease",
  textAlign: "center"
};

const price = {
  fontSize: "22px",
  fontWeight: "700",
  margin: "10px 0"
};

const addBtn = {
  background: "#ff4ecd",
  border: "none",
  padding: "12px 20px",
  borderRadius: "10px",
  color: "#fff",
  cursor: "pointer"
};
