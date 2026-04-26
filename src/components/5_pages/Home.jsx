import "../../styles/home.css";
import MainLayout from "../4_templates/MainLayout";
import Hero from "../3_organisms/Hero";
import CoreCapabilities from "../3_organisms/CoreCapabilities";
import RecentProject from "../3_organisms/RecentProject";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <CoreCapabilities />
      <RecentProject />
    </MainLayout>
  );
}
