import type { Metadata } from 'next'
import DashboardLayout from '@/components/layouts/dashboard'


export const metadata: Metadata = {
  title: 'SaasBase',
}

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  )
}