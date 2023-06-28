import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-gray-300 relative">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
