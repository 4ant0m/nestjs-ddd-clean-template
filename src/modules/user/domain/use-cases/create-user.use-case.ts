import { IUserRepository } from '../repositories/user-repository.interface';
import { User } from '../entities/user.entity';
import {Inject, Injectable} from "@nestjs/common";

@Injectable()
export class CreateUserUseCase {
    constructor(
        @Inject('IUserRepository')
        private userRepository: IUserRepository) {}
    async execute(userData: User): Promise<User> {
        console.log(userData)
        const user = new User(userData);
        return this.userRepository.createUser(user);
    }
}
