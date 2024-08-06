import Footer from "@/components/home/Footer";
import NavBar from "@/components/home/NavBar";
import BreakfastsList from "@/components/menu/breakfasts/BreakFList";

const page = () => {
  return (
    <>
      <NavBar />
      <BreakfastsList />
      <Footer />
    </>
  );
};

export default page;
