import { BadRequest } from '../../../shared/errors/bad-request.error';

export class RegistrationController {
  async handle(httpRequest: any): Promise<any> {
    const { email, name, password, passwordConfirmation } = httpRequest.body;

    const requiredFields = ['email', 'name', 'password'];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return Promise.resolve({
          statusCode: 400,
          body: new BadRequest(`Missing param: ${field}`)
        });
      }
    }

    if (password !== passwordConfirmation) {
      return Promise.resolve({
        statusCode: 400,
        body: new BadRequest('Passwords do not match')
      });
    }

    return Promise.resolve({
      statusCode: 200,
      body: {
        email,
        name
      }
    });
  }
}
