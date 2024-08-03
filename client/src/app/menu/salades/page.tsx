import Footer from "@/components/home/Footer";
import NavBar from "@/components/home/NavBar";
import SaladesList from "@/components/menu/salades/SaladesList";

const page = () => {
  return (
    <>
      <NavBar />
      <SaladesList />
      <Footer />
    </>
  );
};

export default page;
