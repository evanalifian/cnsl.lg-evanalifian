const style =
  "inline-flex items-center gap-x-2 rounded-lg bg-zinc-900 p-3 text-sm font-medium text-gray-50 transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-gray-900";

export function ButtonsLinks({ href, children }) {
  return (
    <a href={href} target="_blank" className={style}>
      {children}
    </a>
  );
}
