import { Button } from "@headlessui/react";
import { Moon, SunMedium } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  function handleTheme() {
    const html = document.getElementsByTagName("html")[0];
    const theme = localStorage.getItem("theme");
  }

  return (
    <Button type="button" onClick={handleTheme}>
      {isDark ? <Moon /> : <SunMedium />}
    </Button>
  );
}
