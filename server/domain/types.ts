export type PouchSize = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

export type PouchSizePrices = {
  [key in PouchSize]: number;
};
