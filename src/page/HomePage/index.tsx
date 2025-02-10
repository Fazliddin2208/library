import {Suspense, lazy} from "react";

const HomeComponent = lazy(() => import("@/components/Home/index"));

export default function HomePage() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <HomeComponent />
    </Suspense>
  );
}
