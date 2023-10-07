import { faker } from '@faker-js/faker';

export function getRandomUserData(role) {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    designation: role,
    dob: faker.date.past(30, '2000-01-01').toLocaleDateString(),
    color: faker.internet.color()
  };
}
