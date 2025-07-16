export default function MainContent({ children }) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4">
      <div className="border-x border-dashed border-zinc-300 px-4">
        {children}
      </div>
    </main>
  );
}
