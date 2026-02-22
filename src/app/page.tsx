import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Destinations from "@/components/Destinations";
import Itineraries from "@/components/Itineraries";
import Gallery from "@/components/Gallery";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

/**
 * Wildpulse Photographic Tours — Landing Page
 * Composes all sections into a single-page layout.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Advantages />
      <Destinations />
      <Itineraries />
      <Gallery />
      <BookingForm />
      <Footer />
    </>
  );
}
