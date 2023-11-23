"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.config = exports.EnvironmentVariables = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var EnvironmentVariables = /** @class */ (function () {
    function EnvironmentVariables() {
        this.PORT = 3000; // Default value if not specified
        // Add other environment variables here with appropriate validation rules
    }
    __decorate([
        (0, class_validator_1.IsString)()
    ], EnvironmentVariables.prototype, "DATABASE_URL", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)()
    ], EnvironmentVariables.prototype, "PORT", void 0);
    return EnvironmentVariables;
}());
exports.EnvironmentVariables = EnvironmentVariables;
function config() {
    var config = {
        DATABASE_URL: process.env.DATABASE_URL,
        PORT: +(process.env.PORT || 3000),
    };
    return config;
}
exports.config = config;
function validate(config) {
    var validatedConfig = (0, class_transformer_1.plainToClass)(EnvironmentVariables, config, {
        enableImplicitConversion: true,
    });
    var errors = (0, class_validator_1.validateSync)(validatedConfig, { skipMissingProperties: false });
    if (errors.length > 0) {
        throw new Error(errors.toString());
    }
    return validatedConfig;
}
exports.validate = validate;
