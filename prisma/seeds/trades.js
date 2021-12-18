const trades = [
  {
    projectId: 1,
    costCode: 0,
    name: 'Preliminary and General',
    tenders: "['n/a']",
    assigned: 'In House',
    estimateValue: 50000,
    contractValue: 50000,
    subAgreementStatus: 'n/a',
    subAgreementURL: 'conjob001/trades/0000 Preliminary and General/subcontractor/agreement'
  },
  {
    projectId: 1,
    costCode: 100,
    name: 'Demolition',
    tenders: "['Demo Machine', 'Wrecking Ball', 'Break Stuff']",
    assigned: 'Wrecking Ball',
    estimateValue: 15000,
    contractValue: 14548,
    subAgreementStatus: 'signed',
    subAgreementURL: 'conjob001/trades/0100 Demolition/subcontractor/agreement'
  },
  {
    projectId: 1,
    costCode: 200,
    name: 'Excavation',
    tenders: "['RJ Civil', 'Bob's Bobcat's', 'KB Excavtion']",
    assigned: 'RJ Civil',
    estimateValue: 25000,
    contractValue: 24788,
    subAgreementStatus: 'signed',
    subAgreementURL: 'conjob001/trades/0200 Excavation/subcontractor/agreement'
  },
  {
    projectId: 1,
    costCode: 300,
    name: 'Reinforcing',
    tenders: "['Steel & Tube', 'Complete Reiforcing', 'Fletcher Reo']",
    assigned: 'Complete Reiforcing',
    estimateValue: 8000,
    contractValue: 7888,
    subAgreementStatus: 'signed',
    subAgreementURL: 'conjob001/trades/0300 Reinforcing/subcontractor/agreement'
  },
  {
    projectId: 1,
    costCode: 400,
    name: 'Concrete',
    tenders: "['Southern Foundations', 'Reliable Foundations LTD', 'Concrete Pads LTD']",
    assigned: 'Reliable Foundations LTD',
    estimateValue: 25000,
    contractValue: 24391,
    subAgreementStatus: 'signed',
    subAgreementURL: 'conjob001/trades/0400 Concrete/subcontractor/agreement'
  },
  {
    projectId: 1,
    costCode: 500,
    name: 'Brick and Masonry Block',
    tenders: "['Vercel Masonary', 'Barry's Brick 'n' Block', 'Master Masons']",
    assigned: 'Barry\'s Brick \'n\' Block',
    estimateValue: 40000,
    contractValue: 37888,
    subAgreementStatus: 'signed',
    subAgreementURL: 'conjob001/trades/0500 Brick and Masonry Block/subcontractor/agreement'
  },
  {
    projectId: 1,
    costCode: 600,
    name: 'Structural Steel',
    tenders: "['John Jones Steel', 'Superior Steel', 'Action Engineering']",
    assigned: 'John Jones Steel',
    estimateValue: 4789,
    contractValue: 4789,
    subAgreementStatus: 'signed',
    subAgreementURL: 'conjob001/trades/0600 Structural Steel/subcontractor/agreement'
  },
  {
    projectId: 1,
    costCode: 700,
    name: 'Carpentry',
    tenders: "['In House']",
    assigned: 'In House',
    estimateValue: 75893,
    contractValue: 69458,
    subAgreementStatus: 'n/a',
    subAgreementURL: 'conjob001/trades/0300 Carpentry/subcontractor/agreement'
  },
];

module.exports = {trades}

//   const cladding = await prisma.trade.upsert({
//     where: { code: 576 },
//     update: {},
//     create: {
//       id: 8,
//       code: 576,
//       name: 'Aluminium Joinery',
//       projectId: 2,
//     },
//   })

//   const prenail_frames = await prisma.trade.upsert({
//     where: { code: 640 },
//     update: {},
//     create: {
//       id: 9,
//       code: 640,
//       name: 'Prenail Frames & Trusses',
//       projectId: 2,
//     },
//   })

//   const interior_doors = await prisma.trade.upsert({
//     where: { code: 1000 },
//     update: {},
//     create: {
//       id: 10,
//       code: 1000,
//       name: 'Aluminium Joinery',
//       projectId: 2,
//     },
//   })

//   const hardware = await prisma.trade.upsert({
//     where: { code: 1100 },
//     update: {},
//     create: {
//       id: 11,
//       code: 1100,
//       name: 'Hardware',
//       projectId: 2,
//     },
//   })

//   const aluminium_joinery = await prisma.trade.upsert({
//     where: { code: 1200 },
//     update: {},
//     create: {
//       id: 12,
//       code: 1200,
//       name: 'Aluminium Joinery',
//       projectId: 2,
//     },
//   })

