import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn
        redirectUrl="/dashboard"
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700",
            footerActionLink: "text-blue-600 hover:text-blue-700",
          },
        }}
      />
    </div>
  );
}
