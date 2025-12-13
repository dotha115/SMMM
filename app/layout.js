export const metadata = {
  title: "SMM Express",
  description: "Servicios SMM en menos de 1 minuto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: "Arial", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}