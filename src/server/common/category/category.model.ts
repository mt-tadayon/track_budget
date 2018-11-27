import * as mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: {
        type: String
    }
});

/**
 * This property will ensure our virtuals (including "id")
 * are set on the user when we use it.
 */
categorySchema.set('toObject', { virtuals: true })

/**
 * This is a helper method which converts mongoose properties
 * from objects to strings, numbers, and booleans.
 */
categorySchema.method('toGraph', function toGraph(this: any) {
    return JSON.parse(JSON.stringify(this));
});

export default mongoose.model("Category", categorySchema);