import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('payments')
export class PaymentsController {
  @Get()
  getPayments(@Req() request: Request, @Res() response: Response) {
    const { count, page } = request.query;
    if (!count && !page) {
      return response.status(400).send({ msg: 'Bad Request' });
    } else {
      return response.status(200).send({ msg: 'OK' });
    }
  }
}
