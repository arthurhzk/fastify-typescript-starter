import { faker } from '@faker-js/faker';

import type { Registration } from '../../server/domain/registration.dto';

export const registrationFakeInput: Registration.Input = {
  email: faker.internet.email(),
  password: faker.internet.password(),
  confirmPassword: faker.internet.password(),
  name: faker.person.fullName()
};
