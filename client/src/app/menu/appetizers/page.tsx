import Footer from "@/components/home/Footer";
import NavBar from "@/components/home/NavBar";
import AppetizersList from "@/components/menu/appetizers/AppertizersList";

const page = () => {
  return (
    <>
      <NavBar />
      <AppetizersList />
      <Footer />
    </>
  );
};

export default page;
