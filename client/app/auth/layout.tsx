import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";


export default function AuthLayout({
    children
  }: {
    children: React.ReactNode
  }) 
  {
    return (
        <section className="w-full h-screen">
            {children}
        </section>
    )
  }
  