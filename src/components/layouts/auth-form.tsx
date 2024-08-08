export default function AuthForm({
  title,
  bottom,
  children
}: {
  title: string
  bottom?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        <div className="grid gap-4">
          {children}
        </div>
        <div className="mt-4 text-center text-sm">
          {bottom}
        </div>
      </div>
    </div>
  )
}