import prisma from '../../lib/prisma';

export default async function getProjects(req, res){
  const projects = await prisma.project.findMany()
  return res.status(200).json(projects)
}
