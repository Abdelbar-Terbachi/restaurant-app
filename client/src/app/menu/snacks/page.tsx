import Footer from "@/components/home/Footer";
import NavBar from "@/components/home/NavBar";
import SnacksList from "@/components/menu/snacks/SnacksList";
import React from "react";

const page = () => {
  return (
    <>
      <NavBar />
      <SnacksList />
      <Footer />
    </>
  );
};

export default page;
