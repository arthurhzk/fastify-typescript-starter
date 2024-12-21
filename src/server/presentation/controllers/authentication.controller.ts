import { BadRequest } from '../../../shared/errors/bad-request.error';
import { ServerError } from '../../../shared/errors/server-error.error';

export class AuthenticationController {
  handle(httpRequest: any): Promise<any> {
    try {
      const { email } = httpRequest.body;
      const requiredFields = ['email', 'password'];
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return Promise.resolve({
            statusCode: 400,
            body: new BadRequest(`Missing param: ${field}`)
          });
        }
      }
      return Promise.resolve({
        statusCode: 200,
        body: {
          email
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
