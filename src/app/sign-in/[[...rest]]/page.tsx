// app/sign-in/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <h1></h1>
      <SignIn />
    </div>
  );
}
