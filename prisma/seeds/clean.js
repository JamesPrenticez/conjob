const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

console.log("~~~ Clean.js ~~~")
async function clean() {  
    await prisma.user.deleteMany({})
    await prisma.project.deleteMany({})
    await prisma.userProject.deleteMany({})
    await prisma.trade.deleteMany({})
    const w = await prisma.user.findMany()
    const x = await prisma.project.findMany()
    const y = await prisma.userProject.findMany()
    const z = await prisma.trade.findMany()

    console.log("users: " + w.length, " | ", "projects: " + x.length,   " | ", "userProjects: " + y.length,   " | ", "trades: " + z.length)
  }

  clean()

module.exports = {clean}