"use client";
import { useState } from "react";
import Homepage from "./pages/home";
import ContactPage from "./pages/contact"; // Example additional page
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("home");

  const renderPage = () => {
    switch (selectedPage) {
      case "home":
        return <Homepage />;
      case "contacts":
        return <ContactPage />;
      default:
        return <Homepage />;
    }
  };

  return (
    <div>
      <Navbar onSelectPage={setSelectedPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}
