import Travel from './travel.model'

/**
 * Export a string which contains our GraphQL type definitions.
 */
export const travelTypeDefs = `
    type Travel {
        _id: ID!
        name: String!
        startDate: Date!
        endDate: Date!
        budget: Int!
    }

  input TravelFilterInput {
    limit: Int
  }

  # Extending the root Query type.
  extend type Query {
    travels(filter: TravelFilterInput): [Travel]
    travel(_id: String!): Travel 
  }

  # We do not need to check if any of the input parameters
  # exist with a "!" character. This is because mongoose will
  # do this for us, and it also means we can use the same
  # input on both the "addTravel" and "editTravel" methods.
  input TravelInput {
    name: String
    startDate: Date
    endDate: Date
    budget: Int
  }

  # Extending the root Mutation type.
  extend type Mutation {
    addTravel(input: TravelInput!): Travel
    editTravel(_id: String!, input: TravelInput!): Travel
    deleteTravel(_id: String!): Travel
  }
`;

/**
 * Exporting our resolver functions. Note that:
 * 1. They can use async/await or return a Promise which
 *    Apollo will resolve for us.
 * 2. The resolver property names match exactly with the
 *    schema types.
 */
export const travelResolvers = {
    Query: {
        travels: async (_: any, { filter = {} }) => {
            const travels: any[] = await Travel.find({}, null, filter);
            // notice that I have ": any[]" after the "categories" variable?
            // That is because I am using TypeScript but you can remove
            // this and it will work normally with pure JavaScript
            return travels.map(travel => travel.toGraph());
        },
        travel: async (_: any, { id }: any) => {
            const travel: any = await Travel.findById(id);
            return travel.toGraph();
        },
    },
    Mutation: {
        addTravel: async (_: any, { input }: any) => {
            const travel: any = await Travel.create(input);
            return travel.toGraph();
        },
        editTravel: async (_: any, { id, input }: any) => {
            const travel: any = await Travel.findByIdAndUpdate(id, input);
            return travel.toGraph();
        },
        deleteTravel: async (_: any, { id }: any) => {
            const travel: any = await Travel.findByIdAndRemove(id);
            return travel ? travel.toGraph() : null;
        },
    },
};