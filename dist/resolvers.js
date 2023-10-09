export const resolvers = {
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
