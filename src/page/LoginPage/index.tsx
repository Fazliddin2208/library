import {Suspense, lazy} from "react";

const LoginComponent = lazy(() => import("@/components/Login/index"));

export default function LoginPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LoginComponent />
    </Suspense>
  );
}
