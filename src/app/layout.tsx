"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";
import Header from "./components/Header";
import Main from "./components/main";
import Projects from "./components/projects";
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [page, setPage] = useState("about");

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header setPage={setPage} />
        <div className="main_sidebar">
        <Sidebar />
        <Main page={page}  />
        </div>
        </body>
    </html>
  );
}
