import { HttpStatus } from '@nestjs/common';

export type ErrorResponse = {
  error: string;
  message: string;
  statusCode: HttpStatus;
};