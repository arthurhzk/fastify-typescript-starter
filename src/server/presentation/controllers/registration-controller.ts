/* eslint-disable class-methods-use-this */
export class RegistrationController {
  async handle(httpRequest: any): Promise<any> {
    const { email, name, password, passwordConfirmation } = httpRequest.body;

    if (!email) {
      return Promise.resolve({
        statusCode: 400,
        body: new Error('Missing param: email')
      });
    }
    if (!name) {
      return Promise.resolve({
        statusCode: 400,
        body: new Error('Missing param: name')
      });
    }
    if (password !== passwordConfirmation) {
      return Promise.resolve({
        statusCode: 400,
        body: new Error('Passwords do not match')
      });
    }

    return Promise.resolve({
      statusCode: 200,
      body: {
        id: 'valid_id',
        email
      }
    });
  }
}
