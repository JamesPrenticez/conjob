const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const {users} = require('./users')
const {projects} = require('./projects')
const {userProjects} = require('./userProjects')
const {trades} = require('./trades')

// Any normal person would use createMany but... thats not supported when using SQlite?? wdF? okay dumb... how hard is it to write a loop?
// Order of operations works backwards through table realtions eg. each user has many projects therefore we need to make projects before making users?
// 1) Clean the DB
// 2)

async function main() {
  //Users
  for( i = 0; i < users.length; i++){
    const item = users[i]
    await prisma.user.create({
      data: item
    });
  }

  const a = await prisma.user.findMany()
  console.log(a)

  //Projects
  for( i = 0; i < projects.length; i++){
    const item = projects[i]
    await prisma.project.create({
      data: item
    });
  }

  const b = await prisma.project.findMany()
  console.log(b)

  //User Projects
  for( i = 0; i < userProjects.length; i++){
    const item = userProjects[i]
    await prisma.userProject.create({
      data: item
    });
  }

  const c = await prisma.userProject.findMany()
  console.log(c)

  //Trades
  for( i = 0; i < trades.length; i++){
    const item = trades[i]
    await prisma.trade.create({
      data: item
    });
  }

  const d = await prisma.project.findMany()
  console.log(d)
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  //https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany-preview