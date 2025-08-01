export default function Footer(props) {
  return (
    <footer className="border-t-2 border-t-zinc-300 bg-white px-4 dark:border-t-gray-900 dark:bg-black">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-12 md:flex-row md:items-center">
        <section className="md:order-2 md:text-center">
          <span className="font-mono text-lg font-bold">{props.alias}</span>
          <p className="text-sm text-gray-500">&copy; 2025, cnsl.lg.</p>
        </section>
        <ul className="flex flex-1 flex-col md:order-1 md:flex-row md:divide-x md:divide-zinc-300">
          {props.socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.url}
                target="_blank"
                className="font-mono text-sm text-gray-700 hover:text-black md:px-2 dark:text-gray-300 dark:hover:text-gray-50"
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>
        <section className="flex-1 md:order-3 md:text-end">
          <a
            href={`mailto:${props.contact["email"]}`}
            className="font-mono text-sm text-gray-700 hover:text-black md:px-2 dark:text-gray-300 dark:hover:text-gray-50"
          >
            {props.contact["email"]}
          </a>
        </section>
      </div>
    </footer>
  );
}
