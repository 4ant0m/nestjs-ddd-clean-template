import {IsString, IsNumber, IsOptional, validateSync} from 'class-validator';
import {plainToClass} from 'class-transformer';

export class EnvironmentVariables {
    @IsString()
    DATABASE_URL: string;

    @IsNumber()
    @IsOptional()
    PORT: number = 3000; // Default value if not specified

    // Add other environment variables here with appropriate validation rules
}

export function config() {
    const config = {
        DATABASE_URL: process.env.DATABASE_URL,
        PORT: +(process.env.PORT || 3000),
    };
    return config;
}


export function validate(config: Record<string, unknown>) {
    const validatedConfig = plainToClass(EnvironmentVariables, config, {
        enableImplicitConversion: true,
    });
    const errors = validateSync(validatedConfig, {skipMissingProperties: false});

    if (errors.length > 0) {
        throw new Error(errors.toString());
    }
    return validatedConfig;
}
