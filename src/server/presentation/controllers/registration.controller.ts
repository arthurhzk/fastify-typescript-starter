export class RegistrationController {
  async handle(httpRequest: any): Promise<any> {
    const { email, name, password, passwordConfirmation } = httpRequest.body;

    const requiredFields = ['email', 'name', 'password'];

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return Promise.resolve({
          statusCode: 400,
          body: new Error(`Missing param: ${field}`)
        });
      }
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
        email,
        name
      }
    });
  }
}
