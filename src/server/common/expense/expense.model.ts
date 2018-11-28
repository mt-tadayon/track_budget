import * as mongoose from 'mongoose';
import { Currency } from '../../enums/currency';

const expenseSchema = new mongoose.Schema({
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    price: {
        type: Number
    },
    currency: {
        type: Currency
    },
    country: {
        type: String
    }
});

/**
 * This property will ensure our virtuals (including "id")
 * are set on the user when we use it.
 */
expenseSchema.set('toObject', { virtuals: true })

/**
 * This is a helper method which converts mongoose properties
 * from objects to strings, numbers, and booleans.
 */
expenseSchema.method('toGraph', function toGraph(this: any) {
    return JSON.parse(JSON.stringify(this));
});

export default mongoose.model("Expense", expenseSchema);