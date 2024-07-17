import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'SaasBase',
}

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}