import { User } from '../entities/user.entity';
import { CreateUserUseCase } from "./create-user.use-case";

export class RegisterUserUseCase {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    async execute(userData: User): Promise<User> {
        return this.createUserUseCase.execute(userData);
    }
}
