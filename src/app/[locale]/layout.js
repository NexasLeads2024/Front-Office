import "@/layouts/globals.css";
export default function RootLayout({ children, params }) {
  const { locale } = params;
  return (
    <html lang={locale}>
        <body>{children}</body>
    </html>
  );
}

