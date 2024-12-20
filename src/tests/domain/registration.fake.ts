import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid';

import type { Registration } from '../../server/domain/registration.dto';

export const registrationFakeInput: Registration.Input = {
  email: faker.internet.email(),
  password: faker.internet.password(),
  confirmPassword: faker.internet.password(),
  name: faker.person.fullName()
};

export const registrationFakeOutput: Registration.Output = {
  id: uuid(),
  email: faker.internet.email(),
  name: faker.person.fullName()
};
