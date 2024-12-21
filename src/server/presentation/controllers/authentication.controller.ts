export class AuthenticationController {
  handle(httpRequest: any): Promise<any> {
    const { email } = httpRequest.body;
    const requiredFields = ['email', 'password'];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return Promise.resolve({
          statusCode: 400,
          body: new Error(`Missing param: ${field}`)
        });
      }
    }
    return Promise.resolve({
      statusCode: 200,
      body: {
        email
      }
    });
  }
}
