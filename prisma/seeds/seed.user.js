const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {

  const james = await prisma.user.upsert({
    where: { email: 'james@conjob.co.nz' },
    update: {},
    create: {
      email: 'james@conjob.co.nz',
      name: 'James',
    },
  })

  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@conjob.co.nz',
      name: 'Bob',
    },
  })

  console.log({ james, bob })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })