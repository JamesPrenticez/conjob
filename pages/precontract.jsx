import Header from "../components/Header";
import Footer from "../components/Footer";

import ProjectList from "../components/PreContract/ProjectList";


function tenders({projects}) {
  return (
    <>
      <Header/>
      <ProjectList projects={projects} />
      <Footer />
    </>
  )
}

export default tenders

export const getServerSideProps = async ctx  => {
  const res = await fetch('http://localhost:3000/api/projects/')
  const projects = await res.json() 
  return {props: {projects}}
}