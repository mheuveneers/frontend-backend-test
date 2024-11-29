import { PouchSize } from './types';

export interface Cat {
  breed: string;
  name: string;
  pouchSize: PouchSize;
  subscriptionActive: boolean;
}

export interface NextDelivery {
  freeGift: boolean;
  message: string;
  title: string;
  totalPrice: number;
}

export interface User {
  cats: Cat[];
  firstName: string;
  id: string;
}
