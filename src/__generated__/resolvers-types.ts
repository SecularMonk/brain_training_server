import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AnswerID: { input: any; output: any; }
  ObjectID: { input: any; output: any; }
  QuestionID: { input: any; output: any; }
  QuizId: { input: any; output: any; }
  UserID: { input: any; output: any; }
};

export type Answer = {
  __typename?: 'Answer';
  _id?: Maybe<Scalars['AnswerID']['output']>;
  correct?: Maybe<Scalars['Boolean']['output']>;
  problemStatement?: Maybe<Scalars['String']['output']>;
  questionId: Scalars['QuestionID']['output'];
};

export type AnswerInput = {
  userId?: InputMaybe<Scalars['UserID']['input']>;
};

export type AnswerMutationResponse = {
  __typename?: 'AnswerMutationResponse';
  correct: Scalars['Boolean']['output'];
  questionId: Scalars['QuestionID']['output'];
  score?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['UserID']['output']>;
};

export type Icon = {
  __typename?: 'Icon';
  _id?: Maybe<Scalars['ObjectID']['output']>;
  base64?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAnswer?: Maybe<AnswerMutationResponse>;
};


export type MutationAddAnswerArgs = {
  answer?: InputMaybe<AnswerInput>;
};

export type Query = {
  __typename?: 'Query';
  getAnything?: Maybe<Array<Maybe<Icon>>>;
  getUser?: Maybe<User>;
  requestQuiz?: Maybe<Quiz>;
};


export type QueryGetUserArgs = {
  userId: Scalars['String']['input'];
};


export type QueryRequestQuizArgs = {
  numQuestions?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['String']['input'];
};

export type Question = {
  __typename?: 'Question';
  _id: Scalars['QuestionID']['output'];
  quizId: Scalars['QuizId']['output'];
};

export type Quiz = {
  __typename?: 'Quiz';
  _id: Scalars['QuizId']['output'];
  questions: Array<Question>;
  score?: Maybe<Scalars['Int']['output']>;
  userId: Scalars['UserID']['output'];
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['UserID']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Answer: ResolverTypeWrapper<Answer>;
  AnswerID: ResolverTypeWrapper<Scalars['AnswerID']['output']>;
  AnswerInput: AnswerInput;
  AnswerMutationResponse: ResolverTypeWrapper<AnswerMutationResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Icon: ResolverTypeWrapper<Icon>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']['output']>;
  Query: ResolverTypeWrapper<{}>;
  Question: ResolverTypeWrapper<Question>;
  QuestionID: ResolverTypeWrapper<Scalars['QuestionID']['output']>;
  Quiz: ResolverTypeWrapper<Quiz>;
  QuizId: ResolverTypeWrapper<Scalars['QuizId']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserID: ResolverTypeWrapper<Scalars['UserID']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Answer: Answer;
  AnswerID: Scalars['AnswerID']['output'];
  AnswerInput: AnswerInput;
  AnswerMutationResponse: AnswerMutationResponse;
  Boolean: Scalars['Boolean']['output'];
  Icon: Icon;
  Int: Scalars['Int']['output'];
  Mutation: {};
  ObjectID: Scalars['ObjectID']['output'];
  Query: {};
  Question: Question;
  QuestionID: Scalars['QuestionID']['output'];
  Quiz: Quiz;
  QuizId: Scalars['QuizId']['output'];
  String: Scalars['String']['output'];
  User: User;
  UserID: Scalars['UserID']['output'];
}>;

export type AnswerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['AnswerID']>, ParentType, ContextType>;
  correct?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  problemStatement?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  questionId?: Resolver<ResolversTypes['QuestionID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface AnswerIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AnswerID'], any> {
  name: 'AnswerID';
}

export type AnswerMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnswerMutationResponse'] = ResolversParentTypes['AnswerMutationResponse']> = ResolversObject<{
  correct?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  questionId?: Resolver<ResolversTypes['QuestionID'], ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['UserID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IconResolvers<ContextType = any, ParentType extends ResolversParentTypes['Icon'] = ResolversParentTypes['Icon']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['ObjectID']>, ParentType, ContextType>;
  base64?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addAnswer?: Resolver<Maybe<ResolversTypes['AnswerMutationResponse']>, ParentType, ContextType, Partial<MutationAddAnswerArgs>>;
}>;

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectID'], any> {
  name: 'ObjectID';
}

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getAnything?: Resolver<Maybe<Array<Maybe<ResolversTypes['Icon']>>>, ParentType, ContextType>;
  getUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserArgs, 'userId'>>;
  requestQuiz?: Resolver<Maybe<ResolversTypes['Quiz']>, ParentType, ContextType, RequireFields<QueryRequestQuizArgs, 'userId'>>;
}>;

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['QuestionID'], ParentType, ContextType>;
  quizId?: Resolver<ResolversTypes['QuizId'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface QuestionIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['QuestionID'], any> {
  name: 'QuestionID';
}

export type QuizResolvers<ContextType = any, ParentType extends ResolversParentTypes['Quiz'] = ResolversParentTypes['Quiz']> = ResolversObject<{
  _id?: Resolver<ResolversTypes['QuizId'], ParentType, ContextType>;
  questions?: Resolver<Array<ResolversTypes['Question']>, ParentType, ContextType>;
  score?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['UserID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface QuizIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['QuizId'], any> {
  name: 'QuizId';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  _id?: Resolver<Maybe<ResolversTypes['UserID']>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UserIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UserID'], any> {
  name: 'UserID';
}

export type Resolvers<ContextType = any> = ResolversObject<{
  Answer?: AnswerResolvers<ContextType>;
  AnswerID?: GraphQLScalarType;
  AnswerMutationResponse?: AnswerMutationResponseResolvers<ContextType>;
  Icon?: IconResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  ObjectID?: GraphQLScalarType;
  Query?: QueryResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  QuestionID?: GraphQLScalarType;
  Quiz?: QuizResolvers<ContextType>;
  QuizId?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserID?: GraphQLScalarType;
}>;

