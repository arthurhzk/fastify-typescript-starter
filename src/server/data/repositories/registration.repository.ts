import { Registration } from '@auth/server/domain/registration.dto';
import { RegistrationProtocol } from '@auth/server/data/protocols/registration.protocol';

export class RegistrationRepository implements RegistrationProtocol {
  constructor(private readonly registrationRepository: RegistrationRepository) {}

  async create(registration: Registration.Input): Promise<Registration.Output> {
    return this.registrationRepository.create(registration);
  }
}
