import { Bell, Package2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export interface CommonLayoutProps {
  logo?: React.ReactNode
  title: string
  children: React.ReactNode
}

export default function CommonLayout({
  title,
  logo,
  children
}: CommonLayoutProps) {
  return (
    <main></main>
  )
}
