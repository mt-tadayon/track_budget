import * as mongoose from 'mongoose';

const travelSchema = new mongoose.Schema({
    name: {
        type: String
    },
    startDate: {
        type: Date,
        required: "Please enter a valid Start Date."
    },
    endDate: {
        type: Date,
        required: "Please enter a valid End Date."
    },
    budget: {
        type: Number
    }
});

/**
 * This property will ensure our virtuals (including "id")
 * are set on the user when we use it.
 */
travelSchema.set('toObject', { virtuals: true })

/**
 * This is a helper method which converts mongoose properties
 * from objects to strings, numbers, and booleans.
 */
travelSchema.method('toGraph', function toGraph(this: any) {
    return JSON.parse(JSON.stringify(this));
});

export default mongoose.model("Travel", travelSchema);