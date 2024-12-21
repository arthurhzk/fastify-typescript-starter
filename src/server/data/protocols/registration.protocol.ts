import { Registration } from '@/server/domain/registration.dto';

export interface RegistrationProtocol {
  create(registration: Registration.Input): Promise<Registration.Output>;
}
