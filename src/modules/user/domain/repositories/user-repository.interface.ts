import { User } from '../entities/user.entity';
import {Injectable} from "@nestjs/common";

export interface IUserRepository {
    createUser(user: User): Promise<User>;
    updateUser(user: User): Promise<User>;
    deleteUser(userId: number): Promise<void>;
    getUserById(userId: number): Promise<User | null>;
    // other methods...
}