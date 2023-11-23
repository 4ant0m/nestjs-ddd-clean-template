require("module-alias/register");
require('dotenv').config();

import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import { ExtendedValidationPipe } from './core/common/pipes/extended-validation.pipe';

import {AppModule} from "./app.module";
import { NestFactory } from '@nestjs/core';
import {useContainer} from "class-validator";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ExtendedValidationPipe());

    const options = new DocumentBuilder()
        .setTitle('@nestjsx/crud-typeorm')
        .setDescription('@nestjsx/crud-typeorm')
        .setVersion('0.1')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name: 'JWT',
                description: 'Enter JWT token',
                in: 'header',
            },
            'JWT-auth', // This name here is important for matching up with @ApiBearerAuth() in your controller!
        )
        .build();
    const document = SwaggerModule.createDocument(app, options);
    // writeFile('swagger-api.json', JSON.stringify(document), 'utf8');

    SwaggerModule.setup('docs', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
            /* defaultModelsExpandDepth: 0,*/
        },
    });
    useContainer(app.select(AppModule), { fallbackOnErrors: true });
    await app.listen(3000);
}
bootstrap();