import Footer from "@/components/home/Footer";
import NavBar from "@/components/home/NavBar";
import DessertsList from "@/components/menu/desserts/DessertsList";

const page = () => {
  return (
    <>
      <NavBar />
      <DessertsList />
      <Footer />
    </>
  );
};

export default page;
