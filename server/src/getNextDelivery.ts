import { BadRequestException } from '@nestjs/common';

import { minimumTotalForFreeGift, pouchSizePrices } from './config';
import { Cat, NextDelivery, User } from 'domain/interfaces';

export const getNextDeliveryForUser = (user: User): NextDelivery => {
  const { cats, firstName } = user;

  if (cats.length === 0) {
    throw new BadRequestException("User doesn't have cats :( Outrageous!!");
  }

  const activeCats = cats.filter(
    ({ subscriptionActive }) => subscriptionActive,
  );

  if (activeCats.length === 0) {
    throw new BadRequestException('No cat with an active subscription');
  }

  const catNames = getCatNames(activeCats);
  const message = `Hey ${firstName}! In two days' time, we'll be charging you for your next order for ${catNames}'s fresh food.`;
  const title = `Your next delivery for ${catNames}`;
  const totalPrice = getTotalPrice(activeCats);

  return {
    title,
    message,
    totalPrice,
    freeGift: totalPrice >= minimumTotalForFreeGift,
  };
};

const getCatNames = (cats: Cat[]) => {
  return cats.reduce((catNames, { name }, currentIndex, array) => {
    if (array.length === 1 || currentIndex === 0) return name;
    if (currentIndex === array.length - 1) return catNames + ' and ' + name;
    return catNames + ', ' + name;
  }, '');
};

const getTotalPrice = (cats: Cat[]) => {
  return cats.reduce((totalPrice, { pouchSize }) => {
    return totalPrice + pouchSizePrices[pouchSize];
  }, 0);
};
