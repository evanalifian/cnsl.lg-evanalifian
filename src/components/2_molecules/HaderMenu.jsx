export default function HeaderMenu({ paths }) {
  return (
    <ul className="hidden gap-x-6 md:flex">
      {paths.map((p) => (
        <li key={p.path}>
          <a
            href={p.path}
            className="font-mono font-medium text-gray-700 transition-colors hover:text-black dark:text-gray-300 dark:hover:text-gray-50"
          >
            {p.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
