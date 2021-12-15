const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {

  const projectone = await prisma.project.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'project one',
      code: 'JOB001',
      plans: '/plans/project1.pdf',
      specification: '/specification/project1.pdf',
    },
  })

  const projecttwo = await prisma.project.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'project two',
      code: 'JOB002',
      plans: '/plans/project2.pdf',
      specification: '/specification/project2.pdf',
    },
  })

  const projectthree = await prisma.project.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'project three',
      code: 'JOB003',
      plans: '/plans/project3.pdf',
      specification: '/specification/project3.pdf',
    },
  })

  console.log({ projectone, projecttwo, projectthree })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })