import { useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Dialog,
  DialogPanel,
} from "@headlessui/react";
import {
  Menu as MenuIcon,
  Home,
  User,
  FolderGit2,
  Mail,
  ChevronRight,
  Search,
} from "lucide-react";
import { Link } from "react-router";
import { searchQuery } from "../search/search";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const year = new Date().getFullYear();
  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Me", href: "/about", icon: User },
    { name: "Projects", href: "/projects", icon: FolderGit2 },
    { name: "Contacts", href: "/contacts", icon: Mail },
  ];

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim() !== "") {
        const result = searchQuery(query);
        setResults(result);
      } else {
        setResults([]);
      }
    }, 300); // Tunggu 300ms setelah user berhenti mengetik

    return () => clearTimeout(handler);
  }, [query]);

  return (
    <div className="fixed top-6 right-0 left-0 z-40 px-4">
      <header className="bg-glass/75 mx-auto flex max-w-2xl items-center justify-between rounded-full border border-glass-border px-6 py-4 shadow-2xl backdrop-blur-lg transition-all duration-300 hover:border-glass-borderHover">
        {/* Logo Section - Font tetap */}
        <div className="flex items-center space-x-3">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
          <Link
            to="/"
            className="font-mono text-sm font-bold tracking-[0.25em] text-white uppercase"
          >
            EA // {year}
          </Link>
        </div>

        {/* Action Group */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop Nav - Font & Ikon tetap ada */}
          <nav className="hidden space-x-6 font-mono text-xs font-bold tracking-[0.15em] text-darkgray-400 uppercase md:flex">
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

          {/* Search Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-darkgray-400 transition-colors hover:text-white"
          >
            <Search size={18} />
          </button>

          {/* Mobile Menu Trigger */}
          <Menu as="div" className="relative md:hidden">
            <MenuButton className="p-2 text-white transition-colors outline-none hover:text-darkgray-400">
              <MenuIcon size={24} />
            </MenuButton>
            <MenuItems
              anchor="bottom end"
              className="z-50 w-64 origin-top-right rounded-2xl border border-glass-border bg-[#141414]/95 p-3 text-white shadow-xl backdrop-blur-md outline-none [--anchor-gap:1rem]"
            >
              {navLinks.map((link) => (
                <MenuItem key={link.name}>
                  <Link
                    to={link.href}
                    className="group flex items-center justify-between rounded-xl px-4 py-4 font-mono text-xs tracking-widest uppercase transition-all hover:bg-white/10"
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
        </div>
      </header>

      {/* Dialog Search */}
      <Dialog
        open={isOpen}
        onClose={() => {
          setQuery("");
          setIsOpen(false);
        }}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex w-screen items-start justify-center p-4 pt-24">
          <DialogPanel className="w-full max-w-lg rounded-2xl border border-glass-border bg-[#141414] p-6 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-glass-border pb-4">
              <Search className="shrink-0 text-darkgray-400" size={20} />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)} // Update state query
                placeholder="Search repository..."
                className="w-full bg-transparent font-mono text-sm text-white outline-none placeholder:text-darkgray-500"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="font-mono text-xs text-darkgray-500 uppercase hover:text-white"
              >
                Esc
              </button>
            </div>

            {/* Area Hasil Pencarian */}
            <div className="mt-4 max-h-60 space-y-2 overflow-y-auto">
              {results.length > 0
                ? results.map((item, index) => (
                    <Link
                      key={index}
                      to={item.url}
                      className="block rounded-xl p-3 transition-colors hover:bg-white/5"
                    >
                      <div className="font-mono text-sm text-white">
                        {item.title}
                      </div>
                      <div className="font-mono text-[10px] text-darkgray-400">
                        Score: {item.score.toFixed(2)}
                      </div>
                    </Link>
                  ))
                : query && (
                    <div className="pt-4 text-center font-mono text-[10px] text-darkgray-600 uppercase">
                      No results found.
                    </div>
                  )}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
