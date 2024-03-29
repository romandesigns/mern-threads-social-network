import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./providers/Theme/ModeToggle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ModeToggle />
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <Button>Click Me</Button>
    </>
  );
}

export default App;
