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
      trades: {
        create: [
        { name: "pg", code: 64 },
        { name: "demolition", code: 128 },
        { name: "excavation", code: 192 },
        { name: "reinforcing", code: 256 },
        { name: "masonry", code: 320 },
        { name: "concrete", code: 384 },
        { name: "structural_steel", code: 448 },
        { name: "carpentry", code: 0700 },
        { name: "cladding", code: 0800 },
        { name: "prenail_frames", code: 0900 },
        { name: "interior_doors", code: 1000 },
        { name: "hardware", code: 1100 },
        { name: "aluminium_joinery", code: 1200 },
        { name: "garage_door", code: 1300 },
        { name: "roof", code: 1400 },
        { name: "spouting_downpipes", code: 1500 },
        { name: "plumbing_drainage", code: 1600 },
        { name: "electrical", code: 1700 },
        { name: "insulation", code: 1800 },
        { name: "metal_ceiling_battens", code: 1900 },
        { name: "plasterboard_linings", code: 2000 },
        { name: "gib_stopping", code: 2100 },
        { name: "painting", code: 2200 },
        { name: "glazing", code: 2300 },
        { name: "landscaping", code: 2400 },
        { name: "plumbing_fittings_and_fixtures", code: 2500 },
        { name: "floor_coverings", code: 2600 },
        { name: "kitchen_appliances", code: 2700 },
        { name: "joinery", code: 2800 },
      ]
      },
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