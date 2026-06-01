import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import {
  Menu as MenuIcon,
  Home,
  User,
  FolderGit2,
  Mail,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
  const year = new Date().getFullYear()
  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Me", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <div className="fixed top-6 right-0 left-0 z-50 px-4">
      <header className="bg-glass/75 mx-auto flex max-w-2xl items-center justify-between rounded-full border border-glass-border px-8 py-4 shadow-2xl backdrop-blur-lg transition-all duration-300 hover:border-glass-borderHover">
        <div className="flex items-center space-x-2.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
          <Link
            to="/"
            className="font-mono text-sm font-bold tracking-[0.25em] text-white uppercase"
          >
            EA // {year}
          </Link>
        </div>
        <nav className="hidden space-x-8 font-mono text-xs font-bold tracking-[0.15em] text-darkgray-400 uppercase md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="flex items-center gap-2 transition-colors hover:text-white"
            >
              <link.icon size={14} /> {link.name}
            </Link>
          ))}
        </nav>
        <Menu as="div" className="relative md:hidden">
          <MenuButton className="p-2 text-white transition-colors outline-none hover:text-darkgray-400">
            <MenuIcon size={24} />
          </MenuButton>

          <MenuItems
            anchor="bottom end"
            className="w-64 origin-top-right rounded-2xl border border-glass-border bg-pureblack/90 p-3 text-white shadow-xl backdrop-blur-md outline-none [--anchor-gap:1rem]"
          >
            {navLinks.map((link) => (
              <MenuItem key={link.name}>
                {/* Menu Item - Typo diperbesar ke text-sm */}
                <Link
                  to={link.href}
                  className="group flex items-center justify-between rounded-xl px-4 py-4 font-mono text-sm tracking-widest uppercase transition-all hover:bg-white/10"
                >
                  <span className="flex items-center gap-3">
                    <link.icon size={16} className="text-darkgray-400" />{" "}
                    {link.name}
                  </span>
                  <ChevronRight
                    size={16}
                    className="opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </Link>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </header>
    </div>
  );
}
