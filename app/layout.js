import "./globals.css";

export const metadata = {
  title: "Pricely",
  description: "Smart Price Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
