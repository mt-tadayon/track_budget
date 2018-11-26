import { Currency } from '../enums/currency';

export interface IExpense {
    id: String;
    name: String;
    date?: Date;
    price?: Number;
    currency?: Currency;
    country?: String;
}