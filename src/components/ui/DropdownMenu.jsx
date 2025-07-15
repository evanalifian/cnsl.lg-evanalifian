import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AlignJustify } from "lucide-react";

export default function DropdownMenu({ paths }) {
  return (
    <Menu as="div" className="md:hidden">
      <MenuButton className="rounded-md border border-zinc-300 bg-white px-2 py-1.5 outline-0 focus:outline focus:outline-offset-1 focus:outline-zinc-400">
        <AlignJustify size={18} className="stroke-gray-700" />
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className="mt-2 w-36 rounded-md border border-zinc-200 bg-white/75 p-1 backdrop-blur-sm outline-none"
      >
        {paths.map((p) => (
          <MenuItem key={p.path}>
            <a
              href={p.path}
              className="block rounded-sm px-2 py-0.5 font-mono text-zinc-700 data-focus:bg-zinc-200/50"
            >
              {p.name}
            </a>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
