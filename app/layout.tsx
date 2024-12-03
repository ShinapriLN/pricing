import type { Metadata } from "next";
import { bevietnampro } from "./lib/font";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Pricing[Practising project]",
  description:
    "This site has nothing more than a static site, which is just displaying pricing. This project created for practicing only!",
  openGraph: {
    type: "website",
    url: "https://pricing-gamma-flax.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
      </Head>
      <body
        className={`${bevietnampro.className} flex justify-center antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
