"use client";
import { useState } from "react";
import Homepage from "./pages/home";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import About from "./pages/about";
import Projects from "./pages/projects";
import Events from "./pages/events";
import Members from "./pages/members";
import Achievements from "./pages/achievements";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("home");

  const renderPage = () => {
    switch (selectedPage) {
      case "home":
        return <Homepage />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />; 
      case "events":
        return <Events />;
      case "achievements":
        return <Achievements />;
      case "members":
        return <Members />;
      case "contact":
        return <Contact/>;
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
