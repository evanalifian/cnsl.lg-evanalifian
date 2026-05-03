export default function Footer(props) {
  const hour = new Date().getHours();
  // Status offline jika di atas jam 10 malam atau di bawah jam 8 pagi
  const status = hour > 22 || hour < 8 ? "offline" : "online";

  return (
    <footer
      id="contact"
      className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-zinc-900 pt-10 pb-6 text-[10px] tracking-widest text-zinc-600 uppercase md:flex-row"
    >
      <p>
        system_status:{" "}
        {status === "online" ? (
          <span className="font-bold text-blue-500 shadow-blue-500/20 drop-shadow-sm">
            ● Online
          </span>
        ) : (
          <span className="text-zinc-700 italic">○ Offline</span>
        )}{" "}
        <span className="mx-2 text-zinc-800">|</span>
        last_updated: 2026.04.23
      </p>

      <div className="flex space-x-6">
        <a
          href="https://linkedin.com/in/evanrafa"
          className="transition-colors hover:text-blue-400"
        >
          ./LinkedIn
        </a>
        <a
          href="https://github.com/evanrafa"
          className="transition-colors hover:text-blue-400"
        >
          ./GitHub
        </a>
        <a
          href="mailto:hello@evanrafa.com"
          className="lowercase italic transition-colors hover:text-blue-400"
        >
          hello@evanrafa.com
        </a>
      </div>

      <p className="text-zinc-500">© 2026 Evan Rafa • Bangkalan [ID]</p>
    </footer>
  );
}
