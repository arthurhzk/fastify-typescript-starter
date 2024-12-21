import { beforeEach, describe, expect, it } from 'vitest';
import sinon from 'sinon';
import { RegistrationController } from '../../../server/presentation/controllers/registration.controller';
import { registrationFakeInput } from '../../domain/registration.fake';
import { ServerError } from '../../../shared/errors/server-error.error';

describe('RegistrationController', () => {
  let sut: RegistrationController;

  beforeEach(() => {
    sut = new RegistrationController();
  });

  it('should return 400 if no email is provided', async () => {
    const httpRequest = {
      body: {
        name: registrationFakeInput.name
      }
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });

  it('should return 400 if no name is provided', async () => {
    const httpRequest = {
      body: {
        email: registrationFakeInput.email
      }
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });

  it('should return 400 if password and passwordConfirmation do not match', async () => {
    const httpRequest = {
      body: {
        email: registrationFakeInput.email,
        name: registrationFakeInput.name,
        password: registrationFakeInput.password,
        passwordConfirmation: registrationFakeInput.password + '1'
      }
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });

  it('should return 400 if no password is provided', async () => {
    const httpRequest = {
      body: {
        email: registrationFakeInput.email,
        name: registrationFakeInput.name
      }
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });

  it('should return 200 if valid data is provided', async () => {
    const httpRequest = {
      body: {
        email: registrationFakeInput.email,
        name: registrationFakeInput.name,
        password: registrationFakeInput.password,
        passwordConfirmation: registrationFakeInput.password
      }
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(200);
  });

  it('should return 500 if an error occurs', async () => {
    const httpRequest = {
      body: {
        email: registrationFakeInput.email,
        name: registrationFakeInput.name,
        password: registrationFakeInput.password,
        passwordConfirmation: registrationFakeInput.password
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
