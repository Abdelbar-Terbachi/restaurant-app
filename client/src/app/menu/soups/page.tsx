import Footer from "@/components/home/Footer";
import NavBar from "@/components/home/NavBar";
import SoupesLists from "@/components/menu/soups/SoupesLists";

const page = () => {
  return (
    <>
      <NavBar />
      <SoupesLists />
      <Footer />
    </>
  );
};

export default page;
