// This is the file where our generated types live
// (specified in our `codegen.yml` file)
import { MutationResolvers, QueryResolvers } from "./__generated__/resolvers-types";
import { dataSources } from "./index.ts";
import { createQuiz } from "./quizzes/generateQuiz.ts";
// import { Users } from "./users";

export const queryResolvers: QueryResolvers<typeof dataSources> = {
   // getUser: (_, { userId }, { Users }) => {
   //    return dataSources.Users.getUser(userId);
   // },
   // getAnything: (_, __, { Icons }) => {
   //    return dataSources.Icons.findOne({});
   // },
};

export const mutationResolvers: MutationResolvers<{ dataSources: typeof dataSources }> = {
   addAnswer: (_, {}, __) => {
      return { userId: "test", questionId: "string", correct: false };
   },
   getQuiz: async (_, { userId }, { dataSources }) => {
      console.log("getQuiz ran, userId: ", userId, "dataSources: ", dataSources);
      const quiz = await dataSources.Quizzes.findOne({ userId });
      const { createdAt } = quiz;
      switch (createdAt) {
         case true: {
            return createQuiz({ userId });
         }
         // default: {
         //    return quiz;
         // }
      }
   },
};
