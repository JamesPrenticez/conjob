const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {

  const pg = await prisma.tradeName.upsert({
    where: { code: 0000 },
    update: {},
    create: {
      code: 0000,
      name: 'Preliminary and General',
    },
  })

  const demolition = await prisma.tradeName.upsert({
    where: { code: 0100 },
    update: {},
    create: {
      code: 0100,
      name: 'Demolition',
    },
  })

  const excavation = await prisma.tradeName.upsert({
    where: { code: 0200 },
    update: {},
    create: {
      code: 0200,
      name: 'Excavation',
    },
  })

  const reinforcing = await prisma.tradeName.upsert({
    where: { code: 0300 },
    update: {},
    create: {
      code: 0300,
      name: 'Reinforcing',
    },
  })

  const masonry = await prisma.tradeName.upsert({
    where: { code: 0400 },
    update: {},
    create: {
      code: 0400,
      name: 'Masonry',
    },
  })

  const concrete = await prisma.tradeName.upsert({
    where: { code: 0500 },
    update: {},
    create: {
      code: 0500,
      name: 'Concrete',
    },
  })

  const structural_steel = await prisma.tradeName.upsert({
    where: { code: 0600 },
    update: {},
    create: {
      code: 0600,
      name: 'Concrete',
    },
  })

  const carpentry = await prisma.tradeName.upsert({
    where: { code: 0700 },
    update: {},
    create: {
      code: 0700,
      name: 'Carpentry',
    },
  })

  const cladding = await prisma.tradeName.upsert({
    where: { code: 0800 },
    update: {},
    create: {
      code: 0800,
      name: 'Aluminium Joinery',
    },
  })

  const prenail_frames = await prisma.tradeName.upsert({
    where: { code: 0900 },
    update: {},
    create: {
      code: 0900,
      name: 'Prenail Frames & Trusses',
    },
  })

  const interior_doors = await prisma.tradeName.upsert({
    where: { code: 1000 },
    update: {},
    create: {
      code: 1000,
      name: 'Aluminium Joinery',
    },
  })

  const hardware = await prisma.tradeName.upsert({
    where: { code: 1100 },
    update: {},
    create: {
      code: 1100,
      name: 'Hardware',
    },
  })

  const aluminium_joinery = await prisma.tradeName.upsert({
    where: { code: 1200 },
    update: {},
    create: {
      code: 1200,
      name: 'Aluminium Joinery',
    },
  })

  const garage_door = await prisma.tradeName.upsert({
    where: { code: 1300 },
    update: {},
    create: {
      code: 1300,
      name: 'Garage Door',
    },
  })

  const roof = await prisma.tradeName.upsert({
    where: { code: 1400 },
    update: {},
    create: {
      code: 1400,
      name: 'Roof',
    },
  })

  const spouting_downpipes = await prisma.tradeName.upsert({
    where: { code: 1500 },
    update: {},
    create: {
      code: 1500,
      name: 'Spouting & Downpipes',
    },
  })

  const plumbing_drainage = await prisma.tradeName.upsert({
    where: { code: 1600 },
    update: {},
    create: {
      code: 1600,
      name: 'Plumbing & Drainage',
    },
  })

  const electrical = await prisma.tradeName.upsert({
    where: { code: 1700 },
    update: {},
    create: {
      code: 1700,
      name: 'Electrical',
    },
  })

  const insulation = await prisma.tradeName.upsert({
    where: { code: 1800 },
    update: {},
    create: {
      code: 1800,
      name: 'Insulation',
    },
  })

  const metal_ceiling_battens = await prisma.tradeName.upsert({
    where: { code: 1900 },
    update: {},
    create: {
      code: 1900,
      name: 'Metal Ceiling Battens',
    },
  })

  const plasterboard_linings = await prisma.tradeName.upsert({
    where: { code: 2000 },
    update: {},
    create: {
      code: 2000,
      name: 'Plasterboard Linings',
    },
  })

  const gib_stopping = await prisma.tradeName.upsert({
    where: { code: 2100 },
    update: {},
    create: {
      code: 2100,
      name: 'GIB Stopping',
    },
  })

  const painting = await prisma.tradeName.upsert({
    where: { code: 2200 },
    update: {},
    create: {
      code: 2200,
      name: 'Painting',
    },
  })

  const glazing = await prisma.tradeName.upsert({
    where: { code: 2300 },
    update: {},
    create: {
      code: 2300,
      name: 'Glazing',
    },
  })

  const landscaping = await prisma.tradeName.upsert({
    where: { code: 2400 },
    update: {},
    create: {
      code: 2400,
      name: 'Landscaping',
    },
  })

  const plumbing_fittings_and_fixtures = await prisma.tradeName.upsert({
    where: { code: 2500 },
    update: {},
    create: {
      code: 2500,
      name: 'Plumbing Fittings & Fixtures',
    },
  })

  const floor_coverings = await prisma.tradeName.upsert({
    where: { code: 2600 },
    update: {},
    create: {
      code: 2600,
      name: 'Floor Coverings',
    },
  })

  const kitchen_appliances = await prisma.tradeName.upsert({
    where: { code: 2700 },
    update: {},
    create: {
      code: 2700,
      name: 'Kitchen Appliances',
    },
  })

  const joinery = await prisma.tradeName.upsert({
    where: { code: 2800 },
    update: {},
    create: {
      code: 2800,
      name: 'Joinery',
    },
  })

  console.log({ 
    pg,
    demolition,
    excavation,
    reinforcing,
    masonry,
    concrete,
    structural_steel,
    carpentry,
    cladding,
    prenail_frames,
    interior_doors,
    hardware,
    aluminium_joinery,
    garage_door,
    roof,
    spouting_downpipes,
    plumbing_drainage,
    electrical,
    insulation,
    metal_ceiling_battens,
    plasterboard_linings,
    gib_stopping,
    painting,
    glazing,
    landscaping,
    plumbing_fittings_and_fixtures,
    floor_coverings,
    kitchen_appliances,
    joinery,
  })
}


main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
  