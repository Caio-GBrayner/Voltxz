
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model LandOwners
 * 
 */
export type LandOwners = $Result.DefaultSelection<Prisma.$LandOwnersPayload>
/**
 * Model Companies
 * 
 */
export type Companies = $Result.DefaultSelection<Prisma.$CompaniesPayload>
/**
 * Model Investors
 * 
 */
export type Investors = $Result.DefaultSelection<Prisma.$InvestorsPayload>
/**
 * Model Lands
 * 
 */
export type Lands = $Result.DefaultSelection<Prisma.$LandsPayload>
/**
 * Model Investments
 * 
 */
export type Investments = $Result.DefaultSelection<Prisma.$InvestmentsPayload>
/**
 * Model Projects
 * 
 */
export type Projects = $Result.DefaultSelection<Prisma.$ProjectsPayload>
/**
 * Model ProjectProposal
 * 
 */
export type ProjectProposal = $Result.DefaultSelection<Prisma.$ProjectProposalPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AgreementStatus: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type AgreementStatus = (typeof AgreementStatus)[keyof typeof AgreementStatus]


export const OwnerAgreementStatus: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type OwnerAgreementStatus = (typeof OwnerAgreementStatus)[keyof typeof OwnerAgreementStatus]


export const SolarProjectStatus: {
  pendingApproval: 'pendingApproval',
  active: 'active',
  completed: 'completed'
};

export type SolarProjectStatus = (typeof SolarProjectStatus)[keyof typeof SolarProjectStatus]


export const Agreement: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type Agreement = (typeof Agreement)[keyof typeof Agreement]


export const InvestmentStatus: {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

export type InvestmentStatus = (typeof InvestmentStatus)[keyof typeof InvestmentStatus]


export const UserType: {
  land_owner: 'land_owner',
  investor: 'investor',
  company: 'company'
};

export type UserType = (typeof UserType)[keyof typeof UserType]

}

export type AgreementStatus = $Enums.AgreementStatus

export const AgreementStatus: typeof $Enums.AgreementStatus

export type OwnerAgreementStatus = $Enums.OwnerAgreementStatus

export const OwnerAgreementStatus: typeof $Enums.OwnerAgreementStatus

export type SolarProjectStatus = $Enums.SolarProjectStatus

export const SolarProjectStatus: typeof $Enums.SolarProjectStatus

export type Agreement = $Enums.Agreement

export const Agreement: typeof $Enums.Agreement

export type InvestmentStatus = $Enums.InvestmentStatus

