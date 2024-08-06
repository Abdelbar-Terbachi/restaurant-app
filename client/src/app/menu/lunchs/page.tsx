import Footer from "@/components/home/Footer";
import NavBar from "@/components/home/NavBar";
import LunchsList from "@/components/menu/lunchs/LunchsList";

const page = () => {
  return (
    <>
      <NavBar />
      <LunchsList />
      <Footer />
    </>
  );
};

export default page;
