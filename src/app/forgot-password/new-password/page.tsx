import AuthForm from "@/components/layouts/auth-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function NewPassword() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] xl:min-h-[800px]">
      <AuthForm
        title="New password"
      >
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Confim Password</Label>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Reset Password
        </Button>
      </AuthForm>
    </div>
  )
}