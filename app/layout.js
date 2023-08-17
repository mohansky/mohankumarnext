import {
  BASE_PATH,
  SITE_TITLE,
  SITE_DESC,
  SITE_KEYWORDS,
  switchThemeDuration,
} from "@/lib/constants";
import { Montserrat, Roboto } from "next/font/google";
import { Provider } from "./theme-provider";
import { ThemeToggle } from "./components/toggle";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Nav from "./components/nav";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: `${SITE_TITLE}`,
  description: `${SITE_DESC}`,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: `${SITE_KEYWORDS}`,
  authors: [{ name: "Mohan Kumar", url: "/" }],
  colorScheme: "light",
  creator: "Mohan Kumar",
  publisher: "Mohan Kumar",
  metadataBase: new URL(`${BASE_PATH}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Home | ${SITE_TITLE}`,
    description: `${SITE_DESC}`,
    authors: ["Mohan"],
    images: "/images/logos/og-logo.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable} ${roboto.variable}`}> 
        <body className={`text-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-gray-100 ${switchThemeDuration}`}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
          <Hero />
          <Nav /> 
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
