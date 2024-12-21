import { Registration } from '@auth/server/domain/registration.dto';
import { RegistrationProtocol } from '@auth/server/data/protocols/registration.protocol';
import { RegistrationMethod } from '@auth/server/data/methods/registration.method';

export class RegistrationRepository implements RegistrationProtocol {
  constructor(private readonly registrationRepository: RegistrationMethod) {}

  async create(registration: Registration.Input): Promise<Registration.Output> {
    return this.registrationRepository.add(registration);
  }
}
