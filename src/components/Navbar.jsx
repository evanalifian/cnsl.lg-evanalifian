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
    }, 300);

    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const isTyping =
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable;

      const triggerCtrlK = (e.ctrlKey || e.metaKey) && e.key === "k";
      const triggerSlash = e.key === "/" && !isTyping;

      if (triggerCtrlK || triggerSlash) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Logika Pengelompokan (Grouping Logic) berdasarkan pageName -> type
  const groupedResults = results.reduce((acc, item) => {
    const page = item.pageName || "General";
    const type = item.type || "Other";

    if (!acc[page]) acc[page] = {};
    if (!acc[page][type]) acc[page][type] = [];

    acc[page][type].push(item);
    return acc;
  }, {});

  return (
    <div className="fixed top-6 right-0 left-0 z-40 px-4">
      <header className="bg-glass/75 mx-auto grid max-w-4xl grid-cols-[1fr_auto] items-center rounded-full border border-glass-border px-6 py-4 shadow-2xl backdrop-blur-lg transition-all duration-300 hover:border-glass-borderHover md:grid-cols-[1fr_auto_1fr]">
        {/* Kolom 1: Logo */}
        <div className="flex items-center justify-start space-x-3">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
          <Link
            to="/"
            className="font-mono text-sm font-bold tracking-[0.25em] text-white uppercase"
          >
            EA // {year}
          </Link>
        </div>

        {/* Kolom 2: Navigasi */}
        <nav className="hidden justify-center space-x-8 font-mono text-xs font-bold tracking-[0.15em] text-darkgray-400 uppercase md:flex">
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

        {/* Kolom 3: Action Group */}
        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 rounded-full border border-transparent px-3 py-1.5 transition-all duration-300 hover:border-glass-border hover:bg-white/5"
          >
            <Search
              size={18}
              className="text-darkgray-400 transition-colors group-hover:text-white"
            />
            <span className="hidden items-center gap-1 rounded-md border border-glass-border bg-black/20 px-2 py-0.5 font-mono text-[10px] font-medium tracking-widest text-darkgray-500 uppercase shadow-inner group-hover:border-white/20 group-hover:text-white md:flex">
              <kbd className="not-italic">Ctrl</kbd>
              <span className="opacity-50">+</span>
              <kbd className="not-italic">K</kbd>
            </span>
          </button>

          <div className="md:hidden">
            <Menu as="div" className="relative">
              <MenuButton className="p-2 text-white transition-colors outline-none hover:text-darkgray-400">
                <MenuIcon size={20} />
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
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search repository..."
                className="w-full bg-transparent font-mono text-sm text-white outline-none placeholder:text-darkgray-500"
              />
              <span className="font-mono text-xs text-darkgray-500 uppercase">
                Esc
              </span>
            </div>

            {/* Area Hasil Pencarian Terkelompok */}
            <div className="custom-scrollbar mt-4 max-h-80 space-y-4 overflow-y-auto pr-1">
              {results.length > 0 ? (
                Object.keys(groupedResults).map((pageName) => (
                  <div key={pageName} className="space-y-3">
                    {/* Header Nama Halaman */}
                    <div className="sticky top-0 border-b border-zinc-900 bg-[#141414] py-1 font-mono text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
                      // PAGE: {pageName}
                    </div>

                    {Object.keys(groupedResults[pageName]).map((type) => (
                      <div key={type} className="space-y-1 pl-2">
                        {/* Sub-header tipe data */}
                        <div className="font-mono text-[9px] tracking-wider text-zinc-600 uppercase">
                          • {type}s
                        </div>

                        {/* List Item */}
                        {groupedResults[pageName][type].map((item, index) => (
                          <Link
                            key={index}
                            to={item.url}
                            onClick={() => {
                              setIsOpen(false);
                              setQuery("");
                            }}
                            className="group block rounded-xl border border-transparent p-3 transition-all hover:border-white/5 hover:bg-white/5"
                          >
                            <div className="mb-1 flex items-center justify-between">
                              <span className="font-mono text-xs font-bold text-white group-hover:text-zinc-300">
                                {item.title}
                              </span>
                              <div className="font-mono text-[9px] text-darkgray-600 uppercase">
                                Score: {item.score.toFixed(2)}
                              </div>
                            </div>
                            <p className="line-clamp-2 font-mono text-[10px] text-darkgray-400">
                              {item.content}
                            </p>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                ))
              ) : query.length > 0 ? (
                /* State: Tidak ada hasil ditemukan */
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-3 rounded-full bg-white/5 p-3 text-darkgray-600">
                    <Search size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-mono text-sm tracking-widest text-white uppercase">
                    No results
                  </h3>
                  <p className="mt-1 max-w-50 font-mono text-[10px] text-darkgray-500">
                    We couldn't find any documents matching "{query}"
                  </p>
                </div>
              ) : (
                /* State: Default (Belum mengetik) */
                <div className="py-8 text-center">
                  <p className="font-mono text-xs tracking-widest text-darkgray-500 uppercase">
                    Type to search projects, skills, or contacts
                  </p>
                </div>
              )}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
