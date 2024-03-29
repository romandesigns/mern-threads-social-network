import { ModeToggle } from "@/providers/Theme/ModeToggle";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <>
      <ModeToggle />
      <Outlet />
    </>
  );
}
