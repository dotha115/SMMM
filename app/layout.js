export const metadata = {
  title: "SMM Express – Panel SMM automático",
  description: "Servicios SMM automáticos al mejor precio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "Arial", background: "#0b0f1a", color: "#fff" }}>
        
        {/* HEADER */}
        <header style={header}>
          <div style={{ fontWeight: "bold", fontSize: "20px" }}>
            SMM<span style={{ color: "#22c55e" }}>Express</span>
          </div>
          <nav style={nav}>
            <a href="/" style={link}>Inicio</a>
            <a href="/services" style={link}>Servicios</a>
            <a href="/pricing" style={link}>Precios</a>
            <a href="/dashboard" style={link}>Panel</a>
            <a href="/dashboard" style={loginBtn}>Login</a>
          </nav>
        </header>

        {children}

        {/* FOOTER */}
        <footer style={footer}>
          <p>© {new Date().getFullYear()} SMM Express. All rights reserved.</p>
        </footer>

      </body>
    </html>
  );
}

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 40px",
  borderBottom: "1px solid #020617",
  background: "#020617",
  position: "sticky",
  top: 0,
  zIndex: 1000
};

const nav = {
  display: "flex",
  gap: "20px",
  alignItems: "center"
};

const link = {
  color: "#cbd5e1",
  textDecoration: "none"
};

const loginBtn = {
  background: "#22c55e",
  color: "#000",
  padding: "8px 16px",
  borderRadius: "6px",
  textDecoration: "none",
  fontWeight: "bold"
};

const footer = {
  textAlign: "center",
  padding: "30px",
  marginTop: "60px",
  background: "#020617",
  color: "#94a3b8"
};
