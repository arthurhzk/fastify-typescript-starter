import { beforeEach, describe, expect, it } from 'vitest';
import { AuthenticationController } from '../../../server/presentation/controllers/authentication.controller';
import { authenticationFakeInput } from '../../domain/authentication.fake';

describe('AuthenticationController', () => {
  let authenticationController: AuthenticationController;

  beforeEach(() => {
    authenticationController = new AuthenticationController();
  });
  it('should return 400 if no email is provided', async () => {
    const httpRequest = {
      body: {
        password: authenticationFakeInput.password
      }
    };
    const httpResponse = await authenticationController.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
  it('should return 400 if no password is provided', async () => {
    const httpRequest = {
      body: {
        email: authenticationFakeInput.email
      }
    };
    const httpResponse = await authenticationController.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
