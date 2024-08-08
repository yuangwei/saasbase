import Link from "next/link"
import {
  Bell,
  Menu,
  Package2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import BreadCrumbs from "./breadcrumbs"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

export interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[180px_1fr] lg:grid-cols-[230px_1fr]">
      {children}
    </div>
  )
}