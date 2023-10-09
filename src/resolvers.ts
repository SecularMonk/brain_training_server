// This is the file where our generated types live
// (specified in our `codegen.yml` file)
import { Resolvers } from "./__generated__/resolvers-types";

export const resolvers: Resolvers = {
   Query: {
      // TypeScript now complains about the below resolver because
      // the data returned by this resolver doesn't match the schema type
      // (i.e., type Query { books: [Book] })
      // To fix this, manually (ugh) check the type in the resolver-types file to ensure it matches.
      books: () => {
         return [{ author: "test", title: "test" }];
      },
   },
};
