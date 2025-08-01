import Header from "../3_organisms/Header";
import Footer from "../3_organisms/Footer"
import data from "../../../data.json"

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4">
        <div className="border-x-2 border-dashed border-zinc-300 px-4">
          {children}
        </div>
      </main>
      <Footer {...data} />
    </>
  );
}
