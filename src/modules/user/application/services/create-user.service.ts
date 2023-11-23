import {CreateUserUseCase} from '@user/domain/use-cases/create-user.use-case';
//import { EmailService } from './email.service';
import {User} from "@user/domain/entities/user.entity";
import {CreateUserDto} from "@user/interfaces/dto/create-user.dto";
import {Injectable} from "@nestjs/common";

// Other imports...
@Injectable()
export class UserCreateService {
    constructor(
        private createUserUseCase: CreateUserUseCase,
        //private emailService: EmailService,
        // Other dependencies...
    ) {
    }

    async execute(userDto: CreateUserDto): Promise<User> {
        console.log(userDto)
        const newUser = new User({
            ...userDto
        });
        console.log(newUser)
        // Map properties from DTO to User entity
        const user = await this.createUserUseCase.execute(newUser);

        // Perform application-specific operations
        //await this.emailService.sendWelcomeEmail(user.email);

        // Handle other application-specific logic
        // ...

        return user; // Convert user to DTO if needed for the client
    }
}
