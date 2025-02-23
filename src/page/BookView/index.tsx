import {Suspense, lazy} from "react";

const BookViewComponent = lazy(() => import("@/components/BookView/index"));

export default function BookViewPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookViewComponent />
    </Suspense>
  );
}