export const InvestmentStatus: typeof $Enums.InvestmentStatus

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.landOwners`: Exposes CRUD operations for the **LandOwners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LandOwners
    * const landOwners = await prisma.landOwners.findMany()
    * ```
    */
  get landOwners(): Prisma.LandOwnersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companies`: Exposes CRUD operations for the **Companies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.companies.findMany()
    * ```
    */
  get companies(): Prisma.CompaniesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investors`: Exposes CRUD operations for the **Investors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investors
    * const investors = await prisma.investors.findMany()
    * ```
    */
  get investors(): Prisma.InvestorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lands`: Exposes CRUD operations for the **Lands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lands
    * const lands = await prisma.lands.findMany()
    * ```
    */
  get lands(): Prisma.LandsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investments`: Exposes CRUD operations for the **Investments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investments
    * const investments = await prisma.investments.findMany()
    * ```
    */
  get investments(): Prisma.InvestmentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **Projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.ProjectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectProposal`: Exposes CRUD operations for the **ProjectProposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectProposals
    * const projectProposals = await prisma.projectProposal.findMany()
    * ```
    */
  get projectProposal(): Prisma.ProjectProposalDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    LandOwners: 'LandOwners',
    Companies: 'Companies',
    Investors: 'Investors',
    Lands: 'Lands',
    Investments: 'Investments',
    Projects: 'Projects',
    ProjectProposal: 'ProjectProposal'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "landOwners" | "companies" | "investors" | "lands" | "investments" | "projects" | "projectProposal"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      LandOwners: {
        payload: Prisma.$LandOwnersPayload<ExtArgs>
        fields: Prisma.LandOwnersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LandOwnersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandOwnersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LandOwnersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandOwnersPayload>
          }
          findFirst: {
            args: Prisma.LandOwnersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandOwnersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LandOwnersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandOwnersPayload>
          }
          findMany: {
            args: Prisma.LandOwnersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandOwnersPayload>[]
          }
          create: {
            args: Prisma.LandOwnersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandOwnersPayload>
          }
          createMany: {
            args: Prisma.LandOwnersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LandOwnersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandOwnersPayload>[]
          }
          delete: {
            args: Prisma.LandOwnersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandOwnersPayload>
          }
          update: {
            args: Prisma.LandOwnersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandOwnersPayload>
          }
          deleteMany: {
            args: Prisma.LandOwnersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LandOwnersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LandOwnersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandOwnersPayload>[]
          }
          upsert: {
            args: Prisma.LandOwnersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandOwnersPayload>
          }
          aggregate: {
            args: Prisma.LandOwnersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLandOwners>
          }
          groupBy: {
            args: Prisma.LandOwnersGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandOwnersGroupByOutputType>[]
          }
          count: {
            args: Prisma.LandOwnersCountArgs<ExtArgs>
            result: $Utils.Optional<LandOwnersCountAggregateOutputType> | number
          }
        }
      }
      Companies: {
        payload: Prisma.$CompaniesPayload<ExtArgs>
        fields: Prisma.CompaniesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompaniesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompaniesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          findFirst: {
            args: Prisma.CompaniesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompaniesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          findMany: {
            args: Prisma.CompaniesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>[]
          }
          create: {
            args: Prisma.CompaniesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          createMany: {
            args: Prisma.CompaniesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompaniesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>[]
          }
          delete: {
            args: Prisma.CompaniesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          update: {
            args: Prisma.CompaniesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          deleteMany: {
            args: Prisma.CompaniesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompaniesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompaniesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>[]
          }
          upsert: {
            args: Prisma.CompaniesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          aggregate: {
            args: Prisma.CompaniesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanies>
          }
          groupBy: {
            args: Prisma.CompaniesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompaniesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompaniesCountArgs<ExtArgs>
            result: $Utils.Optional<CompaniesCountAggregateOutputType> | number
          }
        }
      }
      Investors: {
        payload: Prisma.$InvestorsPayload<ExtArgs>
        fields: Prisma.InvestorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorsPayload>
          }
          findFirst: {
            args: Prisma.InvestorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorsPayload>
          }
          findMany: {
            args: Prisma.InvestorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorsPayload>[]
          }
          create: {
            args: Prisma.InvestorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorsPayload>
          }
          createMany: {
            args: Prisma.InvestorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorsPayload>[]
          }
          delete: {
            args: Prisma.InvestorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorsPayload>
          }
          update: {
            args: Prisma.InvestorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorsPayload>
          }
          deleteMany: {
            args: Prisma.InvestorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorsPayload>[]
          }
          upsert: {
            args: Prisma.InvestorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestorsPayload>
          }
          aggregate: {
            args: Prisma.InvestorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestors>
          }
          groupBy: {
            args: Prisma.InvestorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestorsCountArgs<ExtArgs>
            result: $Utils.Optional<InvestorsCountAggregateOutputType> | number
          }
        }
      }
      Lands: {
        payload: Prisma.$LandsPayload<ExtArgs>
        fields: Prisma.LandsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LandsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LandsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>
          }
          findFirst: {
            args: Prisma.LandsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LandsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>
          }
          findMany: {
            args: Prisma.LandsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>[]
          }
          create: {
            args: Prisma.LandsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>
          }
          createMany: {
            args: Prisma.LandsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LandsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>[]
          }
          delete: {
            args: Prisma.LandsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>
          }
          update: {
            args: Prisma.LandsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>
          }
          deleteMany: {
            args: Prisma.LandsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LandsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LandsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>[]
          }
          upsert: {
            args: Prisma.LandsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandsPayload>
          }
          aggregate: {
            args: Prisma.LandsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLands>
          }
          groupBy: {
            args: Prisma.LandsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandsGroupByOutputType>[]
          }
          count: {
            args: Prisma.LandsCountArgs<ExtArgs>
            result: $Utils.Optional<LandsCountAggregateOutputType> | number
          }
        }
      }
      Investments: {
        payload: Prisma.$InvestmentsPayload<ExtArgs>
        fields: Prisma.InvestmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentsPayload>
          }
          findFirst: {
            args: Prisma.InvestmentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentsPayload>
          }
          findMany: {
            args: Prisma.InvestmentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentsPayload>[]
          }
          create: {
            args: Prisma.InvestmentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentsPayload>
          }
          createMany: {
            args: Prisma.InvestmentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentsPayload>[]
          }
          delete: {
            args: Prisma.InvestmentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentsPayload>
          }
          update: {
            args: Prisma.InvestmentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentsPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentsPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentsPayload>
          }
          aggregate: {
            args: Prisma.InvestmentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestments>
          }
          groupBy: {
            args: Prisma.InvestmentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentsCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentsCountAggregateOutputType> | number
          }
        }
      }
      Projects: {
        payload: Prisma.$ProjectsPayload<ExtArgs>
        fields: Prisma.ProjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findFirst: {
            args: Prisma.ProjectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findMany: {
            args: Prisma.ProjectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          create: {
            args: Prisma.ProjectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          createMany: {
            args: Prisma.ProjectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          delete: {
            args: Prisma.ProjectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          update: {
            args: Prisma.ProjectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          deleteMany: {
            args: Prisma.ProjectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          upsert: {
            args: Prisma.ProjectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.ProjectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      ProjectProposal: {
        payload: Prisma.$ProjectProposalPayload<ExtArgs>
        fields: Prisma.ProjectProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectProposalPayload>
          }
          findFirst: {
            args: Prisma.ProjectProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectProposalPayload>
          }
          findMany: {
            args: Prisma.ProjectProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectProposalPayload>[]
          }
          create: {
            args: Prisma.ProjectProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectProposalPayload>
          }
          createMany: {
            args: Prisma.ProjectProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectProposalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectProposalPayload>[]
          }
          delete: {
            args: Prisma.ProjectProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectProposalPayload>
          }
          update: {
            args: Prisma.ProjectProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectProposalPayload>
          }
          deleteMany: {
            args: Prisma.ProjectProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectProposalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectProposalPayload>[]
          }
          upsert: {
            args: Prisma.ProjectProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectProposalPayload>
          }
          aggregate: {
            args: Prisma.ProjectProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectProposal>
          }
          groupBy: {
            args: Prisma.ProjectProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectProposalCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectProposalCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    landOwners?: LandOwnersOmit
    companies?: CompaniesOmit
    investors?: InvestorsOmit
    lands?: LandsOmit
    investments?: InvestmentsOmit
    projects?: ProjectsOmit
    projectProposal?: ProjectProposalOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompaniesCountOutputType
   */

  export type CompaniesCountOutputType = {
    Projects: number
  }

  export type CompaniesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Projects?: boolean | CompaniesCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesCountOutputType
     */
    select?: CompaniesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
  }


  /**
   * Count Type InvestorsCountOutputType
   */

  export type InvestorsCountOutputType = {
    Investments: number
  }

  export type InvestorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Investments?: boolean | InvestorsCountOutputTypeCountInvestmentsArgs
  }

  // Custom InputTypes
  /**
   * InvestorsCountOutputType without action
   */
  export type InvestorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestorsCountOutputType
     */
    select?: InvestorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvestorsCountOutputType without action
   */
  export type InvestorsCountOutputTypeCountInvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    user_type: $Enums.UserType | null
    phone: string | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    user_type: $Enums.UserType | null
    phone: string | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    user_type: number
    phone: number
    created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    user_type?: true
    phone?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    user_type?: true
    phone?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    user_type?: true
    phone?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone: string | null
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    user_type?: boolean
    phone?: boolean
    created_at?: boolean
    landOwner?: boolean | User$landOwnerArgs<ExtArgs>
    company?: boolean | User$companyArgs<ExtArgs>
    investor?: boolean | User$investorArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    user_type?: boolean
    phone?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    user_type?: boolean
    phone?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    user_type?: boolean
    phone?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "user_type" | "phone" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landOwner?: boolean | User$landOwnerArgs<ExtArgs>
    company?: boolean | User$companyArgs<ExtArgs>
    investor?: boolean | User$investorArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      landOwner: Prisma.$LandOwnersPayload<ExtArgs> | null
      company: Prisma.$CompaniesPayload<ExtArgs> | null
      investor: Prisma.$InvestorsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      user_type: $Enums.UserType
      phone: string | null
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    landOwner<T extends User$landOwnerArgs<ExtArgs> = {}>(args?: Subset<T, User$landOwnerArgs<ExtArgs>>): Prisma__LandOwnersClient<$Result.GetResult<Prisma.$LandOwnersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    company<T extends User$companyArgs<ExtArgs> = {}>(args?: Subset<T, User$companyArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    investor<T extends User$investorArgs<ExtArgs> = {}>(args?: Subset<T, User$investorArgs<ExtArgs>>): Prisma__InvestorsClient<$Result.GetResult<Prisma.$InvestorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly user_type: FieldRef<"User", 'UserType'>
    readonly phone: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.landOwner
   */
  export type User$landOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandOwners
     */
    select?: LandOwnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandOwners
     */
    omit?: LandOwnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandOwnersInclude<ExtArgs> | null
    where?: LandOwnersWhereInput
  }

  /**
   * User.company
   */
  export type User$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    where?: CompaniesWhereInput
  }

  /**
   * User.investor
   */
  export type User$investorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investors
     */
    select?: InvestorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investors
     */
    omit?: InvestorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorsInclude<ExtArgs> | null
    where?: InvestorsWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model LandOwners
   */

  export type AggregateLandOwners = {
    _count: LandOwnersCountAggregateOutputType | null
    _min: LandOwnersMinAggregateOutputType | null
    _max: LandOwnersMaxAggregateOutputType | null
  }

  export type LandOwnersMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    document_id: string | null
  }

  export type LandOwnersMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    document_id: string | null
  }

  export type LandOwnersCountAggregateOutputType = {
    id: number
    user_id: number
    document_id: number
    _all: number
  }


  export type LandOwnersMinAggregateInputType = {
    id?: true
    user_id?: true
    document_id?: true
  }

  export type LandOwnersMaxAggregateInputType = {
    id?: true
    user_id?: true
    document_id?: true
  }

  export type LandOwnersCountAggregateInputType = {
    id?: true
    user_id?: true
    document_id?: true
    _all?: true
  }

  export type LandOwnersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LandOwners to aggregate.
     */
    where?: LandOwnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandOwners to fetch.
     */
    orderBy?: LandOwnersOrderByWithRelationInput | LandOwnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LandOwnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LandOwners
    **/
    _count?: true | LandOwnersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandOwnersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandOwnersMaxAggregateInputType
  }

  export type GetLandOwnersAggregateType<T extends LandOwnersAggregateArgs> = {
        [P in keyof T & keyof AggregateLandOwners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLandOwners[P]>
      : GetScalarType<T[P], AggregateLandOwners[P]>
  }




  export type LandOwnersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandOwnersWhereInput
    orderBy?: LandOwnersOrderByWithAggregationInput | LandOwnersOrderByWithAggregationInput[]
    by: LandOwnersScalarFieldEnum[] | LandOwnersScalarFieldEnum
    having?: LandOwnersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandOwnersCountAggregateInputType | true
    _min?: LandOwnersMinAggregateInputType
    _max?: LandOwnersMaxAggregateInputType
  }

  export type LandOwnersGroupByOutputType = {
    id: string
    user_id: string
    document_id: string
    _count: LandOwnersCountAggregateOutputType | null
    _min: LandOwnersMinAggregateOutputType | null
    _max: LandOwnersMaxAggregateOutputType | null
  }

  type GetLandOwnersGroupByPayload<T extends LandOwnersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LandOwnersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandOwnersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandOwnersGroupByOutputType[P]>
            : GetScalarType<T[P], LandOwnersGroupByOutputType[P]>
        }
      >
    >


  export type LandOwnersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    document_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Lands?: boolean | LandOwners$LandsArgs<ExtArgs>
  }, ExtArgs["result"]["landOwners"]>

  export type LandOwnersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    document_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["landOwners"]>

  export type LandOwnersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    document_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["landOwners"]>

  export type LandOwnersSelectScalar = {
    id?: boolean
    user_id?: boolean
    document_id?: boolean
  }

  export type LandOwnersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "document_id", ExtArgs["result"]["landOwners"]>
  export type LandOwnersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Lands?: boolean | LandOwners$LandsArgs<ExtArgs>
  }
  export type LandOwnersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LandOwnersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LandOwnersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LandOwners"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Lands: Prisma.$LandsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      document_id: string
    }, ExtArgs["result"]["landOwners"]>
    composites: {}
  }

  type LandOwnersGetPayload<S extends boolean | null | undefined | LandOwnersDefaultArgs> = $Result.GetResult<Prisma.$LandOwnersPayload, S>

  type LandOwnersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LandOwnersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LandOwnersCountAggregateInputType | true
    }

  export interface LandOwnersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LandOwners'], meta: { name: 'LandOwners' } }
    /**
     * Find zero or one LandOwners that matches the filter.
     * @param {LandOwnersFindUniqueArgs} args - Arguments to find a LandOwners
     * @example
     * // Get one LandOwners
     * const landOwners = await prisma.landOwners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LandOwnersFindUniqueArgs>(args: SelectSubset<T, LandOwnersFindUniqueArgs<ExtArgs>>): Prisma__LandOwnersClient<$Result.GetResult<Prisma.$LandOwnersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LandOwners that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LandOwnersFindUniqueOrThrowArgs} args - Arguments to find a LandOwners
     * @example
     * // Get one LandOwners
     * const landOwners = await prisma.landOwners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LandOwnersFindUniqueOrThrowArgs>(args: SelectSubset<T, LandOwnersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LandOwnersClient<$Result.GetResult<Prisma.$LandOwnersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LandOwners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandOwnersFindFirstArgs} args - Arguments to find a LandOwners
     * @example
     * // Get one LandOwners
     * const landOwners = await prisma.landOwners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LandOwnersFindFirstArgs>(args?: SelectSubset<T, LandOwnersFindFirstArgs<ExtArgs>>): Prisma__LandOwnersClient<$Result.GetResult<Prisma.$LandOwnersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LandOwners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandOwnersFindFirstOrThrowArgs} args - Arguments to find a LandOwners
     * @example
     * // Get one LandOwners
     * const landOwners = await prisma.landOwners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LandOwnersFindFirstOrThrowArgs>(args?: SelectSubset<T, LandOwnersFindFirstOrThrowArgs<ExtArgs>>): Prisma__LandOwnersClient<$Result.GetResult<Prisma.$LandOwnersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LandOwners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandOwnersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LandOwners
     * const landOwners = await prisma.landOwners.findMany()
     * 
     * // Get first 10 LandOwners
     * const landOwners = await prisma.landOwners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landOwnersWithIdOnly = await prisma.landOwners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LandOwnersFindManyArgs>(args?: SelectSubset<T, LandOwnersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandOwnersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LandOwners.
     * @param {LandOwnersCreateArgs} args - Arguments to create a LandOwners.
     * @example
     * // Create one LandOwners
     * const LandOwners = await prisma.landOwners.create({
     *   data: {
     *     // ... data to create a LandOwners
     *   }
     * })
     * 
     */
    create<T extends LandOwnersCreateArgs>(args: SelectSubset<T, LandOwnersCreateArgs<ExtArgs>>): Prisma__LandOwnersClient<$Result.GetResult<Prisma.$LandOwnersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LandOwners.
     * @param {LandOwnersCreateManyArgs} args - Arguments to create many LandOwners.
     * @example
     * // Create many LandOwners
     * const landOwners = await prisma.landOwners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LandOwnersCreateManyArgs>(args?: SelectSubset<T, LandOwnersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LandOwners and returns the data saved in the database.
     * @param {LandOwnersCreateManyAndReturnArgs} args - Arguments to create many LandOwners.
     * @example
     * // Create many LandOwners
     * const landOwners = await prisma.landOwners.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LandOwners and only return the `id`
     * const landOwnersWithIdOnly = await prisma.landOwners.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LandOwnersCreateManyAndReturnArgs>(args?: SelectSubset<T, LandOwnersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandOwnersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LandOwners.
     * @param {LandOwnersDeleteArgs} args - Arguments to delete one LandOwners.
     * @example
     * // Delete one LandOwners
     * const LandOwners = await prisma.landOwners.delete({
     *   where: {
     *     // ... filter to delete one LandOwners
     *   }
     * })
     * 
     */
    delete<T extends LandOwnersDeleteArgs>(args: SelectSubset<T, LandOwnersDeleteArgs<ExtArgs>>): Prisma__LandOwnersClient<$Result.GetResult<Prisma.$LandOwnersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LandOwners.
     * @param {LandOwnersUpdateArgs} args - Arguments to update one LandOwners.
     * @example
     * // Update one LandOwners
     * const landOwners = await prisma.landOwners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LandOwnersUpdateArgs>(args: SelectSubset<T, LandOwnersUpdateArgs<ExtArgs>>): Prisma__LandOwnersClient<$Result.GetResult<Prisma.$LandOwnersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LandOwners.
     * @param {LandOwnersDeleteManyArgs} args - Arguments to filter LandOwners to delete.
     * @example
     * // Delete a few LandOwners
     * const { count } = await prisma.landOwners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LandOwnersDeleteManyArgs>(args?: SelectSubset<T, LandOwnersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LandOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandOwnersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LandOwners
     * const landOwners = await prisma.landOwners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LandOwnersUpdateManyArgs>(args: SelectSubset<T, LandOwnersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LandOwners and returns the data updated in the database.
     * @param {LandOwnersUpdateManyAndReturnArgs} args - Arguments to update many LandOwners.
     * @example
     * // Update many LandOwners
     * const landOwners = await prisma.landOwners.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LandOwners and only return the `id`
     * const landOwnersWithIdOnly = await prisma.landOwners.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LandOwnersUpdateManyAndReturnArgs>(args: SelectSubset<T, LandOwnersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandOwnersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LandOwners.
     * @param {LandOwnersUpsertArgs} args - Arguments to update or create a LandOwners.
     * @example
     * // Update or create a LandOwners
     * const landOwners = await prisma.landOwners.upsert({
     *   create: {
     *     // ... data to create a LandOwners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LandOwners we want to update
     *   }
     * })
     */
    upsert<T extends LandOwnersUpsertArgs>(args: SelectSubset<T, LandOwnersUpsertArgs<ExtArgs>>): Prisma__LandOwnersClient<$Result.GetResult<Prisma.$LandOwnersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LandOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandOwnersCountArgs} args - Arguments to filter LandOwners to count.
     * @example
     * // Count the number of LandOwners
     * const count = await prisma.landOwners.count({
     *   where: {
     *     // ... the filter for the LandOwners we want to count
     *   }
     * })
    **/
    count<T extends LandOwnersCountArgs>(
      args?: Subset<T, LandOwnersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandOwnersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LandOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandOwnersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LandOwnersAggregateArgs>(args: Subset<T, LandOwnersAggregateArgs>): Prisma.PrismaPromise<GetLandOwnersAggregateType<T>>

    /**
     * Group by LandOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandOwnersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LandOwnersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandOwnersGroupByArgs['orderBy'] }
        : { orderBy?: LandOwnersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LandOwnersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandOwnersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LandOwners model
   */
  readonly fields: LandOwnersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LandOwners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LandOwnersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Lands<T extends LandOwners$LandsArgs<ExtArgs> = {}>(args?: Subset<T, LandOwners$LandsArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LandOwners model
   */
  interface LandOwnersFieldRefs {
    readonly id: FieldRef<"LandOwners", 'String'>
    readonly user_id: FieldRef<"LandOwners", 'String'>
    readonly document_id: FieldRef<"LandOwners", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LandOwners findUnique
   */
  export type LandOwnersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandOwners
     */
    select?: LandOwnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandOwners
     */
    omit?: LandOwnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandOwnersInclude<ExtArgs> | null
    /**
     * Filter, which LandOwners to fetch.
     */
    where: LandOwnersWhereUniqueInput
  }

  /**
   * LandOwners findUniqueOrThrow
   */
  export type LandOwnersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandOwners
     */
    select?: LandOwnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandOwners
     */
    omit?: LandOwnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandOwnersInclude<ExtArgs> | null
    /**
     * Filter, which LandOwners to fetch.
     */
    where: LandOwnersWhereUniqueInput
  }

  /**
   * LandOwners findFirst
   */
  export type LandOwnersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandOwners
     */
    select?: LandOwnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandOwners
     */
    omit?: LandOwnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandOwnersInclude<ExtArgs> | null
    /**
     * Filter, which LandOwners to fetch.
     */
    where?: LandOwnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandOwners to fetch.
     */
    orderBy?: LandOwnersOrderByWithRelationInput | LandOwnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LandOwners.
     */
    cursor?: LandOwnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LandOwners.
     */
    distinct?: LandOwnersScalarFieldEnum | LandOwnersScalarFieldEnum[]
  }

  /**
   * LandOwners findFirstOrThrow
   */
  export type LandOwnersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandOwners
     */
    select?: LandOwnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandOwners
     */
    omit?: LandOwnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandOwnersInclude<ExtArgs> | null
    /**
     * Filter, which LandOwners to fetch.
     */
    where?: LandOwnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandOwners to fetch.
     */
    orderBy?: LandOwnersOrderByWithRelationInput | LandOwnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LandOwners.
     */
    cursor?: LandOwnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LandOwners.
     */
    distinct?: LandOwnersScalarFieldEnum | LandOwnersScalarFieldEnum[]
  }

  /**
   * LandOwners findMany
   */
  export type LandOwnersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandOwners
     */
    select?: LandOwnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandOwners
     */
    omit?: LandOwnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandOwnersInclude<ExtArgs> | null
    /**
     * Filter, which LandOwners to fetch.
     */
    where?: LandOwnersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LandOwners to fetch.
     */
    orderBy?: LandOwnersOrderByWithRelationInput | LandOwnersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LandOwners.
     */
    cursor?: LandOwnersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LandOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LandOwners.
     */
    skip?: number
    distinct?: LandOwnersScalarFieldEnum | LandOwnersScalarFieldEnum[]
  }

  /**
   * LandOwners create
   */
  export type LandOwnersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandOwners
     */
    select?: LandOwnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandOwners
     */
    omit?: LandOwnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandOwnersInclude<ExtArgs> | null
    /**
     * The data needed to create a LandOwners.
     */
    data: XOR<LandOwnersCreateInput, LandOwnersUncheckedCreateInput>
  }

  /**
   * LandOwners createMany
   */
  export type LandOwnersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LandOwners.
     */
    data: LandOwnersCreateManyInput | LandOwnersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LandOwners createManyAndReturn
   */
  export type LandOwnersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandOwners
     */
    select?: LandOwnersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LandOwners
     */
    omit?: LandOwnersOmit<ExtArgs> | null
    /**
     * The data used to create many LandOwners.
     */
    data: LandOwnersCreateManyInput | LandOwnersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandOwnersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LandOwners update
   */
  export type LandOwnersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandOwners
     */
    select?: LandOwnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandOwners
     */
    omit?: LandOwnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandOwnersInclude<ExtArgs> | null
    /**
     * The data needed to update a LandOwners.
     */
    data: XOR<LandOwnersUpdateInput, LandOwnersUncheckedUpdateInput>
    /**
     * Choose, which LandOwners to update.
     */
    where: LandOwnersWhereUniqueInput
  }

  /**
   * LandOwners updateMany
   */
  export type LandOwnersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LandOwners.
     */
    data: XOR<LandOwnersUpdateManyMutationInput, LandOwnersUncheckedUpdateManyInput>
    /**
     * Filter which LandOwners to update
     */
    where?: LandOwnersWhereInput
    /**
     * Limit how many LandOwners to update.
     */
    limit?: number
  }

  /**
   * LandOwners updateManyAndReturn
   */
  export type LandOwnersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandOwners
     */
    select?: LandOwnersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LandOwners
     */
    omit?: LandOwnersOmit<ExtArgs> | null
    /**
     * The data used to update LandOwners.
     */
    data: XOR<LandOwnersUpdateManyMutationInput, LandOwnersUncheckedUpdateManyInput>
    /**
     * Filter which LandOwners to update
     */
    where?: LandOwnersWhereInput
    /**
     * Limit how many LandOwners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandOwnersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LandOwners upsert
   */
  export type LandOwnersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandOwners
     */
    select?: LandOwnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandOwners
     */
    omit?: LandOwnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandOwnersInclude<ExtArgs> | null
    /**
     * The filter to search for the LandOwners to update in case it exists.
     */
    where: LandOwnersWhereUniqueInput
    /**
     * In case the LandOwners found by the `where` argument doesn't exist, create a new LandOwners with this data.
     */
    create: XOR<LandOwnersCreateInput, LandOwnersUncheckedCreateInput>
    /**
     * In case the LandOwners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LandOwnersUpdateInput, LandOwnersUncheckedUpdateInput>
  }

  /**
   * LandOwners delete
   */
  export type LandOwnersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandOwners
     */
    select?: LandOwnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandOwners
     */
    omit?: LandOwnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandOwnersInclude<ExtArgs> | null
    /**
     * Filter which LandOwners to delete.
     */
    where: LandOwnersWhereUniqueInput
  }

  /**
   * LandOwners deleteMany
   */
  export type LandOwnersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LandOwners to delete
     */
    where?: LandOwnersWhereInput
    /**
     * Limit how many LandOwners to delete.
     */
    limit?: number
  }

  /**
   * LandOwners.Lands
   */
  export type LandOwners$LandsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    where?: LandsWhereInput
  }

  /**
   * LandOwners without action
   */
  export type LandOwnersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandOwners
     */
    select?: LandOwnersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LandOwners
     */
    omit?: LandOwnersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandOwnersInclude<ExtArgs> | null
  }


  /**
   * Model Companies
   */

  export type AggregateCompanies = {
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  export type CompaniesMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    document_id: string | null
    company_name: string | null
  }

  export type CompaniesMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    document_id: string | null
    company_name: string | null
  }

  export type CompaniesCountAggregateOutputType = {
    id: number
    user_id: number
    document_id: number
    company_name: number
    _all: number
  }


  export type CompaniesMinAggregateInputType = {
    id?: true
    user_id?: true
    document_id?: true
    company_name?: true
  }

  export type CompaniesMaxAggregateInputType = {
    id?: true
    user_id?: true
    document_id?: true
    company_name?: true
  }

  export type CompaniesCountAggregateInputType = {
    id?: true
    user_id?: true
    document_id?: true
    company_name?: true
    _all?: true
  }

  export type CompaniesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to aggregate.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompaniesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompaniesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompaniesMaxAggregateInputType
  }

  export type GetCompaniesAggregateType<T extends CompaniesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanies[P]>
      : GetScalarType<T[P], AggregateCompanies[P]>
  }




  export type CompaniesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompaniesWhereInput
    orderBy?: CompaniesOrderByWithAggregationInput | CompaniesOrderByWithAggregationInput[]
    by: CompaniesScalarFieldEnum[] | CompaniesScalarFieldEnum
    having?: CompaniesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompaniesCountAggregateInputType | true
    _min?: CompaniesMinAggregateInputType
    _max?: CompaniesMaxAggregateInputType
  }

  export type CompaniesGroupByOutputType = {
    id: string
    user_id: string
    document_id: string
    company_name: string
    _count: CompaniesCountAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  type GetCompaniesGroupByPayload<T extends CompaniesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompaniesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompaniesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
            : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
        }
      >
    >


  export type CompaniesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    document_id?: boolean
    company_name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Projects?: boolean | Companies$ProjectsArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>

  export type CompaniesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    document_id?: boolean
    company_name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>

  export type CompaniesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    document_id?: boolean
    company_name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>

  export type CompaniesSelectScalar = {
    id?: boolean
    user_id?: boolean
    document_id?: boolean
    company_name?: boolean
  }

  export type CompaniesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "document_id" | "company_name", ExtArgs["result"]["companies"]>
  export type CompaniesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Projects?: boolean | Companies$ProjectsArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompaniesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompaniesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompaniesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Companies"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Projects: Prisma.$ProjectsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      document_id: string
      company_name: string
    }, ExtArgs["result"]["companies"]>
    composites: {}
  }

  type CompaniesGetPayload<S extends boolean | null | undefined | CompaniesDefaultArgs> = $Result.GetResult<Prisma.$CompaniesPayload, S>

  type CompaniesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompaniesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompaniesCountAggregateInputType | true
    }

  export interface CompaniesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Companies'], meta: { name: 'Companies' } }
    /**
     * Find zero or one Companies that matches the filter.
     * @param {CompaniesFindUniqueArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompaniesFindUniqueArgs>(args: SelectSubset<T, CompaniesFindUniqueArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompaniesFindUniqueOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompaniesFindUniqueOrThrowArgs>(args: SelectSubset<T, CompaniesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindFirstArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompaniesFindFirstArgs>(args?: SelectSubset<T, CompaniesFindFirstArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindFirstOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompaniesFindFirstOrThrowArgs>(args?: SelectSubset<T, CompaniesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.companies.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.companies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companiesWithIdOnly = await prisma.companies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompaniesFindManyArgs>(args?: SelectSubset<T, CompaniesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companies.
     * @param {CompaniesCreateArgs} args - Arguments to create a Companies.
     * @example
     * // Create one Companies
     * const Companies = await prisma.companies.create({
     *   data: {
     *     // ... data to create a Companies
     *   }
     * })
     * 
     */
    create<T extends CompaniesCreateArgs>(args: SelectSubset<T, CompaniesCreateArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompaniesCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompaniesCreateManyArgs>(args?: SelectSubset<T, CompaniesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompaniesCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companiesWithIdOnly = await prisma.companies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompaniesCreateManyAndReturnArgs>(args?: SelectSubset<T, CompaniesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Companies.
     * @param {CompaniesDeleteArgs} args - Arguments to delete one Companies.
     * @example
     * // Delete one Companies
     * const Companies = await prisma.companies.delete({
     *   where: {
     *     // ... filter to delete one Companies
     *   }
     * })
     * 
     */
    delete<T extends CompaniesDeleteArgs>(args: SelectSubset<T, CompaniesDeleteArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companies.
     * @param {CompaniesUpdateArgs} args - Arguments to update one Companies.
     * @example
     * // Update one Companies
     * const companies = await prisma.companies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompaniesUpdateArgs>(args: SelectSubset<T, CompaniesUpdateArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompaniesDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.companies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompaniesDeleteManyArgs>(args?: SelectSubset<T, CompaniesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompaniesUpdateManyArgs>(args: SelectSubset<T, CompaniesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompaniesUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companiesWithIdOnly = await prisma.companies.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompaniesUpdateManyAndReturnArgs>(args: SelectSubset<T, CompaniesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Companies.
     * @param {CompaniesUpsertArgs} args - Arguments to update or create a Companies.
     * @example
     * // Update or create a Companies
     * const companies = await prisma.companies.upsert({
     *   create: {
     *     // ... data to create a Companies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companies we want to update
     *   }
     * })
     */
    upsert<T extends CompaniesUpsertArgs>(args: SelectSubset<T, CompaniesUpsertArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.companies.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompaniesCountArgs>(
      args?: Subset<T, CompaniesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompaniesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompaniesAggregateArgs>(args: Subset<T, CompaniesAggregateArgs>): Prisma.PrismaPromise<GetCompaniesAggregateType<T>>

    /**
     * Group by Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompaniesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompaniesGroupByArgs['orderBy'] }
        : { orderBy?: CompaniesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompaniesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Companies model
   */
  readonly fields: CompaniesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Companies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompaniesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Projects<T extends Companies$ProjectsArgs<ExtArgs> = {}>(args?: Subset<T, Companies$ProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Companies model
   */
  interface CompaniesFieldRefs {
    readonly id: FieldRef<"Companies", 'String'>
    readonly user_id: FieldRef<"Companies", 'String'>
    readonly document_id: FieldRef<"Companies", 'String'>
    readonly company_name: FieldRef<"Companies", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Companies findUnique
   */
  export type CompaniesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where: CompaniesWhereUniqueInput
  }

  /**
   * Companies findUniqueOrThrow
   */
  export type CompaniesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where: CompaniesWhereUniqueInput
  }

  /**
   * Companies findFirst
   */
  export type CompaniesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * Companies findFirstOrThrow
   */
  export type CompaniesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * Companies findMany
   */
  export type CompaniesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * Companies create
   */
  export type CompaniesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * The data needed to create a Companies.
     */
    data: XOR<CompaniesCreateInput, CompaniesUncheckedCreateInput>
  }

  /**
   * Companies createMany
   */
  export type CompaniesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompaniesCreateManyInput | CompaniesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Companies createManyAndReturn
   */
  export type CompaniesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompaniesCreateManyInput | CompaniesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Companies update
   */
  export type CompaniesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * The data needed to update a Companies.
     */
    data: XOR<CompaniesUpdateInput, CompaniesUncheckedUpdateInput>
    /**
     * Choose, which Companies to update.
     */
    where: CompaniesWhereUniqueInput
  }

  /**
   * Companies updateMany
   */
  export type CompaniesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompaniesUpdateManyMutationInput, CompaniesUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompaniesWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Companies updateManyAndReturn
   */
  export type CompaniesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompaniesUpdateManyMutationInput, CompaniesUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompaniesWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Companies upsert
   */
  export type CompaniesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * The filter to search for the Companies to update in case it exists.
     */
    where: CompaniesWhereUniqueInput
    /**
     * In case the Companies found by the `where` argument doesn't exist, create a new Companies with this data.
     */
    create: XOR<CompaniesCreateInput, CompaniesUncheckedCreateInput>
    /**
     * In case the Companies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompaniesUpdateInput, CompaniesUncheckedUpdateInput>
  }

  /**
   * Companies delete
   */
  export type CompaniesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter which Companies to delete.
     */
    where: CompaniesWhereUniqueInput
  }

  /**
   * Companies deleteMany
   */
  export type CompaniesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompaniesWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Companies.Projects
   */
  export type Companies$ProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    cursor?: ProjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Companies without action
   */
  export type CompaniesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
  }


  /**
   * Model Investors
   */

  export type AggregateInvestors = {
    _count: InvestorsCountAggregateOutputType | null
    _min: InvestorsMinAggregateOutputType | null
    _max: InvestorsMaxAggregateOutputType | null
  }

  export type InvestorsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    document_id: string | null
  }

  export type InvestorsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    document_id: string | null
  }

  export type InvestorsCountAggregateOutputType = {
    id: number
    user_id: number
    document_id: number
    _all: number
  }


  export type InvestorsMinAggregateInputType = {
    id?: true
    user_id?: true
    document_id?: true
  }

  export type InvestorsMaxAggregateInputType = {
    id?: true
    user_id?: true
    document_id?: true
  }

  export type InvestorsCountAggregateInputType = {
    id?: true
    user_id?: true
    document_id?: true
    _all?: true
  }

  export type InvestorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investors to aggregate.
     */
    where?: InvestorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investors to fetch.
     */
    orderBy?: InvestorsOrderByWithRelationInput | InvestorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investors
    **/
    _count?: true | InvestorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestorsMaxAggregateInputType
  }

  export type GetInvestorsAggregateType<T extends InvestorsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestors[P]>
      : GetScalarType<T[P], AggregateInvestors[P]>
  }




  export type InvestorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestorsWhereInput
    orderBy?: InvestorsOrderByWithAggregationInput | InvestorsOrderByWithAggregationInput[]
    by: InvestorsScalarFieldEnum[] | InvestorsScalarFieldEnum
    having?: InvestorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestorsCountAggregateInputType | true
    _min?: InvestorsMinAggregateInputType
    _max?: InvestorsMaxAggregateInputType
  }

  export type InvestorsGroupByOutputType = {
    id: string
    user_id: string
    document_id: string
    _count: InvestorsCountAggregateOutputType | null
    _min: InvestorsMinAggregateOutputType | null
    _max: InvestorsMaxAggregateOutputType | null
  }

  type GetInvestorsGroupByPayload<T extends InvestorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestorsGroupByOutputType[P]>
            : GetScalarType<T[P], InvestorsGroupByOutputType[P]>
        }
      >
    >


  export type InvestorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    document_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Investments?: boolean | Investors$InvestmentsArgs<ExtArgs>
    _count?: boolean | InvestorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investors"]>

  export type InvestorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    document_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investors"]>

  export type InvestorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    document_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investors"]>

  export type InvestorsSelectScalar = {
    id?: boolean
    user_id?: boolean
    document_id?: boolean
  }

  export type InvestorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "document_id", ExtArgs["result"]["investors"]>
  export type InvestorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Investments?: boolean | Investors$InvestmentsArgs<ExtArgs>
    _count?: boolean | InvestorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvestorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InvestorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InvestorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investors"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Investments: Prisma.$InvestmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      document_id: string
    }, ExtArgs["result"]["investors"]>
    composites: {}
  }

  type InvestorsGetPayload<S extends boolean | null | undefined | InvestorsDefaultArgs> = $Result.GetResult<Prisma.$InvestorsPayload, S>

  type InvestorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestorsCountAggregateInputType | true
    }

  export interface InvestorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investors'], meta: { name: 'Investors' } }
    /**
     * Find zero or one Investors that matches the filter.
     * @param {InvestorsFindUniqueArgs} args - Arguments to find a Investors
     * @example
     * // Get one Investors
     * const investors = await prisma.investors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestorsFindUniqueArgs>(args: SelectSubset<T, InvestorsFindUniqueArgs<ExtArgs>>): Prisma__InvestorsClient<$Result.GetResult<Prisma.$InvestorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestorsFindUniqueOrThrowArgs} args - Arguments to find a Investors
     * @example
     * // Get one Investors
     * const investors = await prisma.investors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestorsFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestorsClient<$Result.GetResult<Prisma.$InvestorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorsFindFirstArgs} args - Arguments to find a Investors
     * @example
     * // Get one Investors
     * const investors = await prisma.investors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestorsFindFirstArgs>(args?: SelectSubset<T, InvestorsFindFirstArgs<ExtArgs>>): Prisma__InvestorsClient<$Result.GetResult<Prisma.$InvestorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorsFindFirstOrThrowArgs} args - Arguments to find a Investors
     * @example
     * // Get one Investors
     * const investors = await prisma.investors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestorsFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestorsClient<$Result.GetResult<Prisma.$InvestorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investors
     * const investors = await prisma.investors.findMany()
     * 
     * // Get first 10 Investors
     * const investors = await prisma.investors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investorsWithIdOnly = await prisma.investors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestorsFindManyArgs>(args?: SelectSubset<T, InvestorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investors.
     * @param {InvestorsCreateArgs} args - Arguments to create a Investors.
     * @example
     * // Create one Investors
     * const Investors = await prisma.investors.create({
     *   data: {
     *     // ... data to create a Investors
     *   }
     * })
     * 
     */
    create<T extends InvestorsCreateArgs>(args: SelectSubset<T, InvestorsCreateArgs<ExtArgs>>): Prisma__InvestorsClient<$Result.GetResult<Prisma.$InvestorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investors.
     * @param {InvestorsCreateManyArgs} args - Arguments to create many Investors.
     * @example
     * // Create many Investors
     * const investors = await prisma.investors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestorsCreateManyArgs>(args?: SelectSubset<T, InvestorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investors and returns the data saved in the database.
     * @param {InvestorsCreateManyAndReturnArgs} args - Arguments to create many Investors.
     * @example
     * // Create many Investors
     * const investors = await prisma.investors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investors and only return the `id`
     * const investorsWithIdOnly = await prisma.investors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestorsCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Investors.
     * @param {InvestorsDeleteArgs} args - Arguments to delete one Investors.
     * @example
     * // Delete one Investors
     * const Investors = await prisma.investors.delete({
     *   where: {
     *     // ... filter to delete one Investors
     *   }
     * })
     * 
     */
    delete<T extends InvestorsDeleteArgs>(args: SelectSubset<T, InvestorsDeleteArgs<ExtArgs>>): Prisma__InvestorsClient<$Result.GetResult<Prisma.$InvestorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investors.
     * @param {InvestorsUpdateArgs} args - Arguments to update one Investors.
     * @example
     * // Update one Investors
     * const investors = await prisma.investors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestorsUpdateArgs>(args: SelectSubset<T, InvestorsUpdateArgs<ExtArgs>>): Prisma__InvestorsClient<$Result.GetResult<Prisma.$InvestorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investors.
     * @param {InvestorsDeleteManyArgs} args - Arguments to filter Investors to delete.
     * @example
     * // Delete a few Investors
     * const { count } = await prisma.investors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestorsDeleteManyArgs>(args?: SelectSubset<T, InvestorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investors
     * const investors = await prisma.investors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestorsUpdateManyArgs>(args: SelectSubset<T, InvestorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investors and returns the data updated in the database.
     * @param {InvestorsUpdateManyAndReturnArgs} args - Arguments to update many Investors.
     * @example
     * // Update many Investors
     * const investors = await prisma.investors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investors and only return the `id`
     * const investorsWithIdOnly = await prisma.investors.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvestorsUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Investors.
     * @param {InvestorsUpsertArgs} args - Arguments to update or create a Investors.
     * @example
     * // Update or create a Investors
     * const investors = await prisma.investors.upsert({
     *   create: {
     *     // ... data to create a Investors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investors we want to update
     *   }
     * })
     */
    upsert<T extends InvestorsUpsertArgs>(args: SelectSubset<T, InvestorsUpsertArgs<ExtArgs>>): Prisma__InvestorsClient<$Result.GetResult<Prisma.$InvestorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorsCountArgs} args - Arguments to filter Investors to count.
     * @example
     * // Count the number of Investors
     * const count = await prisma.investors.count({
     *   where: {
     *     // ... the filter for the Investors we want to count
     *   }
     * })
    **/
    count<T extends InvestorsCountArgs>(
      args?: Subset<T, InvestorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestorsAggregateArgs>(args: Subset<T, InvestorsAggregateArgs>): Prisma.PrismaPromise<GetInvestorsAggregateType<T>>

    /**
     * Group by Investors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvestorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestorsGroupByArgs['orderBy'] }
        : { orderBy?: InvestorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvestorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investors model
   */
  readonly fields: InvestorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Investments<T extends Investors$InvestmentsArgs<ExtArgs> = {}>(args?: Subset<T, Investors$InvestmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Investors model
   */
  interface InvestorsFieldRefs {
    readonly id: FieldRef<"Investors", 'String'>
    readonly user_id: FieldRef<"Investors", 'String'>
    readonly document_id: FieldRef<"Investors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Investors findUnique
   */
  export type InvestorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investors
     */
    select?: InvestorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investors
     */
    omit?: InvestorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorsInclude<ExtArgs> | null
    /**
     * Filter, which Investors to fetch.
     */
    where: InvestorsWhereUniqueInput
  }

  /**
   * Investors findUniqueOrThrow
   */
  export type InvestorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investors
     */
    select?: InvestorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investors
     */
    omit?: InvestorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorsInclude<ExtArgs> | null
    /**
     * Filter, which Investors to fetch.
     */
    where: InvestorsWhereUniqueInput
  }

  /**
   * Investors findFirst
   */
  export type InvestorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investors
     */
    select?: InvestorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investors
     */
    omit?: InvestorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorsInclude<ExtArgs> | null
    /**
     * Filter, which Investors to fetch.
     */
    where?: InvestorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investors to fetch.
     */
    orderBy?: InvestorsOrderByWithRelationInput | InvestorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investors.
     */
    cursor?: InvestorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investors.
     */
    distinct?: InvestorsScalarFieldEnum | InvestorsScalarFieldEnum[]
  }

  /**
   * Investors findFirstOrThrow
   */
  export type InvestorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investors
     */
    select?: InvestorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investors
     */
    omit?: InvestorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorsInclude<ExtArgs> | null
    /**
     * Filter, which Investors to fetch.
     */
    where?: InvestorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investors to fetch.
     */
    orderBy?: InvestorsOrderByWithRelationInput | InvestorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investors.
     */
    cursor?: InvestorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investors.
     */
    distinct?: InvestorsScalarFieldEnum | InvestorsScalarFieldEnum[]
  }

  /**
   * Investors findMany
   */
  export type InvestorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investors
     */
    select?: InvestorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investors
     */
    omit?: InvestorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorsInclude<ExtArgs> | null
    /**
     * Filter, which Investors to fetch.
     */
    where?: InvestorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investors to fetch.
     */
    orderBy?: InvestorsOrderByWithRelationInput | InvestorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investors.
     */
    cursor?: InvestorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investors.
     */
    skip?: number
    distinct?: InvestorsScalarFieldEnum | InvestorsScalarFieldEnum[]
  }

  /**
   * Investors create
   */
  export type InvestorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investors
     */
    select?: InvestorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investors
     */
    omit?: InvestorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Investors.
     */
    data: XOR<InvestorsCreateInput, InvestorsUncheckedCreateInput>
  }

  /**
   * Investors createMany
   */
  export type InvestorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investors.
     */
    data: InvestorsCreateManyInput | InvestorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investors createManyAndReturn
   */
  export type InvestorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investors
     */
    select?: InvestorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investors
     */
    omit?: InvestorsOmit<ExtArgs> | null
    /**
     * The data used to create many Investors.
     */
    data: InvestorsCreateManyInput | InvestorsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investors update
   */
  export type InvestorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investors
     */
    select?: InvestorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investors
     */
    omit?: InvestorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Investors.
     */
    data: XOR<InvestorsUpdateInput, InvestorsUncheckedUpdateInput>
    /**
     * Choose, which Investors to update.
     */
    where: InvestorsWhereUniqueInput
  }

  /**
   * Investors updateMany
   */
  export type InvestorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investors.
     */
    data: XOR<InvestorsUpdateManyMutationInput, InvestorsUncheckedUpdateManyInput>
    /**
     * Filter which Investors to update
     */
    where?: InvestorsWhereInput
    /**
     * Limit how many Investors to update.
     */
    limit?: number
  }

  /**
   * Investors updateManyAndReturn
   */
  export type InvestorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investors
     */
    select?: InvestorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investors
     */
    omit?: InvestorsOmit<ExtArgs> | null
    /**
     * The data used to update Investors.
     */
    data: XOR<InvestorsUpdateManyMutationInput, InvestorsUncheckedUpdateManyInput>
    /**
     * Filter which Investors to update
     */
    where?: InvestorsWhereInput
    /**
     * Limit how many Investors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investors upsert
   */
  export type InvestorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investors
     */
    select?: InvestorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investors
     */
    omit?: InvestorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Investors to update in case it exists.
     */
    where: InvestorsWhereUniqueInput
    /**
     * In case the Investors found by the `where` argument doesn't exist, create a new Investors with this data.
     */
    create: XOR<InvestorsCreateInput, InvestorsUncheckedCreateInput>
    /**
     * In case the Investors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestorsUpdateInput, InvestorsUncheckedUpdateInput>
  }

  /**
   * Investors delete
   */
  export type InvestorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investors
     */
    select?: InvestorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investors
     */
    omit?: InvestorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorsInclude<ExtArgs> | null
    /**
     * Filter which Investors to delete.
     */
    where: InvestorsWhereUniqueInput
  }

  /**
   * Investors deleteMany
   */
  export type InvestorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investors to delete
     */
    where?: InvestorsWhereInput
    /**
     * Limit how many Investors to delete.
     */
    limit?: number
  }

  /**
   * Investors.Investments
   */
  export type Investors$InvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investments
     */
    select?: InvestmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investments
     */
    omit?: InvestmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentsInclude<ExtArgs> | null
    where?: InvestmentsWhereInput
    orderBy?: InvestmentsOrderByWithRelationInput | InvestmentsOrderByWithRelationInput[]
    cursor?: InvestmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentsScalarFieldEnum | InvestmentsScalarFieldEnum[]
  }

  /**
   * Investors without action
   */
  export type InvestorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investors
     */
    select?: InvestorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investors
     */
    omit?: InvestorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorsInclude<ExtArgs> | null
  }


  /**
   * Model Lands
   */

  export type AggregateLands = {
    _count: LandsCountAggregateOutputType | null
    _avg: LandsAvgAggregateOutputType | null
    _sum: LandsSumAggregateOutputType | null
    _min: LandsMinAggregateOutputType | null
    _max: LandsMaxAggregateOutputType | null
  }

  export type LandsAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type LandsSumAggregateOutputType = {
    price: Decimal | null
  }

  export type LandsMinAggregateOutputType = {
    id: string | null
    owner_id: string | null
    price: Decimal | null
    availability: boolean | null
    street: string | null
    number: string | null
    complement: string | null
    district: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    country: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LandsMaxAggregateOutputType = {
    id: string | null
    owner_id: string | null
    price: Decimal | null
    availability: boolean | null
    street: string | null
    number: string | null
    complement: string | null
    district: string | null
    city: string | null
    state: string | null
    postal_code: string | null
    country: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type LandsCountAggregateOutputType = {
    id: number
    owner_id: number
    price: number
    availability: number
    street: number
    number: number
    complement: number
    district: number
    city: number
    state: number
    postal_code: number
    country: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type LandsAvgAggregateInputType = {
    price?: true
  }

  export type LandsSumAggregateInputType = {
    price?: true
  }

  export type LandsMinAggregateInputType = {
    id?: true
    owner_id?: true
    price?: true
    availability?: true
    street?: true
    number?: true
    complement?: true
    district?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    created_at?: true
    updated_at?: true
  }

  export type LandsMaxAggregateInputType = {
    id?: true
    owner_id?: true
    price?: true
    availability?: true
    street?: true
    number?: true
    complement?: true
    district?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    created_at?: true
    updated_at?: true
  }

  export type LandsCountAggregateInputType = {
    id?: true
    owner_id?: true
    price?: true
    availability?: true
    street?: true
    number?: true
    complement?: true
    district?: true
    city?: true
    state?: true
    postal_code?: true
    country?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type LandsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lands to aggregate.
     */
    where?: LandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lands to fetch.
     */
    orderBy?: LandsOrderByWithRelationInput | LandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lands
    **/
    _count?: true | LandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LandsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LandsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandsMaxAggregateInputType
  }

  export type GetLandsAggregateType<T extends LandsAggregateArgs> = {
        [P in keyof T & keyof AggregateLands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLands[P]>
      : GetScalarType<T[P], AggregateLands[P]>
  }




  export type LandsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandsWhereInput
    orderBy?: LandsOrderByWithAggregationInput | LandsOrderByWithAggregationInput[]
    by: LandsScalarFieldEnum[] | LandsScalarFieldEnum
    having?: LandsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandsCountAggregateInputType | true
    _avg?: LandsAvgAggregateInputType
    _sum?: LandsSumAggregateInputType
    _min?: LandsMinAggregateInputType
    _max?: LandsMaxAggregateInputType
  }

  export type LandsGroupByOutputType = {
    id: string
    owner_id: string
    price: Decimal
    availability: boolean
    street: string
    number: string
    complement: string | null
    district: string | null
    city: string
    state: string
    postal_code: string
    country: string
    created_at: Date
    updated_at: Date
    _count: LandsCountAggregateOutputType | null
    _avg: LandsAvgAggregateOutputType | null
    _sum: LandsSumAggregateOutputType | null
    _min: LandsMinAggregateOutputType | null
    _max: LandsMaxAggregateOutputType | null
  }

  type GetLandsGroupByPayload<T extends LandsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandsGroupByOutputType[P]>
            : GetScalarType<T[P], LandsGroupByOutputType[P]>
        }
      >
    >


  export type LandsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    price?: boolean
    availability?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    district?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | LandOwnersDefaultArgs<ExtArgs>
    Projects?: boolean | Lands$ProjectsArgs<ExtArgs>
    ProjectProposal?: boolean | Lands$ProjectProposalArgs<ExtArgs>
  }, ExtArgs["result"]["lands"]>

  export type LandsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    price?: boolean
    availability?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    district?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | LandOwnersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lands"]>

  export type LandsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    price?: boolean
    availability?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    district?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | LandOwnersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lands"]>

  export type LandsSelectScalar = {
    id?: boolean
    owner_id?: boolean
    price?: boolean
    availability?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    district?: boolean
    city?: boolean
    state?: boolean
    postal_code?: boolean
    country?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type LandsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner_id" | "price" | "availability" | "street" | "number" | "complement" | "district" | "city" | "state" | "postal_code" | "country" | "created_at" | "updated_at", ExtArgs["result"]["lands"]>
  export type LandsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | LandOwnersDefaultArgs<ExtArgs>
    Projects?: boolean | Lands$ProjectsArgs<ExtArgs>
    ProjectProposal?: boolean | Lands$ProjectProposalArgs<ExtArgs>
  }
  export type LandsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | LandOwnersDefaultArgs<ExtArgs>
  }
  export type LandsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | LandOwnersDefaultArgs<ExtArgs>
  }

  export type $LandsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lands"
    objects: {
      owner: Prisma.$LandOwnersPayload<ExtArgs>
      Projects: Prisma.$ProjectsPayload<ExtArgs> | null
      ProjectProposal: Prisma.$ProjectProposalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      owner_id: string
      price: Prisma.Decimal
      availability: boolean
      street: string
      number: string
      complement: string | null
      district: string | null
      city: string
      state: string
      postal_code: string
      country: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["lands"]>
    composites: {}
  }

  type LandsGetPayload<S extends boolean | null | undefined | LandsDefaultArgs> = $Result.GetResult<Prisma.$LandsPayload, S>

  type LandsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LandsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LandsCountAggregateInputType | true
    }

  export interface LandsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lands'], meta: { name: 'Lands' } }
    /**
     * Find zero or one Lands that matches the filter.
     * @param {LandsFindUniqueArgs} args - Arguments to find a Lands
     * @example
     * // Get one Lands
     * const lands = await prisma.lands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LandsFindUniqueArgs>(args: SelectSubset<T, LandsFindUniqueArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lands that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LandsFindUniqueOrThrowArgs} args - Arguments to find a Lands
     * @example
     * // Get one Lands
     * const lands = await prisma.lands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LandsFindUniqueOrThrowArgs>(args: SelectSubset<T, LandsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandsFindFirstArgs} args - Arguments to find a Lands
     * @example
     * // Get one Lands
     * const lands = await prisma.lands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LandsFindFirstArgs>(args?: SelectSubset<T, LandsFindFirstArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lands that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandsFindFirstOrThrowArgs} args - Arguments to find a Lands
     * @example
     * // Get one Lands
     * const lands = await prisma.lands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LandsFindFirstOrThrowArgs>(args?: SelectSubset<T, LandsFindFirstOrThrowArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lands
     * const lands = await prisma.lands.findMany()
     * 
     * // Get first 10 Lands
     * const lands = await prisma.lands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landsWithIdOnly = await prisma.lands.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LandsFindManyArgs>(args?: SelectSubset<T, LandsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lands.
     * @param {LandsCreateArgs} args - Arguments to create a Lands.
     * @example
     * // Create one Lands
     * const Lands = await prisma.lands.create({
     *   data: {
     *     // ... data to create a Lands
     *   }
     * })
     * 
     */
    create<T extends LandsCreateArgs>(args: SelectSubset<T, LandsCreateArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lands.
     * @param {LandsCreateManyArgs} args - Arguments to create many Lands.
     * @example
     * // Create many Lands
     * const lands = await prisma.lands.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LandsCreateManyArgs>(args?: SelectSubset<T, LandsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lands and returns the data saved in the database.
     * @param {LandsCreateManyAndReturnArgs} args - Arguments to create many Lands.
     * @example
     * // Create many Lands
     * const lands = await prisma.lands.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lands and only return the `id`
     * const landsWithIdOnly = await prisma.lands.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LandsCreateManyAndReturnArgs>(args?: SelectSubset<T, LandsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lands.
     * @param {LandsDeleteArgs} args - Arguments to delete one Lands.
     * @example
     * // Delete one Lands
     * const Lands = await prisma.lands.delete({
     *   where: {
     *     // ... filter to delete one Lands
     *   }
     * })
     * 
     */
    delete<T extends LandsDeleteArgs>(args: SelectSubset<T, LandsDeleteArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lands.
     * @param {LandsUpdateArgs} args - Arguments to update one Lands.
     * @example
     * // Update one Lands
     * const lands = await prisma.lands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LandsUpdateArgs>(args: SelectSubset<T, LandsUpdateArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lands.
     * @param {LandsDeleteManyArgs} args - Arguments to filter Lands to delete.
     * @example
     * // Delete a few Lands
     * const { count } = await prisma.lands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LandsDeleteManyArgs>(args?: SelectSubset<T, LandsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lands
     * const lands = await prisma.lands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LandsUpdateManyArgs>(args: SelectSubset<T, LandsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lands and returns the data updated in the database.
     * @param {LandsUpdateManyAndReturnArgs} args - Arguments to update many Lands.
     * @example
     * // Update many Lands
     * const lands = await prisma.lands.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lands and only return the `id`
     * const landsWithIdOnly = await prisma.lands.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LandsUpdateManyAndReturnArgs>(args: SelectSubset<T, LandsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lands.
     * @param {LandsUpsertArgs} args - Arguments to update or create a Lands.
     * @example
     * // Update or create a Lands
     * const lands = await prisma.lands.upsert({
     *   create: {
     *     // ... data to create a Lands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lands we want to update
     *   }
     * })
     */
    upsert<T extends LandsUpsertArgs>(args: SelectSubset<T, LandsUpsertArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandsCountArgs} args - Arguments to filter Lands to count.
     * @example
     * // Count the number of Lands
     * const count = await prisma.lands.count({
     *   where: {
     *     // ... the filter for the Lands we want to count
     *   }
     * })
    **/
    count<T extends LandsCountArgs>(
      args?: Subset<T, LandsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LandsAggregateArgs>(args: Subset<T, LandsAggregateArgs>): Prisma.PrismaPromise<GetLandsAggregateType<T>>

    /**
     * Group by Lands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandsGroupByArgs['orderBy'] }
        : { orderBy?: LandsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lands model
   */
  readonly fields: LandsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LandsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends LandOwnersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LandOwnersDefaultArgs<ExtArgs>>): Prisma__LandOwnersClient<$Result.GetResult<Prisma.$LandOwnersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Projects<T extends Lands$ProjectsArgs<ExtArgs> = {}>(args?: Subset<T, Lands$ProjectsArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ProjectProposal<T extends Lands$ProjectProposalArgs<ExtArgs> = {}>(args?: Subset<T, Lands$ProjectProposalArgs<ExtArgs>>): Prisma__ProjectProposalClient<$Result.GetResult<Prisma.$ProjectProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lands model
   */
  interface LandsFieldRefs {
    readonly id: FieldRef<"Lands", 'String'>
    readonly owner_id: FieldRef<"Lands", 'String'>
    readonly price: FieldRef<"Lands", 'Decimal'>
    readonly availability: FieldRef<"Lands", 'Boolean'>
    readonly street: FieldRef<"Lands", 'String'>
    readonly number: FieldRef<"Lands", 'String'>
    readonly complement: FieldRef<"Lands", 'String'>
    readonly district: FieldRef<"Lands", 'String'>
    readonly city: FieldRef<"Lands", 'String'>
    readonly state: FieldRef<"Lands", 'String'>
    readonly postal_code: FieldRef<"Lands", 'String'>
    readonly country: FieldRef<"Lands", 'String'>
    readonly created_at: FieldRef<"Lands", 'DateTime'>
    readonly updated_at: FieldRef<"Lands", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lands findUnique
   */
  export type LandsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * Filter, which Lands to fetch.
     */
    where: LandsWhereUniqueInput
  }

  /**
   * Lands findUniqueOrThrow
   */
  export type LandsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * Filter, which Lands to fetch.
     */
    where: LandsWhereUniqueInput
  }

  /**
   * Lands findFirst
   */
  export type LandsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * Filter, which Lands to fetch.
     */
    where?: LandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lands to fetch.
     */
    orderBy?: LandsOrderByWithRelationInput | LandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lands.
     */
    cursor?: LandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lands.
     */
    distinct?: LandsScalarFieldEnum | LandsScalarFieldEnum[]
  }

  /**
   * Lands findFirstOrThrow
   */
  export type LandsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * Filter, which Lands to fetch.
     */
    where?: LandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lands to fetch.
     */
    orderBy?: LandsOrderByWithRelationInput | LandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lands.
     */
    cursor?: LandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lands.
     */
    distinct?: LandsScalarFieldEnum | LandsScalarFieldEnum[]
  }

  /**
   * Lands findMany
   */
  export type LandsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * Filter, which Lands to fetch.
     */
    where?: LandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lands to fetch.
     */
    orderBy?: LandsOrderByWithRelationInput | LandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lands.
     */
    cursor?: LandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lands.
     */
    skip?: number
    distinct?: LandsScalarFieldEnum | LandsScalarFieldEnum[]
  }

  /**
   * Lands create
   */
  export type LandsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * The data needed to create a Lands.
     */
    data: XOR<LandsCreateInput, LandsUncheckedCreateInput>
  }

  /**
   * Lands createMany
   */
  export type LandsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lands.
     */
    data: LandsCreateManyInput | LandsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lands createManyAndReturn
   */
  export type LandsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * The data used to create many Lands.
     */
    data: LandsCreateManyInput | LandsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lands update
   */
  export type LandsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * The data needed to update a Lands.
     */
    data: XOR<LandsUpdateInput, LandsUncheckedUpdateInput>
    /**
     * Choose, which Lands to update.
     */
    where: LandsWhereUniqueInput
  }

  /**
   * Lands updateMany
   */
  export type LandsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lands.
     */
    data: XOR<LandsUpdateManyMutationInput, LandsUncheckedUpdateManyInput>
    /**
     * Filter which Lands to update
     */
    where?: LandsWhereInput
    /**
     * Limit how many Lands to update.
     */
    limit?: number
  }

  /**
   * Lands updateManyAndReturn
   */
  export type LandsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * The data used to update Lands.
     */
    data: XOR<LandsUpdateManyMutationInput, LandsUncheckedUpdateManyInput>
    /**
     * Filter which Lands to update
     */
    where?: LandsWhereInput
    /**
     * Limit how many Lands to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lands upsert
   */
  export type LandsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * The filter to search for the Lands to update in case it exists.
     */
    where: LandsWhereUniqueInput
    /**
     * In case the Lands found by the `where` argument doesn't exist, create a new Lands with this data.
     */
    create: XOR<LandsCreateInput, LandsUncheckedCreateInput>
    /**
     * In case the Lands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LandsUpdateInput, LandsUncheckedUpdateInput>
  }

  /**
   * Lands delete
   */
  export type LandsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
    /**
     * Filter which Lands to delete.
     */
    where: LandsWhereUniqueInput
  }

  /**
   * Lands deleteMany
   */
  export type LandsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lands to delete
     */
    where?: LandsWhereInput
    /**
     * Limit how many Lands to delete.
     */
    limit?: number
  }

  /**
   * Lands.Projects
   */
  export type Lands$ProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    where?: ProjectsWhereInput
  }

  /**
   * Lands.ProjectProposal
   */
  export type Lands$ProjectProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectProposal
     */
    select?: ProjectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectProposal
     */
    omit?: ProjectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectProposalInclude<ExtArgs> | null
    where?: ProjectProposalWhereInput
  }

  /**
   * Lands without action
   */
  export type LandsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lands
     */
    select?: LandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lands
     */
    omit?: LandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandsInclude<ExtArgs> | null
  }


  /**
   * Model Investments
   */

  export type AggregateInvestments = {
    _count: InvestmentsCountAggregateOutputType | null
    _avg: InvestmentsAvgAggregateOutputType | null
    _sum: InvestmentsSumAggregateOutputType | null
    _min: InvestmentsMinAggregateOutputType | null
    _max: InvestmentsMaxAggregateOutputType | null
  }

  export type InvestmentsAvgAggregateOutputType = {
    value_invested: Decimal | null
  }

  export type InvestmentsSumAggregateOutputType = {
    value_invested: Decimal | null
  }

  export type InvestmentsMinAggregateOutputType = {
    id: string | null
    project_id: string | null
    investor_id: string | null
    value_invested: Decimal | null
    invested_date: Date | null
    owner_agree: $Enums.Agreement | null
    company_agree: $Enums.Agreement | null
    title: string | null
    description: string | null
    status: $Enums.InvestmentStatus | null
  }

  export type InvestmentsMaxAggregateOutputType = {
    id: string | null
    project_id: string | null
    investor_id: string | null
    value_invested: Decimal | null
    invested_date: Date | null
    owner_agree: $Enums.Agreement | null
    company_agree: $Enums.Agreement | null
    title: string | null
    description: string | null
    status: $Enums.InvestmentStatus | null
  }

  export type InvestmentsCountAggregateOutputType = {
    id: number
    project_id: number
    investor_id: number
    value_invested: number
    invested_date: number
    owner_agree: number
    company_agree: number
    title: number
    description: number
    status: number
    _all: number
  }


  export type InvestmentsAvgAggregateInputType = {
    value_invested?: true
  }

  export type InvestmentsSumAggregateInputType = {
    value_invested?: true
  }

  export type InvestmentsMinAggregateInputType = {
    id?: true
    project_id?: true
    investor_id?: true
    value_invested?: true
    invested_date?: true
    owner_agree?: true
    company_agree?: true
    title?: true
    description?: true
    status?: true
  }

  export type InvestmentsMaxAggregateInputType = {
    id?: true
    project_id?: true
    investor_id?: true
    value_invested?: true
    invested_date?: true
    owner_agree?: true
    company_agree?: true
    title?: true
    description?: true
    status?: true
  }

  export type InvestmentsCountAggregateInputType = {
    id?: true
    project_id?: true
    investor_id?: true
    value_invested?: true
    invested_date?: true
    owner_agree?: true
    company_agree?: true
    title?: true
    description?: true
    status?: true
    _all?: true
  }

  export type InvestmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investments to aggregate.
     */
    where?: InvestmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentsOrderByWithRelationInput | InvestmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investments
    **/
    _count?: true | InvestmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentsMaxAggregateInputType
  }

  export type GetInvestmentsAggregateType<T extends InvestmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestments[P]>
      : GetScalarType<T[P], AggregateInvestments[P]>
  }




  export type InvestmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentsWhereInput
    orderBy?: InvestmentsOrderByWithAggregationInput | InvestmentsOrderByWithAggregationInput[]
    by: InvestmentsScalarFieldEnum[] | InvestmentsScalarFieldEnum
    having?: InvestmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentsCountAggregateInputType | true
    _avg?: InvestmentsAvgAggregateInputType
    _sum?: InvestmentsSumAggregateInputType
    _min?: InvestmentsMinAggregateInputType
    _max?: InvestmentsMaxAggregateInputType
  }

  export type InvestmentsGroupByOutputType = {
    id: string
    project_id: string
    investor_id: string | null
    value_invested: Decimal
    invested_date: Date
    owner_agree: $Enums.Agreement
    company_agree: $Enums.Agreement
    title: string | null
    description: string | null
    status: $Enums.InvestmentStatus
    _count: InvestmentsCountAggregateOutputType | null
    _avg: InvestmentsAvgAggregateOutputType | null
    _sum: InvestmentsSumAggregateOutputType | null
    _min: InvestmentsMinAggregateOutputType | null
    _max: InvestmentsMaxAggregateOutputType | null
  }

  type GetInvestmentsGroupByPayload<T extends InvestmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentsGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentsGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    investor_id?: boolean
    value_invested?: boolean
    invested_date?: boolean
    owner_agree?: boolean
    company_agree?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    investor?: boolean | Investments$investorArgs<ExtArgs>
  }, ExtArgs["result"]["investments"]>

  export type InvestmentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    investor_id?: boolean
    value_invested?: boolean
    invested_date?: boolean
    owner_agree?: boolean
    company_agree?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    investor?: boolean | Investments$investorArgs<ExtArgs>
  }, ExtArgs["result"]["investments"]>

  export type InvestmentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    investor_id?: boolean
    value_invested?: boolean
    invested_date?: boolean
    owner_agree?: boolean
    company_agree?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    investor?: boolean | Investments$investorArgs<ExtArgs>
  }, ExtArgs["result"]["investments"]>

  export type InvestmentsSelectScalar = {
    id?: boolean
    project_id?: boolean
    investor_id?: boolean
    value_invested?: boolean
    invested_date?: boolean
    owner_agree?: boolean
    company_agree?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
  }

  export type InvestmentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_id" | "investor_id" | "value_invested" | "invested_date" | "owner_agree" | "company_agree" | "title" | "description" | "status", ExtArgs["result"]["investments"]>
  export type InvestmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    investor?: boolean | Investments$investorArgs<ExtArgs>
  }
  export type InvestmentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    investor?: boolean | Investments$investorArgs<ExtArgs>
  }
  export type InvestmentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    investor?: boolean | Investments$investorArgs<ExtArgs>
  }

  export type $InvestmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investments"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
      investor: Prisma.$InvestorsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      project_id: string
      investor_id: string | null
      value_invested: Prisma.Decimal
      invested_date: Date
      owner_agree: $Enums.Agreement
      company_agree: $Enums.Agreement
      title: string | null
      description: string | null
      status: $Enums.InvestmentStatus
    }, ExtArgs["result"]["investments"]>
    composites: {}
  }

  type InvestmentsGetPayload<S extends boolean | null | undefined | InvestmentsDefaultArgs> = $Result.GetResult<Prisma.$InvestmentsPayload, S>

  type InvestmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentsCountAggregateInputType | true
    }

  export interface InvestmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investments'], meta: { name: 'Investments' } }
    /**
     * Find zero or one Investments that matches the filter.
     * @param {InvestmentsFindUniqueArgs} args - Arguments to find a Investments
     * @example
     * // Get one Investments
     * const investments = await prisma.investments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentsFindUniqueArgs>(args: SelectSubset<T, InvestmentsFindUniqueArgs<ExtArgs>>): Prisma__InvestmentsClient<$Result.GetResult<Prisma.$InvestmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Investments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentsFindUniqueOrThrowArgs} args - Arguments to find a Investments
     * @example
     * // Get one Investments
     * const investments = await prisma.investments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentsFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentsClient<$Result.GetResult<Prisma.$InvestmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentsFindFirstArgs} args - Arguments to find a Investments
     * @example
     * // Get one Investments
     * const investments = await prisma.investments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentsFindFirstArgs>(args?: SelectSubset<T, InvestmentsFindFirstArgs<ExtArgs>>): Prisma__InvestmentsClient<$Result.GetResult<Prisma.$InvestmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Investments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentsFindFirstOrThrowArgs} args - Arguments to find a Investments
     * @example
     * // Get one Investments
     * const investments = await prisma.investments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentsFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentsClient<$Result.GetResult<Prisma.$InvestmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Investments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investments
     * const investments = await prisma.investments.findMany()
     * 
     * // Get first 10 Investments
     * const investments = await prisma.investments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentsWithIdOnly = await prisma.investments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentsFindManyArgs>(args?: SelectSubset<T, InvestmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Investments.
     * @param {InvestmentsCreateArgs} args - Arguments to create a Investments.
     * @example
     * // Create one Investments
     * const Investments = await prisma.investments.create({
     *   data: {
     *     // ... data to create a Investments
     *   }
     * })
     * 
     */
    create<T extends InvestmentsCreateArgs>(args: SelectSubset<T, InvestmentsCreateArgs<ExtArgs>>): Prisma__InvestmentsClient<$Result.GetResult<Prisma.$InvestmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Investments.
     * @param {InvestmentsCreateManyArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investments = await prisma.investments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentsCreateManyArgs>(args?: SelectSubset<T, InvestmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investments and returns the data saved in the database.
     * @param {InvestmentsCreateManyAndReturnArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investments = await prisma.investments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investments and only return the `id`
     * const investmentsWithIdOnly = await prisma.investments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentsCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Investments.
     * @param {InvestmentsDeleteArgs} args - Arguments to delete one Investments.
     * @example
     * // Delete one Investments
     * const Investments = await prisma.investments.delete({
     *   where: {
     *     // ... filter to delete one Investments
     *   }
     * })
     * 
     */
    delete<T extends InvestmentsDeleteArgs>(args: SelectSubset<T, InvestmentsDeleteArgs<ExtArgs>>): Prisma__InvestmentsClient<$Result.GetResult<Prisma.$InvestmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Investments.
     * @param {InvestmentsUpdateArgs} args - Arguments to update one Investments.
     * @example
     * // Update one Investments
     * const investments = await prisma.investments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentsUpdateArgs>(args: SelectSubset<T, InvestmentsUpdateArgs<ExtArgs>>): Prisma__InvestmentsClient<$Result.GetResult<Prisma.$InvestmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Investments.
     * @param {InvestmentsDeleteManyArgs} args - Arguments to filter Investments to delete.
     * @example
     * // Delete a few Investments
     * const { count } = await prisma.investments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentsDeleteManyArgs>(args?: SelectSubset<T, InvestmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investments
     * const investments = await prisma.investments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentsUpdateManyArgs>(args: SelectSubset<T, InvestmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments and returns the data updated in the database.
     * @param {InvestmentsUpdateManyAndReturnArgs} args - Arguments to update many Investments.
     * @example
     * // Update many Investments
     * const investments = await prisma.investments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investments and only return the `id`
     * const investmentsWithIdOnly = await prisma.investments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvestmentsUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Investments.
     * @param {InvestmentsUpsertArgs} args - Arguments to update or create a Investments.
     * @example
     * // Update or create a Investments
     * const investments = await prisma.investments.upsert({
     *   create: {
     *     // ... data to create a Investments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investments we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentsUpsertArgs>(args: SelectSubset<T, InvestmentsUpsertArgs<ExtArgs>>): Prisma__InvestmentsClient<$Result.GetResult<Prisma.$InvestmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentsCountArgs} args - Arguments to filter Investments to count.
     * @example
     * // Count the number of Investments
     * const count = await prisma.investments.count({
     *   where: {
     *     // ... the filter for the Investments we want to count
     *   }
     * })
    **/
    count<T extends InvestmentsCountArgs>(
      args?: Subset<T, InvestmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestmentsAggregateArgs>(args: Subset<T, InvestmentsAggregateArgs>): Prisma.PrismaPromise<GetInvestmentsAggregateType<T>>

    /**
     * Group by Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvestmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentsGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvestmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investments model
   */
  readonly fields: InvestmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    investor<T extends Investments$investorArgs<ExtArgs> = {}>(args?: Subset<T, Investments$investorArgs<ExtArgs>>): Prisma__InvestorsClient<$Result.GetResult<Prisma.$InvestorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Investments model
   */
  interface InvestmentsFieldRefs {
    readonly id: FieldRef<"Investments", 'String'>
    readonly project_id: FieldRef<"Investments", 'String'>
    readonly investor_id: FieldRef<"Investments", 'String'>
    readonly value_invested: FieldRef<"Investments", 'Decimal'>
    readonly invested_date: FieldRef<"Investments", 'DateTime'>
    readonly owner_agree: FieldRef<"Investments", 'Agreement'>
    readonly company_agree: FieldRef<"Investments", 'Agreement'>
    readonly title: FieldRef<"Investments", 'String'>
    readonly description: FieldRef<"Investments", 'String'>
    readonly status: FieldRef<"Investments", 'InvestmentStatus'>
  }
    

  // Custom InputTypes
  /**
   * Investments findUnique
   */
  export type InvestmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investments
     */
    select?: InvestmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investments
     */
    omit?: InvestmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentsInclude<ExtArgs> | null
    /**
     * Filter, which Investments to fetch.
     */
    where: InvestmentsWhereUniqueInput
  }

  /**
   * Investments findUniqueOrThrow
   */
  export type InvestmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investments
     */
    select?: InvestmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investments
     */
    omit?: InvestmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentsInclude<ExtArgs> | null
    /**
     * Filter, which Investments to fetch.
     */
    where: InvestmentsWhereUniqueInput
  }

  /**
   * Investments findFirst
   */
  export type InvestmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investments
     */
    select?: InvestmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investments
     */
    omit?: InvestmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentsInclude<ExtArgs> | null
    /**
     * Filter, which Investments to fetch.
     */
    where?: InvestmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentsOrderByWithRelationInput | InvestmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentsScalarFieldEnum | InvestmentsScalarFieldEnum[]
  }

  /**
   * Investments findFirstOrThrow
   */
  export type InvestmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investments
     */
    select?: InvestmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investments
     */
    omit?: InvestmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentsInclude<ExtArgs> | null
    /**
     * Filter, which Investments to fetch.
     */
    where?: InvestmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentsOrderByWithRelationInput | InvestmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentsScalarFieldEnum | InvestmentsScalarFieldEnum[]
  }

  /**
   * Investments findMany
   */
  export type InvestmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investments
     */
    select?: InvestmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investments
     */
    omit?: InvestmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentsInclude<ExtArgs> | null
    /**
     * Filter, which Investments to fetch.
     */
    where?: InvestmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentsOrderByWithRelationInput | InvestmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investments.
     */
    cursor?: InvestmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    distinct?: InvestmentsScalarFieldEnum | InvestmentsScalarFieldEnum[]
  }

  /**
   * Investments create
   */
  export type InvestmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investments
     */
    select?: InvestmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investments
     */
    omit?: InvestmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Investments.
     */
    data: XOR<InvestmentsCreateInput, InvestmentsUncheckedCreateInput>
  }

  /**
   * Investments createMany
   */
  export type InvestmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investments.
     */
    data: InvestmentsCreateManyInput | InvestmentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investments createManyAndReturn
   */
  export type InvestmentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investments
     */
    select?: InvestmentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investments
     */
    omit?: InvestmentsOmit<ExtArgs> | null
    /**
     * The data used to create many Investments.
     */
    data: InvestmentsCreateManyInput | InvestmentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investments update
   */
  export type InvestmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investments
     */
    select?: InvestmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investments
     */
    omit?: InvestmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Investments.
     */
    data: XOR<InvestmentsUpdateInput, InvestmentsUncheckedUpdateInput>
    /**
     * Choose, which Investments to update.
     */
    where: InvestmentsWhereUniqueInput
  }

  /**
   * Investments updateMany
   */
  export type InvestmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentsUpdateManyMutationInput, InvestmentsUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentsWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
  }

  /**
   * Investments updateManyAndReturn
   */
  export type InvestmentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investments
     */
    select?: InvestmentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investments
     */
    omit?: InvestmentsOmit<ExtArgs> | null
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentsUpdateManyMutationInput, InvestmentsUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentsWhereInput
    /**
     * Limit how many Investments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investments upsert
   */
  export type InvestmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investments
     */
    select?: InvestmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investments
     */
    omit?: InvestmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Investments to update in case it exists.
     */
    where: InvestmentsWhereUniqueInput
    /**
     * In case the Investments found by the `where` argument doesn't exist, create a new Investments with this data.
     */
    create: XOR<InvestmentsCreateInput, InvestmentsUncheckedCreateInput>
    /**
     * In case the Investments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentsUpdateInput, InvestmentsUncheckedUpdateInput>
  }

  /**
   * Investments delete
   */
  export type InvestmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investments
     */
    select?: InvestmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investments
     */
    omit?: InvestmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentsInclude<ExtArgs> | null
    /**
     * Filter which Investments to delete.
     */
    where: InvestmentsWhereUniqueInput
  }

  /**
   * Investments deleteMany
   */
  export type InvestmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investments to delete
     */
    where?: InvestmentsWhereInput
    /**
     * Limit how many Investments to delete.
     */
    limit?: number
  }

  /**
   * Investments.investor
   */
  export type Investments$investorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investors
     */
    select?: InvestorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investors
     */
    omit?: InvestorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestorsInclude<ExtArgs> | null
    where?: InvestorsWhereInput
  }

  /**
   * Investments without action
   */
  export type InvestmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investments
     */
    select?: InvestmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investments
     */
    omit?: InvestmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentsInclude<ExtArgs> | null
  }


  /**
   * Model Projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    power_kw: Decimal | null
    cost: Decimal | null
    estimated_return: Decimal | null
    area: Decimal | null
  }

  export type ProjectsSumAggregateOutputType = {
    power_kw: Decimal | null
    cost: Decimal | null
    estimated_return: Decimal | null
    area: Decimal | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: string | null
    land_id: string | null
    company_id: string | null
    power_kw: Decimal | null
    cost: Decimal | null
    estimated_return: Decimal | null
    status: $Enums.SolarProjectStatus | null
    created_at: Date | null
    title: string | null
    description: string | null
    area: Decimal | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: string | null
    land_id: string | null
    company_id: string | null
    power_kw: Decimal | null
    cost: Decimal | null
    estimated_return: Decimal | null
    status: $Enums.SolarProjectStatus | null
    created_at: Date | null
    title: string | null
    description: string | null
    area: Decimal | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    land_id: number
    company_id: number
    power_kw: number
    cost: number
    estimated_return: number
    status: number
    created_at: number
    title: number
    description: number
    area: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    power_kw?: true
    cost?: true
    estimated_return?: true
    area?: true
  }

  export type ProjectsSumAggregateInputType = {
    power_kw?: true
    cost?: true
    estimated_return?: true
    area?: true
  }

  export type ProjectsMinAggregateInputType = {
    id?: true
    land_id?: true
    company_id?: true
    power_kw?: true
    cost?: true
    estimated_return?: true
    status?: true
    created_at?: true
    title?: true
    description?: true
    area?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    land_id?: true
    company_id?: true
    power_kw?: true
    cost?: true
    estimated_return?: true
    status?: true
    created_at?: true
    title?: true
    description?: true
    area?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    land_id?: true
    company_id?: true
    power_kw?: true
    cost?: true
    estimated_return?: true
    status?: true
    created_at?: true
    title?: true
    description?: true
    area?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to aggregate.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type ProjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithAggregationInput | ProjectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: ProjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: string
    land_id: string
    company_id: string | null
    power_kw: Decimal
    cost: Decimal
    estimated_return: Decimal
    status: $Enums.SolarProjectStatus
    created_at: Date
    title: string
    description: string | null
    area: Decimal
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends ProjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type ProjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    land_id?: boolean
    company_id?: boolean
    power_kw?: boolean
    cost?: boolean
    estimated_return?: boolean
    status?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    area?: boolean
    land?: boolean | LandsDefaultArgs<ExtArgs>
    company?: boolean | Projects$companyArgs<ExtArgs>
    Investments?: boolean | Projects$InvestmentsArgs<ExtArgs>
    ProjectProposal?: boolean | Projects$ProjectProposalArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type ProjectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    land_id?: boolean
    company_id?: boolean
    power_kw?: boolean
    cost?: boolean
    estimated_return?: boolean
    status?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    area?: boolean
    land?: boolean | LandsDefaultArgs<ExtArgs>
    company?: boolean | Projects$companyArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type ProjectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    land_id?: boolean
    company_id?: boolean
    power_kw?: boolean
    cost?: boolean
    estimated_return?: boolean
    status?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    area?: boolean
    land?: boolean | LandsDefaultArgs<ExtArgs>
    company?: boolean | Projects$companyArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type ProjectsSelectScalar = {
    id?: boolean
    land_id?: boolean
    company_id?: boolean
    power_kw?: boolean
    cost?: boolean
    estimated_return?: boolean
    status?: boolean
    created_at?: boolean
    title?: boolean
    description?: boolean
    area?: boolean
  }

  export type ProjectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "land_id" | "company_id" | "power_kw" | "cost" | "estimated_return" | "status" | "created_at" | "title" | "description" | "area", ExtArgs["result"]["projects"]>
  export type ProjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | LandsDefaultArgs<ExtArgs>
    company?: boolean | Projects$companyArgs<ExtArgs>
    Investments?: boolean | Projects$InvestmentsArgs<ExtArgs>
    ProjectProposal?: boolean | Projects$ProjectProposalArgs<ExtArgs>
  }
  export type ProjectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | LandsDefaultArgs<ExtArgs>
    company?: boolean | Projects$companyArgs<ExtArgs>
  }
  export type ProjectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    land?: boolean | LandsDefaultArgs<ExtArgs>
    company?: boolean | Projects$companyArgs<ExtArgs>
  }

  export type $ProjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projects"
    objects: {
      land: Prisma.$LandsPayload<ExtArgs>
      company: Prisma.$CompaniesPayload<ExtArgs> | null
      Investments: Prisma.$InvestmentsPayload<ExtArgs> | null
      ProjectProposal: Prisma.$ProjectProposalPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      land_id: string
      company_id: string | null
      power_kw: Prisma.Decimal
      cost: Prisma.Decimal
      estimated_return: Prisma.Decimal
      status: $Enums.SolarProjectStatus
      created_at: Date
      title: string
      description: string | null
      area: Prisma.Decimal
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type ProjectsGetPayload<S extends boolean | null | undefined | ProjectsDefaultArgs> = $Result.GetResult<Prisma.$ProjectsPayload, S>

  type ProjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface ProjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projects'], meta: { name: 'Projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {ProjectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectsFindUniqueArgs>(args: SelectSubset<T, ProjectsFindUniqueArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectsFindFirstArgs>(args?: SelectSubset<T, ProjectsFindFirstArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectsFindManyArgs>(args?: SelectSubset<T, ProjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {ProjectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends ProjectsCreateArgs>(args: SelectSubset<T, ProjectsCreateArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectsCreateManyArgs>(args?: SelectSubset<T, ProjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectsCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projects.
     * @param {ProjectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends ProjectsDeleteArgs>(args: SelectSubset<T, ProjectsDeleteArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {ProjectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectsUpdateArgs>(args: SelectSubset<T, ProjectsUpdateArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectsDeleteManyArgs>(args?: SelectSubset<T, ProjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectsUpdateManyArgs>(args: SelectSubset<T, ProjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectsUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projects.
     * @param {ProjectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends ProjectsUpsertArgs>(args: SelectSubset<T, ProjectsUpsertArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectsCountArgs>(
      args?: Subset<T, ProjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectsGroupByArgs['orderBy'] }
        : { orderBy?: ProjectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projects model
   */
  readonly fields: ProjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    land<T extends LandsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LandsDefaultArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends Projects$companyArgs<ExtArgs> = {}>(args?: Subset<T, Projects$companyArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Investments<T extends Projects$InvestmentsArgs<ExtArgs> = {}>(args?: Subset<T, Projects$InvestmentsArgs<ExtArgs>>): Prisma__InvestmentsClient<$Result.GetResult<Prisma.$InvestmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ProjectProposal<T extends Projects$ProjectProposalArgs<ExtArgs> = {}>(args?: Subset<T, Projects$ProjectProposalArgs<ExtArgs>>): Prisma__ProjectProposalClient<$Result.GetResult<Prisma.$ProjectProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Projects model
   */
  interface ProjectsFieldRefs {
    readonly id: FieldRef<"Projects", 'String'>
    readonly land_id: FieldRef<"Projects", 'String'>
    readonly company_id: FieldRef<"Projects", 'String'>
    readonly power_kw: FieldRef<"Projects", 'Decimal'>
    readonly cost: FieldRef<"Projects", 'Decimal'>
    readonly estimated_return: FieldRef<"Projects", 'Decimal'>
    readonly status: FieldRef<"Projects", 'SolarProjectStatus'>
    readonly created_at: FieldRef<"Projects", 'DateTime'>
    readonly title: FieldRef<"Projects", 'String'>
    readonly description: FieldRef<"Projects", 'String'>
    readonly area: FieldRef<"Projects", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Projects findUnique
   */
  export type ProjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects findUniqueOrThrow
   */
  export type ProjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects findFirst
   */
  export type ProjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects findFirstOrThrow
   */
  export type ProjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects findMany
   */
  export type ProjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects create
   */
  export type ProjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a Projects.
     */
    data: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
  }

  /**
   * Projects createMany
   */
  export type ProjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectsCreateManyInput | ProjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Projects createManyAndReturn
   */
  export type ProjectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectsCreateManyInput | ProjectsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projects update
   */
  export type ProjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a Projects.
     */
    data: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
    /**
     * Choose, which Projects to update.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects updateMany
   */
  export type ProjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectsWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Projects updateManyAndReturn
   */
  export type ProjectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectsWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projects upsert
   */
  export type ProjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the Projects to update in case it exists.
     */
    where: ProjectsWhereUniqueInput
    /**
     * In case the Projects found by the `where` argument doesn't exist, create a new Projects with this data.
     */
    create: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
    /**
     * In case the Projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
  }

  /**
   * Projects delete
   */
  export type ProjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter which Projects to delete.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects deleteMany
   */
  export type ProjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectsWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Projects.company
   */
  export type Projects$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    where?: CompaniesWhereInput
  }

  /**
   * Projects.Investments
   */
  export type Projects$InvestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investments
     */
    select?: InvestmentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investments
     */
    omit?: InvestmentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentsInclude<ExtArgs> | null
    where?: InvestmentsWhereInput
  }

  /**
   * Projects.ProjectProposal
   */
  export type Projects$ProjectProposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectProposal
     */
    select?: ProjectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectProposal
     */
    omit?: ProjectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectProposalInclude<ExtArgs> | null
    where?: ProjectProposalWhereInput
  }

  /**
   * Projects without action
   */
  export type ProjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
  }


  /**
   * Model ProjectProposal
   */

  export type AggregateProjectProposal = {
    _count: ProjectProposalCountAggregateOutputType | null
    _min: ProjectProposalMinAggregateOutputType | null
    _max: ProjectProposalMaxAggregateOutputType | null
  }

  export type ProjectProposalMinAggregateOutputType = {
    id: string | null
    project_id: string | null
    land_id: string | null
    status: $Enums.AgreementStatus | null
    created_at: Date | null
    owner_agreed: $Enums.OwnerAgreementStatus | null
  }

  export type ProjectProposalMaxAggregateOutputType = {
    id: string | null
    project_id: string | null
    land_id: string | null
    status: $Enums.AgreementStatus | null
    created_at: Date | null
    owner_agreed: $Enums.OwnerAgreementStatus | null
  }

  export type ProjectProposalCountAggregateOutputType = {
    id: number
    project_id: number
    land_id: number
    status: number
    created_at: number
    owner_agreed: number
    _all: number
  }


  export type ProjectProposalMinAggregateInputType = {
    id?: true
    project_id?: true
    land_id?: true
    status?: true
    created_at?: true
    owner_agreed?: true
  }

  export type ProjectProposalMaxAggregateInputType = {
    id?: true
    project_id?: true
    land_id?: true
    status?: true
    created_at?: true
    owner_agreed?: true
  }

  export type ProjectProposalCountAggregateInputType = {
    id?: true
    project_id?: true
    land_id?: true
    status?: true
    created_at?: true
    owner_agreed?: true
    _all?: true
  }

  export type ProjectProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectProposal to aggregate.
     */
    where?: ProjectProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectProposals to fetch.
     */
    orderBy?: ProjectProposalOrderByWithRelationInput | ProjectProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectProposals
    **/
    _count?: true | ProjectProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectProposalMaxAggregateInputType
  }

  export type GetProjectProposalAggregateType<T extends ProjectProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectProposal[P]>
      : GetScalarType<T[P], AggregateProjectProposal[P]>
  }




  export type ProjectProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectProposalWhereInput
    orderBy?: ProjectProposalOrderByWithAggregationInput | ProjectProposalOrderByWithAggregationInput[]
    by: ProjectProposalScalarFieldEnum[] | ProjectProposalScalarFieldEnum
    having?: ProjectProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectProposalCountAggregateInputType | true
    _min?: ProjectProposalMinAggregateInputType
    _max?: ProjectProposalMaxAggregateInputType
  }

  export type ProjectProposalGroupByOutputType = {
    id: string
    project_id: string
    land_id: string
    status: $Enums.AgreementStatus
    created_at: Date
    owner_agreed: $Enums.OwnerAgreementStatus
    _count: ProjectProposalCountAggregateOutputType | null
    _min: ProjectProposalMinAggregateOutputType | null
    _max: ProjectProposalMaxAggregateOutputType | null
  }

  type GetProjectProposalGroupByPayload<T extends ProjectProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectProposalGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectProposalGroupByOutputType[P]>
        }
      >
    >


  export type ProjectProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    land_id?: boolean
    status?: boolean
    created_at?: boolean
    owner_agreed?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    land?: boolean | LandsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectProposal"]>

  export type ProjectProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    land_id?: boolean
    status?: boolean
    created_at?: boolean
    owner_agreed?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    land?: boolean | LandsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectProposal"]>

  export type ProjectProposalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_id?: boolean
    land_id?: boolean
    status?: boolean
    created_at?: boolean
    owner_agreed?: boolean
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    land?: boolean | LandsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectProposal"]>

  export type ProjectProposalSelectScalar = {
    id?: boolean
    project_id?: boolean
    land_id?: boolean
    status?: boolean
    created_at?: boolean
    owner_agreed?: boolean
  }

  export type ProjectProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_id" | "land_id" | "status" | "created_at" | "owner_agreed", ExtArgs["result"]["projectProposal"]>
  export type ProjectProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    land?: boolean | LandsDefaultArgs<ExtArgs>
  }
  export type ProjectProposalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    land?: boolean | LandsDefaultArgs<ExtArgs>
  }
  export type ProjectProposalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectsDefaultArgs<ExtArgs>
    land?: boolean | LandsDefaultArgs<ExtArgs>
  }

  export type $ProjectProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectProposal"
    objects: {
      project: Prisma.$ProjectsPayload<ExtArgs>
      land: Prisma.$LandsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      project_id: string
      land_id: string
      status: $Enums.AgreementStatus
      created_at: Date
      owner_agreed: $Enums.OwnerAgreementStatus
    }, ExtArgs["result"]["projectProposal"]>
    composites: {}
  }

  type ProjectProposalGetPayload<S extends boolean | null | undefined | ProjectProposalDefaultArgs> = $Result.GetResult<Prisma.$ProjectProposalPayload, S>

  type ProjectProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectProposalCountAggregateInputType | true
    }

  export interface ProjectProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectProposal'], meta: { name: 'ProjectProposal' } }
    /**
     * Find zero or one ProjectProposal that matches the filter.
     * @param {ProjectProposalFindUniqueArgs} args - Arguments to find a ProjectProposal
     * @example
     * // Get one ProjectProposal
     * const projectProposal = await prisma.projectProposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectProposalFindUniqueArgs>(args: SelectSubset<T, ProjectProposalFindUniqueArgs<ExtArgs>>): Prisma__ProjectProposalClient<$Result.GetResult<Prisma.$ProjectProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectProposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectProposalFindUniqueOrThrowArgs} args - Arguments to find a ProjectProposal
     * @example
     * // Get one ProjectProposal
     * const projectProposal = await prisma.projectProposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectProposalClient<$Result.GetResult<Prisma.$ProjectProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectProposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectProposalFindFirstArgs} args - Arguments to find a ProjectProposal
     * @example
     * // Get one ProjectProposal
     * const projectProposal = await prisma.projectProposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectProposalFindFirstArgs>(args?: SelectSubset<T, ProjectProposalFindFirstArgs<ExtArgs>>): Prisma__ProjectProposalClient<$Result.GetResult<Prisma.$ProjectProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectProposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectProposalFindFirstOrThrowArgs} args - Arguments to find a ProjectProposal
     * @example
     * // Get one ProjectProposal
     * const projectProposal = await prisma.projectProposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectProposalClient<$Result.GetResult<Prisma.$ProjectProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectProposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectProposals
     * const projectProposals = await prisma.projectProposal.findMany()
     * 
     * // Get first 10 ProjectProposals
     * const projectProposals = await prisma.projectProposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectProposalWithIdOnly = await prisma.projectProposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectProposalFindManyArgs>(args?: SelectSubset<T, ProjectProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectProposal.
     * @param {ProjectProposalCreateArgs} args - Arguments to create a ProjectProposal.
     * @example
     * // Create one ProjectProposal
     * const ProjectProposal = await prisma.projectProposal.create({
     *   data: {
     *     // ... data to create a ProjectProposal
     *   }
     * })
     * 
     */
    create<T extends ProjectProposalCreateArgs>(args: SelectSubset<T, ProjectProposalCreateArgs<ExtArgs>>): Prisma__ProjectProposalClient<$Result.GetResult<Prisma.$ProjectProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectProposals.
     * @param {ProjectProposalCreateManyArgs} args - Arguments to create many ProjectProposals.
     * @example
     * // Create many ProjectProposals
     * const projectProposal = await prisma.projectProposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectProposalCreateManyArgs>(args?: SelectSubset<T, ProjectProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectProposals and returns the data saved in the database.
     * @param {ProjectProposalCreateManyAndReturnArgs} args - Arguments to create many ProjectProposals.
     * @example
     * // Create many ProjectProposals
     * const projectProposal = await prisma.projectProposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectProposals and only return the `id`
     * const projectProposalWithIdOnly = await prisma.projectProposal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectProposalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectProposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectProposalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProjectProposal.
     * @param {ProjectProposalDeleteArgs} args - Arguments to delete one ProjectProposal.
     * @example
     * // Delete one ProjectProposal
     * const ProjectProposal = await prisma.projectProposal.delete({
     *   where: {
     *     // ... filter to delete one ProjectProposal
     *   }
     * })
     * 
     */
    delete<T extends ProjectProposalDeleteArgs>(args: SelectSubset<T, ProjectProposalDeleteArgs<ExtArgs>>): Prisma__ProjectProposalClient<$Result.GetResult<Prisma.$ProjectProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectProposal.
     * @param {ProjectProposalUpdateArgs} args - Arguments to update one ProjectProposal.
     * @example
     * // Update one ProjectProposal
     * const projectProposal = await prisma.projectProposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectProposalUpdateArgs>(args: SelectSubset<T, ProjectProposalUpdateArgs<ExtArgs>>): Prisma__ProjectProposalClient<$Result.GetResult<Prisma.$ProjectProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectProposals.
     * @param {ProjectProposalDeleteManyArgs} args - Arguments to filter ProjectProposals to delete.
     * @example
     * // Delete a few ProjectProposals
     * const { count } = await prisma.projectProposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectProposalDeleteManyArgs>(args?: SelectSubset<T, ProjectProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectProposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectProposals
     * const projectProposal = await prisma.projectProposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectProposalUpdateManyArgs>(args: SelectSubset<T, ProjectProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectProposals and returns the data updated in the database.
     * @param {ProjectProposalUpdateManyAndReturnArgs} args - Arguments to update many ProjectProposals.
     * @example
     * // Update many ProjectProposals
     * const projectProposal = await prisma.projectProposal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectProposals and only return the `id`
     * const projectProposalWithIdOnly = await prisma.projectProposal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectProposalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectProposalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectProposalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProjectProposal.
     * @param {ProjectProposalUpsertArgs} args - Arguments to update or create a ProjectProposal.
     * @example
     * // Update or create a ProjectProposal
     * const projectProposal = await prisma.projectProposal.upsert({
     *   create: {
     *     // ... data to create a ProjectProposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectProposal we want to update
     *   }
     * })
     */
    upsert<T extends ProjectProposalUpsertArgs>(args: SelectSubset<T, ProjectProposalUpsertArgs<ExtArgs>>): Prisma__ProjectProposalClient<$Result.GetResult<Prisma.$ProjectProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectProposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectProposalCountArgs} args - Arguments to filter ProjectProposals to count.
     * @example
     * // Count the number of ProjectProposals
     * const count = await prisma.projectProposal.count({
     *   where: {
     *     // ... the filter for the ProjectProposals we want to count
     *   }
     * })
    **/
    count<T extends ProjectProposalCountArgs>(
      args?: Subset<T, ProjectProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectProposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectProposalAggregateArgs>(args: Subset<T, ProjectProposalAggregateArgs>): Prisma.PrismaPromise<GetProjectProposalAggregateType<T>>

    /**
     * Group by ProjectProposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectProposalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectProposalGroupByArgs['orderBy'] }
        : { orderBy?: ProjectProposalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectProposal model
   */
  readonly fields: ProjectProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectProposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectsDefaultArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    land<T extends LandsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LandsDefaultArgs<ExtArgs>>): Prisma__LandsClient<$Result.GetResult<Prisma.$LandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectProposal model
   */
  interface ProjectProposalFieldRefs {
    readonly id: FieldRef<"ProjectProposal", 'String'>
    readonly project_id: FieldRef<"ProjectProposal", 'String'>
    readonly land_id: FieldRef<"ProjectProposal", 'String'>
    readonly status: FieldRef<"ProjectProposal", 'AgreementStatus'>
    readonly created_at: FieldRef<"ProjectProposal", 'DateTime'>
    readonly owner_agreed: FieldRef<"ProjectProposal", 'OwnerAgreementStatus'>
  }
    

  // Custom InputTypes
  /**
   * ProjectProposal findUnique
   */
  export type ProjectProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectProposal
     */
    select?: ProjectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectProposal
     */
    omit?: ProjectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectProposalInclude<ExtArgs> | null
    /**
     * Filter, which ProjectProposal to fetch.
     */
    where: ProjectProposalWhereUniqueInput
  }

  /**
   * ProjectProposal findUniqueOrThrow
   */
  export type ProjectProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectProposal
     */
    select?: ProjectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectProposal
     */
    omit?: ProjectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectProposalInclude<ExtArgs> | null
    /**
     * Filter, which ProjectProposal to fetch.
     */
    where: ProjectProposalWhereUniqueInput
  }

  /**
   * ProjectProposal findFirst
   */
  export type ProjectProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectProposal
     */
    select?: ProjectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectProposal
     */
    omit?: ProjectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectProposalInclude<ExtArgs> | null
    /**
     * Filter, which ProjectProposal to fetch.
     */
    where?: ProjectProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectProposals to fetch.
     */
    orderBy?: ProjectProposalOrderByWithRelationInput | ProjectProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectProposals.
     */
    cursor?: ProjectProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectProposals.
     */
    distinct?: ProjectProposalScalarFieldEnum | ProjectProposalScalarFieldEnum[]
  }

  /**
   * ProjectProposal findFirstOrThrow
   */
  export type ProjectProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectProposal
     */
    select?: ProjectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectProposal
     */
    omit?: ProjectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectProposalInclude<ExtArgs> | null
    /**
     * Filter, which ProjectProposal to fetch.
     */
    where?: ProjectProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectProposals to fetch.
     */
    orderBy?: ProjectProposalOrderByWithRelationInput | ProjectProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectProposals.
     */
    cursor?: ProjectProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectProposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectProposals.
     */
    distinct?: ProjectProposalScalarFieldEnum | ProjectProposalScalarFieldEnum[]
  }

  /**
   * ProjectProposal findMany
   */
  export type ProjectProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectProposal
     */
    select?: ProjectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectProposal
     */
    omit?: ProjectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectProposalInclude<ExtArgs> | null
    /**
     * Filter, which ProjectProposals to fetch.
     */
    where?: ProjectProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectProposals to fetch.
     */
    orderBy?: ProjectProposalOrderByWithRelationInput | ProjectProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectProposals.
     */
    cursor?: ProjectProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectProposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectProposals.
     */
    skip?: number
    distinct?: ProjectProposalScalarFieldEnum | ProjectProposalScalarFieldEnum[]
  }

  /**
   * ProjectProposal create
   */
  export type ProjectProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectProposal
     */
    select?: ProjectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectProposal
     */
    omit?: ProjectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectProposalInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectProposal.
     */
    data: XOR<ProjectProposalCreateInput, ProjectProposalUncheckedCreateInput>
  }

  /**
   * ProjectProposal createMany
   */
  export type ProjectProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectProposals.
     */
    data: ProjectProposalCreateManyInput | ProjectProposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectProposal createManyAndReturn
   */
  export type ProjectProposalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectProposal
     */
    select?: ProjectProposalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectProposal
     */
    omit?: ProjectProposalOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectProposals.
     */
    data: ProjectProposalCreateManyInput | ProjectProposalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectProposalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectProposal update
   */
  export type ProjectProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectProposal
     */
    select?: ProjectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectProposal
     */
    omit?: ProjectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectProposalInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectProposal.
     */
    data: XOR<ProjectProposalUpdateInput, ProjectProposalUncheckedUpdateInput>
    /**
     * Choose, which ProjectProposal to update.
     */
    where: ProjectProposalWhereUniqueInput
  }

  /**
   * ProjectProposal updateMany
   */
  export type ProjectProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectProposals.
     */
    data: XOR<ProjectProposalUpdateManyMutationInput, ProjectProposalUncheckedUpdateManyInput>
    /**
     * Filter which ProjectProposals to update
     */
    where?: ProjectProposalWhereInput
    /**
     * Limit how many ProjectProposals to update.
     */
    limit?: number
  }

  /**
   * ProjectProposal updateManyAndReturn
   */
  export type ProjectProposalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectProposal
     */
    select?: ProjectProposalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectProposal
     */
    omit?: ProjectProposalOmit<ExtArgs> | null
    /**
     * The data used to update ProjectProposals.
     */
    data: XOR<ProjectProposalUpdateManyMutationInput, ProjectProposalUncheckedUpdateManyInput>
    /**
     * Filter which ProjectProposals to update
     */
    where?: ProjectProposalWhereInput
    /**
     * Limit how many ProjectProposals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectProposalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectProposal upsert
   */
  export type ProjectProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectProposal
     */
    select?: ProjectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectProposal
     */
    omit?: ProjectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectProposalInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectProposal to update in case it exists.
     */
    where: ProjectProposalWhereUniqueInput
    /**
     * In case the ProjectProposal found by the `where` argument doesn't exist, create a new ProjectProposal with this data.
     */
    create: XOR<ProjectProposalCreateInput, ProjectProposalUncheckedCreateInput>
    /**
     * In case the ProjectProposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectProposalUpdateInput, ProjectProposalUncheckedUpdateInput>
  }

  /**
   * ProjectProposal delete
   */
  export type ProjectProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectProposal
     */
    select?: ProjectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectProposal
     */
    omit?: ProjectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectProposalInclude<ExtArgs> | null
    /**
     * Filter which ProjectProposal to delete.
     */
    where: ProjectProposalWhereUniqueInput
  }

  /**
   * ProjectProposal deleteMany
   */
  export type ProjectProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectProposals to delete
     */
    where?: ProjectProposalWhereInput
    /**
     * Limit how many ProjectProposals to delete.
     */
    limit?: number
  }

  /**
   * ProjectProposal without action
   */
  export type ProjectProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectProposal
     */
    select?: ProjectProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectProposal
     */
    omit?: ProjectProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectProposalInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    user_type: 'user_type',
    phone: 'phone',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LandOwnersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    document_id: 'document_id'
  };

  export type LandOwnersScalarFieldEnum = (typeof LandOwnersScalarFieldEnum)[keyof typeof LandOwnersScalarFieldEnum]


  export const CompaniesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    document_id: 'document_id',
    company_name: 'company_name'
  };

  export type CompaniesScalarFieldEnum = (typeof CompaniesScalarFieldEnum)[keyof typeof CompaniesScalarFieldEnum]


  export const InvestorsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    document_id: 'document_id'
  };

  export type InvestorsScalarFieldEnum = (typeof InvestorsScalarFieldEnum)[keyof typeof InvestorsScalarFieldEnum]


  export const LandsScalarFieldEnum: {
    id: 'id',
    owner_id: 'owner_id',
    price: 'price',
    availability: 'availability',
    street: 'street',
    number: 'number',
    complement: 'complement',
    district: 'district',
    city: 'city',
    state: 'state',
    postal_code: 'postal_code',
    country: 'country',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type LandsScalarFieldEnum = (typeof LandsScalarFieldEnum)[keyof typeof LandsScalarFieldEnum]


  export const InvestmentsScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    investor_id: 'investor_id',
    value_invested: 'value_invested',
    invested_date: 'invested_date',
    owner_agree: 'owner_agree',
    company_agree: 'company_agree',
    title: 'title',
    description: 'description',
    status: 'status'
  };

  export type InvestmentsScalarFieldEnum = (typeof InvestmentsScalarFieldEnum)[keyof typeof InvestmentsScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    land_id: 'land_id',
    company_id: 'company_id',
    power_kw: 'power_kw',
    cost: 'cost',
    estimated_return: 'estimated_return',
    status: 'status',
    created_at: 'created_at',
    title: 'title',
    description: 'description',
    area: 'area'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const ProjectProposalScalarFieldEnum: {
    id: 'id',
    project_id: 'project_id',
    land_id: 'land_id',
    status: 'status',
    created_at: 'created_at',
    owner_agreed: 'owner_agreed'
  };

  export type ProjectProposalScalarFieldEnum = (typeof ProjectProposalScalarFieldEnum)[keyof typeof ProjectProposalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Agreement'
   */
  export type EnumAgreementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Agreement'>
    


  /**
   * Reference to a field of type 'Agreement[]'
   */
  export type ListEnumAgreementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Agreement[]'>
    


  /**
   * Reference to a field of type 'InvestmentStatus'
   */
  export type EnumInvestmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvestmentStatus'>
    


  /**
   * Reference to a field of type 'InvestmentStatus[]'
   */
  export type ListEnumInvestmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvestmentStatus[]'>
    


  /**
   * Reference to a field of type 'SolarProjectStatus'
   */
  export type EnumSolarProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SolarProjectStatus'>
    


  /**
   * Reference to a field of type 'SolarProjectStatus[]'
   */
  export type ListEnumSolarProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SolarProjectStatus[]'>
    


  /**
   * Reference to a field of type 'AgreementStatus'
   */
  export type EnumAgreementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgreementStatus'>
    


  /**
   * Reference to a field of type 'AgreementStatus[]'
   */
  export type ListEnumAgreementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AgreementStatus[]'>
    


  /**
   * Reference to a field of type 'OwnerAgreementStatus'
   */
  export type EnumOwnerAgreementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnerAgreementStatus'>
    


  /**
   * Reference to a field of type 'OwnerAgreementStatus[]'
   */
  export type ListEnumOwnerAgreementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OwnerAgreementStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    user_type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    phone?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    landOwner?: XOR<LandOwnersNullableScalarRelationFilter, LandOwnersWhereInput> | null
    company?: XOR<CompaniesNullableScalarRelationFilter, CompaniesWhereInput> | null
    investor?: XOR<InvestorsNullableScalarRelationFilter, InvestorsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    phone?: SortOrderInput | SortOrder
    created_at?: SortOrder
    landOwner?: LandOwnersOrderByWithRelationInput
    company?: CompaniesOrderByWithRelationInput
    investor?: InvestorsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    user_type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    phone?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    landOwner?: XOR<LandOwnersNullableScalarRelationFilter, LandOwnersWhereInput> | null
    company?: XOR<CompaniesNullableScalarRelationFilter, CompaniesWhereInput> | null
    investor?: XOR<InvestorsNullableScalarRelationFilter, InvestorsWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    phone?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    user_type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LandOwnersWhereInput = {
    AND?: LandOwnersWhereInput | LandOwnersWhereInput[]
    OR?: LandOwnersWhereInput[]
    NOT?: LandOwnersWhereInput | LandOwnersWhereInput[]
    id?: StringFilter<"LandOwners"> | string
    user_id?: UuidFilter<"LandOwners"> | string
    document_id?: StringFilter<"LandOwners"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Lands?: XOR<LandsNullableScalarRelationFilter, LandsWhereInput> | null
  }

  export type LandOwnersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
    user?: UserOrderByWithRelationInput
    Lands?: LandsOrderByWithRelationInput
  }

  export type LandOwnersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: LandOwnersWhereInput | LandOwnersWhereInput[]
    OR?: LandOwnersWhereInput[]
    NOT?: LandOwnersWhereInput | LandOwnersWhereInput[]
    document_id?: StringFilter<"LandOwners"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Lands?: XOR<LandsNullableScalarRelationFilter, LandsWhereInput> | null
  }, "id" | "user_id">

  export type LandOwnersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
    _count?: LandOwnersCountOrderByAggregateInput
    _max?: LandOwnersMaxOrderByAggregateInput
    _min?: LandOwnersMinOrderByAggregateInput
  }

  export type LandOwnersScalarWhereWithAggregatesInput = {
    AND?: LandOwnersScalarWhereWithAggregatesInput | LandOwnersScalarWhereWithAggregatesInput[]
    OR?: LandOwnersScalarWhereWithAggregatesInput[]
    NOT?: LandOwnersScalarWhereWithAggregatesInput | LandOwnersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LandOwners"> | string
    user_id?: UuidWithAggregatesFilter<"LandOwners"> | string
    document_id?: StringWithAggregatesFilter<"LandOwners"> | string
  }

  export type CompaniesWhereInput = {
    AND?: CompaniesWhereInput | CompaniesWhereInput[]
    OR?: CompaniesWhereInput[]
    NOT?: CompaniesWhereInput | CompaniesWhereInput[]
    id?: StringFilter<"Companies"> | string
    user_id?: UuidFilter<"Companies"> | string
    document_id?: StringFilter<"Companies"> | string
    company_name?: StringFilter<"Companies"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Projects?: ProjectsListRelationFilter
  }

  export type CompaniesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
    company_name?: SortOrder
    user?: UserOrderByWithRelationInput
    Projects?: ProjectsOrderByRelationAggregateInput
  }

  export type CompaniesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    document_id?: string
    AND?: CompaniesWhereInput | CompaniesWhereInput[]
    OR?: CompaniesWhereInput[]
    NOT?: CompaniesWhereInput | CompaniesWhereInput[]
    company_name?: StringFilter<"Companies"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Projects?: ProjectsListRelationFilter
  }, "id" | "user_id" | "document_id">

  export type CompaniesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
    company_name?: SortOrder
    _count?: CompaniesCountOrderByAggregateInput
    _max?: CompaniesMaxOrderByAggregateInput
    _min?: CompaniesMinOrderByAggregateInput
  }

  export type CompaniesScalarWhereWithAggregatesInput = {
    AND?: CompaniesScalarWhereWithAggregatesInput | CompaniesScalarWhereWithAggregatesInput[]
    OR?: CompaniesScalarWhereWithAggregatesInput[]
    NOT?: CompaniesScalarWhereWithAggregatesInput | CompaniesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Companies"> | string
    user_id?: UuidWithAggregatesFilter<"Companies"> | string
    document_id?: StringWithAggregatesFilter<"Companies"> | string
    company_name?: StringWithAggregatesFilter<"Companies"> | string
  }

  export type InvestorsWhereInput = {
    AND?: InvestorsWhereInput | InvestorsWhereInput[]
    OR?: InvestorsWhereInput[]
    NOT?: InvestorsWhereInput | InvestorsWhereInput[]
    id?: StringFilter<"Investors"> | string
    user_id?: UuidFilter<"Investors"> | string
    document_id?: StringFilter<"Investors"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Investments?: InvestmentsListRelationFilter
  }

  export type InvestorsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
    user?: UserOrderByWithRelationInput
    Investments?: InvestmentsOrderByRelationAggregateInput
  }

  export type InvestorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    document_id?: string
    AND?: InvestorsWhereInput | InvestorsWhereInput[]
    OR?: InvestorsWhereInput[]
    NOT?: InvestorsWhereInput | InvestorsWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Investments?: InvestmentsListRelationFilter
  }, "id" | "user_id" | "document_id">

  export type InvestorsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
    _count?: InvestorsCountOrderByAggregateInput
    _max?: InvestorsMaxOrderByAggregateInput
    _min?: InvestorsMinOrderByAggregateInput
  }

  export type InvestorsScalarWhereWithAggregatesInput = {
    AND?: InvestorsScalarWhereWithAggregatesInput | InvestorsScalarWhereWithAggregatesInput[]
    OR?: InvestorsScalarWhereWithAggregatesInput[]
    NOT?: InvestorsScalarWhereWithAggregatesInput | InvestorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investors"> | string
    user_id?: UuidWithAggregatesFilter<"Investors"> | string
    document_id?: StringWithAggregatesFilter<"Investors"> | string
  }

  export type LandsWhereInput = {
    AND?: LandsWhereInput | LandsWhereInput[]
    OR?: LandsWhereInput[]
    NOT?: LandsWhereInput | LandsWhereInput[]
    id?: StringFilter<"Lands"> | string
    owner_id?: UuidFilter<"Lands"> | string
    price?: DecimalFilter<"Lands"> | Decimal | DecimalJsLike | number | string
    availability?: BoolFilter<"Lands"> | boolean
    street?: StringFilter<"Lands"> | string
    number?: StringFilter<"Lands"> | string
    complement?: StringNullableFilter<"Lands"> | string | null
    district?: StringNullableFilter<"Lands"> | string | null
    city?: StringFilter<"Lands"> | string
    state?: StringFilter<"Lands"> | string
    postal_code?: StringFilter<"Lands"> | string
    country?: StringFilter<"Lands"> | string
    created_at?: DateTimeFilter<"Lands"> | Date | string
    updated_at?: DateTimeFilter<"Lands"> | Date | string
    owner?: XOR<LandOwnersScalarRelationFilter, LandOwnersWhereInput>
    Projects?: XOR<ProjectsNullableScalarRelationFilter, ProjectsWhereInput> | null
    ProjectProposal?: XOR<ProjectProposalNullableScalarRelationFilter, ProjectProposalWhereInput> | null
  }

  export type LandsOrderByWithRelationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    price?: SortOrder
    availability?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    owner?: LandOwnersOrderByWithRelationInput
    Projects?: ProjectsOrderByWithRelationInput
    ProjectProposal?: ProjectProposalOrderByWithRelationInput
  }

  export type LandsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    owner_id?: string
    AND?: LandsWhereInput | LandsWhereInput[]
    OR?: LandsWhereInput[]
    NOT?: LandsWhereInput | LandsWhereInput[]
    price?: DecimalFilter<"Lands"> | Decimal | DecimalJsLike | number | string
    availability?: BoolFilter<"Lands"> | boolean
    street?: StringFilter<"Lands"> | string
    number?: StringFilter<"Lands"> | string
    complement?: StringNullableFilter<"Lands"> | string | null
    district?: StringNullableFilter<"Lands"> | string | null
    city?: StringFilter<"Lands"> | string
    state?: StringFilter<"Lands"> | string
    postal_code?: StringFilter<"Lands"> | string
    country?: StringFilter<"Lands"> | string
    created_at?: DateTimeFilter<"Lands"> | Date | string
    updated_at?: DateTimeFilter<"Lands"> | Date | string
    owner?: XOR<LandOwnersScalarRelationFilter, LandOwnersWhereInput>
    Projects?: XOR<ProjectsNullableScalarRelationFilter, ProjectsWhereInput> | null
    ProjectProposal?: XOR<ProjectProposalNullableScalarRelationFilter, ProjectProposalWhereInput> | null
  }, "id" | "owner_id">

  export type LandsOrderByWithAggregationInput = {
    id?: SortOrder
    owner_id?: SortOrder
    price?: SortOrder
    availability?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: LandsCountOrderByAggregateInput
    _avg?: LandsAvgOrderByAggregateInput
    _max?: LandsMaxOrderByAggregateInput
    _min?: LandsMinOrderByAggregateInput
    _sum?: LandsSumOrderByAggregateInput
  }

  export type LandsScalarWhereWithAggregatesInput = {
    AND?: LandsScalarWhereWithAggregatesInput | LandsScalarWhereWithAggregatesInput[]
    OR?: LandsScalarWhereWithAggregatesInput[]
    NOT?: LandsScalarWhereWithAggregatesInput | LandsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lands"> | string
    owner_id?: UuidWithAggregatesFilter<"Lands"> | string
    price?: DecimalWithAggregatesFilter<"Lands"> | Decimal | DecimalJsLike | number | string
    availability?: BoolWithAggregatesFilter<"Lands"> | boolean
    street?: StringWithAggregatesFilter<"Lands"> | string
    number?: StringWithAggregatesFilter<"Lands"> | string
    complement?: StringNullableWithAggregatesFilter<"Lands"> | string | null
    district?: StringNullableWithAggregatesFilter<"Lands"> | string | null
    city?: StringWithAggregatesFilter<"Lands"> | string
    state?: StringWithAggregatesFilter<"Lands"> | string
    postal_code?: StringWithAggregatesFilter<"Lands"> | string
    country?: StringWithAggregatesFilter<"Lands"> | string
    created_at?: DateTimeWithAggregatesFilter<"Lands"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Lands"> | Date | string
  }

  export type InvestmentsWhereInput = {
    AND?: InvestmentsWhereInput | InvestmentsWhereInput[]
    OR?: InvestmentsWhereInput[]
    NOT?: InvestmentsWhereInput | InvestmentsWhereInput[]
    id?: StringFilter<"Investments"> | string
    project_id?: UuidFilter<"Investments"> | string
    investor_id?: UuidNullableFilter<"Investments"> | string | null
    value_invested?: DecimalFilter<"Investments"> | Decimal | DecimalJsLike | number | string
    invested_date?: DateTimeFilter<"Investments"> | Date | string
    owner_agree?: EnumAgreementFilter<"Investments"> | $Enums.Agreement
    company_agree?: EnumAgreementFilter<"Investments"> | $Enums.Agreement
    title?: StringNullableFilter<"Investments"> | string | null
    description?: StringNullableFilter<"Investments"> | string | null
    status?: EnumInvestmentStatusFilter<"Investments"> | $Enums.InvestmentStatus
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
    investor?: XOR<InvestorsNullableScalarRelationFilter, InvestorsWhereInput> | null
  }

  export type InvestmentsOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrder
    investor_id?: SortOrderInput | SortOrder
    value_invested?: SortOrder
    invested_date?: SortOrder
    owner_agree?: SortOrder
    company_agree?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    project?: ProjectsOrderByWithRelationInput
    investor?: InvestorsOrderByWithRelationInput
  }

  export type InvestmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    project_id?: string
    AND?: InvestmentsWhereInput | InvestmentsWhereInput[]
    OR?: InvestmentsWhereInput[]
    NOT?: InvestmentsWhereInput | InvestmentsWhereInput[]
    investor_id?: UuidNullableFilter<"Investments"> | string | null
    value_invested?: DecimalFilter<"Investments"> | Decimal | DecimalJsLike | number | string
    invested_date?: DateTimeFilter<"Investments"> | Date | string
    owner_agree?: EnumAgreementFilter<"Investments"> | $Enums.Agreement
    company_agree?: EnumAgreementFilter<"Investments"> | $Enums.Agreement
    title?: StringNullableFilter<"Investments"> | string | null
    description?: StringNullableFilter<"Investments"> | string | null
    status?: EnumInvestmentStatusFilter<"Investments"> | $Enums.InvestmentStatus
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
    investor?: XOR<InvestorsNullableScalarRelationFilter, InvestorsWhereInput> | null
  }, "id" | "project_id">

  export type InvestmentsOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrder
    investor_id?: SortOrderInput | SortOrder
    value_invested?: SortOrder
    invested_date?: SortOrder
    owner_agree?: SortOrder
    company_agree?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: InvestmentsCountOrderByAggregateInput
    _avg?: InvestmentsAvgOrderByAggregateInput
    _max?: InvestmentsMaxOrderByAggregateInput
    _min?: InvestmentsMinOrderByAggregateInput
    _sum?: InvestmentsSumOrderByAggregateInput
  }

  export type InvestmentsScalarWhereWithAggregatesInput = {
    AND?: InvestmentsScalarWhereWithAggregatesInput | InvestmentsScalarWhereWithAggregatesInput[]
    OR?: InvestmentsScalarWhereWithAggregatesInput[]
    NOT?: InvestmentsScalarWhereWithAggregatesInput | InvestmentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investments"> | string
    project_id?: UuidWithAggregatesFilter<"Investments"> | string
    investor_id?: UuidNullableWithAggregatesFilter<"Investments"> | string | null
    value_invested?: DecimalWithAggregatesFilter<"Investments"> | Decimal | DecimalJsLike | number | string
    invested_date?: DateTimeWithAggregatesFilter<"Investments"> | Date | string
    owner_agree?: EnumAgreementWithAggregatesFilter<"Investments"> | $Enums.Agreement
    company_agree?: EnumAgreementWithAggregatesFilter<"Investments"> | $Enums.Agreement
    title?: StringNullableWithAggregatesFilter<"Investments"> | string | null
    description?: StringNullableWithAggregatesFilter<"Investments"> | string | null
    status?: EnumInvestmentStatusWithAggregatesFilter<"Investments"> | $Enums.InvestmentStatus
  }

  export type ProjectsWhereInput = {
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    id?: StringFilter<"Projects"> | string
    land_id?: UuidFilter<"Projects"> | string
    company_id?: UuidNullableFilter<"Projects"> | string | null
    power_kw?: DecimalFilter<"Projects"> | Decimal | DecimalJsLike | number | string
    cost?: DecimalFilter<"Projects"> | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalFilter<"Projects"> | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusFilter<"Projects"> | $Enums.SolarProjectStatus
    created_at?: DateTimeFilter<"Projects"> | Date | string
    title?: StringFilter<"Projects"> | string
    description?: StringNullableFilter<"Projects"> | string | null
    area?: DecimalFilter<"Projects"> | Decimal | DecimalJsLike | number | string
    land?: XOR<LandsScalarRelationFilter, LandsWhereInput>
    company?: XOR<CompaniesNullableScalarRelationFilter, CompaniesWhereInput> | null
    Investments?: XOR<InvestmentsNullableScalarRelationFilter, InvestmentsWhereInput> | null
    ProjectProposal?: XOR<ProjectProposalNullableScalarRelationFilter, ProjectProposalWhereInput> | null
  }

  export type ProjectsOrderByWithRelationInput = {
    id?: SortOrder
    land_id?: SortOrder
    company_id?: SortOrderInput | SortOrder
    power_kw?: SortOrder
    cost?: SortOrder
    estimated_return?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    area?: SortOrder
    land?: LandsOrderByWithRelationInput
    company?: CompaniesOrderByWithRelationInput
    Investments?: InvestmentsOrderByWithRelationInput
    ProjectProposal?: ProjectProposalOrderByWithRelationInput
  }

  export type ProjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    land_id?: string
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    company_id?: UuidNullableFilter<"Projects"> | string | null
    power_kw?: DecimalFilter<"Projects"> | Decimal | DecimalJsLike | number | string
    cost?: DecimalFilter<"Projects"> | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalFilter<"Projects"> | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusFilter<"Projects"> | $Enums.SolarProjectStatus
    created_at?: DateTimeFilter<"Projects"> | Date | string
    title?: StringFilter<"Projects"> | string
    description?: StringNullableFilter<"Projects"> | string | null
    area?: DecimalFilter<"Projects"> | Decimal | DecimalJsLike | number | string
    land?: XOR<LandsScalarRelationFilter, LandsWhereInput>
    company?: XOR<CompaniesNullableScalarRelationFilter, CompaniesWhereInput> | null
    Investments?: XOR<InvestmentsNullableScalarRelationFilter, InvestmentsWhereInput> | null
    ProjectProposal?: XOR<ProjectProposalNullableScalarRelationFilter, ProjectProposalWhereInput> | null
  }, "id" | "land_id">

  export type ProjectsOrderByWithAggregationInput = {
    id?: SortOrder
    land_id?: SortOrder
    company_id?: SortOrderInput | SortOrder
    power_kw?: SortOrder
    cost?: SortOrder
    estimated_return?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    area?: SortOrder
    _count?: ProjectsCountOrderByAggregateInput
    _avg?: ProjectsAvgOrderByAggregateInput
    _max?: ProjectsMaxOrderByAggregateInput
    _min?: ProjectsMinOrderByAggregateInput
    _sum?: ProjectsSumOrderByAggregateInput
  }

  export type ProjectsScalarWhereWithAggregatesInput = {
    AND?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    OR?: ProjectsScalarWhereWithAggregatesInput[]
    NOT?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Projects"> | string
    land_id?: UuidWithAggregatesFilter<"Projects"> | string
    company_id?: UuidNullableWithAggregatesFilter<"Projects"> | string | null
    power_kw?: DecimalWithAggregatesFilter<"Projects"> | Decimal | DecimalJsLike | number | string
    cost?: DecimalWithAggregatesFilter<"Projects"> | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalWithAggregatesFilter<"Projects"> | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusWithAggregatesFilter<"Projects"> | $Enums.SolarProjectStatus
    created_at?: DateTimeWithAggregatesFilter<"Projects"> | Date | string
    title?: StringWithAggregatesFilter<"Projects"> | string
    description?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    area?: DecimalWithAggregatesFilter<"Projects"> | Decimal | DecimalJsLike | number | string
  }

  export type ProjectProposalWhereInput = {
    AND?: ProjectProposalWhereInput | ProjectProposalWhereInput[]
    OR?: ProjectProposalWhereInput[]
    NOT?: ProjectProposalWhereInput | ProjectProposalWhereInput[]
    id?: StringFilter<"ProjectProposal"> | string
    project_id?: UuidFilter<"ProjectProposal"> | string
    land_id?: UuidFilter<"ProjectProposal"> | string
    status?: EnumAgreementStatusFilter<"ProjectProposal"> | $Enums.AgreementStatus
    created_at?: DateTimeFilter<"ProjectProposal"> | Date | string
    owner_agreed?: EnumOwnerAgreementStatusFilter<"ProjectProposal"> | $Enums.OwnerAgreementStatus
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
    land?: XOR<LandsScalarRelationFilter, LandsWhereInput>
  }

  export type ProjectProposalOrderByWithRelationInput = {
    id?: SortOrder
    project_id?: SortOrder
    land_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    owner_agreed?: SortOrder
    project?: ProjectsOrderByWithRelationInput
    land?: LandsOrderByWithRelationInput
  }

  export type ProjectProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    project_id?: string
    land_id?: string
    AND?: ProjectProposalWhereInput | ProjectProposalWhereInput[]
    OR?: ProjectProposalWhereInput[]
    NOT?: ProjectProposalWhereInput | ProjectProposalWhereInput[]
    status?: EnumAgreementStatusFilter<"ProjectProposal"> | $Enums.AgreementStatus
    created_at?: DateTimeFilter<"ProjectProposal"> | Date | string
    owner_agreed?: EnumOwnerAgreementStatusFilter<"ProjectProposal"> | $Enums.OwnerAgreementStatus
    project?: XOR<ProjectsScalarRelationFilter, ProjectsWhereInput>
    land?: XOR<LandsScalarRelationFilter, LandsWhereInput>
  }, "id" | "project_id" | "land_id">

  export type ProjectProposalOrderByWithAggregationInput = {
    id?: SortOrder
    project_id?: SortOrder
    land_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    owner_agreed?: SortOrder
    _count?: ProjectProposalCountOrderByAggregateInput
    _max?: ProjectProposalMaxOrderByAggregateInput
    _min?: ProjectProposalMinOrderByAggregateInput
  }

  export type ProjectProposalScalarWhereWithAggregatesInput = {
    AND?: ProjectProposalScalarWhereWithAggregatesInput | ProjectProposalScalarWhereWithAggregatesInput[]
    OR?: ProjectProposalScalarWhereWithAggregatesInput[]
    NOT?: ProjectProposalScalarWhereWithAggregatesInput | ProjectProposalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectProposal"> | string
    project_id?: UuidWithAggregatesFilter<"ProjectProposal"> | string
    land_id?: UuidWithAggregatesFilter<"ProjectProposal"> | string
    status?: EnumAgreementStatusWithAggregatesFilter<"ProjectProposal"> | $Enums.AgreementStatus
    created_at?: DateTimeWithAggregatesFilter<"ProjectProposal"> | Date | string
    owner_agreed?: EnumOwnerAgreementStatusWithAggregatesFilter<"ProjectProposal"> | $Enums.OwnerAgreementStatus
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
    landOwner?: LandOwnersCreateNestedOneWithoutUserInput
    company?: CompaniesCreateNestedOneWithoutUserInput
    investor?: InvestorsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
    landOwner?: LandOwnersUncheckedCreateNestedOneWithoutUserInput
    company?: CompaniesUncheckedCreateNestedOneWithoutUserInput
    investor?: InvestorsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    landOwner?: LandOwnersUpdateOneWithoutUserNestedInput
    company?: CompaniesUpdateOneWithoutUserNestedInput
    investor?: InvestorsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    landOwner?: LandOwnersUncheckedUpdateOneWithoutUserNestedInput
    company?: CompaniesUncheckedUpdateOneWithoutUserNestedInput
    investor?: InvestorsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandOwnersCreateInput = {
    id?: string
    document_id: string
    user: UserCreateNestedOneWithoutLandOwnerInput
    Lands?: LandsCreateNestedOneWithoutOwnerInput
  }

  export type LandOwnersUncheckedCreateInput = {
    id?: string
    user_id: string
    document_id: string
    Lands?: LandsUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type LandOwnersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLandOwnerNestedInput
    Lands?: LandsUpdateOneWithoutOwnerNestedInput
  }

  export type LandOwnersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    Lands?: LandsUncheckedUpdateOneWithoutOwnerNestedInput
  }

  export type LandOwnersCreateManyInput = {
    id?: string
    user_id: string
    document_id: string
  }

  export type LandOwnersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
  }

  export type LandOwnersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
  }

  export type CompaniesCreateInput = {
    id?: string
    document_id: string
    company_name: string
    user: UserCreateNestedOneWithoutCompanyInput
    Projects?: ProjectsCreateNestedManyWithoutCompanyInput
  }

  export type CompaniesUncheckedCreateInput = {
    id?: string
    user_id: string
    document_id: string
    company_name: string
    Projects?: ProjectsUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompaniesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput
    Projects?: ProjectsUpdateManyWithoutCompanyNestedInput
  }

  export type CompaniesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    Projects?: ProjectsUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompaniesCreateManyInput = {
    id?: string
    user_id: string
    document_id: string
    company_name: string
  }

  export type CompaniesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
  }

  export type CompaniesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
  }

  export type InvestorsCreateInput = {
    id?: string
    document_id: string
    user: UserCreateNestedOneWithoutInvestorInput
    Investments?: InvestmentsCreateNestedManyWithoutInvestorInput
  }

  export type InvestorsUncheckedCreateInput = {
    id?: string
    user_id: string
    document_id: string
    Investments?: InvestmentsUncheckedCreateNestedManyWithoutInvestorInput
  }

  export type InvestorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutInvestorNestedInput
    Investments?: InvestmentsUpdateManyWithoutInvestorNestedInput
  }

  export type InvestorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    Investments?: InvestmentsUncheckedUpdateManyWithoutInvestorNestedInput
  }

  export type InvestorsCreateManyInput = {
    id?: string
    user_id: string
    document_id: string
  }

  export type InvestorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
  }

  export type InvestorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
  }

  export type LandsCreateInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    availability?: boolean
    street: string
    number: string
    complement?: string | null
    district?: string | null
    city: string
    state: string
    postal_code: string
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    owner: LandOwnersCreateNestedOneWithoutLandsInput
    Projects?: ProjectsCreateNestedOneWithoutLandInput
    ProjectProposal?: ProjectProposalCreateNestedOneWithoutLandInput
  }

  export type LandsUncheckedCreateInput = {
    id?: string
    owner_id: string
    price: Decimal | DecimalJsLike | number | string
    availability?: boolean
    street: string
    number: string
    complement?: string | null
    district?: string | null
    city: string
    state: string
    postal_code: string
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    Projects?: ProjectsUncheckedCreateNestedOneWithoutLandInput
    ProjectProposal?: ProjectProposalUncheckedCreateNestedOneWithoutLandInput
  }

  export type LandsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: LandOwnersUpdateOneRequiredWithoutLandsNestedInput
    Projects?: ProjectsUpdateOneWithoutLandNestedInput
    ProjectProposal?: ProjectProposalUpdateOneWithoutLandNestedInput
  }

  export type LandsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Projects?: ProjectsUncheckedUpdateOneWithoutLandNestedInput
    ProjectProposal?: ProjectProposalUncheckedUpdateOneWithoutLandNestedInput
  }

  export type LandsCreateManyInput = {
    id?: string
    owner_id: string
    price: Decimal | DecimalJsLike | number | string
    availability?: boolean
    street: string
    number: string
    complement?: string | null
    district?: string | null
    city: string
    state: string
    postal_code: string
    country: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type LandsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentsCreateInput = {
    id?: string
    value_invested: Decimal | DecimalJsLike | number | string
    invested_date?: Date | string
    owner_agree?: $Enums.Agreement
    company_agree?: $Enums.Agreement
    title?: string | null
    description?: string | null
    status?: $Enums.InvestmentStatus
    project: ProjectsCreateNestedOneWithoutInvestmentsInput
    investor?: InvestorsCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentsUncheckedCreateInput = {
    id?: string
    project_id: string
    investor_id?: string | null
    value_invested: Decimal | DecimalJsLike | number | string
    invested_date?: Date | string
    owner_agree?: $Enums.Agreement
    company_agree?: $Enums.Agreement
    title?: string | null
    description?: string | null
    status?: $Enums.InvestmentStatus
  }

  export type InvestmentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value_invested?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    company_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    project?: ProjectsUpdateOneRequiredWithoutInvestmentsNestedInput
    investor?: InvestorsUpdateOneWithoutInvestmentsNestedInput
  }

  export type InvestmentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    investor_id?: NullableStringFieldUpdateOperationsInput | string | null
    value_invested?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    company_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
  }

  export type InvestmentsCreateManyInput = {
    id?: string
    project_id: string
    investor_id?: string | null
    value_invested: Decimal | DecimalJsLike | number | string
    invested_date?: Date | string
    owner_agree?: $Enums.Agreement
    company_agree?: $Enums.Agreement
    title?: string | null
    description?: string | null
    status?: $Enums.InvestmentStatus
  }

  export type InvestmentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value_invested?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    company_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
  }

  export type InvestmentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    investor_id?: NullableStringFieldUpdateOperationsInput | string | null
    value_invested?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    company_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
  }

  export type ProjectsCreateInput = {
    id?: string
    power_kw: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    estimated_return: Decimal | DecimalJsLike | number | string
    status?: $Enums.SolarProjectStatus
    created_at?: Date | string
    title: string
    description?: string | null
    area: Decimal | DecimalJsLike | number | string
    land: LandsCreateNestedOneWithoutProjectsInput
    company?: CompaniesCreateNestedOneWithoutProjectsInput
    Investments?: InvestmentsCreateNestedOneWithoutProjectInput
    ProjectProposal?: ProjectProposalCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateInput = {
    id?: string
    land_id: string
    company_id?: string | null
    power_kw: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    estimated_return: Decimal | DecimalJsLike | number | string
    status?: $Enums.SolarProjectStatus
    created_at?: Date | string
    title: string
    description?: string | null
    area: Decimal | DecimalJsLike | number | string
    Investments?: InvestmentsUncheckedCreateNestedOneWithoutProjectInput
    ProjectProposal?: ProjectProposalUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    power_kw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusFieldUpdateOperationsInput | $Enums.SolarProjectStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land?: LandsUpdateOneRequiredWithoutProjectsNestedInput
    company?: CompaniesUpdateOneWithoutProjectsNestedInput
    Investments?: InvestmentsUpdateOneWithoutProjectNestedInput
    ProjectProposal?: ProjectProposalUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    land_id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    power_kw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusFieldUpdateOperationsInput | $Enums.SolarProjectStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Investments?: InvestmentsUncheckedUpdateOneWithoutProjectNestedInput
    ProjectProposal?: ProjectProposalUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsCreateManyInput = {
    id?: string
    land_id: string
    company_id?: string | null
    power_kw: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    estimated_return: Decimal | DecimalJsLike | number | string
    status?: $Enums.SolarProjectStatus
    created_at?: Date | string
    title: string
    description?: string | null
    area: Decimal | DecimalJsLike | number | string
  }

  export type ProjectsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    power_kw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusFieldUpdateOperationsInput | $Enums.SolarProjectStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProjectsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    land_id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    power_kw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusFieldUpdateOperationsInput | $Enums.SolarProjectStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ProjectProposalCreateInput = {
    id?: string
    status?: $Enums.AgreementStatus
    created_at?: Date | string
    owner_agreed?: $Enums.OwnerAgreementStatus
    project: ProjectsCreateNestedOneWithoutProjectProposalInput
    land: LandsCreateNestedOneWithoutProjectProposalInput
  }

  export type ProjectProposalUncheckedCreateInput = {
    id?: string
    project_id: string
    land_id: string
    status?: $Enums.AgreementStatus
    created_at?: Date | string
    owner_agreed?: $Enums.OwnerAgreementStatus
  }

  export type ProjectProposalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAgreementStatusFieldUpdateOperationsInput | $Enums.AgreementStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agreed?: EnumOwnerAgreementStatusFieldUpdateOperationsInput | $Enums.OwnerAgreementStatus
    project?: ProjectsUpdateOneRequiredWithoutProjectProposalNestedInput
    land?: LandsUpdateOneRequiredWithoutProjectProposalNestedInput
  }

  export type ProjectProposalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    land_id?: StringFieldUpdateOperationsInput | string
    status?: EnumAgreementStatusFieldUpdateOperationsInput | $Enums.AgreementStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agreed?: EnumOwnerAgreementStatusFieldUpdateOperationsInput | $Enums.OwnerAgreementStatus
  }

  export type ProjectProposalCreateManyInput = {
    id?: string
    project_id: string
    land_id: string
    status?: $Enums.AgreementStatus
    created_at?: Date | string
    owner_agreed?: $Enums.OwnerAgreementStatus
  }

  export type ProjectProposalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAgreementStatusFieldUpdateOperationsInput | $Enums.AgreementStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agreed?: EnumOwnerAgreementStatusFieldUpdateOperationsInput | $Enums.OwnerAgreementStatus
  }

  export type ProjectProposalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    land_id?: StringFieldUpdateOperationsInput | string
    status?: EnumAgreementStatusFieldUpdateOperationsInput | $Enums.AgreementStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agreed?: EnumOwnerAgreementStatusFieldUpdateOperationsInput | $Enums.OwnerAgreementStatus
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LandOwnersNullableScalarRelationFilter = {
    is?: LandOwnersWhereInput | null
    isNot?: LandOwnersWhereInput | null
  }

  export type CompaniesNullableScalarRelationFilter = {
    is?: CompaniesWhereInput | null
    isNot?: CompaniesWhereInput | null
  }

  export type InvestorsNullableScalarRelationFilter = {
    is?: InvestorsWhereInput | null
    isNot?: InvestorsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    user_type?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LandsNullableScalarRelationFilter = {
    is?: LandsWhereInput | null
    isNot?: LandsWhereInput | null
  }

  export type LandOwnersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
  }

  export type LandOwnersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
  }

  export type LandOwnersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ProjectsListRelationFilter = {
    every?: ProjectsWhereInput
    some?: ProjectsWhereInput
    none?: ProjectsWhereInput
  }

  export type ProjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompaniesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
    company_name?: SortOrder
  }

  export type CompaniesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
    company_name?: SortOrder
  }

  export type CompaniesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
    company_name?: SortOrder
  }

  export type InvestmentsListRelationFilter = {
    every?: InvestmentsWhereInput
    some?: InvestmentsWhereInput
    none?: InvestmentsWhereInput
  }

  export type InvestmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvestorsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
  }

  export type InvestorsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
  }

  export type InvestorsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LandOwnersScalarRelationFilter = {
    is?: LandOwnersWhereInput
    isNot?: LandOwnersWhereInput
  }

  export type ProjectsNullableScalarRelationFilter = {
    is?: ProjectsWhereInput | null
    isNot?: ProjectsWhereInput | null
  }

  export type ProjectProposalNullableScalarRelationFilter = {
    is?: ProjectProposalWhereInput | null
    isNot?: ProjectProposalWhereInput | null
  }

  export type LandsCountOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    price?: SortOrder
    availability?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    district?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LandsAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type LandsMaxOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    price?: SortOrder
    availability?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    district?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LandsMinOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    price?: SortOrder
    availability?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    district?: SortOrder
    city?: SortOrder
    state?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type LandsSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumAgreementFilter<$PrismaModel = never> = {
    equals?: $Enums.Agreement | EnumAgreementFieldRefInput<$PrismaModel>
    in?: $Enums.Agreement[] | ListEnumAgreementFieldRefInput<$PrismaModel>
    notIn?: $Enums.Agreement[] | ListEnumAgreementFieldRefInput<$PrismaModel>
    not?: NestedEnumAgreementFilter<$PrismaModel> | $Enums.Agreement
  }

  export type EnumInvestmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentStatus | EnumInvestmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentStatus[] | ListEnumInvestmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentStatus[] | ListEnumInvestmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentStatusFilter<$PrismaModel> | $Enums.InvestmentStatus
  }

  export type ProjectsScalarRelationFilter = {
    is?: ProjectsWhereInput
    isNot?: ProjectsWhereInput
  }

  export type InvestmentsCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    investor_id?: SortOrder
    value_invested?: SortOrder
    invested_date?: SortOrder
    owner_agree?: SortOrder
    company_agree?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type InvestmentsAvgOrderByAggregateInput = {
    value_invested?: SortOrder
  }

  export type InvestmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    investor_id?: SortOrder
    value_invested?: SortOrder
    invested_date?: SortOrder
    owner_agree?: SortOrder
    company_agree?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type InvestmentsMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    investor_id?: SortOrder
    value_invested?: SortOrder
    invested_date?: SortOrder
    owner_agree?: SortOrder
    company_agree?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type InvestmentsSumOrderByAggregateInput = {
    value_invested?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumAgreementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Agreement | EnumAgreementFieldRefInput<$PrismaModel>
    in?: $Enums.Agreement[] | ListEnumAgreementFieldRefInput<$PrismaModel>
    notIn?: $Enums.Agreement[] | ListEnumAgreementFieldRefInput<$PrismaModel>
    not?: NestedEnumAgreementWithAggregatesFilter<$PrismaModel> | $Enums.Agreement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgreementFilter<$PrismaModel>
    _max?: NestedEnumAgreementFilter<$PrismaModel>
  }

  export type EnumInvestmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentStatus | EnumInvestmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentStatus[] | ListEnumInvestmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentStatus[] | ListEnumInvestmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvestmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvestmentStatusFilter<$PrismaModel>
    _max?: NestedEnumInvestmentStatusFilter<$PrismaModel>
  }

  export type EnumSolarProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SolarProjectStatus | EnumSolarProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SolarProjectStatus[] | ListEnumSolarProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SolarProjectStatus[] | ListEnumSolarProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSolarProjectStatusFilter<$PrismaModel> | $Enums.SolarProjectStatus
  }

  export type LandsScalarRelationFilter = {
    is?: LandsWhereInput
    isNot?: LandsWhereInput
  }

  export type InvestmentsNullableScalarRelationFilter = {
    is?: InvestmentsWhereInput | null
    isNot?: InvestmentsWhereInput | null
  }

  export type ProjectsCountOrderByAggregateInput = {
    id?: SortOrder
    land_id?: SortOrder
    company_id?: SortOrder
    power_kw?: SortOrder
    cost?: SortOrder
    estimated_return?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    area?: SortOrder
  }

  export type ProjectsAvgOrderByAggregateInput = {
    power_kw?: SortOrder
    cost?: SortOrder
    estimated_return?: SortOrder
    area?: SortOrder
  }

  export type ProjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    land_id?: SortOrder
    company_id?: SortOrder
    power_kw?: SortOrder
    cost?: SortOrder
    estimated_return?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    area?: SortOrder
  }

  export type ProjectsMinOrderByAggregateInput = {
    id?: SortOrder
    land_id?: SortOrder
    company_id?: SortOrder
    power_kw?: SortOrder
    cost?: SortOrder
    estimated_return?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    title?: SortOrder
    description?: SortOrder
    area?: SortOrder
  }

  export type ProjectsSumOrderByAggregateInput = {
    power_kw?: SortOrder
    cost?: SortOrder
    estimated_return?: SortOrder
    area?: SortOrder
  }

  export type EnumSolarProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SolarProjectStatus | EnumSolarProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SolarProjectStatus[] | ListEnumSolarProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SolarProjectStatus[] | ListEnumSolarProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSolarProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.SolarProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSolarProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumSolarProjectStatusFilter<$PrismaModel>
  }

  export type EnumAgreementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AgreementStatus | EnumAgreementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgreementStatus[] | ListEnumAgreementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgreementStatus[] | ListEnumAgreementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAgreementStatusFilter<$PrismaModel> | $Enums.AgreementStatus
  }

  export type EnumOwnerAgreementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerAgreementStatus | EnumOwnerAgreementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerAgreementStatus[] | ListEnumOwnerAgreementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnerAgreementStatus[] | ListEnumOwnerAgreementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerAgreementStatusFilter<$PrismaModel> | $Enums.OwnerAgreementStatus
  }

  export type ProjectProposalCountOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    land_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    owner_agreed?: SortOrder
  }

  export type ProjectProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    land_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    owner_agreed?: SortOrder
  }

  export type ProjectProposalMinOrderByAggregateInput = {
    id?: SortOrder
    project_id?: SortOrder
    land_id?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    owner_agreed?: SortOrder
  }

  export type EnumAgreementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgreementStatus | EnumAgreementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgreementStatus[] | ListEnumAgreementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgreementStatus[] | ListEnumAgreementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAgreementStatusWithAggregatesFilter<$PrismaModel> | $Enums.AgreementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgreementStatusFilter<$PrismaModel>
    _max?: NestedEnumAgreementStatusFilter<$PrismaModel>
  }

  export type EnumOwnerAgreementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerAgreementStatus | EnumOwnerAgreementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerAgreementStatus[] | ListEnumOwnerAgreementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnerAgreementStatus[] | ListEnumOwnerAgreementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerAgreementStatusWithAggregatesFilter<$PrismaModel> | $Enums.OwnerAgreementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnerAgreementStatusFilter<$PrismaModel>
    _max?: NestedEnumOwnerAgreementStatusFilter<$PrismaModel>
  }

  export type LandOwnersCreateNestedOneWithoutUserInput = {
    create?: XOR<LandOwnersCreateWithoutUserInput, LandOwnersUncheckedCreateWithoutUserInput>
    connectOrCreate?: LandOwnersCreateOrConnectWithoutUserInput
    connect?: LandOwnersWhereUniqueInput
  }

  export type CompaniesCreateNestedOneWithoutUserInput = {
    create?: XOR<CompaniesCreateWithoutUserInput, CompaniesUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutUserInput
    connect?: CompaniesWhereUniqueInput
  }

  export type InvestorsCreateNestedOneWithoutUserInput = {
    create?: XOR<InvestorsCreateWithoutUserInput, InvestorsUncheckedCreateWithoutUserInput>
    connectOrCreate?: InvestorsCreateOrConnectWithoutUserInput
    connect?: InvestorsWhereUniqueInput
  }

  export type LandOwnersUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<LandOwnersCreateWithoutUserInput, LandOwnersUncheckedCreateWithoutUserInput>
    connectOrCreate?: LandOwnersCreateOrConnectWithoutUserInput
    connect?: LandOwnersWhereUniqueInput
  }

  export type CompaniesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CompaniesCreateWithoutUserInput, CompaniesUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutUserInput
    connect?: CompaniesWhereUniqueInput
  }

  export type InvestorsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<InvestorsCreateWithoutUserInput, InvestorsUncheckedCreateWithoutUserInput>
    connectOrCreate?: InvestorsCreateOrConnectWithoutUserInput
    connect?: InvestorsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LandOwnersUpdateOneWithoutUserNestedInput = {
    create?: XOR<LandOwnersCreateWithoutUserInput, LandOwnersUncheckedCreateWithoutUserInput>
    connectOrCreate?: LandOwnersCreateOrConnectWithoutUserInput
    upsert?: LandOwnersUpsertWithoutUserInput
    disconnect?: LandOwnersWhereInput | boolean
    delete?: LandOwnersWhereInput | boolean
    connect?: LandOwnersWhereUniqueInput
    update?: XOR<XOR<LandOwnersUpdateToOneWithWhereWithoutUserInput, LandOwnersUpdateWithoutUserInput>, LandOwnersUncheckedUpdateWithoutUserInput>
  }

  export type CompaniesUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompaniesCreateWithoutUserInput, CompaniesUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutUserInput
    upsert?: CompaniesUpsertWithoutUserInput
    disconnect?: CompaniesWhereInput | boolean
    delete?: CompaniesWhereInput | boolean
    connect?: CompaniesWhereUniqueInput
    update?: XOR<XOR<CompaniesUpdateToOneWithWhereWithoutUserInput, CompaniesUpdateWithoutUserInput>, CompaniesUncheckedUpdateWithoutUserInput>
  }

  export type InvestorsUpdateOneWithoutUserNestedInput = {
    create?: XOR<InvestorsCreateWithoutUserInput, InvestorsUncheckedCreateWithoutUserInput>
    connectOrCreate?: InvestorsCreateOrConnectWithoutUserInput
    upsert?: InvestorsUpsertWithoutUserInput
    disconnect?: InvestorsWhereInput | boolean
    delete?: InvestorsWhereInput | boolean
    connect?: InvestorsWhereUniqueInput
    update?: XOR<XOR<InvestorsUpdateToOneWithWhereWithoutUserInput, InvestorsUpdateWithoutUserInput>, InvestorsUncheckedUpdateWithoutUserInput>
  }

  export type LandOwnersUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<LandOwnersCreateWithoutUserInput, LandOwnersUncheckedCreateWithoutUserInput>
    connectOrCreate?: LandOwnersCreateOrConnectWithoutUserInput
    upsert?: LandOwnersUpsertWithoutUserInput
    disconnect?: LandOwnersWhereInput | boolean
    delete?: LandOwnersWhereInput | boolean
    connect?: LandOwnersWhereUniqueInput
    update?: XOR<XOR<LandOwnersUpdateToOneWithWhereWithoutUserInput, LandOwnersUpdateWithoutUserInput>, LandOwnersUncheckedUpdateWithoutUserInput>
  }

  export type CompaniesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompaniesCreateWithoutUserInput, CompaniesUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutUserInput
    upsert?: CompaniesUpsertWithoutUserInput
    disconnect?: CompaniesWhereInput | boolean
    delete?: CompaniesWhereInput | boolean
    connect?: CompaniesWhereUniqueInput
    update?: XOR<XOR<CompaniesUpdateToOneWithWhereWithoutUserInput, CompaniesUpdateWithoutUserInput>, CompaniesUncheckedUpdateWithoutUserInput>
  }

  export type InvestorsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<InvestorsCreateWithoutUserInput, InvestorsUncheckedCreateWithoutUserInput>
    connectOrCreate?: InvestorsCreateOrConnectWithoutUserInput
    upsert?: InvestorsUpsertWithoutUserInput
    disconnect?: InvestorsWhereInput | boolean
    delete?: InvestorsWhereInput | boolean
    connect?: InvestorsWhereUniqueInput
    update?: XOR<XOR<InvestorsUpdateToOneWithWhereWithoutUserInput, InvestorsUpdateWithoutUserInput>, InvestorsUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutLandOwnerInput = {
    create?: XOR<UserCreateWithoutLandOwnerInput, UserUncheckedCreateWithoutLandOwnerInput>
    connectOrCreate?: UserCreateOrConnectWithoutLandOwnerInput
    connect?: UserWhereUniqueInput
  }

  export type LandsCreateNestedOneWithoutOwnerInput = {
    create?: XOR<LandsCreateWithoutOwnerInput, LandsUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: LandsCreateOrConnectWithoutOwnerInput
    connect?: LandsWhereUniqueInput
  }

  export type LandsUncheckedCreateNestedOneWithoutOwnerInput = {
    create?: XOR<LandsCreateWithoutOwnerInput, LandsUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: LandsCreateOrConnectWithoutOwnerInput
    connect?: LandsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLandOwnerNestedInput = {
    create?: XOR<UserCreateWithoutLandOwnerInput, UserUncheckedCreateWithoutLandOwnerInput>
    connectOrCreate?: UserCreateOrConnectWithoutLandOwnerInput
    upsert?: UserUpsertWithoutLandOwnerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLandOwnerInput, UserUpdateWithoutLandOwnerInput>, UserUncheckedUpdateWithoutLandOwnerInput>
  }

  export type LandsUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<LandsCreateWithoutOwnerInput, LandsUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: LandsCreateOrConnectWithoutOwnerInput
    upsert?: LandsUpsertWithoutOwnerInput
    disconnect?: LandsWhereInput | boolean
    delete?: LandsWhereInput | boolean
    connect?: LandsWhereUniqueInput
    update?: XOR<XOR<LandsUpdateToOneWithWhereWithoutOwnerInput, LandsUpdateWithoutOwnerInput>, LandsUncheckedUpdateWithoutOwnerInput>
  }

  export type LandsUncheckedUpdateOneWithoutOwnerNestedInput = {
    create?: XOR<LandsCreateWithoutOwnerInput, LandsUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: LandsCreateOrConnectWithoutOwnerInput
    upsert?: LandsUpsertWithoutOwnerInput
    disconnect?: LandsWhereInput | boolean
    delete?: LandsWhereInput | boolean
    connect?: LandsWhereUniqueInput
    update?: XOR<XOR<LandsUpdateToOneWithWhereWithoutOwnerInput, LandsUpdateWithoutOwnerInput>, LandsUncheckedUpdateWithoutOwnerInput>
  }

  export type UserCreateNestedOneWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectsCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProjectsCreateWithoutCompanyInput, ProjectsUncheckedCreateWithoutCompanyInput> | ProjectsCreateWithoutCompanyInput[] | ProjectsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCompanyInput | ProjectsCreateOrConnectWithoutCompanyInput[]
    createMany?: ProjectsCreateManyCompanyInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type ProjectsUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<ProjectsCreateWithoutCompanyInput, ProjectsUncheckedCreateWithoutCompanyInput> | ProjectsCreateWithoutCompanyInput[] | ProjectsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCompanyInput | ProjectsCreateOrConnectWithoutCompanyInput[]
    createMany?: ProjectsCreateManyCompanyInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput
    upsert?: UserUpsertWithoutCompanyInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompanyInput, UserUpdateWithoutCompanyInput>, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type ProjectsUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProjectsCreateWithoutCompanyInput, ProjectsUncheckedCreateWithoutCompanyInput> | ProjectsCreateWithoutCompanyInput[] | ProjectsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCompanyInput | ProjectsCreateOrConnectWithoutCompanyInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutCompanyInput | ProjectsUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProjectsCreateManyCompanyInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutCompanyInput | ProjectsUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutCompanyInput | ProjectsUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type ProjectsUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<ProjectsCreateWithoutCompanyInput, ProjectsUncheckedCreateWithoutCompanyInput> | ProjectsCreateWithoutCompanyInput[] | ProjectsUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutCompanyInput | ProjectsCreateOrConnectWithoutCompanyInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutCompanyInput | ProjectsUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: ProjectsCreateManyCompanyInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutCompanyInput | ProjectsUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutCompanyInput | ProjectsUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInvestorInput = {
    create?: XOR<UserCreateWithoutInvestorInput, UserUncheckedCreateWithoutInvestorInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestorInput
    connect?: UserWhereUniqueInput
  }

  export type InvestmentsCreateNestedManyWithoutInvestorInput = {
    create?: XOR<InvestmentsCreateWithoutInvestorInput, InvestmentsUncheckedCreateWithoutInvestorInput> | InvestmentsCreateWithoutInvestorInput[] | InvestmentsUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvestmentsCreateOrConnectWithoutInvestorInput | InvestmentsCreateOrConnectWithoutInvestorInput[]
    createMany?: InvestmentsCreateManyInvestorInputEnvelope
    connect?: InvestmentsWhereUniqueInput | InvestmentsWhereUniqueInput[]
  }

  export type InvestmentsUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: XOR<InvestmentsCreateWithoutInvestorInput, InvestmentsUncheckedCreateWithoutInvestorInput> | InvestmentsCreateWithoutInvestorInput[] | InvestmentsUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvestmentsCreateOrConnectWithoutInvestorInput | InvestmentsCreateOrConnectWithoutInvestorInput[]
    createMany?: InvestmentsCreateManyInvestorInputEnvelope
    connect?: InvestmentsWhereUniqueInput | InvestmentsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutInvestorNestedInput = {
    create?: XOR<UserCreateWithoutInvestorInput, UserUncheckedCreateWithoutInvestorInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvestorInput
    upsert?: UserUpsertWithoutInvestorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvestorInput, UserUpdateWithoutInvestorInput>, UserUncheckedUpdateWithoutInvestorInput>
  }

  export type InvestmentsUpdateManyWithoutInvestorNestedInput = {
    create?: XOR<InvestmentsCreateWithoutInvestorInput, InvestmentsUncheckedCreateWithoutInvestorInput> | InvestmentsCreateWithoutInvestorInput[] | InvestmentsUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvestmentsCreateOrConnectWithoutInvestorInput | InvestmentsCreateOrConnectWithoutInvestorInput[]
    upsert?: InvestmentsUpsertWithWhereUniqueWithoutInvestorInput | InvestmentsUpsertWithWhereUniqueWithoutInvestorInput[]
    createMany?: InvestmentsCreateManyInvestorInputEnvelope
    set?: InvestmentsWhereUniqueInput | InvestmentsWhereUniqueInput[]
    disconnect?: InvestmentsWhereUniqueInput | InvestmentsWhereUniqueInput[]
    delete?: InvestmentsWhereUniqueInput | InvestmentsWhereUniqueInput[]
    connect?: InvestmentsWhereUniqueInput | InvestmentsWhereUniqueInput[]
    update?: InvestmentsUpdateWithWhereUniqueWithoutInvestorInput | InvestmentsUpdateWithWhereUniqueWithoutInvestorInput[]
    updateMany?: InvestmentsUpdateManyWithWhereWithoutInvestorInput | InvestmentsUpdateManyWithWhereWithoutInvestorInput[]
    deleteMany?: InvestmentsScalarWhereInput | InvestmentsScalarWhereInput[]
  }

  export type InvestmentsUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: XOR<InvestmentsCreateWithoutInvestorInput, InvestmentsUncheckedCreateWithoutInvestorInput> | InvestmentsCreateWithoutInvestorInput[] | InvestmentsUncheckedCreateWithoutInvestorInput[]
    connectOrCreate?: InvestmentsCreateOrConnectWithoutInvestorInput | InvestmentsCreateOrConnectWithoutInvestorInput[]
    upsert?: InvestmentsUpsertWithWhereUniqueWithoutInvestorInput | InvestmentsUpsertWithWhereUniqueWithoutInvestorInput[]
    createMany?: InvestmentsCreateManyInvestorInputEnvelope
    set?: InvestmentsWhereUniqueInput | InvestmentsWhereUniqueInput[]
    disconnect?: InvestmentsWhereUniqueInput | InvestmentsWhereUniqueInput[]
    delete?: InvestmentsWhereUniqueInput | InvestmentsWhereUniqueInput[]
    connect?: InvestmentsWhereUniqueInput | InvestmentsWhereUniqueInput[]
    update?: InvestmentsUpdateWithWhereUniqueWithoutInvestorInput | InvestmentsUpdateWithWhereUniqueWithoutInvestorInput[]
    updateMany?: InvestmentsUpdateManyWithWhereWithoutInvestorInput | InvestmentsUpdateManyWithWhereWithoutInvestorInput[]
    deleteMany?: InvestmentsScalarWhereInput | InvestmentsScalarWhereInput[]
  }

  export type LandOwnersCreateNestedOneWithoutLandsInput = {
    create?: XOR<LandOwnersCreateWithoutLandsInput, LandOwnersUncheckedCreateWithoutLandsInput>
    connectOrCreate?: LandOwnersCreateOrConnectWithoutLandsInput
    connect?: LandOwnersWhereUniqueInput
  }

  export type ProjectsCreateNestedOneWithoutLandInput = {
    create?: XOR<ProjectsCreateWithoutLandInput, ProjectsUncheckedCreateWithoutLandInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutLandInput
    connect?: ProjectsWhereUniqueInput
  }

  export type ProjectProposalCreateNestedOneWithoutLandInput = {
    create?: XOR<ProjectProposalCreateWithoutLandInput, ProjectProposalUncheckedCreateWithoutLandInput>
    connectOrCreate?: ProjectProposalCreateOrConnectWithoutLandInput
    connect?: ProjectProposalWhereUniqueInput
  }

  export type ProjectsUncheckedCreateNestedOneWithoutLandInput = {
    create?: XOR<ProjectsCreateWithoutLandInput, ProjectsUncheckedCreateWithoutLandInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutLandInput
    connect?: ProjectsWhereUniqueInput
  }

  export type ProjectProposalUncheckedCreateNestedOneWithoutLandInput = {
    create?: XOR<ProjectProposalCreateWithoutLandInput, ProjectProposalUncheckedCreateWithoutLandInput>
    connectOrCreate?: ProjectProposalCreateOrConnectWithoutLandInput
    connect?: ProjectProposalWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LandOwnersUpdateOneRequiredWithoutLandsNestedInput = {
    create?: XOR<LandOwnersCreateWithoutLandsInput, LandOwnersUncheckedCreateWithoutLandsInput>
    connectOrCreate?: LandOwnersCreateOrConnectWithoutLandsInput
    upsert?: LandOwnersUpsertWithoutLandsInput
    connect?: LandOwnersWhereUniqueInput
    update?: XOR<XOR<LandOwnersUpdateToOneWithWhereWithoutLandsInput, LandOwnersUpdateWithoutLandsInput>, LandOwnersUncheckedUpdateWithoutLandsInput>
  }

  export type ProjectsUpdateOneWithoutLandNestedInput = {
    create?: XOR<ProjectsCreateWithoutLandInput, ProjectsUncheckedCreateWithoutLandInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutLandInput
    upsert?: ProjectsUpsertWithoutLandInput
    disconnect?: ProjectsWhereInput | boolean
    delete?: ProjectsWhereInput | boolean
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutLandInput, ProjectsUpdateWithoutLandInput>, ProjectsUncheckedUpdateWithoutLandInput>
  }

  export type ProjectProposalUpdateOneWithoutLandNestedInput = {
    create?: XOR<ProjectProposalCreateWithoutLandInput, ProjectProposalUncheckedCreateWithoutLandInput>
    connectOrCreate?: ProjectProposalCreateOrConnectWithoutLandInput
    upsert?: ProjectProposalUpsertWithoutLandInput
    disconnect?: ProjectProposalWhereInput | boolean
    delete?: ProjectProposalWhereInput | boolean
    connect?: ProjectProposalWhereUniqueInput
    update?: XOR<XOR<ProjectProposalUpdateToOneWithWhereWithoutLandInput, ProjectProposalUpdateWithoutLandInput>, ProjectProposalUncheckedUpdateWithoutLandInput>
  }

  export type ProjectsUncheckedUpdateOneWithoutLandNestedInput = {
    create?: XOR<ProjectsCreateWithoutLandInput, ProjectsUncheckedCreateWithoutLandInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutLandInput
    upsert?: ProjectsUpsertWithoutLandInput
    disconnect?: ProjectsWhereInput | boolean
    delete?: ProjectsWhereInput | boolean
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutLandInput, ProjectsUpdateWithoutLandInput>, ProjectsUncheckedUpdateWithoutLandInput>
  }

  export type ProjectProposalUncheckedUpdateOneWithoutLandNestedInput = {
    create?: XOR<ProjectProposalCreateWithoutLandInput, ProjectProposalUncheckedCreateWithoutLandInput>
    connectOrCreate?: ProjectProposalCreateOrConnectWithoutLandInput
    upsert?: ProjectProposalUpsertWithoutLandInput
    disconnect?: ProjectProposalWhereInput | boolean
    delete?: ProjectProposalWhereInput | boolean
    connect?: ProjectProposalWhereUniqueInput
    update?: XOR<XOR<ProjectProposalUpdateToOneWithWhereWithoutLandInput, ProjectProposalUpdateWithoutLandInput>, ProjectProposalUncheckedUpdateWithoutLandInput>
  }

  export type ProjectsCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<ProjectsCreateWithoutInvestmentsInput, ProjectsUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutInvestmentsInput
    connect?: ProjectsWhereUniqueInput
  }

  export type InvestorsCreateNestedOneWithoutInvestmentsInput = {
    create?: XOR<InvestorsCreateWithoutInvestmentsInput, InvestorsUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: InvestorsCreateOrConnectWithoutInvestmentsInput
    connect?: InvestorsWhereUniqueInput
  }

  export type EnumAgreementFieldUpdateOperationsInput = {
    set?: $Enums.Agreement
  }

  export type EnumInvestmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvestmentStatus
  }

  export type ProjectsUpdateOneRequiredWithoutInvestmentsNestedInput = {
    create?: XOR<ProjectsCreateWithoutInvestmentsInput, ProjectsUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutInvestmentsInput
    upsert?: ProjectsUpsertWithoutInvestmentsInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutInvestmentsInput, ProjectsUpdateWithoutInvestmentsInput>, ProjectsUncheckedUpdateWithoutInvestmentsInput>
  }

  export type InvestorsUpdateOneWithoutInvestmentsNestedInput = {
    create?: XOR<InvestorsCreateWithoutInvestmentsInput, InvestorsUncheckedCreateWithoutInvestmentsInput>
    connectOrCreate?: InvestorsCreateOrConnectWithoutInvestmentsInput
    upsert?: InvestorsUpsertWithoutInvestmentsInput
    disconnect?: InvestorsWhereInput | boolean
    delete?: InvestorsWhereInput | boolean
    connect?: InvestorsWhereUniqueInput
    update?: XOR<XOR<InvestorsUpdateToOneWithWhereWithoutInvestmentsInput, InvestorsUpdateWithoutInvestmentsInput>, InvestorsUncheckedUpdateWithoutInvestmentsInput>
  }

  export type LandsCreateNestedOneWithoutProjectsInput = {
    create?: XOR<LandsCreateWithoutProjectsInput, LandsUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: LandsCreateOrConnectWithoutProjectsInput
    connect?: LandsWhereUniqueInput
  }

  export type CompaniesCreateNestedOneWithoutProjectsInput = {
    create?: XOR<CompaniesCreateWithoutProjectsInput, CompaniesUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutProjectsInput
    connect?: CompaniesWhereUniqueInput
  }

  export type InvestmentsCreateNestedOneWithoutProjectInput = {
    create?: XOR<InvestmentsCreateWithoutProjectInput, InvestmentsUncheckedCreateWithoutProjectInput>
    connectOrCreate?: InvestmentsCreateOrConnectWithoutProjectInput
    connect?: InvestmentsWhereUniqueInput
  }

  export type ProjectProposalCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectProposalCreateWithoutProjectInput, ProjectProposalUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectProposalCreateOrConnectWithoutProjectInput
    connect?: ProjectProposalWhereUniqueInput
  }

  export type InvestmentsUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<InvestmentsCreateWithoutProjectInput, InvestmentsUncheckedCreateWithoutProjectInput>
    connectOrCreate?: InvestmentsCreateOrConnectWithoutProjectInput
    connect?: InvestmentsWhereUniqueInput
  }

  export type ProjectProposalUncheckedCreateNestedOneWithoutProjectInput = {
    create?: XOR<ProjectProposalCreateWithoutProjectInput, ProjectProposalUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectProposalCreateOrConnectWithoutProjectInput
    connect?: ProjectProposalWhereUniqueInput
  }

  export type EnumSolarProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.SolarProjectStatus
  }

  export type LandsUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<LandsCreateWithoutProjectsInput, LandsUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: LandsCreateOrConnectWithoutProjectsInput
    upsert?: LandsUpsertWithoutProjectsInput
    connect?: LandsWhereUniqueInput
    update?: XOR<XOR<LandsUpdateToOneWithWhereWithoutProjectsInput, LandsUpdateWithoutProjectsInput>, LandsUncheckedUpdateWithoutProjectsInput>
  }

  export type CompaniesUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<CompaniesCreateWithoutProjectsInput, CompaniesUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutProjectsInput
    upsert?: CompaniesUpsertWithoutProjectsInput
    disconnect?: CompaniesWhereInput | boolean
    delete?: CompaniesWhereInput | boolean
    connect?: CompaniesWhereUniqueInput
    update?: XOR<XOR<CompaniesUpdateToOneWithWhereWithoutProjectsInput, CompaniesUpdateWithoutProjectsInput>, CompaniesUncheckedUpdateWithoutProjectsInput>
  }

  export type InvestmentsUpdateOneWithoutProjectNestedInput = {
    create?: XOR<InvestmentsCreateWithoutProjectInput, InvestmentsUncheckedCreateWithoutProjectInput>
    connectOrCreate?: InvestmentsCreateOrConnectWithoutProjectInput
    upsert?: InvestmentsUpsertWithoutProjectInput
    disconnect?: InvestmentsWhereInput | boolean
    delete?: InvestmentsWhereInput | boolean
    connect?: InvestmentsWhereUniqueInput
    update?: XOR<XOR<InvestmentsUpdateToOneWithWhereWithoutProjectInput, InvestmentsUpdateWithoutProjectInput>, InvestmentsUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectProposalUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProjectProposalCreateWithoutProjectInput, ProjectProposalUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectProposalCreateOrConnectWithoutProjectInput
    upsert?: ProjectProposalUpsertWithoutProjectInput
    disconnect?: ProjectProposalWhereInput | boolean
    delete?: ProjectProposalWhereInput | boolean
    connect?: ProjectProposalWhereUniqueInput
    update?: XOR<XOR<ProjectProposalUpdateToOneWithWhereWithoutProjectInput, ProjectProposalUpdateWithoutProjectInput>, ProjectProposalUncheckedUpdateWithoutProjectInput>
  }

  export type InvestmentsUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<InvestmentsCreateWithoutProjectInput, InvestmentsUncheckedCreateWithoutProjectInput>
    connectOrCreate?: InvestmentsCreateOrConnectWithoutProjectInput
    upsert?: InvestmentsUpsertWithoutProjectInput
    disconnect?: InvestmentsWhereInput | boolean
    delete?: InvestmentsWhereInput | boolean
    connect?: InvestmentsWhereUniqueInput
    update?: XOR<XOR<InvestmentsUpdateToOneWithWhereWithoutProjectInput, InvestmentsUpdateWithoutProjectInput>, InvestmentsUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectProposalUncheckedUpdateOneWithoutProjectNestedInput = {
    create?: XOR<ProjectProposalCreateWithoutProjectInput, ProjectProposalUncheckedCreateWithoutProjectInput>
    connectOrCreate?: ProjectProposalCreateOrConnectWithoutProjectInput
    upsert?: ProjectProposalUpsertWithoutProjectInput
    disconnect?: ProjectProposalWhereInput | boolean
    delete?: ProjectProposalWhereInput | boolean
    connect?: ProjectProposalWhereUniqueInput
    update?: XOR<XOR<ProjectProposalUpdateToOneWithWhereWithoutProjectInput, ProjectProposalUpdateWithoutProjectInput>, ProjectProposalUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectsCreateNestedOneWithoutProjectProposalInput = {
    create?: XOR<ProjectsCreateWithoutProjectProposalInput, ProjectsUncheckedCreateWithoutProjectProposalInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutProjectProposalInput
    connect?: ProjectsWhereUniqueInput
  }

  export type LandsCreateNestedOneWithoutProjectProposalInput = {
    create?: XOR<LandsCreateWithoutProjectProposalInput, LandsUncheckedCreateWithoutProjectProposalInput>
    connectOrCreate?: LandsCreateOrConnectWithoutProjectProposalInput
    connect?: LandsWhereUniqueInput
  }

  export type EnumAgreementStatusFieldUpdateOperationsInput = {
    set?: $Enums.AgreementStatus
  }

  export type EnumOwnerAgreementStatusFieldUpdateOperationsInput = {
    set?: $Enums.OwnerAgreementStatus
  }

  export type ProjectsUpdateOneRequiredWithoutProjectProposalNestedInput = {
    create?: XOR<ProjectsCreateWithoutProjectProposalInput, ProjectsUncheckedCreateWithoutProjectProposalInput>
    connectOrCreate?: ProjectsCreateOrConnectWithoutProjectProposalInput
    upsert?: ProjectsUpsertWithoutProjectProposalInput
    connect?: ProjectsWhereUniqueInput
    update?: XOR<XOR<ProjectsUpdateToOneWithWhereWithoutProjectProposalInput, ProjectsUpdateWithoutProjectProposalInput>, ProjectsUncheckedUpdateWithoutProjectProposalInput>
  }

  export type LandsUpdateOneRequiredWithoutProjectProposalNestedInput = {
    create?: XOR<LandsCreateWithoutProjectProposalInput, LandsUncheckedCreateWithoutProjectProposalInput>
    connectOrCreate?: LandsCreateOrConnectWithoutProjectProposalInput
    upsert?: LandsUpsertWithoutProjectProposalInput
    connect?: LandsWhereUniqueInput
    update?: XOR<XOR<LandsUpdateToOneWithWhereWithoutProjectProposalInput, LandsUpdateWithoutProjectProposalInput>, LandsUncheckedUpdateWithoutProjectProposalInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumAgreementFilter<$PrismaModel = never> = {
    equals?: $Enums.Agreement | EnumAgreementFieldRefInput<$PrismaModel>
    in?: $Enums.Agreement[] | ListEnumAgreementFieldRefInput<$PrismaModel>
    notIn?: $Enums.Agreement[] | ListEnumAgreementFieldRefInput<$PrismaModel>
    not?: NestedEnumAgreementFilter<$PrismaModel> | $Enums.Agreement
  }

  export type NestedEnumInvestmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentStatus | EnumInvestmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentStatus[] | ListEnumInvestmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentStatus[] | ListEnumInvestmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentStatusFilter<$PrismaModel> | $Enums.InvestmentStatus
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumAgreementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Agreement | EnumAgreementFieldRefInput<$PrismaModel>
    in?: $Enums.Agreement[] | ListEnumAgreementFieldRefInput<$PrismaModel>
    notIn?: $Enums.Agreement[] | ListEnumAgreementFieldRefInput<$PrismaModel>
    not?: NestedEnumAgreementWithAggregatesFilter<$PrismaModel> | $Enums.Agreement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgreementFilter<$PrismaModel>
    _max?: NestedEnumAgreementFilter<$PrismaModel>
  }

  export type NestedEnumInvestmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentStatus | EnumInvestmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvestmentStatus[] | ListEnumInvestmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvestmentStatus[] | ListEnumInvestmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvestmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvestmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvestmentStatusFilter<$PrismaModel>
    _max?: NestedEnumInvestmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumSolarProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SolarProjectStatus | EnumSolarProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SolarProjectStatus[] | ListEnumSolarProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SolarProjectStatus[] | ListEnumSolarProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSolarProjectStatusFilter<$PrismaModel> | $Enums.SolarProjectStatus
  }

  export type NestedEnumSolarProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SolarProjectStatus | EnumSolarProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SolarProjectStatus[] | ListEnumSolarProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SolarProjectStatus[] | ListEnumSolarProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSolarProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.SolarProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSolarProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumSolarProjectStatusFilter<$PrismaModel>
  }

  export type NestedEnumAgreementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AgreementStatus | EnumAgreementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgreementStatus[] | ListEnumAgreementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgreementStatus[] | ListEnumAgreementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAgreementStatusFilter<$PrismaModel> | $Enums.AgreementStatus
  }

  export type NestedEnumOwnerAgreementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerAgreementStatus | EnumOwnerAgreementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerAgreementStatus[] | ListEnumOwnerAgreementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnerAgreementStatus[] | ListEnumOwnerAgreementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerAgreementStatusFilter<$PrismaModel> | $Enums.OwnerAgreementStatus
  }

  export type NestedEnumAgreementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AgreementStatus | EnumAgreementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AgreementStatus[] | ListEnumAgreementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AgreementStatus[] | ListEnumAgreementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAgreementStatusWithAggregatesFilter<$PrismaModel> | $Enums.AgreementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAgreementStatusFilter<$PrismaModel>
    _max?: NestedEnumAgreementStatusFilter<$PrismaModel>
  }

  export type NestedEnumOwnerAgreementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OwnerAgreementStatus | EnumOwnerAgreementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OwnerAgreementStatus[] | ListEnumOwnerAgreementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OwnerAgreementStatus[] | ListEnumOwnerAgreementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOwnerAgreementStatusWithAggregatesFilter<$PrismaModel> | $Enums.OwnerAgreementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOwnerAgreementStatusFilter<$PrismaModel>
    _max?: NestedEnumOwnerAgreementStatusFilter<$PrismaModel>
  }

  export type LandOwnersCreateWithoutUserInput = {
    id?: string
    document_id: string
    Lands?: LandsCreateNestedOneWithoutOwnerInput
  }

  export type LandOwnersUncheckedCreateWithoutUserInput = {
    id?: string
    document_id: string
    Lands?: LandsUncheckedCreateNestedOneWithoutOwnerInput
  }

  export type LandOwnersCreateOrConnectWithoutUserInput = {
    where: LandOwnersWhereUniqueInput
    create: XOR<LandOwnersCreateWithoutUserInput, LandOwnersUncheckedCreateWithoutUserInput>
  }

  export type CompaniesCreateWithoutUserInput = {
    id?: string
    document_id: string
    company_name: string
    Projects?: ProjectsCreateNestedManyWithoutCompanyInput
  }

  export type CompaniesUncheckedCreateWithoutUserInput = {
    id?: string
    document_id: string
    company_name: string
    Projects?: ProjectsUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompaniesCreateOrConnectWithoutUserInput = {
    where: CompaniesWhereUniqueInput
    create: XOR<CompaniesCreateWithoutUserInput, CompaniesUncheckedCreateWithoutUserInput>
  }

  export type InvestorsCreateWithoutUserInput = {
    id?: string
    document_id: string
    Investments?: InvestmentsCreateNestedManyWithoutInvestorInput
  }

  export type InvestorsUncheckedCreateWithoutUserInput = {
    id?: string
    document_id: string
    Investments?: InvestmentsUncheckedCreateNestedManyWithoutInvestorInput
  }

  export type InvestorsCreateOrConnectWithoutUserInput = {
    where: InvestorsWhereUniqueInput
    create: XOR<InvestorsCreateWithoutUserInput, InvestorsUncheckedCreateWithoutUserInput>
  }

  export type LandOwnersUpsertWithoutUserInput = {
    update: XOR<LandOwnersUpdateWithoutUserInput, LandOwnersUncheckedUpdateWithoutUserInput>
    create: XOR<LandOwnersCreateWithoutUserInput, LandOwnersUncheckedCreateWithoutUserInput>
    where?: LandOwnersWhereInput
  }

  export type LandOwnersUpdateToOneWithWhereWithoutUserInput = {
    where?: LandOwnersWhereInput
    data: XOR<LandOwnersUpdateWithoutUserInput, LandOwnersUncheckedUpdateWithoutUserInput>
  }

  export type LandOwnersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    Lands?: LandsUpdateOneWithoutOwnerNestedInput
  }

  export type LandOwnersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    Lands?: LandsUncheckedUpdateOneWithoutOwnerNestedInput
  }

  export type CompaniesUpsertWithoutUserInput = {
    update: XOR<CompaniesUpdateWithoutUserInput, CompaniesUncheckedUpdateWithoutUserInput>
    create: XOR<CompaniesCreateWithoutUserInput, CompaniesUncheckedCreateWithoutUserInput>
    where?: CompaniesWhereInput
  }

  export type CompaniesUpdateToOneWithWhereWithoutUserInput = {
    where?: CompaniesWhereInput
    data: XOR<CompaniesUpdateWithoutUserInput, CompaniesUncheckedUpdateWithoutUserInput>
  }

  export type CompaniesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    Projects?: ProjectsUpdateManyWithoutCompanyNestedInput
  }

  export type CompaniesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    Projects?: ProjectsUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type InvestorsUpsertWithoutUserInput = {
    update: XOR<InvestorsUpdateWithoutUserInput, InvestorsUncheckedUpdateWithoutUserInput>
    create: XOR<InvestorsCreateWithoutUserInput, InvestorsUncheckedCreateWithoutUserInput>
    where?: InvestorsWhereInput
  }

  export type InvestorsUpdateToOneWithWhereWithoutUserInput = {
    where?: InvestorsWhereInput
    data: XOR<InvestorsUpdateWithoutUserInput, InvestorsUncheckedUpdateWithoutUserInput>
  }

  export type InvestorsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    Investments?: InvestmentsUpdateManyWithoutInvestorNestedInput
  }

  export type InvestorsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    Investments?: InvestmentsUncheckedUpdateManyWithoutInvestorNestedInput
  }

  export type UserCreateWithoutLandOwnerInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
    company?: CompaniesCreateNestedOneWithoutUserInput
    investor?: InvestorsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLandOwnerInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
    company?: CompaniesUncheckedCreateNestedOneWithoutUserInput
    investor?: InvestorsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLandOwnerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLandOwnerInput, UserUncheckedCreateWithoutLandOwnerInput>
  }

  export type LandsCreateWithoutOwnerInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    availability?: boolean
    street: string
    number: string
    complement?: string | null
    district?: string | null
    city: string
    state: string
    postal_code: string
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    Projects?: ProjectsCreateNestedOneWithoutLandInput
    ProjectProposal?: ProjectProposalCreateNestedOneWithoutLandInput
  }

  export type LandsUncheckedCreateWithoutOwnerInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    availability?: boolean
    street: string
    number: string
    complement?: string | null
    district?: string | null
    city: string
    state: string
    postal_code: string
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    Projects?: ProjectsUncheckedCreateNestedOneWithoutLandInput
    ProjectProposal?: ProjectProposalUncheckedCreateNestedOneWithoutLandInput
  }

  export type LandsCreateOrConnectWithoutOwnerInput = {
    where: LandsWhereUniqueInput
    create: XOR<LandsCreateWithoutOwnerInput, LandsUncheckedCreateWithoutOwnerInput>
  }

  export type UserUpsertWithoutLandOwnerInput = {
    update: XOR<UserUpdateWithoutLandOwnerInput, UserUncheckedUpdateWithoutLandOwnerInput>
    create: XOR<UserCreateWithoutLandOwnerInput, UserUncheckedCreateWithoutLandOwnerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLandOwnerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLandOwnerInput, UserUncheckedUpdateWithoutLandOwnerInput>
  }

  export type UserUpdateWithoutLandOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompaniesUpdateOneWithoutUserNestedInput
    investor?: InvestorsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLandOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompaniesUncheckedUpdateOneWithoutUserNestedInput
    investor?: InvestorsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type LandsUpsertWithoutOwnerInput = {
    update: XOR<LandsUpdateWithoutOwnerInput, LandsUncheckedUpdateWithoutOwnerInput>
    create: XOR<LandsCreateWithoutOwnerInput, LandsUncheckedCreateWithoutOwnerInput>
    where?: LandsWhereInput
  }

  export type LandsUpdateToOneWithWhereWithoutOwnerInput = {
    where?: LandsWhereInput
    data: XOR<LandsUpdateWithoutOwnerInput, LandsUncheckedUpdateWithoutOwnerInput>
  }

  export type LandsUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Projects?: ProjectsUpdateOneWithoutLandNestedInput
    ProjectProposal?: ProjectProposalUpdateOneWithoutLandNestedInput
  }

  export type LandsUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Projects?: ProjectsUncheckedUpdateOneWithoutLandNestedInput
    ProjectProposal?: ProjectProposalUncheckedUpdateOneWithoutLandNestedInput
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
    landOwner?: LandOwnersCreateNestedOneWithoutUserInput
    investor?: InvestorsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
    landOwner?: LandOwnersUncheckedCreateNestedOneWithoutUserInput
    investor?: InvestorsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type ProjectsCreateWithoutCompanyInput = {
    id?: string
    power_kw: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    estimated_return: Decimal | DecimalJsLike | number | string
    status?: $Enums.SolarProjectStatus
    created_at?: Date | string
    title: string
    description?: string | null
    area: Decimal | DecimalJsLike | number | string
    land: LandsCreateNestedOneWithoutProjectsInput
    Investments?: InvestmentsCreateNestedOneWithoutProjectInput
    ProjectProposal?: ProjectProposalCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutCompanyInput = {
    id?: string
    land_id: string
    power_kw: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    estimated_return: Decimal | DecimalJsLike | number | string
    status?: $Enums.SolarProjectStatus
    created_at?: Date | string
    title: string
    description?: string | null
    area: Decimal | DecimalJsLike | number | string
    Investments?: InvestmentsUncheckedCreateNestedOneWithoutProjectInput
    ProjectProposal?: ProjectProposalUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutCompanyInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutCompanyInput, ProjectsUncheckedCreateWithoutCompanyInput>
  }

  export type ProjectsCreateManyCompanyInputEnvelope = {
    data: ProjectsCreateManyCompanyInput | ProjectsCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCompanyInput = {
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompanyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    landOwner?: LandOwnersUpdateOneWithoutUserNestedInput
    investor?: InvestorsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    landOwner?: LandOwnersUncheckedUpdateOneWithoutUserNestedInput
    investor?: InvestorsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProjectsUpsertWithWhereUniqueWithoutCompanyInput = {
    where: ProjectsWhereUniqueInput
    update: XOR<ProjectsUpdateWithoutCompanyInput, ProjectsUncheckedUpdateWithoutCompanyInput>
    create: XOR<ProjectsCreateWithoutCompanyInput, ProjectsUncheckedCreateWithoutCompanyInput>
  }

  export type ProjectsUpdateWithWhereUniqueWithoutCompanyInput = {
    where: ProjectsWhereUniqueInput
    data: XOR<ProjectsUpdateWithoutCompanyInput, ProjectsUncheckedUpdateWithoutCompanyInput>
  }

  export type ProjectsUpdateManyWithWhereWithoutCompanyInput = {
    where: ProjectsScalarWhereInput
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyWithoutCompanyInput>
  }

  export type ProjectsScalarWhereInput = {
    AND?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    OR?: ProjectsScalarWhereInput[]
    NOT?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    id?: StringFilter<"Projects"> | string
    land_id?: UuidFilter<"Projects"> | string
    company_id?: UuidNullableFilter<"Projects"> | string | null
    power_kw?: DecimalFilter<"Projects"> | Decimal | DecimalJsLike | number | string
    cost?: DecimalFilter<"Projects"> | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalFilter<"Projects"> | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusFilter<"Projects"> | $Enums.SolarProjectStatus
    created_at?: DateTimeFilter<"Projects"> | Date | string
    title?: StringFilter<"Projects"> | string
    description?: StringNullableFilter<"Projects"> | string | null
    area?: DecimalFilter<"Projects"> | Decimal | DecimalJsLike | number | string
  }

  export type UserCreateWithoutInvestorInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
    landOwner?: LandOwnersCreateNestedOneWithoutUserInput
    company?: CompaniesCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvestorInput = {
    id?: string
    name: string
    email: string
    password: string
    user_type: $Enums.UserType
    phone?: string | null
    created_at?: Date | string
    landOwner?: LandOwnersUncheckedCreateNestedOneWithoutUserInput
    company?: CompaniesUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvestorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvestorInput, UserUncheckedCreateWithoutInvestorInput>
  }

  export type InvestmentsCreateWithoutInvestorInput = {
    id?: string
    value_invested: Decimal | DecimalJsLike | number | string
    invested_date?: Date | string
    owner_agree?: $Enums.Agreement
    company_agree?: $Enums.Agreement
    title?: string | null
    description?: string | null
    status?: $Enums.InvestmentStatus
    project: ProjectsCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentsUncheckedCreateWithoutInvestorInput = {
    id?: string
    project_id: string
    value_invested: Decimal | DecimalJsLike | number | string
    invested_date?: Date | string
    owner_agree?: $Enums.Agreement
    company_agree?: $Enums.Agreement
    title?: string | null
    description?: string | null
    status?: $Enums.InvestmentStatus
  }

  export type InvestmentsCreateOrConnectWithoutInvestorInput = {
    where: InvestmentsWhereUniqueInput
    create: XOR<InvestmentsCreateWithoutInvestorInput, InvestmentsUncheckedCreateWithoutInvestorInput>
  }

  export type InvestmentsCreateManyInvestorInputEnvelope = {
    data: InvestmentsCreateManyInvestorInput | InvestmentsCreateManyInvestorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutInvestorInput = {
    update: XOR<UserUpdateWithoutInvestorInput, UserUncheckedUpdateWithoutInvestorInput>
    create: XOR<UserCreateWithoutInvestorInput, UserUncheckedCreateWithoutInvestorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvestorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvestorInput, UserUncheckedUpdateWithoutInvestorInput>
  }

  export type UserUpdateWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    landOwner?: LandOwnersUpdateOneWithoutUserNestedInput
    company?: CompaniesUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    user_type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    landOwner?: LandOwnersUncheckedUpdateOneWithoutUserNestedInput
    company?: CompaniesUncheckedUpdateOneWithoutUserNestedInput
  }

  export type InvestmentsUpsertWithWhereUniqueWithoutInvestorInput = {
    where: InvestmentsWhereUniqueInput
    update: XOR<InvestmentsUpdateWithoutInvestorInput, InvestmentsUncheckedUpdateWithoutInvestorInput>
    create: XOR<InvestmentsCreateWithoutInvestorInput, InvestmentsUncheckedCreateWithoutInvestorInput>
  }

  export type InvestmentsUpdateWithWhereUniqueWithoutInvestorInput = {
    where: InvestmentsWhereUniqueInput
    data: XOR<InvestmentsUpdateWithoutInvestorInput, InvestmentsUncheckedUpdateWithoutInvestorInput>
  }

  export type InvestmentsUpdateManyWithWhereWithoutInvestorInput = {
    where: InvestmentsScalarWhereInput
    data: XOR<InvestmentsUpdateManyMutationInput, InvestmentsUncheckedUpdateManyWithoutInvestorInput>
  }

  export type InvestmentsScalarWhereInput = {
    AND?: InvestmentsScalarWhereInput | InvestmentsScalarWhereInput[]
    OR?: InvestmentsScalarWhereInput[]
    NOT?: InvestmentsScalarWhereInput | InvestmentsScalarWhereInput[]
    id?: StringFilter<"Investments"> | string
    project_id?: UuidFilter<"Investments"> | string
    investor_id?: UuidNullableFilter<"Investments"> | string | null
    value_invested?: DecimalFilter<"Investments"> | Decimal | DecimalJsLike | number | string
    invested_date?: DateTimeFilter<"Investments"> | Date | string
    owner_agree?: EnumAgreementFilter<"Investments"> | $Enums.Agreement
    company_agree?: EnumAgreementFilter<"Investments"> | $Enums.Agreement
    title?: StringNullableFilter<"Investments"> | string | null
    description?: StringNullableFilter<"Investments"> | string | null
    status?: EnumInvestmentStatusFilter<"Investments"> | $Enums.InvestmentStatus
  }

  export type LandOwnersCreateWithoutLandsInput = {
    id?: string
    document_id: string
    user: UserCreateNestedOneWithoutLandOwnerInput
  }

  export type LandOwnersUncheckedCreateWithoutLandsInput = {
    id?: string
    user_id: string
    document_id: string
  }

  export type LandOwnersCreateOrConnectWithoutLandsInput = {
    where: LandOwnersWhereUniqueInput
    create: XOR<LandOwnersCreateWithoutLandsInput, LandOwnersUncheckedCreateWithoutLandsInput>
  }

  export type ProjectsCreateWithoutLandInput = {
    id?: string
    power_kw: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    estimated_return: Decimal | DecimalJsLike | number | string
    status?: $Enums.SolarProjectStatus
    created_at?: Date | string
    title: string
    description?: string | null
    area: Decimal | DecimalJsLike | number | string
    company?: CompaniesCreateNestedOneWithoutProjectsInput
    Investments?: InvestmentsCreateNestedOneWithoutProjectInput
    ProjectProposal?: ProjectProposalCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutLandInput = {
    id?: string
    company_id?: string | null
    power_kw: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    estimated_return: Decimal | DecimalJsLike | number | string
    status?: $Enums.SolarProjectStatus
    created_at?: Date | string
    title: string
    description?: string | null
    area: Decimal | DecimalJsLike | number | string
    Investments?: InvestmentsUncheckedCreateNestedOneWithoutProjectInput
    ProjectProposal?: ProjectProposalUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutLandInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutLandInput, ProjectsUncheckedCreateWithoutLandInput>
  }

  export type ProjectProposalCreateWithoutLandInput = {
    id?: string
    status?: $Enums.AgreementStatus
    created_at?: Date | string
    owner_agreed?: $Enums.OwnerAgreementStatus
    project: ProjectsCreateNestedOneWithoutProjectProposalInput
  }

  export type ProjectProposalUncheckedCreateWithoutLandInput = {
    id?: string
    project_id: string
    status?: $Enums.AgreementStatus
    created_at?: Date | string
    owner_agreed?: $Enums.OwnerAgreementStatus
  }

  export type ProjectProposalCreateOrConnectWithoutLandInput = {
    where: ProjectProposalWhereUniqueInput
    create: XOR<ProjectProposalCreateWithoutLandInput, ProjectProposalUncheckedCreateWithoutLandInput>
  }

  export type LandOwnersUpsertWithoutLandsInput = {
    update: XOR<LandOwnersUpdateWithoutLandsInput, LandOwnersUncheckedUpdateWithoutLandsInput>
    create: XOR<LandOwnersCreateWithoutLandsInput, LandOwnersUncheckedCreateWithoutLandsInput>
    where?: LandOwnersWhereInput
  }

  export type LandOwnersUpdateToOneWithWhereWithoutLandsInput = {
    where?: LandOwnersWhereInput
    data: XOR<LandOwnersUpdateWithoutLandsInput, LandOwnersUncheckedUpdateWithoutLandsInput>
  }

  export type LandOwnersUpdateWithoutLandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLandOwnerNestedInput
  }

  export type LandOwnersUncheckedUpdateWithoutLandsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectsUpsertWithoutLandInput = {
    update: XOR<ProjectsUpdateWithoutLandInput, ProjectsUncheckedUpdateWithoutLandInput>
    create: XOR<ProjectsCreateWithoutLandInput, ProjectsUncheckedCreateWithoutLandInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutLandInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutLandInput, ProjectsUncheckedUpdateWithoutLandInput>
  }

  export type ProjectsUpdateWithoutLandInput = {
    id?: StringFieldUpdateOperationsInput | string
    power_kw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusFieldUpdateOperationsInput | $Enums.SolarProjectStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    company?: CompaniesUpdateOneWithoutProjectsNestedInput
    Investments?: InvestmentsUpdateOneWithoutProjectNestedInput
    ProjectProposal?: ProjectProposalUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutLandInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    power_kw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusFieldUpdateOperationsInput | $Enums.SolarProjectStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Investments?: InvestmentsUncheckedUpdateOneWithoutProjectNestedInput
    ProjectProposal?: ProjectProposalUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectProposalUpsertWithoutLandInput = {
    update: XOR<ProjectProposalUpdateWithoutLandInput, ProjectProposalUncheckedUpdateWithoutLandInput>
    create: XOR<ProjectProposalCreateWithoutLandInput, ProjectProposalUncheckedCreateWithoutLandInput>
    where?: ProjectProposalWhereInput
  }

  export type ProjectProposalUpdateToOneWithWhereWithoutLandInput = {
    where?: ProjectProposalWhereInput
    data: XOR<ProjectProposalUpdateWithoutLandInput, ProjectProposalUncheckedUpdateWithoutLandInput>
  }

  export type ProjectProposalUpdateWithoutLandInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAgreementStatusFieldUpdateOperationsInput | $Enums.AgreementStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agreed?: EnumOwnerAgreementStatusFieldUpdateOperationsInput | $Enums.OwnerAgreementStatus
    project?: ProjectsUpdateOneRequiredWithoutProjectProposalNestedInput
  }

  export type ProjectProposalUncheckedUpdateWithoutLandInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    status?: EnumAgreementStatusFieldUpdateOperationsInput | $Enums.AgreementStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agreed?: EnumOwnerAgreementStatusFieldUpdateOperationsInput | $Enums.OwnerAgreementStatus
  }

  export type ProjectsCreateWithoutInvestmentsInput = {
    id?: string
    power_kw: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    estimated_return: Decimal | DecimalJsLike | number | string
    status?: $Enums.SolarProjectStatus
    created_at?: Date | string
    title: string
    description?: string | null
    area: Decimal | DecimalJsLike | number | string
    land: LandsCreateNestedOneWithoutProjectsInput
    company?: CompaniesCreateNestedOneWithoutProjectsInput
    ProjectProposal?: ProjectProposalCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    land_id: string
    company_id?: string | null
    power_kw: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    estimated_return: Decimal | DecimalJsLike | number | string
    status?: $Enums.SolarProjectStatus
    created_at?: Date | string
    title: string
    description?: string | null
    area: Decimal | DecimalJsLike | number | string
    ProjectProposal?: ProjectProposalUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutInvestmentsInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutInvestmentsInput, ProjectsUncheckedCreateWithoutInvestmentsInput>
  }

  export type InvestorsCreateWithoutInvestmentsInput = {
    id?: string
    document_id: string
    user: UserCreateNestedOneWithoutInvestorInput
  }

  export type InvestorsUncheckedCreateWithoutInvestmentsInput = {
    id?: string
    user_id: string
    document_id: string
  }

  export type InvestorsCreateOrConnectWithoutInvestmentsInput = {
    where: InvestorsWhereUniqueInput
    create: XOR<InvestorsCreateWithoutInvestmentsInput, InvestorsUncheckedCreateWithoutInvestmentsInput>
  }

  export type ProjectsUpsertWithoutInvestmentsInput = {
    update: XOR<ProjectsUpdateWithoutInvestmentsInput, ProjectsUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<ProjectsCreateWithoutInvestmentsInput, ProjectsUncheckedCreateWithoutInvestmentsInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutInvestmentsInput, ProjectsUncheckedUpdateWithoutInvestmentsInput>
  }

  export type ProjectsUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    power_kw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusFieldUpdateOperationsInput | $Enums.SolarProjectStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land?: LandsUpdateOneRequiredWithoutProjectsNestedInput
    company?: CompaniesUpdateOneWithoutProjectsNestedInput
    ProjectProposal?: ProjectProposalUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    land_id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    power_kw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusFieldUpdateOperationsInput | $Enums.SolarProjectStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ProjectProposal?: ProjectProposalUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type InvestorsUpsertWithoutInvestmentsInput = {
    update: XOR<InvestorsUpdateWithoutInvestmentsInput, InvestorsUncheckedUpdateWithoutInvestmentsInput>
    create: XOR<InvestorsCreateWithoutInvestmentsInput, InvestorsUncheckedCreateWithoutInvestmentsInput>
    where?: InvestorsWhereInput
  }

  export type InvestorsUpdateToOneWithWhereWithoutInvestmentsInput = {
    where?: InvestorsWhereInput
    data: XOR<InvestorsUpdateWithoutInvestmentsInput, InvestorsUncheckedUpdateWithoutInvestmentsInput>
  }

  export type InvestorsUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutInvestorNestedInput
  }

  export type InvestorsUncheckedUpdateWithoutInvestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
  }

  export type LandsCreateWithoutProjectsInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    availability?: boolean
    street: string
    number: string
    complement?: string | null
    district?: string | null
    city: string
    state: string
    postal_code: string
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    owner: LandOwnersCreateNestedOneWithoutLandsInput
    ProjectProposal?: ProjectProposalCreateNestedOneWithoutLandInput
  }

  export type LandsUncheckedCreateWithoutProjectsInput = {
    id?: string
    owner_id: string
    price: Decimal | DecimalJsLike | number | string
    availability?: boolean
    street: string
    number: string
    complement?: string | null
    district?: string | null
    city: string
    state: string
    postal_code: string
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    ProjectProposal?: ProjectProposalUncheckedCreateNestedOneWithoutLandInput
  }

  export type LandsCreateOrConnectWithoutProjectsInput = {
    where: LandsWhereUniqueInput
    create: XOR<LandsCreateWithoutProjectsInput, LandsUncheckedCreateWithoutProjectsInput>
  }

  export type CompaniesCreateWithoutProjectsInput = {
    id?: string
    document_id: string
    company_name: string
    user: UserCreateNestedOneWithoutCompanyInput
  }

  export type CompaniesUncheckedCreateWithoutProjectsInput = {
    id?: string
    user_id: string
    document_id: string
    company_name: string
  }

  export type CompaniesCreateOrConnectWithoutProjectsInput = {
    where: CompaniesWhereUniqueInput
    create: XOR<CompaniesCreateWithoutProjectsInput, CompaniesUncheckedCreateWithoutProjectsInput>
  }

  export type InvestmentsCreateWithoutProjectInput = {
    id?: string
    value_invested: Decimal | DecimalJsLike | number | string
    invested_date?: Date | string
    owner_agree?: $Enums.Agreement
    company_agree?: $Enums.Agreement
    title?: string | null
    description?: string | null
    status?: $Enums.InvestmentStatus
    investor?: InvestorsCreateNestedOneWithoutInvestmentsInput
  }

  export type InvestmentsUncheckedCreateWithoutProjectInput = {
    id?: string
    investor_id?: string | null
    value_invested: Decimal | DecimalJsLike | number | string
    invested_date?: Date | string
    owner_agree?: $Enums.Agreement
    company_agree?: $Enums.Agreement
    title?: string | null
    description?: string | null
    status?: $Enums.InvestmentStatus
  }

  export type InvestmentsCreateOrConnectWithoutProjectInput = {
    where: InvestmentsWhereUniqueInput
    create: XOR<InvestmentsCreateWithoutProjectInput, InvestmentsUncheckedCreateWithoutProjectInput>
  }

  export type ProjectProposalCreateWithoutProjectInput = {
    id?: string
    status?: $Enums.AgreementStatus
    created_at?: Date | string
    owner_agreed?: $Enums.OwnerAgreementStatus
    land: LandsCreateNestedOneWithoutProjectProposalInput
  }

  export type ProjectProposalUncheckedCreateWithoutProjectInput = {
    id?: string
    land_id: string
    status?: $Enums.AgreementStatus
    created_at?: Date | string
    owner_agreed?: $Enums.OwnerAgreementStatus
  }

  export type ProjectProposalCreateOrConnectWithoutProjectInput = {
    where: ProjectProposalWhereUniqueInput
    create: XOR<ProjectProposalCreateWithoutProjectInput, ProjectProposalUncheckedCreateWithoutProjectInput>
  }

  export type LandsUpsertWithoutProjectsInput = {
    update: XOR<LandsUpdateWithoutProjectsInput, LandsUncheckedUpdateWithoutProjectsInput>
    create: XOR<LandsCreateWithoutProjectsInput, LandsUncheckedCreateWithoutProjectsInput>
    where?: LandsWhereInput
  }

  export type LandsUpdateToOneWithWhereWithoutProjectsInput = {
    where?: LandsWhereInput
    data: XOR<LandsUpdateWithoutProjectsInput, LandsUncheckedUpdateWithoutProjectsInput>
  }

  export type LandsUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: LandOwnersUpdateOneRequiredWithoutLandsNestedInput
    ProjectProposal?: ProjectProposalUpdateOneWithoutLandNestedInput
  }

  export type LandsUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ProjectProposal?: ProjectProposalUncheckedUpdateOneWithoutLandNestedInput
  }

  export type CompaniesUpsertWithoutProjectsInput = {
    update: XOR<CompaniesUpdateWithoutProjectsInput, CompaniesUncheckedUpdateWithoutProjectsInput>
    create: XOR<CompaniesCreateWithoutProjectsInput, CompaniesUncheckedCreateWithoutProjectsInput>
    where?: CompaniesWhereInput
  }

  export type CompaniesUpdateToOneWithWhereWithoutProjectsInput = {
    where?: CompaniesWhereInput
    data: XOR<CompaniesUpdateWithoutProjectsInput, CompaniesUncheckedUpdateWithoutProjectsInput>
  }

  export type CompaniesUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCompanyNestedInput
  }

  export type CompaniesUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    document_id?: StringFieldUpdateOperationsInput | string
    company_name?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentsUpsertWithoutProjectInput = {
    update: XOR<InvestmentsUpdateWithoutProjectInput, InvestmentsUncheckedUpdateWithoutProjectInput>
    create: XOR<InvestmentsCreateWithoutProjectInput, InvestmentsUncheckedCreateWithoutProjectInput>
    where?: InvestmentsWhereInput
  }

  export type InvestmentsUpdateToOneWithWhereWithoutProjectInput = {
    where?: InvestmentsWhereInput
    data: XOR<InvestmentsUpdateWithoutProjectInput, InvestmentsUncheckedUpdateWithoutProjectInput>
  }

  export type InvestmentsUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    value_invested?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    company_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    investor?: InvestorsUpdateOneWithoutInvestmentsNestedInput
  }

  export type InvestmentsUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    investor_id?: NullableStringFieldUpdateOperationsInput | string | null
    value_invested?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    company_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
  }

  export type ProjectProposalUpsertWithoutProjectInput = {
    update: XOR<ProjectProposalUpdateWithoutProjectInput, ProjectProposalUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectProposalCreateWithoutProjectInput, ProjectProposalUncheckedCreateWithoutProjectInput>
    where?: ProjectProposalWhereInput
  }

  export type ProjectProposalUpdateToOneWithWhereWithoutProjectInput = {
    where?: ProjectProposalWhereInput
    data: XOR<ProjectProposalUpdateWithoutProjectInput, ProjectProposalUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectProposalUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAgreementStatusFieldUpdateOperationsInput | $Enums.AgreementStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agreed?: EnumOwnerAgreementStatusFieldUpdateOperationsInput | $Enums.OwnerAgreementStatus
    land?: LandsUpdateOneRequiredWithoutProjectProposalNestedInput
  }

  export type ProjectProposalUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    land_id?: StringFieldUpdateOperationsInput | string
    status?: EnumAgreementStatusFieldUpdateOperationsInput | $Enums.AgreementStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agreed?: EnumOwnerAgreementStatusFieldUpdateOperationsInput | $Enums.OwnerAgreementStatus
  }

  export type ProjectsCreateWithoutProjectProposalInput = {
    id?: string
    power_kw: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    estimated_return: Decimal | DecimalJsLike | number | string
    status?: $Enums.SolarProjectStatus
    created_at?: Date | string
    title: string
    description?: string | null
    area: Decimal | DecimalJsLike | number | string
    land: LandsCreateNestedOneWithoutProjectsInput
    company?: CompaniesCreateNestedOneWithoutProjectsInput
    Investments?: InvestmentsCreateNestedOneWithoutProjectInput
  }

  export type ProjectsUncheckedCreateWithoutProjectProposalInput = {
    id?: string
    land_id: string
    company_id?: string | null
    power_kw: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    estimated_return: Decimal | DecimalJsLike | number | string
    status?: $Enums.SolarProjectStatus
    created_at?: Date | string
    title: string
    description?: string | null
    area: Decimal | DecimalJsLike | number | string
    Investments?: InvestmentsUncheckedCreateNestedOneWithoutProjectInput
  }

  export type ProjectsCreateOrConnectWithoutProjectProposalInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutProjectProposalInput, ProjectsUncheckedCreateWithoutProjectProposalInput>
  }

  export type LandsCreateWithoutProjectProposalInput = {
    id?: string
    price: Decimal | DecimalJsLike | number | string
    availability?: boolean
    street: string
    number: string
    complement?: string | null
    district?: string | null
    city: string
    state: string
    postal_code: string
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    owner: LandOwnersCreateNestedOneWithoutLandsInput
    Projects?: ProjectsCreateNestedOneWithoutLandInput
  }

  export type LandsUncheckedCreateWithoutProjectProposalInput = {
    id?: string
    owner_id: string
    price: Decimal | DecimalJsLike | number | string
    availability?: boolean
    street: string
    number: string
    complement?: string | null
    district?: string | null
    city: string
    state: string
    postal_code: string
    country: string
    created_at?: Date | string
    updated_at?: Date | string
    Projects?: ProjectsUncheckedCreateNestedOneWithoutLandInput
  }

  export type LandsCreateOrConnectWithoutProjectProposalInput = {
    where: LandsWhereUniqueInput
    create: XOR<LandsCreateWithoutProjectProposalInput, LandsUncheckedCreateWithoutProjectProposalInput>
  }

  export type ProjectsUpsertWithoutProjectProposalInput = {
    update: XOR<ProjectsUpdateWithoutProjectProposalInput, ProjectsUncheckedUpdateWithoutProjectProposalInput>
    create: XOR<ProjectsCreateWithoutProjectProposalInput, ProjectsUncheckedCreateWithoutProjectProposalInput>
    where?: ProjectsWhereInput
  }

  export type ProjectsUpdateToOneWithWhereWithoutProjectProposalInput = {
    where?: ProjectsWhereInput
    data: XOR<ProjectsUpdateWithoutProjectProposalInput, ProjectsUncheckedUpdateWithoutProjectProposalInput>
  }

  export type ProjectsUpdateWithoutProjectProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    power_kw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusFieldUpdateOperationsInput | $Enums.SolarProjectStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land?: LandsUpdateOneRequiredWithoutProjectsNestedInput
    company?: CompaniesUpdateOneWithoutProjectsNestedInput
    Investments?: InvestmentsUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutProjectProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    land_id?: StringFieldUpdateOperationsInput | string
    company_id?: NullableStringFieldUpdateOperationsInput | string | null
    power_kw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusFieldUpdateOperationsInput | $Enums.SolarProjectStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Investments?: InvestmentsUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type LandsUpsertWithoutProjectProposalInput = {
    update: XOR<LandsUpdateWithoutProjectProposalInput, LandsUncheckedUpdateWithoutProjectProposalInput>
    create: XOR<LandsCreateWithoutProjectProposalInput, LandsUncheckedCreateWithoutProjectProposalInput>
    where?: LandsWhereInput
  }

  export type LandsUpdateToOneWithWhereWithoutProjectProposalInput = {
    where?: LandsWhereInput
    data: XOR<LandsUpdateWithoutProjectProposalInput, LandsUncheckedUpdateWithoutProjectProposalInput>
  }

  export type LandsUpdateWithoutProjectProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: LandOwnersUpdateOneRequiredWithoutLandsNestedInput
    Projects?: ProjectsUpdateOneWithoutLandNestedInput
  }

  export type LandsUncheckedUpdateWithoutProjectProposalInput = {
    id?: StringFieldUpdateOperationsInput | string
    owner_id?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    availability?: BoolFieldUpdateOperationsInput | boolean
    street?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Projects?: ProjectsUncheckedUpdateOneWithoutLandNestedInput
  }

  export type ProjectsCreateManyCompanyInput = {
    id?: string
    land_id: string
    power_kw: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    estimated_return: Decimal | DecimalJsLike | number | string
    status?: $Enums.SolarProjectStatus
    created_at?: Date | string
    title: string
    description?: string | null
    area: Decimal | DecimalJsLike | number | string
  }

  export type ProjectsUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    power_kw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusFieldUpdateOperationsInput | $Enums.SolarProjectStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    land?: LandsUpdateOneRequiredWithoutProjectsNestedInput
    Investments?: InvestmentsUpdateOneWithoutProjectNestedInput
    ProjectProposal?: ProjectProposalUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    land_id?: StringFieldUpdateOperationsInput | string
    power_kw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusFieldUpdateOperationsInput | $Enums.SolarProjectStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Investments?: InvestmentsUncheckedUpdateOneWithoutProjectNestedInput
    ProjectProposal?: ProjectProposalUncheckedUpdateOneWithoutProjectNestedInput
  }

  export type ProjectsUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    land_id?: StringFieldUpdateOperationsInput | string
    power_kw?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    estimated_return?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumSolarProjectStatusFieldUpdateOperationsInput | $Enums.SolarProjectStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    area?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type InvestmentsCreateManyInvestorInput = {
    id?: string
    project_id: string
    value_invested: Decimal | DecimalJsLike | number | string
    invested_date?: Date | string
    owner_agree?: $Enums.Agreement
    company_agree?: $Enums.Agreement
    title?: string | null
    description?: string | null
    status?: $Enums.InvestmentStatus
  }

  export type InvestmentsUpdateWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    value_invested?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    company_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
    project?: ProjectsUpdateOneRequiredWithoutInvestmentsNestedInput
  }

  export type InvestmentsUncheckedUpdateWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    value_invested?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    company_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
  }

  export type InvestmentsUncheckedUpdateManyWithoutInvestorInput = {
    id?: StringFieldUpdateOperationsInput | string
    project_id?: StringFieldUpdateOperationsInput | string
    value_invested?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    owner_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    company_agree?: EnumAgreementFieldUpdateOperationsInput | $Enums.Agreement
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvestmentStatusFieldUpdateOperationsInput | $Enums.InvestmentStatus
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}