//   const garage_door = await prisma.trade.upsert({
//     where: { code: 1300 },
//     update: {},
//     create: {
//       id: 13,
//       code: 1300,
//       name: 'Garage Door',
//       projectId: 2,
//     },
//   })

//   const roof = await prisma.trade.upsert({
//     where: { code: 1400 },
//     update: {},
//     create: {
//       id: 14,
//       code: 1400,
//       name: 'Roof',
//       projectId: 2,
//     },
//   })

//   const spouting_downpipes = await prisma.trade.upsert({
//     where: { code: 1500 },
//     update: {},
//     create: {
//       id: 15,
//       code: 1500,
//       name: 'Spouting & Downpipes',
//       projectId: 2,
//     },
//   })

//   const plumbing_drainage = await prisma.trade.upsert({
//     where: { code: 1600 },
//     update: {},
//     create: {
//       id: 16,
//       code: 1600,
//       name: 'Plumbing & Drainage',
//       projectId: 2,
//     },
//   })

//   const electrical = await prisma.trade.upsert({
//     where: { code: 1700 },
//     update: {},
//     create: {
//       id: 17,
//       code: 1700,
//       name: 'Electrical',
//       projectId: 2,
//     },
//   })

//   const insulation = await prisma.trade.upsert({
//     where: { code: 1800 },
//     update: {},
//     create: {
//       id: 18,
//       code: 1800,
//       name: 'Insulation',
//       projectId: 2,
//     },
//   })

//   const metal_ceiling_battens = await prisma.trade.upsert({
//     where: { code: 1900 },
//     update: {},
//     create: {
//       id: 19,
//       code: 1900,
//       name: 'Metal Ceiling Battens',
//       projectId: 2,
//     },
//   })

//   const plasterboard_linings = await prisma.trade.upsert({
//     where: { code: 2000 },
//     update: {},
//     create: {
//       id: 20,
//       code: 2000,
//       name: 'Plasterboard Linings',
//       projectId: 2,
//     },
//   })

//   const gib_stopping = await prisma.trade.upsert({
//     where: { code: 2100 },
//     update: {},
//     create: {
//       id: 21,
//       code: 2100,
//       name: 'GIB Stopping',
//       projectId: 2,
//     },
//   })

//   const painting = await prisma.trade.upsert({
//     where: { code: 2200 },
//     update: {},
//     create: {
//       id: 22,
//       code: 2200,
//       name: 'Painting',
//       projectId: 2,
//     },
//   })

//   const glazing = await prisma.trade.upsert({
//     where: { code: 2300 },
//     update: {},
//     create: {
//       id: 23,
//       code: 2300,
//       name: 'Glazing',
//       projectId: 2,
//     },
//   })

//   const landscaping = await prisma.trade.upsert({
//     where: { code: 2400 },
//     update: {},
//     create: {
//       id: 24,
//       code: 2400,
//       name: 'Landscaping',
//       projectId: 2,
//     },
//   })

//   const plumbing_fittings_and_fixtures = await prisma.trade.upsert({
//     where: { code: 2500 },
//     update: {},
//     create: {
//       id: 25,
//       code: 2500,
//       name: 'Plumbing Fittings & Fixtures',
//       projectId: 2,
//     },
//   })

//   const floor_coverings = await prisma.trade.upsert({
//     where: { code: 2600 },
//     update: {},
//     create: {
//       id: 26,
//       code: 2600,
//       name: 'Floor Coverings',
//       projectId: 2,
//     },
//   })

//   const kitchen_appliances = await prisma.trade.upsert({
//     where: { code: 2700 },
//     update: {},
//     create: {
//       id: 27,
//       code: 2700,
//       name: 'Kitchen Appliances',
//       projectId: 2,
//     },
//   })

//   const joinery = await prisma.trade.upsert({
//     where: { code: 2800 },
//     update: {},
//     create: {
//       id: 28,
//       code: 2800,
//       name: 'Joinery',
//       projectId: 2,
//     },
//   })

//   console.log({ 
//     pg,
//     demolition,
//     excavation,
//     reinforcing,
//     masonry,
//     concrete,
//     structural_steel,
//     carpentry,
//     cladding,
//     prenail_frames,
//     interior_doors,
//     hardware,
//     aluminium_joinery,
//     garage_door,
//     roof,
//     spouting_downpipes,
//     plumbing_drainage,
//     electrical,
//     insulation,
//     metal_ceiling_battens,
//     plasterboard_linings,
//     gib_stopping,
//     painting,
//     glazing,
//     landscaping,
//     plumbing_fittings_and_fixtures,
//     floor_coverings,
//     kitchen_appliances,
//     joinery,
//   })
// }