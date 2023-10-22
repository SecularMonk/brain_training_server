// This is the file where our generated types live
// (specified in our `codegen.yml` file)
import { Resolvers } from "./__generated__/resolvers-types";
// import { Users } from "./users";

export const resolvers: Resolvers = {
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
