// src/modules/user/user.module.ts

import {Module} from '@nestjs/common';
import {UserController} from './interfaces/controllers/user.controller';
import {UserRepository} from '@user/infrastructure/repositories/user.repository';
import {PrismaService} from '@user/infrastructure/services/prisma.service';
import {ConfigModule} from '@nestjs/config'
import {config, validate} from '@user/infrastructure/configuration/config'
import {UserCreateService} from "@user/application/services/create-user.service";
import {PasswordService} from "@user/infrastructure/services/password.service";
import {CreateUserUseCase} from "@user/domain/use-cases/create-user.use-case";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: false,
            envFilePath: ['.env', '.env.development.local', '.env.development'],
            load: [config],
            validate,
        }),
    ],
    controllers: [UserController],
    providers: [
        {
            provide: 'IUserRepository',
            useClass: UserRepository,
        },
        PrismaService,
        PasswordService,
        CreateUserUseCase,
        UserCreateService,
    ],
    exports: [],
})
export class UserModule {
}
