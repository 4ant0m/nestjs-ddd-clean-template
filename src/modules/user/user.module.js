"use strict";
// src/modules/user/user.module.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
var common_1 = require("@nestjs/common");
var user_controller_1 = require("@user/interfaces/controllers/user.controller");
var user_repository_1 = require("@user/infrastructure/repositories/user.repository");
var prisma_service_1 = require("@user/infrastructure/services/prisma.service");
var config_1 = require("@nestjs/config");
var config_2 = require("@user/infrastructure/configuration/config");
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    isGlobal: false,
                    envFilePath: ['.env.development.local', '.env.development'],
                    load: [config_2.config],
                    validate: config_2.validate,
                }),
            ],
            controllers: [user_controller_1.UserController],
            providers: [
                user_repository_1.UserRepository,
                prisma_service_1.PrismaService
            ],
            exports: [],
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;
