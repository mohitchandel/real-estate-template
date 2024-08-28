import Header from "@/components/ui/home/Header";
import Properties from "@/components/ui/home/Properties"
import Choose_us from "@/components/ui/home/Choose_us";
import Reviews from "@/components/ui/home/Reviews";
import Agents from "@/components/ui/home/Agents";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Properties />
      <Agents />
      <Choose_us />
      <Reviews />

      <Footer />
    </>
  );
}
