import "./globals.css";
export const metadata = {
  title: "Comprar Seguidores",
  description: "Compra seguidores, likes y visitas al mejor precio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
