import { EventEmitter } from '@angular/core';

export class ParserHelper {
  public static parseBool(val: string) {
    if (!val) return false;
    return JSON.parse(val.toLowerCase());
  }
}

export const roundOff = (num: number) => {
  return Math.round(num * 100) / 100;
};
export const getRandomNumber = (max = 10, min = 0) => {
  return Math.floor(Math.random() * max) + min;
};

export const objectToArray = (population: any): any[] => {
  const array = [];
  for (const key in population) {
    if (population.hasOwnProperty(key)) {
      array.push(population[key]);
    }
  }
  return array;
};

export const getAObjectKeys = (population: any): IObjectMap[] => {
  const array = [];
  for (const key in population) {
    if (population.hasOwnProperty(key)) {
      const type = typeof population[key];
      const isArray = Array.isArray(population[key]);
      const item: IObjectMap = {
        Key: key,
        Type: type,
        IsArray: isArray,
        Keys: [],
      };
      if (type === 'object' && !isArray && population[key])
        item.Keys = getAObjectKeys(population[key]) || [];

      if (type === 'object' && isArray && population[key]?.length) {
        item.Keys = getAObjectKeys(population[key][0]) || [];
      }
      array.push(item);
    }
  }
  return array;
};

export interface IObjectMap {
  Key: string;
  Type: string;
  IsArray: boolean;
  Keys: IObjectMap[];
}

export function hexToRgbA(hex: string, opercity = 0.5) {
  let c: any;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
      ','
    )},${opercity})`;
  }
  throw new Error('Bad Hex');
}
