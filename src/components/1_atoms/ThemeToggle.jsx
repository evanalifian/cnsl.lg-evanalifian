import { Button } from "@headlessui/react";
import { Moon, SunMedium } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  function handleTheme() {
    const html = document.getElementsByTagName("html")[0];
    const theme = localStorage.getItem("theme");

    if (!theme) {
      localStorage.setItem("theme", "dark");
      html.classList.add("dark");
      setIsDark(!isDark);
    } else {
      if (theme == "dark") {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDark(!isDark);
      } else if (theme == "light") {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDark(!isDark);
      }
    }
  }

  return (
    <Button type="button" onClick={handleTheme}>
      {isDark ? <Moon /> : <SunMedium />}
    </Button>
  );
}
