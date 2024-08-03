import Footer from "@/components/home/Footer";
import NavBar from "@/components/home/NavBar";
import DrinksList from "@/components/menu/drinks/DrinksList";

const page = () => {
  return (
    <>
      <NavBar />
      <DrinksList />
      <Footer />
    </>
  );
};

export default page;
