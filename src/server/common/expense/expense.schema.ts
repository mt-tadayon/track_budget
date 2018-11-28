import Expense from './expense.model'


/**
 * Export a string which contains our GraphQL type definitions.
 */
export const expenseTypeDefs = `
    type Expense {
    _id: ID!
    name: String!
    date: Date!
    price: Int!
    currency: String!
    country: String
  }

  input ExpenseFilterInput {
    limit: Int
  }

  # Extending the root Query type.
  extend type Query {
    expenses(filter: ExpenseFilterInput): [Expense]
    expense(_id: String!): Expense
  }

  # We do not need to check if any of the input parameters
  # exist with a "!" character. This is because mongoose will
  # do this for us, and it also means we can use the same
  # input on both the "addExpense" and "editExpense" methods.
  input ExpenseInput {
    name: String
    date: Date
    price: Int
    currency: String
    country: String
  }

  # Extending the root Mutation type.
  extend type Mutation {
    addExpense(input: ExpenseInput!): Expense
    editExpense(_id: String!, input: ExpenseInput!): Expense
    deleteExpense(_id: String!): Expense
  }
`;

/**
 * Exporting our resolver functions. Note that:
 * 1. They can use async/await or return a Promise which
 *    Apollo will resolve for us.
 * 2. The resolver property names match exactly with the
 *    schema types.
 */
export const expenseResolvers = {
    Query: {
        expenses: async (_: any, { filter = {} }) => {
            const expenses: any[] = await Expense.find({}, null, filter);
            // notice that I have ": any[]" after the "categories" variable?
            // That is because I am using TypeScript but you can remove
            // this and it will work normally with pure JavaScript
            return expenses.map(category => category.toGraph());
        },
        expense: async (_: any, { id }: any) => {
            const expense: any = await Expense.findById(id);
            return expense.toGraph();
        },
    },
    Mutation: {
        addExpense: async (_: any, { input }: any) => {
            const expense: any = await Expense.create(input);
            return expense.toGraph();
        },
        editExpense: async (_: any, { id, input }: any) => {
            const expense: any = await Expense.findByIdAndUpdate(id, input);
            return expense.toGraph();
        },
        deleteExpense: async (_: any, { id }: any) => {
            const expense: any = await Expense.findByIdAndRemove(id);
            return expense ? expense.toGraph() : null;
        },
    },
};