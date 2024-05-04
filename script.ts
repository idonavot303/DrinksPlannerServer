import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here

  //create event entry to db:
  //   const event = await prisma.event.create({
  //     data: {
  //       name: 'Birthday Party',
  //     },
  //   });
  //   console.log(event);

  //   get all events query:
  const events = await prisma.event.findMany();
  console.log(events);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
