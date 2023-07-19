import React from "react";
// sections
import TopNavbar from "../Nav/topNav";
import Header from "../Sections/header";
import Services from "../Sections/services";
import Projects from "../Sections/projects";
import Blog from "../Sections/blog";
import Contact from "../Sections/contact";
import Footer from "../Sections/footer";
import Sidebar from "../Nav/sidebar";





function Landing() {
    return (
      <>
        <TopNavbar />
        <Header />
        <Services />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
      </>
    );
  }

export default Landing;  