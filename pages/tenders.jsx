import Header from "../components/Header";
import Footer from "../components/Footer";

import ProjectList from "../components/Tenders/ProjectList";
import TenderCalander from "../components/Tenders/TenderCalander";
import ViewProject from "../components/Tenders/viewProject";


function tenders() {
  return (
    <>
      <Header/>
      <ProjectList />
      <Footer />
    </>
  )
}

export default tenders
