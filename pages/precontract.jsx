import prisma from '../lib/prisma';

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
  const projects = await prisma.project.findMany()//where company id
  return {props: {projects}}
}