const style = "inline-flex items-center gap-x-2 rounded-lg bg-zinc-900 p-3 text-sm font-medium text-gray-50 transition-colors hover:bg-zinc-800";

export function ButtonsLinks({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      className={style}
    >
      {children}
    </a>
  );
}