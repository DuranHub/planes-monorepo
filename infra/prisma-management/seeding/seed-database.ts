import { faker } from '@faker-js/faker';
import prisma from './prisma';

async function seed() {
  
  const totalUsers = 10;

  for (let index = 0; index < totalUsers; index++) {
    await prisma.user.create({
      data: {
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phone: faker.phone.number(),
        address: faker.location.secondaryAddress()
      },
    });
  }

}

seed()
  .catch((e) => {
    throw new Error ("Error: " + e.message)
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
