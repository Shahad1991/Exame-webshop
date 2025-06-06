import "./globals.css";
import { Poppins } from 'next/font/google'
import Header from "./Header"; // Header er en Server Component
import { CartProvider } from "./context/CartContext"; 

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
})
export const metadata = {
  title: "exame-webshop",
  description: "A simple webshop using server & client components",
};

export default function RootLayout({ children }) {
  return (
    <html  lang="en" style={{ backgroundColor: '#082804' }}>
      <body className={poppins.className}>
        {/* Header er en Server Component, */}
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