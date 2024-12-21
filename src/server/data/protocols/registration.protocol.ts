import { Registration } from '@auth/server/domain/registration.dto';

export interface RegistrationProtocol {
  create(registration: Registration.Input): Promise<Registration.Output>;
}
