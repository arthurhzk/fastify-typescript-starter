import { Registration } from '@auth/server/domain/registration.dto';

export interface RegistrationMethod {
  add(registration: Registration.Input): Promise<Registration.Output>;
}
