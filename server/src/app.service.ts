import { readFileSync } from 'fs';
import { Injectable, NotFoundException } from '@nestjs/common';

import { getNextDeliveryForUser } from './getNextDelivery';
import { NextDelivery, User } from 'domain/interfaces';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getNextDelivery(userId: string): NextDelivery {
    const data = readFileSync('./data.json', 'utf-8');
    const parsedData: User[] = JSON.parse(data);

    const user = parsedData.find(({ id }) => id === userId);

    if (!user) {
      throw new NotFoundException(`User ${userId} not found`);
    }

    return getNextDeliveryForUser(user);
  }
}
