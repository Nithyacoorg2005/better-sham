import "./globals.css";  // <-- this loads Tailwind/your CSS
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Better Mortgage Clone",
  description: "Simple mortgage calculator app in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen px-6 py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
