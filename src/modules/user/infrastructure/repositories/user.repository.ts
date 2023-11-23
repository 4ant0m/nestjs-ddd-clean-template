import {Injectable} from '@nestjs/common';
import {PrismaService} from '../services/prisma.service';
import {IUserRepository} from '@user/domain/repositories/user-repository.interface';
import {User} from '@user/domain/entities/user.entity';
import {PasswordService} from "@user/infrastructure/services/password.service";

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        private prisma: PrismaService,
        private passwordService: PasswordService) {
    }

    async createUser(user: User): Promise<User> {
        console.log(user);
        const createdUser = await this.prisma.user.create({
            data: {
                ...user,
                password: await this.passwordService.hashPassword(user.password)
            },
        });
        console.log(createdUser)
        return new User(createdUser);
    }

    async deleteUser(userId: number): Promise<void> {
        await this.prisma.user.delete({
            where: {id: userId},
        });
    }

    async getUserById(userId: number): Promise<User | null> {
        const user = await this.prisma.user.findUnique({
            where: {id: userId},
        });
        if (user) {
            return new User(user);
        } else {
            return null;
        }
    }

    async updateUser(user: User): Promise<User> {
        const updatedUser = await this.prisma.user.update({
            where: {id: user.id},
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            },
        });
        return new User(updatedUser);
    }
}
