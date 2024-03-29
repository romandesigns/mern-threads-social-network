import { useTheme } from "@/providers/Theme/ThemeProvider";
import { RiThreadsLine } from "react-icons/ri";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex items-center justify-center py-20">
      <RiThreadsLine
        className="w-8 h-8"
        color={theme == "light" ? "black" : "white"}
        onClick={() => setTheme(theme == "light" ? "dark" : "light")}
      />
    </header>
  );
}
