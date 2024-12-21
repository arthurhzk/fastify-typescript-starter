import { faker } from '@faker-js/faker';

import type { Authentication } from '@auth/server/domain/authentication.dto';

export const authenticationFakeInput: Authentication.Input = {
  email: faker.internet.email(),
  password: faker.internet.password()
};
