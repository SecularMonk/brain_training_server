// import { Users } from "./users";
export const resolvers = {
    Query: {
        getUser: (_, { userId }, { dataSources }) => {
            return dataSources.users.getUser(userId);
        },
        getAnything: (_, __, { dataSources }) => {
            return dataSources.icons.getAnything();
        },
    },
    Mutation: {
        addAnswer: (_, {}, __) => {
            return { userId: "test", questionId: "string", correct: false };
        },
    },
};
