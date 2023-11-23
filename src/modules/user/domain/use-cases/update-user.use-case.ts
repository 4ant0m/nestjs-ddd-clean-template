import { IUserRepository } from '../repositories/user-repository.interface';
import { User } from '../entities/user.entity';

export class UpdateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(user: User): Promise<User> {
        return this.userRepository.updateUser(user);
    }
}
