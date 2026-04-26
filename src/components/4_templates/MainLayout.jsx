import Footer from "../3_organisms/Footer";
import Navbar from "../3_organisms/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main class="mx-auto mt-32 max-w-7xl space-y-24 pb-20">{children}</main>
      <Footer />
    </>
  );
}
