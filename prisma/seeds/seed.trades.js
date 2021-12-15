const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {

  const pg = await prisma.trade.upsert({
    where: { code: 64 },
    update: {},
    create: {
      id: 1,
      code: 64,
      name: 'Preliminary and General',
      projectId: 2,
    }
  })

  const demolition = await prisma.trade.upsert({
    where: { code: 128 },
    update: {},
    create: {
      code: 128,
      name: 'Demolition',
      projectId: 2,
    },
  })

  const excavation = await prisma.trade.upsert({
    where: { code: 192 },
    update: {},
    create: {
      code: 192,
      name: 'Excavation',
      projectId: 2,
    },
  })

  const reinforcing = await prisma.trade.upsert({
    where: { code: 256 },
    update: {},
    create: {
      code: 256,
      name: 'Reinforcing',
      projectId: 2,
    },
  })

  const masonry = await prisma.trade.upsert({
    where: { code: 320 },
    update: {},
    create: {
      code: 320,
      name: 'Masonry',
      projectId: 2,
    },
  })

  const concrete = await prisma.trade.upsert({
    where: { code: 384 },
    update: {},
    create: {
      code: 384,
      name: 'Concrete',
      projectId: 2,
    },
  })

  const structural_steel = await prisma.trade.upsert({
    where: { code: 448 },
    update: {},
    create: {
      code: 448,
      name: 'Structural Steel',
      projectId: 2,
    },
  })

  const carpentry = await prisma.trade.upsert({
    where: { code: 0700 },
    update: {},
    create: {
      code: 0700,
      name: 'Carpentry',
      projectId: 2,
    },
  })

  const cladding = await prisma.trade.upsert({
    where: { code: 0800 },
    update: {},
    create: {
      code: 0800,
      name: 'Aluminium Joinery',
      projectId: 2,
    },
  })

  const prenail_frames = await prisma.trade.upsert({
    where: { code: 0900 },
    update: {},
    create: {
      code: 0900,
      name: 'Prenail Frames & Trusses',
      projectId: 2,
    },
  })

  const interior_doors = await prisma.trade.upsert({
    where: { code: 1000 },
    update: {},
    create: {
      code: 1000,
      name: 'Aluminium Joinery',
      projectId: 2,
    },
  })

  const hardware = await prisma.trade.upsert({
    where: { code: 1100 },
    update: {},
    create: {
      code: 1100,
      name: 'Hardware',
      projectId: 2,
    },
  })

  const aluminium_joinery = await prisma.trade.upsert({
    where: { code: 1200 },
    update: {},
    create: {
      code: 1200,
      name: 'Aluminium Joinery',
      projectId: 2,
    },
  })

  const garage_door = await prisma.trade.upsert({
    where: { code: 1300 },
    update: {},
    create: {
      code: 1300,
      name: 'Garage Door',
      projectId: 2,
    },
  })

  const roof = await prisma.trade.upsert({
    where: { code: 1400 },
    update: {},
    create: {
      code: 1400,
      name: 'Roof',
      projectId: 2,
    },
  })

  const spouting_downpipes = await prisma.trade.upsert({
    where: { code: 1500 },
    update: {},
    create: {
      code: 1500,
      name: 'Spouting & Downpipes',
      projectId: 2,
    },
  })

  const plumbing_drainage = await prisma.trade.upsert({
    where: { code: 1600 },
    update: {},
    create: {
      code: 1600,
      name: 'Plumbing & Drainage',
      projectId: 2,
    },
  })

  const electrical = await prisma.trade.upsert({
    where: { code: 1700 },
    update: {},
    create: {
      code: 1700,
      name: 'Electrical',
      projectId: 2,
    },
  })

  const insulation = await prisma.trade.upsert({
    where: { code: 1800 },
    update: {},
    create: {
      code: 1800,
      name: 'Insulation',
      projectId: 2,
    },
  })

  const metal_ceiling_battens = await prisma.trade.upsert({
    where: { code: 1900 },
    update: {},
    create: {
      code: 1900,
      name: 'Metal Ceiling Battens',
      projectId: 2,
    },
  })

  const plasterboard_linings = await prisma.trade.upsert({
    where: { code: 2000 },
    update: {},
    create: {
      code: 2000,
      name: 'Plasterboard Linings',
      projectId: 2,
    },
  })

  const gib_stopping = await prisma.trade.upsert({
    where: { code: 2100 },
    update: {},
    create: {
      code: 2100,
      name: 'GIB Stopping',
      projectId: 2,
    },
  })

  const painting = await prisma.trade.upsert({
    where: { code: 2200 },
    update: {},
    create: {
      code: 2200,
      name: 'Painting',
      projectId: 2,
    },
  })

  const glazing = await prisma.trade.upsert({
    where: { code: 2300 },
    update: {},
    create: {
      code: 2300,
      name: 'Glazing',
      projectId: 2,
    },
  })

  const landscaping = await prisma.trade.upsert({
    where: { code: 2400 },
    update: {},
    create: {
      code: 2400,
      name: 'Landscaping',
      projectId: 2,
    },
  })

  const plumbing_fittings_and_fixtures = await prisma.trade.upsert({
    where: { code: 2500 },
    update: {},
    create: {
      code: 2500,
      name: 'Plumbing Fittings & Fixtures',
      projectId: 2,
    },
  })

  const floor_coverings = await prisma.trade.upsert({
    where: { code: 2600 },
    update: {},
    create: {
      code: 2600,
      name: 'Floor Coverings',
      projectId: 2,
    },
  })

  const kitchen_appliances = await prisma.trade.upsert({
    where: { code: 2700 },
    update: {},
    create: {
      code: 2700,
      name: 'Kitchen Appliances',
      projectId: 2,
    },
  })

  const joinery = await prisma.trade.upsert({
    where: { code: 2800 },
    update: {},
    create: {
      code: 2800,
      name: 'Joinery',
      projectId: 2,
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
  