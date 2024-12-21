import { beforeEach, describe, expect, it } from 'vitest';
import sinon from 'sinon';
import { AuthenticationController } from '../../../server/presentation/controllers/authentication.controller';
import { authenticationFakeInput } from '../../domain/authentication.fake';
import { ServerError } from '../../../shared/errors/server-error.error';

describe('AuthenticationController', () => {
  let sut: AuthenticationController;

  beforeEach(() => {
    sut = new AuthenticationController();
  });
  it('should return 400 if no email is provided', async () => {
    const httpRequest = {
      body: {
        password: authenticationFakeInput.password
      }
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
  it('should return 400 if no password is provided', async () => {
    const httpRequest = {
      body: {
        email: authenticationFakeInput.email
      }
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
  it('should return 500 if an error occurs', async () => {
    const httpRequest = {
      body: {
        email: authenticationFakeInput.email,
        password: authenticationFakeInput.password
      }
    };
    sinon.stub(sut, 'handle').throws(new ServerError('Internal server error'));
    try {
      await sut.handle(httpRequest);
    } catch (error) {
      expect(error).toBeInstanceOf(ServerError);
    }
    sinon.restore();
  });
});
