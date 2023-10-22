import { MongoDataSource } from "apollo-datasource-mongodb";
import { User, Icon } from "./__generated__/resolvers-types";

class Users extends MongoDataSource<User> {
   getUser(userId: string) {
      if (!userId) return;
      return this.findOneById(userId);
   }
}

class Icons extends MongoDataSource<Icon> {
   getAnything() {
      return this.findByFields({ type: "svg" });
   }
}

export { Users, Icons };
