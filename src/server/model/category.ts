import { Schema, model } from 'mongoose';

const CategorySchema: Schema = new Schema({
    name: String
});

export const Category = model("Category", CategorySchema);