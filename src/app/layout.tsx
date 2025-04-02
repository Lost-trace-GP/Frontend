import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "../components/common";
import Footer from "../components/common/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lost Trace",
  description: "Find missing persons easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Container
        >
          <Header />
          <div>{children}</div>
            <Footer /> {/* Moved inside the Container */}
        </Container>
      </body>
    </html>
  );
}
