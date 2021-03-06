/*
 * @Description: 
 * @Author: Friends233
 */

export interface Goods {
  id?: string;
  name?: string;
  desc?: string;
  sold?: string;
  price?: number;
  url?: string;
}

export interface UserApp {
  id?: string;
  name?: string;
  avatar?: string;
  rating?: number;
  content?: string;
  time?: string;
  imgUrl?: Array<string>;
}

export interface GoodDetails {
  desc?: string;
  material?: string;
  taste?: string;
  priceDescription?: string;
  monthlySale?: string | number;
  favorableRate?: string | number;
  discount?: string | number;
  price?: number;
  packagingCosts: ?number;
}

export interface Shops {
  name?: string;
  rating?: number;
  price?: number;
  address?: string;
  phoneNumber?: string;
  business?: string;
  desc?: string[];
  coverImg?: string[];
  food?: any[];
  [propName: string]: any;
}