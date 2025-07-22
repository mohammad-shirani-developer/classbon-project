import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import Header from "./_components/header/header";
import Footer from "./_components/footer/footer";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const iranyekan = localFont({
  src: [
    {
      path: "../../public/fonts/iranyekan/woff2/IRANYekanXFaNum-Light.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/woff2/IRANYekanXFaNum-Medium.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/woff2/IRANYekanXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/woff2/IRANYekanXFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/iranyekan/woff2/IRANYekanXFaNum-DemiBold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      dir="rtl"
      className={`dark ${figtree.variable} ${iranyekan.variable}`}
    >
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header />
        <div className="flex-1 flex  justify-center items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
