import CardsComponent from "@/components/home/CardsComponent";
import Footer from "@/components/home/Footer";
import ImageSlider from "@/components/home/ImageSlider";
import LocationComponent from "@/components/home/LocationComponent";
import MenuHighlightsComponent from "@/components/home/MenuHighlightsComponent";
import NavBar from "@/components/home/NavBar";
import ReviewsSection from "@/components/home/ReviewsSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <ImageSlider />
      <CardsComponent />
      <MenuHighlightsComponent />
      <ReviewsSection />
      <LocationComponent />
      <Footer />
    </>
  );
}
