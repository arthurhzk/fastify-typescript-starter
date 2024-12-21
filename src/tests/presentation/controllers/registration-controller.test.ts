/* eslint-disable prefer-template */
import { beforeEach, describe, expect, it } from 'vitest';
import { RegistrationController } from '../../../server/presentation/controllers/registration-controller';
import { registrationFakeInput } from '../../domain/registration.fake';

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
    expect(httpResponse).toEqual({
      statusCode: 400,
      body: new Error('Missing param: email')
    });
  });
  it('should return 400 if no name is provided', async () => {
    const httpRequest = {
      body: {
        email: registrationFakeInput.email
      }
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual({
      statusCode: 400,
      body: new Error('Missing param: name')
    });
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
    expect(httpResponse).toEqual({
      statusCode: 400,
      body: new Error('Passwords do not match')
    });
  });
  it('should return 400 if no password is provided', async () => {
    const httpRequest = {
      body: {
        email: registrationFakeInput.email,
        name: registrationFakeInput.name
      }
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse).toEqual({
      statusCode: 400,
      body: new Error('Missing param: password')
    });
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
    expect(httpResponse).toEqual({
      statusCode: 200,
      body: {
        email: registrationFakeInput.email,
        name: registrationFakeInput.name
      }
    });
  });
});
