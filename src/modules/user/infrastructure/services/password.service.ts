import {hash, compare, genSalt} from 'bcryptjs';
import {Injectable} from "@nestjs/common";

@Injectable()
export class PasswordService {
    async hashPassword(password: string): Promise<string> {
        const salt = await genSalt();
        return await hash(password, salt);

    }

    async checkPassword(hashPassword: string, plainPassword: string): Promise<boolean> {
        return compare(plainPassword, hashPassword);
    }
}
