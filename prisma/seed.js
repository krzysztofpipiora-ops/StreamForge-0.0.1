const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  await prisma.user.upsert({
    where: { email: 'streamforge@localhost' },
    update: {
      name: 'StreamForge Admin',
      image: 'https://placehold.co/128x128?text=SF',
    },
    create: {
      name: 'StreamForge Admin',
      email: 'streamforge@localhost',
      emailVerified: new Date(),
      image: 'https://placehold.co/128x128?text=SF',
    },
  })

  console.log('✅ Seed data created successfully.')
}

main()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
