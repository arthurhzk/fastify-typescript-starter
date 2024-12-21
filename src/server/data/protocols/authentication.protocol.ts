import { Authentication } from '@auth/server/domain/authentication.dto';

export interface RegistrationProtocol {
  authenticate(authenticaton: Authentication.Input): Promise<Authentication.Output>;
}
