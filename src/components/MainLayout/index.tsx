import { Outlet } from "react-router-dom";
import Header from "../Header";
import { Toaster } from "@/components/ui/toaster";
export function MainLayout() {
  return (
    <section className="w-full max-w-2xl m-auto">
      <Header />
      <Outlet />
      <Toaster />
    </section>
  );
}
