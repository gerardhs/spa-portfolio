import { Outlet } from "react-router-dom";
import { Footer, Header } from "..";
import { Suspense } from "react";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
