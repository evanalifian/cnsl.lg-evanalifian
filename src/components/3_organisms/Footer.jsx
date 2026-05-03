export default function Footer(props) {
  return (
    <footer
      id="contact"
      className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-10 pb-6 text-xs text-zinc-600 md:flex-row"
    >
      <p>
        status: <span className="text-green-500">Online</span> | last_updated:
        2026.04.23
      </p>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-green-400">
          LinkedIn
        </a>
        <a href="#" className="hover:text-green-400">
          GitHub
        </a>
        <a href="mailto:hello@evanrafa.com" className="hover:text-green-400">
          hello@evanrafa.com
        </a>
      </div>
      <p>© 2026 Evan Rafa • Bangkalan</p>
    </footer>
  );
}
