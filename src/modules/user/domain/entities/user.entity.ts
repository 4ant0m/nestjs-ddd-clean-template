export class User {
    constructor(data: User) {
        Object.assign(this, data);
    }

    public id?: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public createdAt?: Date;
    public updatedAt?: Date;
}