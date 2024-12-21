/* eslint-disable no-await-in-loop */
import { BadRequest } from '../../../shared/errors/bad-request.error';
import { ServerError } from '../../../shared/errors/server-error.error';

export class RegistrationController {
  async handle(httpRequest: any): Promise<any> {
    try {
      const { email, name, password, passwordConfirmation } = httpRequest.body;

      const requiredFields = ['email', 'name', 'password'];

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return await Promise.resolve({
            statusCode: 400,
            body: new BadRequest(`Missing param: ${field}`)
          });
        }
      }

      if (password !== passwordConfirmation) {
        return await Promise.resolve({
          statusCode: 400,
          body: new BadRequest('Passwords do not match')
        });
      }

      return await Promise.resolve({
        statusCode: 200,
        body: {
          email,
          name
        }
      });
    } catch (error) {
      if (error instanceof BadRequest) {
        return Promise.resolve({
          statusCode: 400,
          body: error
        });
      }
      return Promise.resolve({
        statusCode: 500,
        body: new ServerError('Internal server error')
      });
    }
  }
}
