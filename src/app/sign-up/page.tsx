import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AuthForm from "@/components/layouts/auth-form"

export default function SignUpPage() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] xl:min-h-[800px]">
      <AuthForm
        title="Sign Up"
        bottom={
          <>
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </>
        }
      >
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Sign Up
        </Button>
        <Button variant="outline" className="w-full">
          Sign Up with Google
        </Button>
      </AuthForm>
    </div>
  )
}