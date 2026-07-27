import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-title",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imperialinstrumentos.com.br"), // troque pelo domínio real quando publicar

  title: "Instrumentos Musicais Imperial",

  description:
    "Soluções completas em áudio, iluminação, instrumentos musicais e tecnologia para igrejas, eventos e ministérios.",

  keywords: [
    "instrumentos musicais",
    "igrejas",
    "sonorização",
    "áudio profissional",
    "iluminação",
    "mesa de som",
    "caixas de som",
    "projetos de áudio",
    "eventos",
    "ministérios",
    "Imperial Instrumentos Musicais",
  ],

  authors: [
    {
      name: "Hardt Studio",
    },
  ],

  creator: "Hardt Studio",

  openGraph: {
    type: "website",

    locale: "pt_BR",

    url: "https://imperialinstrumentos.com.br",

    siteName: "Instrumentos Musicais Imperial",

    title: "Instrumentos Musicais Imperial",

    description:
      "Soluções completas em áudio, iluminação, instrumentos musicais e tecnologia para igrejas, eventos e ministérios.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Instrumentos Musicais Imperial",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Instrumentos Musicais Imperial",

    description:
      "Soluções completas em áudio, iluminação e tecnologia para igrejas.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${inter.variable} bg-black font-body text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}