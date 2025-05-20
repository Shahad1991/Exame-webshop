import "./globals.css";
import { Poppins } from 'next/font/google'
import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Tilføj vægte du skal bruge
})
export const metadata = {
  title: "exame-webshop",
  description: "A simple webshop using server & client components",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-green-200" lang="en">
      <body className={poppins.className}>
        <Header />
        <div>
            <CartProvider>
              {children}
            </CartProvider>
          
        </div>
      </body>
    </html>
  );
}