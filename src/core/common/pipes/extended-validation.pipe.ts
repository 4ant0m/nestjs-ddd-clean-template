import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { ValidatorOptions } from '@nestjs/common/interfaces/external/validator-options.interface';


export class ExtendedValidationPipe extends ValidationPipe {
  constructor() {
    super({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    });
  }

  protected async validate(
    object: object,
    validatorOptions?: ValidatorOptions,
  ) {
    const errors = await super.validate(object, validatorOptions);
    return errors;
  }
}
