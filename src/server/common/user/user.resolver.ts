import * as User from './user.model';

export const categoryResolvers = {
    Query: {
        categories: async (_: any, { filter = {} }) => {
            const categories: any[] = await User.find({}, null, filter);
            // notice that I have ": any[]" after the "categories" variable?
            // That is because I am using TypeScript but you can remove
            // this and it will work normally with pure JavaScript
            return categories.map(category => category.toGraph());
        },
        category: async (_: any, { id }: any) => {
            const category: any = await Category.findById(id);
            return category.toGraph();
        },
    },
    Mutation: {
        addCategory: async (_: any, { input }: any) => {
            const category: any = await Category.create(input);
            return category.toGraph();
        },
        editCategory: async (_: any, { id, input }: any) => {
            const category: any = await Category.findByIdAndUpdate(id, input);
            return category.toGraph();
        },
        deleteCategory: async (_: any, { id }: any) => {
            const category: any = await Category.findByIdAndRemove(id);
            return category ? category.toGraph() : null;
        },
    },
};