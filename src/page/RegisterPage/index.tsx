import {Suspense, lazy} from "react";

const RegisterComponent = lazy(() => import("@/components/Register/index"));

export default function RegisterPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RegisterComponent />
    </Suspense>
  );
}
