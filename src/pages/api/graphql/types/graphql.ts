import { GraphQLResolveInfo } from 'graphql';
import { User } from '@prisma/client/index.d';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']>;
  geo?: Maybe<Geo>;
  street?: Maybe<Scalars['String']>;
  suite?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  bs?: Maybe<Scalars['String']>;
  catchPhrase?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Geo = {
  __typename?: 'Geo';
  lat?: Maybe<Scalars['String']>;
  lng?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  prismaUser?: Maybe<PrismaUser>;
};


export type MutationPrismaUserArgs = {
  user: CreatePrismaUserInput;
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
  jsonplaceholderPost?: Maybe<JsonplaceholderPost>;
  jsonplaceholderPosts?: Maybe<Array<Maybe<JsonplaceholderPost>>>;
  jsonplaceholderUser?: Maybe<JsonplaceholderUser>;
  jsonplaceholderUsers?: Maybe<Array<Maybe<JsonplaceholderUser>>>;
  prismaUser?: Maybe<PrismaUser>;
  prismaUsers?: Maybe<Array<Maybe<PrismaUser>>>;
};


export type QueryJsonplaceholderPostArgs = {
  id: Scalars['ID'];
};


export type QueryJsonplaceholderUserArgs = {
  id: Scalars['ID'];
};


export type QueryPrismaUserArgs = {
  id: Scalars['ID'];
};

export type CreatePrismaUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type JsonplaceholderPost = {
  __typename?: 'jsonplaceholderPost';
  body?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type JsonplaceholderUser = {
  __typename?: 'jsonplaceholderUser';
  address?: Maybe<Address>;
  company?: Maybe<Company>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<JsonplaceholderPost>>>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type PrismaUser = {
  __typename?: 'prismaUser';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};



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
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Company: ResolverTypeWrapper<Company>;
  Geo: ResolverTypeWrapper<Geo>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  createPrismaUserInput: CreatePrismaUserInput;
  jsonplaceholderPost: ResolverTypeWrapper<JsonplaceholderPost>;
  jsonplaceholderUser: ResolverTypeWrapper<JsonplaceholderUser>;
  prismaUser: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  Boolean: Scalars['Boolean'];
  Company: Company;
  Geo: Geo;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  createPrismaUserInput: CreatePrismaUserInput;
  jsonplaceholderPost: JsonplaceholderPost;
  jsonplaceholderUser: JsonplaceholderUser;
  prismaUser: User;
};

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  geo?: Resolver<Maybe<ResolversTypes['Geo']>, ParentType, ContextType>;
  street?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  suite?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipcode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  bs?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  catchPhrase?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GeoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Geo'] = ResolversParentTypes['Geo']> = {
  lat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lng?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  prismaUser?: Resolver<Maybe<ResolversTypes['prismaUser']>, ParentType, ContextType, RequireFields<MutationPrismaUserArgs, 'user'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jsonplaceholderPost?: Resolver<Maybe<ResolversTypes['jsonplaceholderPost']>, ParentType, ContextType, RequireFields<QueryJsonplaceholderPostArgs, 'id'>>;
  jsonplaceholderPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['jsonplaceholderPost']>>>, ParentType, ContextType>;
  jsonplaceholderUser?: Resolver<Maybe<ResolversTypes['jsonplaceholderUser']>, ParentType, ContextType, RequireFields<QueryJsonplaceholderUserArgs, 'id'>>;
  jsonplaceholderUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['jsonplaceholderUser']>>>, ParentType, ContextType>;
  prismaUser?: Resolver<Maybe<ResolversTypes['prismaUser']>, ParentType, ContextType, RequireFields<QueryPrismaUserArgs, 'id'>>;
  prismaUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['prismaUser']>>>, ParentType, ContextType>;
};

export type JsonplaceholderPostResolvers<ContextType = any, ParentType extends ResolversParentTypes['jsonplaceholderPost'] = ResolversParentTypes['jsonplaceholderPost']> = {
  body?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JsonplaceholderUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['jsonplaceholderUser'] = ResolversParentTypes['jsonplaceholderUser']> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['jsonplaceholderPost']>>>, ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrismaUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['prismaUser'] = ResolversParentTypes['prismaUser']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  Geo?: GeoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  jsonplaceholderPost?: JsonplaceholderPostResolvers<ContextType>;
  jsonplaceholderUser?: JsonplaceholderUserResolvers<ContextType>;
  prismaUser?: PrismaUserResolvers<ContextType>;
};

