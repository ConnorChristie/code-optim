
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
 * Model WaitlistEntry
 * 
 */
export type WaitlistEntry = $Result.DefaultSelection<Prisma.$WaitlistEntryPayload>
/**
 * Model Hotspot
 * 
 */
export type Hotspot = $Result.DefaultSelection<Prisma.$HotspotPayload>
/**
 * Model Optimization
 * 
 */
export type Optimization = $Result.DefaultSelection<Prisma.$OptimizationPayload>
/**
 * Model OptimizationRun
 * 
 */
export type OptimizationRun = $Result.DefaultSelection<Prisma.$OptimizationRunPayload>
/**
 * Model Metric
 * 
 */
export type Metric = $Result.DefaultSelection<Prisma.$MetricPayload>
/**
 * Model Impact
 * 
 */
export type Impact = $Result.DefaultSelection<Prisma.$ImpactPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more WaitlistEntries
 * const waitlistEntries = await prisma.waitlistEntry.findMany()
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
   * // Fetch zero or more WaitlistEntries
   * const waitlistEntries = await prisma.waitlistEntry.findMany()
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
   * `prisma.waitlistEntry`: Exposes CRUD operations for the **WaitlistEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaitlistEntries
    * const waitlistEntries = await prisma.waitlistEntry.findMany()
    * ```
    */
  get waitlistEntry(): Prisma.WaitlistEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotspot`: Exposes CRUD operations for the **Hotspot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotspots
    * const hotspots = await prisma.hotspot.findMany()
    * ```
    */
  get hotspot(): Prisma.HotspotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.optimization`: Exposes CRUD operations for the **Optimization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Optimizations
    * const optimizations = await prisma.optimization.findMany()
    * ```
    */
  get optimization(): Prisma.OptimizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.optimizationRun`: Exposes CRUD operations for the **OptimizationRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OptimizationRuns
    * const optimizationRuns = await prisma.optimizationRun.findMany()
    * ```
    */
  get optimizationRun(): Prisma.OptimizationRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metric`: Exposes CRUD operations for the **Metric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metrics
    * const metrics = await prisma.metric.findMany()
    * ```
    */
  get metric(): Prisma.MetricDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.impact`: Exposes CRUD operations for the **Impact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Impacts
    * const impacts = await prisma.impact.findMany()
    * ```
    */
  get impact(): Prisma.ImpactDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    WaitlistEntry: 'WaitlistEntry',
    Hotspot: 'Hotspot',
    Optimization: 'Optimization',
    OptimizationRun: 'OptimizationRun',
    Metric: 'Metric',
    Impact: 'Impact'
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
      modelProps: "waitlistEntry" | "hotspot" | "optimization" | "optimizationRun" | "metric" | "impact"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      WaitlistEntry: {
        payload: Prisma.$WaitlistEntryPayload<ExtArgs>
        fields: Prisma.WaitlistEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaitlistEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaitlistEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>
          }
          findFirst: {
            args: Prisma.WaitlistEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaitlistEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>
          }
          findMany: {
            args: Prisma.WaitlistEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>[]
          }
          create: {
            args: Prisma.WaitlistEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>
          }
          createMany: {
            args: Prisma.WaitlistEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WaitlistEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>[]
          }
          delete: {
            args: Prisma.WaitlistEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>
          }
          update: {
            args: Prisma.WaitlistEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>
          }
          deleteMany: {
            args: Prisma.WaitlistEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaitlistEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WaitlistEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>[]
          }
          upsert: {
            args: Prisma.WaitlistEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaitlistEntryPayload>
          }
          aggregate: {
            args: Prisma.WaitlistEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaitlistEntry>
          }
          groupBy: {
            args: Prisma.WaitlistEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaitlistEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.WaitlistEntryCountArgs<ExtArgs>
            result: $Utils.Optional<WaitlistEntryCountAggregateOutputType> | number
          }
        }
      }
      Hotspot: {
        payload: Prisma.$HotspotPayload<ExtArgs>
        fields: Prisma.HotspotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotspotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotspotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>
          }
          findFirst: {
            args: Prisma.HotspotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotspotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>
          }
          findMany: {
            args: Prisma.HotspotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>[]
          }
          create: {
            args: Prisma.HotspotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>
          }
          createMany: {
            args: Prisma.HotspotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HotspotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>[]
          }
          delete: {
            args: Prisma.HotspotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>
          }
          update: {
            args: Prisma.HotspotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>
          }
          deleteMany: {
            args: Prisma.HotspotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotspotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HotspotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>[]
          }
          upsert: {
            args: Prisma.HotspotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotspotPayload>
          }
          aggregate: {
            args: Prisma.HotspotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotspot>
          }
          groupBy: {
            args: Prisma.HotspotGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotspotGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotspotCountArgs<ExtArgs>
            result: $Utils.Optional<HotspotCountAggregateOutputType> | number
          }
        }
      }
      Optimization: {
        payload: Prisma.$OptimizationPayload<ExtArgs>
        fields: Prisma.OptimizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptimizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptimizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationPayload>
          }
          findFirst: {
            args: Prisma.OptimizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptimizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationPayload>
          }
          findMany: {
            args: Prisma.OptimizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationPayload>[]
          }
          create: {
            args: Prisma.OptimizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationPayload>
          }
          createMany: {
            args: Prisma.OptimizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptimizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationPayload>[]
          }
          delete: {
            args: Prisma.OptimizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationPayload>
          }
          update: {
            args: Prisma.OptimizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationPayload>
          }
          deleteMany: {
            args: Prisma.OptimizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptimizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OptimizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationPayload>[]
          }
          upsert: {
            args: Prisma.OptimizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationPayload>
          }
          aggregate: {
            args: Prisma.OptimizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOptimization>
          }
          groupBy: {
            args: Prisma.OptimizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptimizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptimizationCountArgs<ExtArgs>
            result: $Utils.Optional<OptimizationCountAggregateOutputType> | number
          }
        }
      }
      OptimizationRun: {
        payload: Prisma.$OptimizationRunPayload<ExtArgs>
        fields: Prisma.OptimizationRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptimizationRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptimizationRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationRunPayload>
          }
          findFirst: {
            args: Prisma.OptimizationRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptimizationRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationRunPayload>
          }
          findMany: {
            args: Prisma.OptimizationRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationRunPayload>[]
          }
          create: {
            args: Prisma.OptimizationRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationRunPayload>
          }
          createMany: {
            args: Prisma.OptimizationRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptimizationRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationRunPayload>[]
          }
          delete: {
            args: Prisma.OptimizationRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationRunPayload>
          }
          update: {
            args: Prisma.OptimizationRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationRunPayload>
          }
          deleteMany: {
            args: Prisma.OptimizationRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptimizationRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OptimizationRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationRunPayload>[]
          }
          upsert: {
            args: Prisma.OptimizationRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptimizationRunPayload>
          }
          aggregate: {
            args: Prisma.OptimizationRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOptimizationRun>
          }
          groupBy: {
            args: Prisma.OptimizationRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptimizationRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptimizationRunCountArgs<ExtArgs>
            result: $Utils.Optional<OptimizationRunCountAggregateOutputType> | number
          }
        }
      }
      Metric: {
        payload: Prisma.$MetricPayload<ExtArgs>
        fields: Prisma.MetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findFirst: {
            args: Prisma.MetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          findMany: {
            args: Prisma.MetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          create: {
            args: Prisma.MetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          createMany: {
            args: Prisma.MetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          delete: {
            args: Prisma.MetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          update: {
            args: Prisma.MetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          deleteMany: {
            args: Prisma.MetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>[]
          }
          upsert: {
            args: Prisma.MetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricPayload>
          }
          aggregate: {
            args: Prisma.MetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetric>
          }
          groupBy: {
            args: Prisma.MetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricCountArgs<ExtArgs>
            result: $Utils.Optional<MetricCountAggregateOutputType> | number
          }
        }
      }
      Impact: {
        payload: Prisma.$ImpactPayload<ExtArgs>
        fields: Prisma.ImpactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImpactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImpactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactPayload>
          }
          findFirst: {
            args: Prisma.ImpactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImpactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactPayload>
          }
          findMany: {
            args: Prisma.ImpactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactPayload>[]
          }
          create: {
            args: Prisma.ImpactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactPayload>
          }
          createMany: {
            args: Prisma.ImpactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImpactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactPayload>[]
          }
          delete: {
            args: Prisma.ImpactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactPayload>
          }
          update: {
            args: Prisma.ImpactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactPayload>
          }
          deleteMany: {
            args: Prisma.ImpactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImpactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImpactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactPayload>[]
          }
          upsert: {
            args: Prisma.ImpactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImpactPayload>
          }
          aggregate: {
            args: Prisma.ImpactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImpact>
          }
          groupBy: {
            args: Prisma.ImpactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImpactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImpactCountArgs<ExtArgs>
            result: $Utils.Optional<ImpactCountAggregateOutputType> | number
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
    waitlistEntry?: WaitlistEntryOmit
    hotspot?: HotspotOmit
    optimization?: OptimizationOmit
    optimizationRun?: OptimizationRunOmit
    metric?: MetricOmit
    impact?: ImpactOmit
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
   * Count Type HotspotCountOutputType
   */

  export type HotspotCountOutputType = {
    optimizations: number
  }

  export type HotspotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    optimizations?: boolean | HotspotCountOutputTypeCountOptimizationsArgs
  }

  // Custom InputTypes
  /**
   * HotspotCountOutputType without action
   */
  export type HotspotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotspotCountOutputType
     */
    select?: HotspotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HotspotCountOutputType without action
   */
  export type HotspotCountOutputTypeCountOptimizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptimizationWhereInput
  }


  /**
   * Count Type OptimizationCountOutputType
   */

  export type OptimizationCountOutputType = {
    optimizationRuns: number
  }

  export type OptimizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    optimizationRuns?: boolean | OptimizationCountOutputTypeCountOptimizationRunsArgs
  }

  // Custom InputTypes
  /**
   * OptimizationCountOutputType without action
   */
  export type OptimizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptimizationCountOutputType
     */
    select?: OptimizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OptimizationCountOutputType without action
   */
  export type OptimizationCountOutputTypeCountOptimizationRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptimizationRunWhereInput
  }


  /**
   * Count Type OptimizationRunCountOutputType
   */

  export type OptimizationRunCountOutputType = {
    optimizations: number
  }

  export type OptimizationRunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    optimizations?: boolean | OptimizationRunCountOutputTypeCountOptimizationsArgs
  }

  // Custom InputTypes
  /**
   * OptimizationRunCountOutputType without action
   */
  export type OptimizationRunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptimizationRunCountOutputType
     */
    select?: OptimizationRunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OptimizationRunCountOutputType without action
   */
  export type OptimizationRunCountOutputTypeCountOptimizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptimizationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model WaitlistEntry
   */

  export type AggregateWaitlistEntry = {
    _count: WaitlistEntryCountAggregateOutputType | null
    _min: WaitlistEntryMinAggregateOutputType | null
    _max: WaitlistEntryMaxAggregateOutputType | null
  }

  export type WaitlistEntryMinAggregateOutputType = {
    id: string | null
    email: string | null
    githubUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WaitlistEntryMaxAggregateOutputType = {
    id: string | null
    email: string | null
    githubUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WaitlistEntryCountAggregateOutputType = {
    id: number
    email: number
    githubUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WaitlistEntryMinAggregateInputType = {
    id?: true
    email?: true
    githubUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WaitlistEntryMaxAggregateInputType = {
    id?: true
    email?: true
    githubUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WaitlistEntryCountAggregateInputType = {
    id?: true
    email?: true
    githubUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WaitlistEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaitlistEntry to aggregate.
     */
    where?: WaitlistEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaitlistEntries to fetch.
     */
    orderBy?: WaitlistEntryOrderByWithRelationInput | WaitlistEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaitlistEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaitlistEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaitlistEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaitlistEntries
    **/
    _count?: true | WaitlistEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaitlistEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaitlistEntryMaxAggregateInputType
  }

  export type GetWaitlistEntryAggregateType<T extends WaitlistEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateWaitlistEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaitlistEntry[P]>
      : GetScalarType<T[P], AggregateWaitlistEntry[P]>
  }




  export type WaitlistEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaitlistEntryWhereInput
    orderBy?: WaitlistEntryOrderByWithAggregationInput | WaitlistEntryOrderByWithAggregationInput[]
    by: WaitlistEntryScalarFieldEnum[] | WaitlistEntryScalarFieldEnum
    having?: WaitlistEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaitlistEntryCountAggregateInputType | true
    _min?: WaitlistEntryMinAggregateInputType
    _max?: WaitlistEntryMaxAggregateInputType
  }

  export type WaitlistEntryGroupByOutputType = {
    id: string
    email: string
    githubUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: WaitlistEntryCountAggregateOutputType | null
    _min: WaitlistEntryMinAggregateOutputType | null
    _max: WaitlistEntryMaxAggregateOutputType | null
  }

  type GetWaitlistEntryGroupByPayload<T extends WaitlistEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaitlistEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaitlistEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaitlistEntryGroupByOutputType[P]>
            : GetScalarType<T[P], WaitlistEntryGroupByOutputType[P]>
        }
      >
    >


  export type WaitlistEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    githubUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["waitlistEntry"]>

  export type WaitlistEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    githubUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["waitlistEntry"]>

  export type WaitlistEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    githubUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["waitlistEntry"]>

  export type WaitlistEntrySelectScalar = {
    id?: boolean
    email?: boolean
    githubUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WaitlistEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "githubUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["waitlistEntry"]>

  export type $WaitlistEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaitlistEntry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      githubUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["waitlistEntry"]>
    composites: {}
  }

  type WaitlistEntryGetPayload<S extends boolean | null | undefined | WaitlistEntryDefaultArgs> = $Result.GetResult<Prisma.$WaitlistEntryPayload, S>

  type WaitlistEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaitlistEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaitlistEntryCountAggregateInputType | true
    }

  export interface WaitlistEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaitlistEntry'], meta: { name: 'WaitlistEntry' } }
    /**
     * Find zero or one WaitlistEntry that matches the filter.
     * @param {WaitlistEntryFindUniqueArgs} args - Arguments to find a WaitlistEntry
     * @example
     * // Get one WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaitlistEntryFindUniqueArgs>(args: SelectSubset<T, WaitlistEntryFindUniqueArgs<ExtArgs>>): Prisma__WaitlistEntryClient<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaitlistEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaitlistEntryFindUniqueOrThrowArgs} args - Arguments to find a WaitlistEntry
     * @example
     * // Get one WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaitlistEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, WaitlistEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaitlistEntryClient<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaitlistEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistEntryFindFirstArgs} args - Arguments to find a WaitlistEntry
     * @example
     * // Get one WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaitlistEntryFindFirstArgs>(args?: SelectSubset<T, WaitlistEntryFindFirstArgs<ExtArgs>>): Prisma__WaitlistEntryClient<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaitlistEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistEntryFindFirstOrThrowArgs} args - Arguments to find a WaitlistEntry
     * @example
     * // Get one WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaitlistEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, WaitlistEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaitlistEntryClient<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaitlistEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaitlistEntries
     * const waitlistEntries = await prisma.waitlistEntry.findMany()
     * 
     * // Get first 10 WaitlistEntries
     * const waitlistEntries = await prisma.waitlistEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waitlistEntryWithIdOnly = await prisma.waitlistEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaitlistEntryFindManyArgs>(args?: SelectSubset<T, WaitlistEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaitlistEntry.
     * @param {WaitlistEntryCreateArgs} args - Arguments to create a WaitlistEntry.
     * @example
     * // Create one WaitlistEntry
     * const WaitlistEntry = await prisma.waitlistEntry.create({
     *   data: {
     *     // ... data to create a WaitlistEntry
     *   }
     * })
     * 
     */
    create<T extends WaitlistEntryCreateArgs>(args: SelectSubset<T, WaitlistEntryCreateArgs<ExtArgs>>): Prisma__WaitlistEntryClient<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaitlistEntries.
     * @param {WaitlistEntryCreateManyArgs} args - Arguments to create many WaitlistEntries.
     * @example
     * // Create many WaitlistEntries
     * const waitlistEntry = await prisma.waitlistEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaitlistEntryCreateManyArgs>(args?: SelectSubset<T, WaitlistEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WaitlistEntries and returns the data saved in the database.
     * @param {WaitlistEntryCreateManyAndReturnArgs} args - Arguments to create many WaitlistEntries.
     * @example
     * // Create many WaitlistEntries
     * const waitlistEntry = await prisma.waitlistEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WaitlistEntries and only return the `id`
     * const waitlistEntryWithIdOnly = await prisma.waitlistEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WaitlistEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, WaitlistEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WaitlistEntry.
     * @param {WaitlistEntryDeleteArgs} args - Arguments to delete one WaitlistEntry.
     * @example
     * // Delete one WaitlistEntry
     * const WaitlistEntry = await prisma.waitlistEntry.delete({
     *   where: {
     *     // ... filter to delete one WaitlistEntry
     *   }
     * })
     * 
     */
    delete<T extends WaitlistEntryDeleteArgs>(args: SelectSubset<T, WaitlistEntryDeleteArgs<ExtArgs>>): Prisma__WaitlistEntryClient<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaitlistEntry.
     * @param {WaitlistEntryUpdateArgs} args - Arguments to update one WaitlistEntry.
     * @example
     * // Update one WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaitlistEntryUpdateArgs>(args: SelectSubset<T, WaitlistEntryUpdateArgs<ExtArgs>>): Prisma__WaitlistEntryClient<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaitlistEntries.
     * @param {WaitlistEntryDeleteManyArgs} args - Arguments to filter WaitlistEntries to delete.
     * @example
     * // Delete a few WaitlistEntries
     * const { count } = await prisma.waitlistEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaitlistEntryDeleteManyArgs>(args?: SelectSubset<T, WaitlistEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaitlistEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaitlistEntries
     * const waitlistEntry = await prisma.waitlistEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaitlistEntryUpdateManyArgs>(args: SelectSubset<T, WaitlistEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaitlistEntries and returns the data updated in the database.
     * @param {WaitlistEntryUpdateManyAndReturnArgs} args - Arguments to update many WaitlistEntries.
     * @example
     * // Update many WaitlistEntries
     * const waitlistEntry = await prisma.waitlistEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WaitlistEntries and only return the `id`
     * const waitlistEntryWithIdOnly = await prisma.waitlistEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends WaitlistEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, WaitlistEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WaitlistEntry.
     * @param {WaitlistEntryUpsertArgs} args - Arguments to update or create a WaitlistEntry.
     * @example
     * // Update or create a WaitlistEntry
     * const waitlistEntry = await prisma.waitlistEntry.upsert({
     *   create: {
     *     // ... data to create a WaitlistEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaitlistEntry we want to update
     *   }
     * })
     */
    upsert<T extends WaitlistEntryUpsertArgs>(args: SelectSubset<T, WaitlistEntryUpsertArgs<ExtArgs>>): Prisma__WaitlistEntryClient<$Result.GetResult<Prisma.$WaitlistEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WaitlistEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistEntryCountArgs} args - Arguments to filter WaitlistEntries to count.
     * @example
     * // Count the number of WaitlistEntries
     * const count = await prisma.waitlistEntry.count({
     *   where: {
     *     // ... the filter for the WaitlistEntries we want to count
     *   }
     * })
    **/
    count<T extends WaitlistEntryCountArgs>(
      args?: Subset<T, WaitlistEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaitlistEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaitlistEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaitlistEntryAggregateArgs>(args: Subset<T, WaitlistEntryAggregateArgs>): Prisma.PrismaPromise<GetWaitlistEntryAggregateType<T>>

    /**
     * Group by WaitlistEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaitlistEntryGroupByArgs} args - Group by arguments.
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
      T extends WaitlistEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaitlistEntryGroupByArgs['orderBy'] }
        : { orderBy?: WaitlistEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaitlistEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaitlistEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaitlistEntry model
   */
  readonly fields: WaitlistEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaitlistEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaitlistEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the WaitlistEntry model
   */
  interface WaitlistEntryFieldRefs {
    readonly id: FieldRef<"WaitlistEntry", 'String'>
    readonly email: FieldRef<"WaitlistEntry", 'String'>
    readonly githubUrl: FieldRef<"WaitlistEntry", 'String'>
    readonly createdAt: FieldRef<"WaitlistEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"WaitlistEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WaitlistEntry findUnique
   */
  export type WaitlistEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * Filter, which WaitlistEntry to fetch.
     */
    where: WaitlistEntryWhereUniqueInput
  }

  /**
   * WaitlistEntry findUniqueOrThrow
   */
  export type WaitlistEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * Filter, which WaitlistEntry to fetch.
     */
    where: WaitlistEntryWhereUniqueInput
  }

  /**
   * WaitlistEntry findFirst
   */
  export type WaitlistEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * Filter, which WaitlistEntry to fetch.
     */
    where?: WaitlistEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaitlistEntries to fetch.
     */
    orderBy?: WaitlistEntryOrderByWithRelationInput | WaitlistEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaitlistEntries.
     */
    cursor?: WaitlistEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaitlistEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaitlistEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaitlistEntries.
     */
    distinct?: WaitlistEntryScalarFieldEnum | WaitlistEntryScalarFieldEnum[]
  }

  /**
   * WaitlistEntry findFirstOrThrow
   */
  export type WaitlistEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * Filter, which WaitlistEntry to fetch.
     */
    where?: WaitlistEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaitlistEntries to fetch.
     */
    orderBy?: WaitlistEntryOrderByWithRelationInput | WaitlistEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaitlistEntries.
     */
    cursor?: WaitlistEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaitlistEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaitlistEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaitlistEntries.
     */
    distinct?: WaitlistEntryScalarFieldEnum | WaitlistEntryScalarFieldEnum[]
  }

  /**
   * WaitlistEntry findMany
   */
  export type WaitlistEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * Filter, which WaitlistEntries to fetch.
     */
    where?: WaitlistEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaitlistEntries to fetch.
     */
    orderBy?: WaitlistEntryOrderByWithRelationInput | WaitlistEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaitlistEntries.
     */
    cursor?: WaitlistEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaitlistEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaitlistEntries.
     */
    skip?: number
    distinct?: WaitlistEntryScalarFieldEnum | WaitlistEntryScalarFieldEnum[]
  }

  /**
   * WaitlistEntry create
   */
  export type WaitlistEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * The data needed to create a WaitlistEntry.
     */
    data: XOR<WaitlistEntryCreateInput, WaitlistEntryUncheckedCreateInput>
  }

  /**
   * WaitlistEntry createMany
   */
  export type WaitlistEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaitlistEntries.
     */
    data: WaitlistEntryCreateManyInput | WaitlistEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaitlistEntry createManyAndReturn
   */
  export type WaitlistEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * The data used to create many WaitlistEntries.
     */
    data: WaitlistEntryCreateManyInput | WaitlistEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WaitlistEntry update
   */
  export type WaitlistEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * The data needed to update a WaitlistEntry.
     */
    data: XOR<WaitlistEntryUpdateInput, WaitlistEntryUncheckedUpdateInput>
    /**
     * Choose, which WaitlistEntry to update.
     */
    where: WaitlistEntryWhereUniqueInput
  }

  /**
   * WaitlistEntry updateMany
   */
  export type WaitlistEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaitlistEntries.
     */
    data: XOR<WaitlistEntryUpdateManyMutationInput, WaitlistEntryUncheckedUpdateManyInput>
    /**
     * Filter which WaitlistEntries to update
     */
    where?: WaitlistEntryWhereInput
    /**
     * Limit how many WaitlistEntries to update.
     */
    limit?: number
  }

  /**
   * WaitlistEntry updateManyAndReturn
   */
  export type WaitlistEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * The data used to update WaitlistEntries.
     */
    data: XOR<WaitlistEntryUpdateManyMutationInput, WaitlistEntryUncheckedUpdateManyInput>
    /**
     * Filter which WaitlistEntries to update
     */
    where?: WaitlistEntryWhereInput
    /**
     * Limit how many WaitlistEntries to update.
     */
    limit?: number
  }

  /**
   * WaitlistEntry upsert
   */
  export type WaitlistEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * The filter to search for the WaitlistEntry to update in case it exists.
     */
    where: WaitlistEntryWhereUniqueInput
    /**
     * In case the WaitlistEntry found by the `where` argument doesn't exist, create a new WaitlistEntry with this data.
     */
    create: XOR<WaitlistEntryCreateInput, WaitlistEntryUncheckedCreateInput>
    /**
     * In case the WaitlistEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaitlistEntryUpdateInput, WaitlistEntryUncheckedUpdateInput>
  }

  /**
   * WaitlistEntry delete
   */
  export type WaitlistEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
    /**
     * Filter which WaitlistEntry to delete.
     */
    where: WaitlistEntryWhereUniqueInput
  }

  /**
   * WaitlistEntry deleteMany
   */
  export type WaitlistEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaitlistEntries to delete
     */
    where?: WaitlistEntryWhereInput
    /**
     * Limit how many WaitlistEntries to delete.
     */
    limit?: number
  }

  /**
   * WaitlistEntry without action
   */
  export type WaitlistEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaitlistEntry
     */
    select?: WaitlistEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaitlistEntry
     */
    omit?: WaitlistEntryOmit<ExtArgs> | null
  }


  /**
   * Model Hotspot
   */

  export type AggregateHotspot = {
    _count: HotspotCountAggregateOutputType | null
    _avg: HotspotAvgAggregateOutputType | null
    _sum: HotspotSumAggregateOutputType | null
    _min: HotspotMinAggregateOutputType | null
    _max: HotspotMaxAggregateOutputType | null
  }

  export type HotspotAvgAggregateOutputType = {
    lineNumber: number | null
    severity: number | null
    impact: number | null
    estimatedSavings: number | null
  }

  export type HotspotSumAggregateOutputType = {
    lineNumber: number | null
    severity: number | null
    impact: number | null
    estimatedSavings: number | null
  }

  export type HotspotMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    filePath: string | null
    lineNumber: number | null
    category: string | null
    priority: string | null
    status: string | null
    severity: number | null
    impact: number | null
    estimatedSavings: number | null
    repoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    resolvedAt: Date | null
  }

  export type HotspotMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    filePath: string | null
    lineNumber: number | null
    category: string | null
    priority: string | null
    status: string | null
    severity: number | null
    impact: number | null
    estimatedSavings: number | null
    repoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    resolvedAt: Date | null
  }

  export type HotspotCountAggregateOutputType = {
    id: number
    title: number
    description: number
    filePath: number
    lineNumber: number
    category: number
    priority: number
    status: number
    severity: number
    impact: number
    estimatedSavings: number
    repoUrl: number
    createdAt: number
    updatedAt: number
    resolvedAt: number
    _all: number
  }


  export type HotspotAvgAggregateInputType = {
    lineNumber?: true
    severity?: true
    impact?: true
    estimatedSavings?: true
  }

  export type HotspotSumAggregateInputType = {
    lineNumber?: true
    severity?: true
    impact?: true
    estimatedSavings?: true
  }

  export type HotspotMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    filePath?: true
    lineNumber?: true
    category?: true
    priority?: true
    status?: true
    severity?: true
    impact?: true
    estimatedSavings?: true
    repoUrl?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
  }

  export type HotspotMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    filePath?: true
    lineNumber?: true
    category?: true
    priority?: true
    status?: true
    severity?: true
    impact?: true
    estimatedSavings?: true
    repoUrl?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
  }

  export type HotspotCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    filePath?: true
    lineNumber?: true
    category?: true
    priority?: true
    status?: true
    severity?: true
    impact?: true
    estimatedSavings?: true
    repoUrl?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
    _all?: true
  }

  export type HotspotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotspot to aggregate.
     */
    where?: HotspotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotspots to fetch.
     */
    orderBy?: HotspotOrderByWithRelationInput | HotspotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotspotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotspots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotspots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hotspots
    **/
    _count?: true | HotspotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotspotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotspotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotspotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotspotMaxAggregateInputType
  }

  export type GetHotspotAggregateType<T extends HotspotAggregateArgs> = {
        [P in keyof T & keyof AggregateHotspot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotspot[P]>
      : GetScalarType<T[P], AggregateHotspot[P]>
  }




  export type HotspotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotspotWhereInput
    orderBy?: HotspotOrderByWithAggregationInput | HotspotOrderByWithAggregationInput[]
    by: HotspotScalarFieldEnum[] | HotspotScalarFieldEnum
    having?: HotspotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotspotCountAggregateInputType | true
    _avg?: HotspotAvgAggregateInputType
    _sum?: HotspotSumAggregateInputType
    _min?: HotspotMinAggregateInputType
    _max?: HotspotMaxAggregateInputType
  }

  export type HotspotGroupByOutputType = {
    id: string
    title: string
    description: string
    filePath: string
    lineNumber: number | null
    category: string
    priority: string
    status: string
    severity: number
    impact: number
    estimatedSavings: number | null
    repoUrl: string | null
    createdAt: Date
    updatedAt: Date
    resolvedAt: Date | null
    _count: HotspotCountAggregateOutputType | null
    _avg: HotspotAvgAggregateOutputType | null
    _sum: HotspotSumAggregateOutputType | null
    _min: HotspotMinAggregateOutputType | null
    _max: HotspotMaxAggregateOutputType | null
  }

  type GetHotspotGroupByPayload<T extends HotspotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotspotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotspotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotspotGroupByOutputType[P]>
            : GetScalarType<T[P], HotspotGroupByOutputType[P]>
        }
      >
    >


  export type HotspotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    filePath?: boolean
    lineNumber?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    severity?: boolean
    impact?: boolean
    estimatedSavings?: boolean
    repoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
    optimizations?: boolean | Hotspot$optimizationsArgs<ExtArgs>
    _count?: boolean | HotspotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotspot"]>

  export type HotspotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    filePath?: boolean
    lineNumber?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    severity?: boolean
    impact?: boolean
    estimatedSavings?: boolean
    repoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
  }, ExtArgs["result"]["hotspot"]>

  export type HotspotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    filePath?: boolean
    lineNumber?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    severity?: boolean
    impact?: boolean
    estimatedSavings?: boolean
    repoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
  }, ExtArgs["result"]["hotspot"]>

  export type HotspotSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    filePath?: boolean
    lineNumber?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    severity?: boolean
    impact?: boolean
    estimatedSavings?: boolean
    repoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
  }

  export type HotspotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "filePath" | "lineNumber" | "category" | "priority" | "status" | "severity" | "impact" | "estimatedSavings" | "repoUrl" | "createdAt" | "updatedAt" | "resolvedAt", ExtArgs["result"]["hotspot"]>
  export type HotspotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    optimizations?: boolean | Hotspot$optimizationsArgs<ExtArgs>
    _count?: boolean | HotspotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HotspotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HotspotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HotspotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hotspot"
    objects: {
      optimizations: Prisma.$OptimizationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      filePath: string
      lineNumber: number | null
      category: string
      priority: string
      status: string
      severity: number
      impact: number
      estimatedSavings: number | null
      repoUrl: string | null
      createdAt: Date
      updatedAt: Date
      resolvedAt: Date | null
    }, ExtArgs["result"]["hotspot"]>
    composites: {}
  }

  type HotspotGetPayload<S extends boolean | null | undefined | HotspotDefaultArgs> = $Result.GetResult<Prisma.$HotspotPayload, S>

  type HotspotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotspotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotspotCountAggregateInputType | true
    }

  export interface HotspotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hotspot'], meta: { name: 'Hotspot' } }
    /**
     * Find zero or one Hotspot that matches the filter.
     * @param {HotspotFindUniqueArgs} args - Arguments to find a Hotspot
     * @example
     * // Get one Hotspot
     * const hotspot = await prisma.hotspot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotspotFindUniqueArgs>(args: SelectSubset<T, HotspotFindUniqueArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hotspot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotspotFindUniqueOrThrowArgs} args - Arguments to find a Hotspot
     * @example
     * // Get one Hotspot
     * const hotspot = await prisma.hotspot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotspotFindUniqueOrThrowArgs>(args: SelectSubset<T, HotspotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotspot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotspotFindFirstArgs} args - Arguments to find a Hotspot
     * @example
     * // Get one Hotspot
     * const hotspot = await prisma.hotspot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotspotFindFirstArgs>(args?: SelectSubset<T, HotspotFindFirstArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotspot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotspotFindFirstOrThrowArgs} args - Arguments to find a Hotspot
     * @example
     * // Get one Hotspot
     * const hotspot = await prisma.hotspot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotspotFindFirstOrThrowArgs>(args?: SelectSubset<T, HotspotFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hotspots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotspotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotspots
     * const hotspots = await prisma.hotspot.findMany()
     * 
     * // Get first 10 Hotspots
     * const hotspots = await prisma.hotspot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotspotWithIdOnly = await prisma.hotspot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotspotFindManyArgs>(args?: SelectSubset<T, HotspotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hotspot.
     * @param {HotspotCreateArgs} args - Arguments to create a Hotspot.
     * @example
     * // Create one Hotspot
     * const Hotspot = await prisma.hotspot.create({
     *   data: {
     *     // ... data to create a Hotspot
     *   }
     * })
     * 
     */
    create<T extends HotspotCreateArgs>(args: SelectSubset<T, HotspotCreateArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hotspots.
     * @param {HotspotCreateManyArgs} args - Arguments to create many Hotspots.
     * @example
     * // Create many Hotspots
     * const hotspot = await prisma.hotspot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotspotCreateManyArgs>(args?: SelectSubset<T, HotspotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hotspots and returns the data saved in the database.
     * @param {HotspotCreateManyAndReturnArgs} args - Arguments to create many Hotspots.
     * @example
     * // Create many Hotspots
     * const hotspot = await prisma.hotspot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hotspots and only return the `id`
     * const hotspotWithIdOnly = await prisma.hotspot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HotspotCreateManyAndReturnArgs>(args?: SelectSubset<T, HotspotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hotspot.
     * @param {HotspotDeleteArgs} args - Arguments to delete one Hotspot.
     * @example
     * // Delete one Hotspot
     * const Hotspot = await prisma.hotspot.delete({
     *   where: {
     *     // ... filter to delete one Hotspot
     *   }
     * })
     * 
     */
    delete<T extends HotspotDeleteArgs>(args: SelectSubset<T, HotspotDeleteArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hotspot.
     * @param {HotspotUpdateArgs} args - Arguments to update one Hotspot.
     * @example
     * // Update one Hotspot
     * const hotspot = await prisma.hotspot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotspotUpdateArgs>(args: SelectSubset<T, HotspotUpdateArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hotspots.
     * @param {HotspotDeleteManyArgs} args - Arguments to filter Hotspots to delete.
     * @example
     * // Delete a few Hotspots
     * const { count } = await prisma.hotspot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotspotDeleteManyArgs>(args?: SelectSubset<T, HotspotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotspots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotspotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotspots
     * const hotspot = await prisma.hotspot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotspotUpdateManyArgs>(args: SelectSubset<T, HotspotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotspots and returns the data updated in the database.
     * @param {HotspotUpdateManyAndReturnArgs} args - Arguments to update many Hotspots.
     * @example
     * // Update many Hotspots
     * const hotspot = await prisma.hotspot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hotspots and only return the `id`
     * const hotspotWithIdOnly = await prisma.hotspot.updateManyAndReturn({
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
    updateManyAndReturn<T extends HotspotUpdateManyAndReturnArgs>(args: SelectSubset<T, HotspotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hotspot.
     * @param {HotspotUpsertArgs} args - Arguments to update or create a Hotspot.
     * @example
     * // Update or create a Hotspot
     * const hotspot = await prisma.hotspot.upsert({
     *   create: {
     *     // ... data to create a Hotspot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotspot we want to update
     *   }
     * })
     */
    upsert<T extends HotspotUpsertArgs>(args: SelectSubset<T, HotspotUpsertArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hotspots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotspotCountArgs} args - Arguments to filter Hotspots to count.
     * @example
     * // Count the number of Hotspots
     * const count = await prisma.hotspot.count({
     *   where: {
     *     // ... the filter for the Hotspots we want to count
     *   }
     * })
    **/
    count<T extends HotspotCountArgs>(
      args?: Subset<T, HotspotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotspotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotspot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotspotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HotspotAggregateArgs>(args: Subset<T, HotspotAggregateArgs>): Prisma.PrismaPromise<GetHotspotAggregateType<T>>

    /**
     * Group by Hotspot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotspotGroupByArgs} args - Group by arguments.
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
      T extends HotspotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotspotGroupByArgs['orderBy'] }
        : { orderBy?: HotspotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HotspotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotspotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hotspot model
   */
  readonly fields: HotspotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hotspot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotspotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    optimizations<T extends Hotspot$optimizationsArgs<ExtArgs> = {}>(args?: Subset<T, Hotspot$optimizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptimizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hotspot model
   */
  interface HotspotFieldRefs {
    readonly id: FieldRef<"Hotspot", 'String'>
    readonly title: FieldRef<"Hotspot", 'String'>
    readonly description: FieldRef<"Hotspot", 'String'>
    readonly filePath: FieldRef<"Hotspot", 'String'>
    readonly lineNumber: FieldRef<"Hotspot", 'Int'>
    readonly category: FieldRef<"Hotspot", 'String'>
    readonly priority: FieldRef<"Hotspot", 'String'>
    readonly status: FieldRef<"Hotspot", 'String'>
    readonly severity: FieldRef<"Hotspot", 'Float'>
    readonly impact: FieldRef<"Hotspot", 'Float'>
    readonly estimatedSavings: FieldRef<"Hotspot", 'Float'>
    readonly repoUrl: FieldRef<"Hotspot", 'String'>
    readonly createdAt: FieldRef<"Hotspot", 'DateTime'>
    readonly updatedAt: FieldRef<"Hotspot", 'DateTime'>
    readonly resolvedAt: FieldRef<"Hotspot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hotspot findUnique
   */
  export type HotspotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * Filter, which Hotspot to fetch.
     */
    where: HotspotWhereUniqueInput
  }

  /**
   * Hotspot findUniqueOrThrow
   */
  export type HotspotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * Filter, which Hotspot to fetch.
     */
    where: HotspotWhereUniqueInput
  }

  /**
   * Hotspot findFirst
   */
  export type HotspotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * Filter, which Hotspot to fetch.
     */
    where?: HotspotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotspots to fetch.
     */
    orderBy?: HotspotOrderByWithRelationInput | HotspotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotspots.
     */
    cursor?: HotspotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotspots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotspots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotspots.
     */
    distinct?: HotspotScalarFieldEnum | HotspotScalarFieldEnum[]
  }

  /**
   * Hotspot findFirstOrThrow
   */
  export type HotspotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * Filter, which Hotspot to fetch.
     */
    where?: HotspotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotspots to fetch.
     */
    orderBy?: HotspotOrderByWithRelationInput | HotspotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotspots.
     */
    cursor?: HotspotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotspots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotspots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotspots.
     */
    distinct?: HotspotScalarFieldEnum | HotspotScalarFieldEnum[]
  }

  /**
   * Hotspot findMany
   */
  export type HotspotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * Filter, which Hotspots to fetch.
     */
    where?: HotspotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotspots to fetch.
     */
    orderBy?: HotspotOrderByWithRelationInput | HotspotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hotspots.
     */
    cursor?: HotspotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotspots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotspots.
     */
    skip?: number
    distinct?: HotspotScalarFieldEnum | HotspotScalarFieldEnum[]
  }

  /**
   * Hotspot create
   */
  export type HotspotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * The data needed to create a Hotspot.
     */
    data: XOR<HotspotCreateInput, HotspotUncheckedCreateInput>
  }

  /**
   * Hotspot createMany
   */
  export type HotspotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hotspots.
     */
    data: HotspotCreateManyInput | HotspotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotspot createManyAndReturn
   */
  export type HotspotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * The data used to create many Hotspots.
     */
    data: HotspotCreateManyInput | HotspotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotspot update
   */
  export type HotspotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * The data needed to update a Hotspot.
     */
    data: XOR<HotspotUpdateInput, HotspotUncheckedUpdateInput>
    /**
     * Choose, which Hotspot to update.
     */
    where: HotspotWhereUniqueInput
  }

  /**
   * Hotspot updateMany
   */
  export type HotspotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hotspots.
     */
    data: XOR<HotspotUpdateManyMutationInput, HotspotUncheckedUpdateManyInput>
    /**
     * Filter which Hotspots to update
     */
    where?: HotspotWhereInput
    /**
     * Limit how many Hotspots to update.
     */
    limit?: number
  }

  /**
   * Hotspot updateManyAndReturn
   */
  export type HotspotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * The data used to update Hotspots.
     */
    data: XOR<HotspotUpdateManyMutationInput, HotspotUncheckedUpdateManyInput>
    /**
     * Filter which Hotspots to update
     */
    where?: HotspotWhereInput
    /**
     * Limit how many Hotspots to update.
     */
    limit?: number
  }

  /**
   * Hotspot upsert
   */
  export type HotspotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * The filter to search for the Hotspot to update in case it exists.
     */
    where: HotspotWhereUniqueInput
    /**
     * In case the Hotspot found by the `where` argument doesn't exist, create a new Hotspot with this data.
     */
    create: XOR<HotspotCreateInput, HotspotUncheckedCreateInput>
    /**
     * In case the Hotspot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotspotUpdateInput, HotspotUncheckedUpdateInput>
  }

  /**
   * Hotspot delete
   */
  export type HotspotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    /**
     * Filter which Hotspot to delete.
     */
    where: HotspotWhereUniqueInput
  }

  /**
   * Hotspot deleteMany
   */
  export type HotspotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotspots to delete
     */
    where?: HotspotWhereInput
    /**
     * Limit how many Hotspots to delete.
     */
    limit?: number
  }

  /**
   * Hotspot.optimizations
   */
  export type Hotspot$optimizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optimization
     */
    select?: OptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optimization
     */
    omit?: OptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationInclude<ExtArgs> | null
    where?: OptimizationWhereInput
    orderBy?: OptimizationOrderByWithRelationInput | OptimizationOrderByWithRelationInput[]
    cursor?: OptimizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptimizationScalarFieldEnum | OptimizationScalarFieldEnum[]
  }

  /**
   * Hotspot without action
   */
  export type HotspotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
  }


  /**
   * Model Optimization
   */

  export type AggregateOptimization = {
    _count: OptimizationCountAggregateOutputType | null
    _avg: OptimizationAvgAggregateOutputType | null
    _sum: OptimizationSumAggregateOutputType | null
    _min: OptimizationMinAggregateOutputType | null
    _max: OptimizationMaxAggregateOutputType | null
  }

  export type OptimizationAvgAggregateOutputType = {
    lineNumber: number | null
    performanceGain: number | null
    costSavings: number | null
    carbonReduction: number | null
    executionTime: number | null
  }

  export type OptimizationSumAggregateOutputType = {
    lineNumber: number | null
    performanceGain: number | null
    costSavings: number | null
    carbonReduction: number | null
    executionTime: number | null
  }

  export type OptimizationMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    type: string | null
    status: string | null
    beforeCode: string | null
    afterCode: string | null
    filePath: string | null
    lineNumber: number | null
    performanceGain: number | null
    costSavings: number | null
    carbonReduction: number | null
    executionTime: number | null
    repoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    appliedAt: Date | null
    hotspotId: string | null
  }

  export type OptimizationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    type: string | null
    status: string | null
    beforeCode: string | null
    afterCode: string | null
    filePath: string | null
    lineNumber: number | null
    performanceGain: number | null
    costSavings: number | null
    carbonReduction: number | null
    executionTime: number | null
    repoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    appliedAt: Date | null
    hotspotId: string | null
  }

  export type OptimizationCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    type: number
    status: number
    beforeCode: number
    afterCode: number
    filePath: number
    lineNumber: number
    performanceGain: number
    costSavings: number
    carbonReduction: number
    executionTime: number
    repoUrl: number
    createdAt: number
    updatedAt: number
    appliedAt: number
    hotspotId: number
    _all: number
  }


  export type OptimizationAvgAggregateInputType = {
    lineNumber?: true
    performanceGain?: true
    costSavings?: true
    carbonReduction?: true
    executionTime?: true
  }

  export type OptimizationSumAggregateInputType = {
    lineNumber?: true
    performanceGain?: true
    costSavings?: true
    carbonReduction?: true
    executionTime?: true
  }

  export type OptimizationMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    type?: true
    status?: true
    beforeCode?: true
    afterCode?: true
    filePath?: true
    lineNumber?: true
    performanceGain?: true
    costSavings?: true
    carbonReduction?: true
    executionTime?: true
    repoUrl?: true
    createdAt?: true
    updatedAt?: true
    appliedAt?: true
    hotspotId?: true
  }

  export type OptimizationMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    type?: true
    status?: true
    beforeCode?: true
    afterCode?: true
    filePath?: true
    lineNumber?: true
    performanceGain?: true
    costSavings?: true
    carbonReduction?: true
    executionTime?: true
    repoUrl?: true
    createdAt?: true
    updatedAt?: true
    appliedAt?: true
    hotspotId?: true
  }

  export type OptimizationCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    type?: true
    status?: true
    beforeCode?: true
    afterCode?: true
    filePath?: true
    lineNumber?: true
    performanceGain?: true
    costSavings?: true
    carbonReduction?: true
    executionTime?: true
    repoUrl?: true
    createdAt?: true
    updatedAt?: true
    appliedAt?: true
    hotspotId?: true
    _all?: true
  }

  export type OptimizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Optimization to aggregate.
     */
    where?: OptimizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Optimizations to fetch.
     */
    orderBy?: OptimizationOrderByWithRelationInput | OptimizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptimizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Optimizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Optimizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Optimizations
    **/
    _count?: true | OptimizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptimizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptimizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptimizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptimizationMaxAggregateInputType
  }

  export type GetOptimizationAggregateType<T extends OptimizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOptimization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOptimization[P]>
      : GetScalarType<T[P], AggregateOptimization[P]>
  }




  export type OptimizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptimizationWhereInput
    orderBy?: OptimizationOrderByWithAggregationInput | OptimizationOrderByWithAggregationInput[]
    by: OptimizationScalarFieldEnum[] | OptimizationScalarFieldEnum
    having?: OptimizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptimizationCountAggregateInputType | true
    _avg?: OptimizationAvgAggregateInputType
    _sum?: OptimizationSumAggregateInputType
    _min?: OptimizationMinAggregateInputType
    _max?: OptimizationMaxAggregateInputType
  }

  export type OptimizationGroupByOutputType = {
    id: string
    title: string
    description: string
    category: string
    type: string
    status: string
    beforeCode: string | null
    afterCode: string | null
    filePath: string
    lineNumber: number | null
    performanceGain: number | null
    costSavings: number | null
    carbonReduction: number | null
    executionTime: number | null
    repoUrl: string | null
    createdAt: Date
    updatedAt: Date
    appliedAt: Date | null
    hotspotId: string | null
    _count: OptimizationCountAggregateOutputType | null
    _avg: OptimizationAvgAggregateOutputType | null
    _sum: OptimizationSumAggregateOutputType | null
    _min: OptimizationMinAggregateOutputType | null
    _max: OptimizationMaxAggregateOutputType | null
  }

  type GetOptimizationGroupByPayload<T extends OptimizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptimizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptimizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptimizationGroupByOutputType[P]>
            : GetScalarType<T[P], OptimizationGroupByOutputType[P]>
        }
      >
    >


  export type OptimizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    type?: boolean
    status?: boolean
    beforeCode?: boolean
    afterCode?: boolean
    filePath?: boolean
    lineNumber?: boolean
    performanceGain?: boolean
    costSavings?: boolean
    carbonReduction?: boolean
    executionTime?: boolean
    repoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appliedAt?: boolean
    hotspotId?: boolean
    hotspot?: boolean | Optimization$hotspotArgs<ExtArgs>
    optimizationRuns?: boolean | Optimization$optimizationRunsArgs<ExtArgs>
    _count?: boolean | OptimizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["optimization"]>

  export type OptimizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    type?: boolean
    status?: boolean
    beforeCode?: boolean
    afterCode?: boolean
    filePath?: boolean
    lineNumber?: boolean
    performanceGain?: boolean
    costSavings?: boolean
    carbonReduction?: boolean
    executionTime?: boolean
    repoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appliedAt?: boolean
    hotspotId?: boolean
    hotspot?: boolean | Optimization$hotspotArgs<ExtArgs>
  }, ExtArgs["result"]["optimization"]>

  export type OptimizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    type?: boolean
    status?: boolean
    beforeCode?: boolean
    afterCode?: boolean
    filePath?: boolean
    lineNumber?: boolean
    performanceGain?: boolean
    costSavings?: boolean
    carbonReduction?: boolean
    executionTime?: boolean
    repoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appliedAt?: boolean
    hotspotId?: boolean
    hotspot?: boolean | Optimization$hotspotArgs<ExtArgs>
  }, ExtArgs["result"]["optimization"]>

  export type OptimizationSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    type?: boolean
    status?: boolean
    beforeCode?: boolean
    afterCode?: boolean
    filePath?: boolean
    lineNumber?: boolean
    performanceGain?: boolean
    costSavings?: boolean
    carbonReduction?: boolean
    executionTime?: boolean
    repoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appliedAt?: boolean
    hotspotId?: boolean
  }

  export type OptimizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "type" | "status" | "beforeCode" | "afterCode" | "filePath" | "lineNumber" | "performanceGain" | "costSavings" | "carbonReduction" | "executionTime" | "repoUrl" | "createdAt" | "updatedAt" | "appliedAt" | "hotspotId", ExtArgs["result"]["optimization"]>
  export type OptimizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotspot?: boolean | Optimization$hotspotArgs<ExtArgs>
    optimizationRuns?: boolean | Optimization$optimizationRunsArgs<ExtArgs>
    _count?: boolean | OptimizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OptimizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotspot?: boolean | Optimization$hotspotArgs<ExtArgs>
  }
  export type OptimizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hotspot?: boolean | Optimization$hotspotArgs<ExtArgs>
  }

  export type $OptimizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Optimization"
    objects: {
      hotspot: Prisma.$HotspotPayload<ExtArgs> | null
      optimizationRuns: Prisma.$OptimizationRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: string
      type: string
      status: string
      beforeCode: string | null
      afterCode: string | null
      filePath: string
      lineNumber: number | null
      performanceGain: number | null
      costSavings: number | null
      carbonReduction: number | null
      executionTime: number | null
      repoUrl: string | null
      createdAt: Date
      updatedAt: Date
      appliedAt: Date | null
      hotspotId: string | null
    }, ExtArgs["result"]["optimization"]>
    composites: {}
  }

  type OptimizationGetPayload<S extends boolean | null | undefined | OptimizationDefaultArgs> = $Result.GetResult<Prisma.$OptimizationPayload, S>

  type OptimizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptimizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptimizationCountAggregateInputType | true
    }

  export interface OptimizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Optimization'], meta: { name: 'Optimization' } }
    /**
     * Find zero or one Optimization that matches the filter.
     * @param {OptimizationFindUniqueArgs} args - Arguments to find a Optimization
     * @example
     * // Get one Optimization
     * const optimization = await prisma.optimization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptimizationFindUniqueArgs>(args: SelectSubset<T, OptimizationFindUniqueArgs<ExtArgs>>): Prisma__OptimizationClient<$Result.GetResult<Prisma.$OptimizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Optimization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptimizationFindUniqueOrThrowArgs} args - Arguments to find a Optimization
     * @example
     * // Get one Optimization
     * const optimization = await prisma.optimization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptimizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OptimizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptimizationClient<$Result.GetResult<Prisma.$OptimizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Optimization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptimizationFindFirstArgs} args - Arguments to find a Optimization
     * @example
     * // Get one Optimization
     * const optimization = await prisma.optimization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptimizationFindFirstArgs>(args?: SelectSubset<T, OptimizationFindFirstArgs<ExtArgs>>): Prisma__OptimizationClient<$Result.GetResult<Prisma.$OptimizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Optimization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptimizationFindFirstOrThrowArgs} args - Arguments to find a Optimization
     * @example
     * // Get one Optimization
     * const optimization = await prisma.optimization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptimizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OptimizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptimizationClient<$Result.GetResult<Prisma.$OptimizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Optimizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptimizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Optimizations
     * const optimizations = await prisma.optimization.findMany()
     * 
     * // Get first 10 Optimizations
     * const optimizations = await prisma.optimization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optimizationWithIdOnly = await prisma.optimization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptimizationFindManyArgs>(args?: SelectSubset<T, OptimizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptimizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Optimization.
     * @param {OptimizationCreateArgs} args - Arguments to create a Optimization.
     * @example
     * // Create one Optimization
     * const Optimization = await prisma.optimization.create({
     *   data: {
     *     // ... data to create a Optimization
     *   }
     * })
     * 
     */
    create<T extends OptimizationCreateArgs>(args: SelectSubset<T, OptimizationCreateArgs<ExtArgs>>): Prisma__OptimizationClient<$Result.GetResult<Prisma.$OptimizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Optimizations.
     * @param {OptimizationCreateManyArgs} args - Arguments to create many Optimizations.
     * @example
     * // Create many Optimizations
     * const optimization = await prisma.optimization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptimizationCreateManyArgs>(args?: SelectSubset<T, OptimizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Optimizations and returns the data saved in the database.
     * @param {OptimizationCreateManyAndReturnArgs} args - Arguments to create many Optimizations.
     * @example
     * // Create many Optimizations
     * const optimization = await prisma.optimization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Optimizations and only return the `id`
     * const optimizationWithIdOnly = await prisma.optimization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptimizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OptimizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptimizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Optimization.
     * @param {OptimizationDeleteArgs} args - Arguments to delete one Optimization.
     * @example
     * // Delete one Optimization
     * const Optimization = await prisma.optimization.delete({
     *   where: {
     *     // ... filter to delete one Optimization
     *   }
     * })
     * 
     */
    delete<T extends OptimizationDeleteArgs>(args: SelectSubset<T, OptimizationDeleteArgs<ExtArgs>>): Prisma__OptimizationClient<$Result.GetResult<Prisma.$OptimizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Optimization.
     * @param {OptimizationUpdateArgs} args - Arguments to update one Optimization.
     * @example
     * // Update one Optimization
     * const optimization = await prisma.optimization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptimizationUpdateArgs>(args: SelectSubset<T, OptimizationUpdateArgs<ExtArgs>>): Prisma__OptimizationClient<$Result.GetResult<Prisma.$OptimizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Optimizations.
     * @param {OptimizationDeleteManyArgs} args - Arguments to filter Optimizations to delete.
     * @example
     * // Delete a few Optimizations
     * const { count } = await prisma.optimization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptimizationDeleteManyArgs>(args?: SelectSubset<T, OptimizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Optimizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptimizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Optimizations
     * const optimization = await prisma.optimization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptimizationUpdateManyArgs>(args: SelectSubset<T, OptimizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Optimizations and returns the data updated in the database.
     * @param {OptimizationUpdateManyAndReturnArgs} args - Arguments to update many Optimizations.
     * @example
     * // Update many Optimizations
     * const optimization = await prisma.optimization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Optimizations and only return the `id`
     * const optimizationWithIdOnly = await prisma.optimization.updateManyAndReturn({
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
    updateManyAndReturn<T extends OptimizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OptimizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptimizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Optimization.
     * @param {OptimizationUpsertArgs} args - Arguments to update or create a Optimization.
     * @example
     * // Update or create a Optimization
     * const optimization = await prisma.optimization.upsert({
     *   create: {
     *     // ... data to create a Optimization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Optimization we want to update
     *   }
     * })
     */
    upsert<T extends OptimizationUpsertArgs>(args: SelectSubset<T, OptimizationUpsertArgs<ExtArgs>>): Prisma__OptimizationClient<$Result.GetResult<Prisma.$OptimizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Optimizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptimizationCountArgs} args - Arguments to filter Optimizations to count.
     * @example
     * // Count the number of Optimizations
     * const count = await prisma.optimization.count({
     *   where: {
     *     // ... the filter for the Optimizations we want to count
     *   }
     * })
    **/
    count<T extends OptimizationCountArgs>(
      args?: Subset<T, OptimizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptimizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Optimization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptimizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptimizationAggregateArgs>(args: Subset<T, OptimizationAggregateArgs>): Prisma.PrismaPromise<GetOptimizationAggregateType<T>>

    /**
     * Group by Optimization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptimizationGroupByArgs} args - Group by arguments.
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
      T extends OptimizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptimizationGroupByArgs['orderBy'] }
        : { orderBy?: OptimizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptimizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptimizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Optimization model
   */
  readonly fields: OptimizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Optimization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptimizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hotspot<T extends Optimization$hotspotArgs<ExtArgs> = {}>(args?: Subset<T, Optimization$hotspotArgs<ExtArgs>>): Prisma__HotspotClient<$Result.GetResult<Prisma.$HotspotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    optimizationRuns<T extends Optimization$optimizationRunsArgs<ExtArgs> = {}>(args?: Subset<T, Optimization$optimizationRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptimizationRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Optimization model
   */
  interface OptimizationFieldRefs {
    readonly id: FieldRef<"Optimization", 'String'>
    readonly title: FieldRef<"Optimization", 'String'>
    readonly description: FieldRef<"Optimization", 'String'>
    readonly category: FieldRef<"Optimization", 'String'>
    readonly type: FieldRef<"Optimization", 'String'>
    readonly status: FieldRef<"Optimization", 'String'>
    readonly beforeCode: FieldRef<"Optimization", 'String'>
    readonly afterCode: FieldRef<"Optimization", 'String'>
    readonly filePath: FieldRef<"Optimization", 'String'>
    readonly lineNumber: FieldRef<"Optimization", 'Int'>
    readonly performanceGain: FieldRef<"Optimization", 'Float'>
    readonly costSavings: FieldRef<"Optimization", 'Float'>
    readonly carbonReduction: FieldRef<"Optimization", 'Float'>
    readonly executionTime: FieldRef<"Optimization", 'Int'>
    readonly repoUrl: FieldRef<"Optimization", 'String'>
    readonly createdAt: FieldRef<"Optimization", 'DateTime'>
    readonly updatedAt: FieldRef<"Optimization", 'DateTime'>
    readonly appliedAt: FieldRef<"Optimization", 'DateTime'>
    readonly hotspotId: FieldRef<"Optimization", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Optimization findUnique
   */
  export type OptimizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optimization
     */
    select?: OptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optimization
     */
    omit?: OptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationInclude<ExtArgs> | null
    /**
     * Filter, which Optimization to fetch.
     */
    where: OptimizationWhereUniqueInput
  }

  /**
   * Optimization findUniqueOrThrow
   */
  export type OptimizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optimization
     */
    select?: OptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optimization
     */
    omit?: OptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationInclude<ExtArgs> | null
    /**
     * Filter, which Optimization to fetch.
     */
    where: OptimizationWhereUniqueInput
  }

  /**
   * Optimization findFirst
   */
  export type OptimizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optimization
     */
    select?: OptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optimization
     */
    omit?: OptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationInclude<ExtArgs> | null
    /**
     * Filter, which Optimization to fetch.
     */
    where?: OptimizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Optimizations to fetch.
     */
    orderBy?: OptimizationOrderByWithRelationInput | OptimizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Optimizations.
     */
    cursor?: OptimizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Optimizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Optimizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Optimizations.
     */
    distinct?: OptimizationScalarFieldEnum | OptimizationScalarFieldEnum[]
  }

  /**
   * Optimization findFirstOrThrow
   */
  export type OptimizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optimization
     */
    select?: OptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optimization
     */
    omit?: OptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationInclude<ExtArgs> | null
    /**
     * Filter, which Optimization to fetch.
     */
    where?: OptimizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Optimizations to fetch.
     */
    orderBy?: OptimizationOrderByWithRelationInput | OptimizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Optimizations.
     */
    cursor?: OptimizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Optimizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Optimizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Optimizations.
     */
    distinct?: OptimizationScalarFieldEnum | OptimizationScalarFieldEnum[]
  }

  /**
   * Optimization findMany
   */
  export type OptimizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optimization
     */
    select?: OptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optimization
     */
    omit?: OptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationInclude<ExtArgs> | null
    /**
     * Filter, which Optimizations to fetch.
     */
    where?: OptimizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Optimizations to fetch.
     */
    orderBy?: OptimizationOrderByWithRelationInput | OptimizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Optimizations.
     */
    cursor?: OptimizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Optimizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Optimizations.
     */
    skip?: number
    distinct?: OptimizationScalarFieldEnum | OptimizationScalarFieldEnum[]
  }

  /**
   * Optimization create
   */
  export type OptimizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optimization
     */
    select?: OptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optimization
     */
    omit?: OptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Optimization.
     */
    data: XOR<OptimizationCreateInput, OptimizationUncheckedCreateInput>
  }

  /**
   * Optimization createMany
   */
  export type OptimizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Optimizations.
     */
    data: OptimizationCreateManyInput | OptimizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Optimization createManyAndReturn
   */
  export type OptimizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optimization
     */
    select?: OptimizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Optimization
     */
    omit?: OptimizationOmit<ExtArgs> | null
    /**
     * The data used to create many Optimizations.
     */
    data: OptimizationCreateManyInput | OptimizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Optimization update
   */
  export type OptimizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optimization
     */
    select?: OptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optimization
     */
    omit?: OptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Optimization.
     */
    data: XOR<OptimizationUpdateInput, OptimizationUncheckedUpdateInput>
    /**
     * Choose, which Optimization to update.
     */
    where: OptimizationWhereUniqueInput
  }

  /**
   * Optimization updateMany
   */
  export type OptimizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Optimizations.
     */
    data: XOR<OptimizationUpdateManyMutationInput, OptimizationUncheckedUpdateManyInput>
    /**
     * Filter which Optimizations to update
     */
    where?: OptimizationWhereInput
    /**
     * Limit how many Optimizations to update.
     */
    limit?: number
  }

  /**
   * Optimization updateManyAndReturn
   */
  export type OptimizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optimization
     */
    select?: OptimizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Optimization
     */
    omit?: OptimizationOmit<ExtArgs> | null
    /**
     * The data used to update Optimizations.
     */
    data: XOR<OptimizationUpdateManyMutationInput, OptimizationUncheckedUpdateManyInput>
    /**
     * Filter which Optimizations to update
     */
    where?: OptimizationWhereInput
    /**
     * Limit how many Optimizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Optimization upsert
   */
  export type OptimizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optimization
     */
    select?: OptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optimization
     */
    omit?: OptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Optimization to update in case it exists.
     */
    where: OptimizationWhereUniqueInput
    /**
     * In case the Optimization found by the `where` argument doesn't exist, create a new Optimization with this data.
     */
    create: XOR<OptimizationCreateInput, OptimizationUncheckedCreateInput>
    /**
     * In case the Optimization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptimizationUpdateInput, OptimizationUncheckedUpdateInput>
  }

  /**
   * Optimization delete
   */
  export type OptimizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optimization
     */
    select?: OptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optimization
     */
    omit?: OptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationInclude<ExtArgs> | null
    /**
     * Filter which Optimization to delete.
     */
    where: OptimizationWhereUniqueInput
  }

  /**
   * Optimization deleteMany
   */
  export type OptimizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Optimizations to delete
     */
    where?: OptimizationWhereInput
    /**
     * Limit how many Optimizations to delete.
     */
    limit?: number
  }

  /**
   * Optimization.hotspot
   */
  export type Optimization$hotspotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotspot
     */
    select?: HotspotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotspot
     */
    omit?: HotspotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotspotInclude<ExtArgs> | null
    where?: HotspotWhereInput
  }

  /**
   * Optimization.optimizationRuns
   */
  export type Optimization$optimizationRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptimizationRun
     */
    select?: OptimizationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptimizationRun
     */
    omit?: OptimizationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationRunInclude<ExtArgs> | null
    where?: OptimizationRunWhereInput
    orderBy?: OptimizationRunOrderByWithRelationInput | OptimizationRunOrderByWithRelationInput[]
    cursor?: OptimizationRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptimizationRunScalarFieldEnum | OptimizationRunScalarFieldEnum[]
  }

  /**
   * Optimization without action
   */
  export type OptimizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optimization
     */
    select?: OptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optimization
     */
    omit?: OptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationInclude<ExtArgs> | null
  }


  /**
   * Model OptimizationRun
   */

  export type AggregateOptimizationRun = {
    _count: OptimizationRunCountAggregateOutputType | null
    _avg: OptimizationRunAvgAggregateOutputType | null
    _sum: OptimizationRunSumAggregateOutputType | null
    _min: OptimizationRunMinAggregateOutputType | null
    _max: OptimizationRunMaxAggregateOutputType | null
  }

  export type OptimizationRunAvgAggregateOutputType = {
    hotspotsFound: number | null
    optimizationsApplied: number | null
    totalImprovements: number | null
  }

  export type OptimizationRunSumAggregateOutputType = {
    hotspotsFound: number | null
    optimizationsApplied: number | null
    totalImprovements: number | null
  }

  export type OptimizationRunMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    repoUrl: string | null
    status: string | null
    startedAt: Date | null
    completedAt: Date | null
    failedAt: Date | null
    errorMessage: string | null
    hotspotsFound: number | null
    optimizationsApplied: number | null
    totalImprovements: number | null
  }

  export type OptimizationRunMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    repoUrl: string | null
    status: string | null
    startedAt: Date | null
    completedAt: Date | null
    failedAt: Date | null
    errorMessage: string | null
    hotspotsFound: number | null
    optimizationsApplied: number | null
    totalImprovements: number | null
  }

  export type OptimizationRunCountAggregateOutputType = {
    id: number
    jobId: number
    repoUrl: number
    status: number
    startedAt: number
    completedAt: number
    failedAt: number
    errorMessage: number
    hotspotsFound: number
    optimizationsApplied: number
    totalImprovements: number
    _all: number
  }


  export type OptimizationRunAvgAggregateInputType = {
    hotspotsFound?: true
    optimizationsApplied?: true
    totalImprovements?: true
  }

  export type OptimizationRunSumAggregateInputType = {
    hotspotsFound?: true
    optimizationsApplied?: true
    totalImprovements?: true
  }

  export type OptimizationRunMinAggregateInputType = {
    id?: true
    jobId?: true
    repoUrl?: true
    status?: true
    startedAt?: true
    completedAt?: true
    failedAt?: true
    errorMessage?: true
    hotspotsFound?: true
    optimizationsApplied?: true
    totalImprovements?: true
  }

  export type OptimizationRunMaxAggregateInputType = {
    id?: true
    jobId?: true
    repoUrl?: true
    status?: true
    startedAt?: true
    completedAt?: true
    failedAt?: true
    errorMessage?: true
    hotspotsFound?: true
    optimizationsApplied?: true
    totalImprovements?: true
  }

  export type OptimizationRunCountAggregateInputType = {
    id?: true
    jobId?: true
    repoUrl?: true
    status?: true
    startedAt?: true
    completedAt?: true
    failedAt?: true
    errorMessage?: true
    hotspotsFound?: true
    optimizationsApplied?: true
    totalImprovements?: true
    _all?: true
  }

  export type OptimizationRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OptimizationRun to aggregate.
     */
    where?: OptimizationRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptimizationRuns to fetch.
     */
    orderBy?: OptimizationRunOrderByWithRelationInput | OptimizationRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptimizationRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptimizationRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptimizationRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OptimizationRuns
    **/
    _count?: true | OptimizationRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OptimizationRunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OptimizationRunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptimizationRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptimizationRunMaxAggregateInputType
  }

  export type GetOptimizationRunAggregateType<T extends OptimizationRunAggregateArgs> = {
        [P in keyof T & keyof AggregateOptimizationRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOptimizationRun[P]>
      : GetScalarType<T[P], AggregateOptimizationRun[P]>
  }




  export type OptimizationRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptimizationRunWhereInput
    orderBy?: OptimizationRunOrderByWithAggregationInput | OptimizationRunOrderByWithAggregationInput[]
    by: OptimizationRunScalarFieldEnum[] | OptimizationRunScalarFieldEnum
    having?: OptimizationRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptimizationRunCountAggregateInputType | true
    _avg?: OptimizationRunAvgAggregateInputType
    _sum?: OptimizationRunSumAggregateInputType
    _min?: OptimizationRunMinAggregateInputType
    _max?: OptimizationRunMaxAggregateInputType
  }

  export type OptimizationRunGroupByOutputType = {
    id: string
    jobId: string
    repoUrl: string
    status: string
    startedAt: Date
    completedAt: Date | null
    failedAt: Date | null
    errorMessage: string | null
    hotspotsFound: number
    optimizationsApplied: number
    totalImprovements: number | null
    _count: OptimizationRunCountAggregateOutputType | null
    _avg: OptimizationRunAvgAggregateOutputType | null
    _sum: OptimizationRunSumAggregateOutputType | null
    _min: OptimizationRunMinAggregateOutputType | null
    _max: OptimizationRunMaxAggregateOutputType | null
  }

  type GetOptimizationRunGroupByPayload<T extends OptimizationRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptimizationRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptimizationRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptimizationRunGroupByOutputType[P]>
            : GetScalarType<T[P], OptimizationRunGroupByOutputType[P]>
        }
      >
    >


  export type OptimizationRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    repoUrl?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    hotspotsFound?: boolean
    optimizationsApplied?: boolean
    totalImprovements?: boolean
    optimizations?: boolean | OptimizationRun$optimizationsArgs<ExtArgs>
    _count?: boolean | OptimizationRunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["optimizationRun"]>

  export type OptimizationRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    repoUrl?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    hotspotsFound?: boolean
    optimizationsApplied?: boolean
    totalImprovements?: boolean
  }, ExtArgs["result"]["optimizationRun"]>

  export type OptimizationRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    repoUrl?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    hotspotsFound?: boolean
    optimizationsApplied?: boolean
    totalImprovements?: boolean
  }, ExtArgs["result"]["optimizationRun"]>

  export type OptimizationRunSelectScalar = {
    id?: boolean
    jobId?: boolean
    repoUrl?: boolean
    status?: boolean
    startedAt?: boolean
    completedAt?: boolean
    failedAt?: boolean
    errorMessage?: boolean
    hotspotsFound?: boolean
    optimizationsApplied?: boolean
    totalImprovements?: boolean
  }

  export type OptimizationRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "repoUrl" | "status" | "startedAt" | "completedAt" | "failedAt" | "errorMessage" | "hotspotsFound" | "optimizationsApplied" | "totalImprovements", ExtArgs["result"]["optimizationRun"]>
  export type OptimizationRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    optimizations?: boolean | OptimizationRun$optimizationsArgs<ExtArgs>
    _count?: boolean | OptimizationRunCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OptimizationRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OptimizationRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OptimizationRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OptimizationRun"
    objects: {
      optimizations: Prisma.$OptimizationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      repoUrl: string
      status: string
      startedAt: Date
      completedAt: Date | null
      failedAt: Date | null
      errorMessage: string | null
      hotspotsFound: number
      optimizationsApplied: number
      totalImprovements: number | null
    }, ExtArgs["result"]["optimizationRun"]>
    composites: {}
  }

  type OptimizationRunGetPayload<S extends boolean | null | undefined | OptimizationRunDefaultArgs> = $Result.GetResult<Prisma.$OptimizationRunPayload, S>

  type OptimizationRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OptimizationRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OptimizationRunCountAggregateInputType | true
    }

  export interface OptimizationRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OptimizationRun'], meta: { name: 'OptimizationRun' } }
    /**
     * Find zero or one OptimizationRun that matches the filter.
     * @param {OptimizationRunFindUniqueArgs} args - Arguments to find a OptimizationRun
     * @example
     * // Get one OptimizationRun
     * const optimizationRun = await prisma.optimizationRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptimizationRunFindUniqueArgs>(args: SelectSubset<T, OptimizationRunFindUniqueArgs<ExtArgs>>): Prisma__OptimizationRunClient<$Result.GetResult<Prisma.$OptimizationRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OptimizationRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OptimizationRunFindUniqueOrThrowArgs} args - Arguments to find a OptimizationRun
     * @example
     * // Get one OptimizationRun
     * const optimizationRun = await prisma.optimizationRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptimizationRunFindUniqueOrThrowArgs>(args: SelectSubset<T, OptimizationRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptimizationRunClient<$Result.GetResult<Prisma.$OptimizationRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OptimizationRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptimizationRunFindFirstArgs} args - Arguments to find a OptimizationRun
     * @example
     * // Get one OptimizationRun
     * const optimizationRun = await prisma.optimizationRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptimizationRunFindFirstArgs>(args?: SelectSubset<T, OptimizationRunFindFirstArgs<ExtArgs>>): Prisma__OptimizationRunClient<$Result.GetResult<Prisma.$OptimizationRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OptimizationRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptimizationRunFindFirstOrThrowArgs} args - Arguments to find a OptimizationRun
     * @example
     * // Get one OptimizationRun
     * const optimizationRun = await prisma.optimizationRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptimizationRunFindFirstOrThrowArgs>(args?: SelectSubset<T, OptimizationRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptimizationRunClient<$Result.GetResult<Prisma.$OptimizationRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OptimizationRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptimizationRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OptimizationRuns
     * const optimizationRuns = await prisma.optimizationRun.findMany()
     * 
     * // Get first 10 OptimizationRuns
     * const optimizationRuns = await prisma.optimizationRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optimizationRunWithIdOnly = await prisma.optimizationRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptimizationRunFindManyArgs>(args?: SelectSubset<T, OptimizationRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptimizationRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OptimizationRun.
     * @param {OptimizationRunCreateArgs} args - Arguments to create a OptimizationRun.
     * @example
     * // Create one OptimizationRun
     * const OptimizationRun = await prisma.optimizationRun.create({
     *   data: {
     *     // ... data to create a OptimizationRun
     *   }
     * })
     * 
     */
    create<T extends OptimizationRunCreateArgs>(args: SelectSubset<T, OptimizationRunCreateArgs<ExtArgs>>): Prisma__OptimizationRunClient<$Result.GetResult<Prisma.$OptimizationRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OptimizationRuns.
     * @param {OptimizationRunCreateManyArgs} args - Arguments to create many OptimizationRuns.
     * @example
     * // Create many OptimizationRuns
     * const optimizationRun = await prisma.optimizationRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptimizationRunCreateManyArgs>(args?: SelectSubset<T, OptimizationRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OptimizationRuns and returns the data saved in the database.
     * @param {OptimizationRunCreateManyAndReturnArgs} args - Arguments to create many OptimizationRuns.
     * @example
     * // Create many OptimizationRuns
     * const optimizationRun = await prisma.optimizationRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OptimizationRuns and only return the `id`
     * const optimizationRunWithIdOnly = await prisma.optimizationRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptimizationRunCreateManyAndReturnArgs>(args?: SelectSubset<T, OptimizationRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptimizationRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OptimizationRun.
     * @param {OptimizationRunDeleteArgs} args - Arguments to delete one OptimizationRun.
     * @example
     * // Delete one OptimizationRun
     * const OptimizationRun = await prisma.optimizationRun.delete({
     *   where: {
     *     // ... filter to delete one OptimizationRun
     *   }
     * })
     * 
     */
    delete<T extends OptimizationRunDeleteArgs>(args: SelectSubset<T, OptimizationRunDeleteArgs<ExtArgs>>): Prisma__OptimizationRunClient<$Result.GetResult<Prisma.$OptimizationRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OptimizationRun.
     * @param {OptimizationRunUpdateArgs} args - Arguments to update one OptimizationRun.
     * @example
     * // Update one OptimizationRun
     * const optimizationRun = await prisma.optimizationRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptimizationRunUpdateArgs>(args: SelectSubset<T, OptimizationRunUpdateArgs<ExtArgs>>): Prisma__OptimizationRunClient<$Result.GetResult<Prisma.$OptimizationRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OptimizationRuns.
     * @param {OptimizationRunDeleteManyArgs} args - Arguments to filter OptimizationRuns to delete.
     * @example
     * // Delete a few OptimizationRuns
     * const { count } = await prisma.optimizationRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptimizationRunDeleteManyArgs>(args?: SelectSubset<T, OptimizationRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OptimizationRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptimizationRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OptimizationRuns
     * const optimizationRun = await prisma.optimizationRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptimizationRunUpdateManyArgs>(args: SelectSubset<T, OptimizationRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OptimizationRuns and returns the data updated in the database.
     * @param {OptimizationRunUpdateManyAndReturnArgs} args - Arguments to update many OptimizationRuns.
     * @example
     * // Update many OptimizationRuns
     * const optimizationRun = await prisma.optimizationRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OptimizationRuns and only return the `id`
     * const optimizationRunWithIdOnly = await prisma.optimizationRun.updateManyAndReturn({
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
    updateManyAndReturn<T extends OptimizationRunUpdateManyAndReturnArgs>(args: SelectSubset<T, OptimizationRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptimizationRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OptimizationRun.
     * @param {OptimizationRunUpsertArgs} args - Arguments to update or create a OptimizationRun.
     * @example
     * // Update or create a OptimizationRun
     * const optimizationRun = await prisma.optimizationRun.upsert({
     *   create: {
     *     // ... data to create a OptimizationRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OptimizationRun we want to update
     *   }
     * })
     */
    upsert<T extends OptimizationRunUpsertArgs>(args: SelectSubset<T, OptimizationRunUpsertArgs<ExtArgs>>): Prisma__OptimizationRunClient<$Result.GetResult<Prisma.$OptimizationRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OptimizationRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptimizationRunCountArgs} args - Arguments to filter OptimizationRuns to count.
     * @example
     * // Count the number of OptimizationRuns
     * const count = await prisma.optimizationRun.count({
     *   where: {
     *     // ... the filter for the OptimizationRuns we want to count
     *   }
     * })
    **/
    count<T extends OptimizationRunCountArgs>(
      args?: Subset<T, OptimizationRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptimizationRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OptimizationRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptimizationRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptimizationRunAggregateArgs>(args: Subset<T, OptimizationRunAggregateArgs>): Prisma.PrismaPromise<GetOptimizationRunAggregateType<T>>

    /**
     * Group by OptimizationRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptimizationRunGroupByArgs} args - Group by arguments.
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
      T extends OptimizationRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptimizationRunGroupByArgs['orderBy'] }
        : { orderBy?: OptimizationRunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptimizationRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptimizationRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OptimizationRun model
   */
  readonly fields: OptimizationRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OptimizationRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptimizationRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    optimizations<T extends OptimizationRun$optimizationsArgs<ExtArgs> = {}>(args?: Subset<T, OptimizationRun$optimizationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptimizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OptimizationRun model
   */
  interface OptimizationRunFieldRefs {
    readonly id: FieldRef<"OptimizationRun", 'String'>
    readonly jobId: FieldRef<"OptimizationRun", 'String'>
    readonly repoUrl: FieldRef<"OptimizationRun", 'String'>
    readonly status: FieldRef<"OptimizationRun", 'String'>
    readonly startedAt: FieldRef<"OptimizationRun", 'DateTime'>
    readonly completedAt: FieldRef<"OptimizationRun", 'DateTime'>
    readonly failedAt: FieldRef<"OptimizationRun", 'DateTime'>
    readonly errorMessage: FieldRef<"OptimizationRun", 'String'>
    readonly hotspotsFound: FieldRef<"OptimizationRun", 'Int'>
    readonly optimizationsApplied: FieldRef<"OptimizationRun", 'Int'>
    readonly totalImprovements: FieldRef<"OptimizationRun", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * OptimizationRun findUnique
   */
  export type OptimizationRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptimizationRun
     */
    select?: OptimizationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptimizationRun
     */
    omit?: OptimizationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationRunInclude<ExtArgs> | null
    /**
     * Filter, which OptimizationRun to fetch.
     */
    where: OptimizationRunWhereUniqueInput
  }

  /**
   * OptimizationRun findUniqueOrThrow
   */
  export type OptimizationRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptimizationRun
     */
    select?: OptimizationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptimizationRun
     */
    omit?: OptimizationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationRunInclude<ExtArgs> | null
    /**
     * Filter, which OptimizationRun to fetch.
     */
    where: OptimizationRunWhereUniqueInput
  }

  /**
   * OptimizationRun findFirst
   */
  export type OptimizationRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptimizationRun
     */
    select?: OptimizationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptimizationRun
     */
    omit?: OptimizationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationRunInclude<ExtArgs> | null
    /**
     * Filter, which OptimizationRun to fetch.
     */
    where?: OptimizationRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptimizationRuns to fetch.
     */
    orderBy?: OptimizationRunOrderByWithRelationInput | OptimizationRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OptimizationRuns.
     */
    cursor?: OptimizationRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptimizationRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptimizationRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OptimizationRuns.
     */
    distinct?: OptimizationRunScalarFieldEnum | OptimizationRunScalarFieldEnum[]
  }

  /**
   * OptimizationRun findFirstOrThrow
   */
  export type OptimizationRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptimizationRun
     */
    select?: OptimizationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptimizationRun
     */
    omit?: OptimizationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationRunInclude<ExtArgs> | null
    /**
     * Filter, which OptimizationRun to fetch.
     */
    where?: OptimizationRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptimizationRuns to fetch.
     */
    orderBy?: OptimizationRunOrderByWithRelationInput | OptimizationRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OptimizationRuns.
     */
    cursor?: OptimizationRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptimizationRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptimizationRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OptimizationRuns.
     */
    distinct?: OptimizationRunScalarFieldEnum | OptimizationRunScalarFieldEnum[]
  }

  /**
   * OptimizationRun findMany
   */
  export type OptimizationRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptimizationRun
     */
    select?: OptimizationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptimizationRun
     */
    omit?: OptimizationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationRunInclude<ExtArgs> | null
    /**
     * Filter, which OptimizationRuns to fetch.
     */
    where?: OptimizationRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptimizationRuns to fetch.
     */
    orderBy?: OptimizationRunOrderByWithRelationInput | OptimizationRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OptimizationRuns.
     */
    cursor?: OptimizationRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptimizationRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptimizationRuns.
     */
    skip?: number
    distinct?: OptimizationRunScalarFieldEnum | OptimizationRunScalarFieldEnum[]
  }

  /**
   * OptimizationRun create
   */
  export type OptimizationRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptimizationRun
     */
    select?: OptimizationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptimizationRun
     */
    omit?: OptimizationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationRunInclude<ExtArgs> | null
    /**
     * The data needed to create a OptimizationRun.
     */
    data: XOR<OptimizationRunCreateInput, OptimizationRunUncheckedCreateInput>
  }

  /**
   * OptimizationRun createMany
   */
  export type OptimizationRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OptimizationRuns.
     */
    data: OptimizationRunCreateManyInput | OptimizationRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OptimizationRun createManyAndReturn
   */
  export type OptimizationRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptimizationRun
     */
    select?: OptimizationRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OptimizationRun
     */
    omit?: OptimizationRunOmit<ExtArgs> | null
    /**
     * The data used to create many OptimizationRuns.
     */
    data: OptimizationRunCreateManyInput | OptimizationRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OptimizationRun update
   */
  export type OptimizationRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptimizationRun
     */
    select?: OptimizationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptimizationRun
     */
    omit?: OptimizationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationRunInclude<ExtArgs> | null
    /**
     * The data needed to update a OptimizationRun.
     */
    data: XOR<OptimizationRunUpdateInput, OptimizationRunUncheckedUpdateInput>
    /**
     * Choose, which OptimizationRun to update.
     */
    where: OptimizationRunWhereUniqueInput
  }

  /**
   * OptimizationRun updateMany
   */
  export type OptimizationRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OptimizationRuns.
     */
    data: XOR<OptimizationRunUpdateManyMutationInput, OptimizationRunUncheckedUpdateManyInput>
    /**
     * Filter which OptimizationRuns to update
     */
    where?: OptimizationRunWhereInput
    /**
     * Limit how many OptimizationRuns to update.
     */
    limit?: number
  }

  /**
   * OptimizationRun updateManyAndReturn
   */
  export type OptimizationRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptimizationRun
     */
    select?: OptimizationRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OptimizationRun
     */
    omit?: OptimizationRunOmit<ExtArgs> | null
    /**
     * The data used to update OptimizationRuns.
     */
    data: XOR<OptimizationRunUpdateManyMutationInput, OptimizationRunUncheckedUpdateManyInput>
    /**
     * Filter which OptimizationRuns to update
     */
    where?: OptimizationRunWhereInput
    /**
     * Limit how many OptimizationRuns to update.
     */
    limit?: number
  }

  /**
   * OptimizationRun upsert
   */
  export type OptimizationRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptimizationRun
     */
    select?: OptimizationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptimizationRun
     */
    omit?: OptimizationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationRunInclude<ExtArgs> | null
    /**
     * The filter to search for the OptimizationRun to update in case it exists.
     */
    where: OptimizationRunWhereUniqueInput
    /**
     * In case the OptimizationRun found by the `where` argument doesn't exist, create a new OptimizationRun with this data.
     */
    create: XOR<OptimizationRunCreateInput, OptimizationRunUncheckedCreateInput>
    /**
     * In case the OptimizationRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptimizationRunUpdateInput, OptimizationRunUncheckedUpdateInput>
  }

  /**
   * OptimizationRun delete
   */
  export type OptimizationRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptimizationRun
     */
    select?: OptimizationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptimizationRun
     */
    omit?: OptimizationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationRunInclude<ExtArgs> | null
    /**
     * Filter which OptimizationRun to delete.
     */
    where: OptimizationRunWhereUniqueInput
  }

  /**
   * OptimizationRun deleteMany
   */
  export type OptimizationRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OptimizationRuns to delete
     */
    where?: OptimizationRunWhereInput
    /**
     * Limit how many OptimizationRuns to delete.
     */
    limit?: number
  }

  /**
   * OptimizationRun.optimizations
   */
  export type OptimizationRun$optimizationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Optimization
     */
    select?: OptimizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Optimization
     */
    omit?: OptimizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationInclude<ExtArgs> | null
    where?: OptimizationWhereInput
    orderBy?: OptimizationOrderByWithRelationInput | OptimizationOrderByWithRelationInput[]
    cursor?: OptimizationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptimizationScalarFieldEnum | OptimizationScalarFieldEnum[]
  }

  /**
   * OptimizationRun without action
   */
  export type OptimizationRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptimizationRun
     */
    select?: OptimizationRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OptimizationRun
     */
    omit?: OptimizationRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptimizationRunInclude<ExtArgs> | null
  }


  /**
   * Model Metric
   */

  export type AggregateMetric = {
    _count: MetricCountAggregateOutputType | null
    _avg: MetricAvgAggregateOutputType | null
    _sum: MetricSumAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  export type MetricAvgAggregateOutputType = {
    value: number | null
  }

  export type MetricSumAggregateOutputType = {
    value: number | null
  }

  export type MetricMinAggregateOutputType = {
    id: string | null
    name: string | null
    value: number | null
    unit: string | null
    category: string | null
    timestamp: Date | null
    repoUrl: string | null
  }

  export type MetricMaxAggregateOutputType = {
    id: string | null
    name: string | null
    value: number | null
    unit: string | null
    category: string | null
    timestamp: Date | null
    repoUrl: string | null
  }

  export type MetricCountAggregateOutputType = {
    id: number
    name: number
    value: number
    unit: number
    category: number
    timestamp: number
    repoUrl: number
    metadata: number
    _all: number
  }


  export type MetricAvgAggregateInputType = {
    value?: true
  }

  export type MetricSumAggregateInputType = {
    value?: true
  }

  export type MetricMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
    unit?: true
    category?: true
    timestamp?: true
    repoUrl?: true
  }

  export type MetricMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
    unit?: true
    category?: true
    timestamp?: true
    repoUrl?: true
  }

  export type MetricCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    unit?: true
    category?: true
    timestamp?: true
    repoUrl?: true
    metadata?: true
    _all?: true
  }

  export type MetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metric to aggregate.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metrics
    **/
    _count?: true | MetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricMaxAggregateInputType
  }

  export type GetMetricAggregateType<T extends MetricAggregateArgs> = {
        [P in keyof T & keyof AggregateMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetric[P]>
      : GetScalarType<T[P], AggregateMetric[P]>
  }




  export type MetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricWhereInput
    orderBy?: MetricOrderByWithAggregationInput | MetricOrderByWithAggregationInput[]
    by: MetricScalarFieldEnum[] | MetricScalarFieldEnum
    having?: MetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricCountAggregateInputType | true
    _avg?: MetricAvgAggregateInputType
    _sum?: MetricSumAggregateInputType
    _min?: MetricMinAggregateInputType
    _max?: MetricMaxAggregateInputType
  }

  export type MetricGroupByOutputType = {
    id: string
    name: string
    value: number
    unit: string
    category: string
    timestamp: Date
    repoUrl: string | null
    metadata: JsonValue | null
    _count: MetricCountAggregateOutputType | null
    _avg: MetricAvgAggregateOutputType | null
    _sum: MetricSumAggregateOutputType | null
    _min: MetricMinAggregateOutputType | null
    _max: MetricMaxAggregateOutputType | null
  }

  type GetMetricGroupByPayload<T extends MetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricGroupByOutputType[P]>
            : GetScalarType<T[P], MetricGroupByOutputType[P]>
        }
      >
    >


  export type MetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    unit?: boolean
    category?: boolean
    timestamp?: boolean
    repoUrl?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    unit?: boolean
    category?: boolean
    timestamp?: boolean
    repoUrl?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
    unit?: boolean
    category?: boolean
    timestamp?: boolean
    repoUrl?: boolean
    metadata?: boolean
  }, ExtArgs["result"]["metric"]>

  export type MetricSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
    unit?: boolean
    category?: boolean
    timestamp?: boolean
    repoUrl?: boolean
    metadata?: boolean
  }

  export type MetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value" | "unit" | "category" | "timestamp" | "repoUrl" | "metadata", ExtArgs["result"]["metric"]>

  export type $MetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metric"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      value: number
      unit: string
      category: string
      timestamp: Date
      repoUrl: string | null
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["metric"]>
    composites: {}
  }

  type MetricGetPayload<S extends boolean | null | undefined | MetricDefaultArgs> = $Result.GetResult<Prisma.$MetricPayload, S>

  type MetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricCountAggregateInputType | true
    }

  export interface MetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metric'], meta: { name: 'Metric' } }
    /**
     * Find zero or one Metric that matches the filter.
     * @param {MetricFindUniqueArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricFindUniqueArgs>(args: SelectSubset<T, MetricFindUniqueArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetricFindUniqueOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricFindFirstArgs>(args?: SelectSubset<T, MetricFindFirstArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindFirstOrThrowArgs} args - Arguments to find a Metric
     * @example
     * // Get one Metric
     * const metric = await prisma.metric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metrics
     * const metrics = await prisma.metric.findMany()
     * 
     * // Get first 10 Metrics
     * const metrics = await prisma.metric.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricWithIdOnly = await prisma.metric.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricFindManyArgs>(args?: SelectSubset<T, MetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metric.
     * @param {MetricCreateArgs} args - Arguments to create a Metric.
     * @example
     * // Create one Metric
     * const Metric = await prisma.metric.create({
     *   data: {
     *     // ... data to create a Metric
     *   }
     * })
     * 
     */
    create<T extends MetricCreateArgs>(args: SelectSubset<T, MetricCreateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metrics.
     * @param {MetricCreateManyArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricCreateManyArgs>(args?: SelectSubset<T, MetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metrics and returns the data saved in the database.
     * @param {MetricCreateManyAndReturnArgs} args - Arguments to create many Metrics.
     * @example
     * // Create many Metrics
     * const metric = await prisma.metric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metrics and only return the `id`
     * const metricWithIdOnly = await prisma.metric.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Metric.
     * @param {MetricDeleteArgs} args - Arguments to delete one Metric.
     * @example
     * // Delete one Metric
     * const Metric = await prisma.metric.delete({
     *   where: {
     *     // ... filter to delete one Metric
     *   }
     * })
     * 
     */
    delete<T extends MetricDeleteArgs>(args: SelectSubset<T, MetricDeleteArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metric.
     * @param {MetricUpdateArgs} args - Arguments to update one Metric.
     * @example
     * // Update one Metric
     * const metric = await prisma.metric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricUpdateArgs>(args: SelectSubset<T, MetricUpdateArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metrics.
     * @param {MetricDeleteManyArgs} args - Arguments to filter Metrics to delete.
     * @example
     * // Delete a few Metrics
     * const { count } = await prisma.metric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricDeleteManyArgs>(args?: SelectSubset<T, MetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricUpdateManyArgs>(args: SelectSubset<T, MetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrics and returns the data updated in the database.
     * @param {MetricUpdateManyAndReturnArgs} args - Arguments to update many Metrics.
     * @example
     * // Update many Metrics
     * const metric = await prisma.metric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metrics and only return the `id`
     * const metricWithIdOnly = await prisma.metric.updateManyAndReturn({
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
    updateManyAndReturn<T extends MetricUpdateManyAndReturnArgs>(args: SelectSubset<T, MetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Metric.
     * @param {MetricUpsertArgs} args - Arguments to update or create a Metric.
     * @example
     * // Update or create a Metric
     * const metric = await prisma.metric.upsert({
     *   create: {
     *     // ... data to create a Metric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metric we want to update
     *   }
     * })
     */
    upsert<T extends MetricUpsertArgs>(args: SelectSubset<T, MetricUpsertArgs<ExtArgs>>): Prisma__MetricClient<$Result.GetResult<Prisma.$MetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricCountArgs} args - Arguments to filter Metrics to count.
     * @example
     * // Count the number of Metrics
     * const count = await prisma.metric.count({
     *   where: {
     *     // ... the filter for the Metrics we want to count
     *   }
     * })
    **/
    count<T extends MetricCountArgs>(
      args?: Subset<T, MetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetricAggregateArgs>(args: Subset<T, MetricAggregateArgs>): Prisma.PrismaPromise<GetMetricAggregateType<T>>

    /**
     * Group by Metric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricGroupByArgs} args - Group by arguments.
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
      T extends MetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricGroupByArgs['orderBy'] }
        : { orderBy?: MetricGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metric model
   */
  readonly fields: MetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Metric model
   */
  interface MetricFieldRefs {
    readonly id: FieldRef<"Metric", 'String'>
    readonly name: FieldRef<"Metric", 'String'>
    readonly value: FieldRef<"Metric", 'Float'>
    readonly unit: FieldRef<"Metric", 'String'>
    readonly category: FieldRef<"Metric", 'String'>
    readonly timestamp: FieldRef<"Metric", 'DateTime'>
    readonly repoUrl: FieldRef<"Metric", 'String'>
    readonly metadata: FieldRef<"Metric", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Metric findUnique
   */
  export type MetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findUniqueOrThrow
   */
  export type MetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric findFirst
   */
  export type MetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findFirstOrThrow
   */
  export type MetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Filter, which Metric to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrics.
     */
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric findMany
   */
  export type MetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Filter, which Metrics to fetch.
     */
    where?: MetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrics to fetch.
     */
    orderBy?: MetricOrderByWithRelationInput | MetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metrics.
     */
    cursor?: MetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrics.
     */
    skip?: number
    distinct?: MetricScalarFieldEnum | MetricScalarFieldEnum[]
  }

  /**
   * Metric create
   */
  export type MetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data needed to create a Metric.
     */
    data: XOR<MetricCreateInput, MetricUncheckedCreateInput>
  }

  /**
   * Metric createMany
   */
  export type MetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metric createManyAndReturn
   */
  export type MetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data used to create many Metrics.
     */
    data: MetricCreateManyInput | MetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metric update
   */
  export type MetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data needed to update a Metric.
     */
    data: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
    /**
     * Choose, which Metric to update.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric updateMany
   */
  export type MetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
  }

  /**
   * Metric updateManyAndReturn
   */
  export type MetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The data used to update Metrics.
     */
    data: XOR<MetricUpdateManyMutationInput, MetricUncheckedUpdateManyInput>
    /**
     * Filter which Metrics to update
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to update.
     */
    limit?: number
  }

  /**
   * Metric upsert
   */
  export type MetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * The filter to search for the Metric to update in case it exists.
     */
    where: MetricWhereUniqueInput
    /**
     * In case the Metric found by the `where` argument doesn't exist, create a new Metric with this data.
     */
    create: XOR<MetricCreateInput, MetricUncheckedCreateInput>
    /**
     * In case the Metric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricUpdateInput, MetricUncheckedUpdateInput>
  }

  /**
   * Metric delete
   */
  export type MetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
    /**
     * Filter which Metric to delete.
     */
    where: MetricWhereUniqueInput
  }

  /**
   * Metric deleteMany
   */
  export type MetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrics to delete
     */
    where?: MetricWhereInput
    /**
     * Limit how many Metrics to delete.
     */
    limit?: number
  }

  /**
   * Metric without action
   */
  export type MetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metric
     */
    select?: MetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metric
     */
    omit?: MetricOmit<ExtArgs> | null
  }


  /**
   * Model Impact
   */

  export type AggregateImpact = {
    _count: ImpactCountAggregateOutputType | null
    _avg: ImpactAvgAggregateOutputType | null
    _sum: ImpactSumAggregateOutputType | null
    _min: ImpactMinAggregateOutputType | null
    _max: ImpactMaxAggregateOutputType | null
  }

  export type ImpactAvgAggregateOutputType = {
    costSavings: number | null
    carbonReduction: number | null
    performanceGain: number | null
    requestCostReduction: number | null
    responseTimeReduction: number | null
    energySavings: number | null
    treesEquivalent: number | null
    roi: number | null
    uptime: number | null
    tokenSpend: number | null
    activeJobs: number | null
  }

  export type ImpactSumAggregateOutputType = {
    costSavings: number | null
    carbonReduction: number | null
    performanceGain: number | null
    requestCostReduction: number | null
    responseTimeReduction: number | null
    energySavings: number | null
    treesEquivalent: number | null
    roi: number | null
    uptime: number | null
    tokenSpend: number | null
    activeJobs: number | null
  }

  export type ImpactMinAggregateOutputType = {
    id: string | null
    period: string | null
    periodStart: Date | null
    periodEnd: Date | null
    costSavings: number | null
    carbonReduction: number | null
    performanceGain: number | null
    requestCostReduction: number | null
    responseTimeReduction: number | null
    energySavings: number | null
    treesEquivalent: number | null
    roi: number | null
    uptime: number | null
    tokenSpend: number | null
    activeJobs: number | null
  }

  export type ImpactMaxAggregateOutputType = {
    id: string | null
    period: string | null
    periodStart: Date | null
    periodEnd: Date | null
    costSavings: number | null
    carbonReduction: number | null
    performanceGain: number | null
    requestCostReduction: number | null
    responseTimeReduction: number | null
    energySavings: number | null
    treesEquivalent: number | null
    roi: number | null
    uptime: number | null
    tokenSpend: number | null
    activeJobs: number | null
  }

  export type ImpactCountAggregateOutputType = {
    id: number
    period: number
    periodStart: number
    periodEnd: number
    costSavings: number
    carbonReduction: number
    performanceGain: number
    requestCostReduction: number
    responseTimeReduction: number
    energySavings: number
    treesEquivalent: number
    roi: number
    uptime: number
    tokenSpend: number
    activeJobs: number
    _all: number
  }


  export type ImpactAvgAggregateInputType = {
    costSavings?: true
    carbonReduction?: true
    performanceGain?: true
    requestCostReduction?: true
    responseTimeReduction?: true
    energySavings?: true
    treesEquivalent?: true
    roi?: true
    uptime?: true
    tokenSpend?: true
    activeJobs?: true
  }

  export type ImpactSumAggregateInputType = {
    costSavings?: true
    carbonReduction?: true
    performanceGain?: true
    requestCostReduction?: true
    responseTimeReduction?: true
    energySavings?: true
    treesEquivalent?: true
    roi?: true
    uptime?: true
    tokenSpend?: true
    activeJobs?: true
  }

  export type ImpactMinAggregateInputType = {
    id?: true
    period?: true
    periodStart?: true
    periodEnd?: true
    costSavings?: true
    carbonReduction?: true
    performanceGain?: true
    requestCostReduction?: true
    responseTimeReduction?: true
    energySavings?: true
    treesEquivalent?: true
    roi?: true
    uptime?: true
    tokenSpend?: true
    activeJobs?: true
  }

  export type ImpactMaxAggregateInputType = {
    id?: true
    period?: true
    periodStart?: true
    periodEnd?: true
    costSavings?: true
    carbonReduction?: true
    performanceGain?: true
    requestCostReduction?: true
    responseTimeReduction?: true
    energySavings?: true
    treesEquivalent?: true
    roi?: true
    uptime?: true
    tokenSpend?: true
    activeJobs?: true
  }

  export type ImpactCountAggregateInputType = {
    id?: true
    period?: true
    periodStart?: true
    periodEnd?: true
    costSavings?: true
    carbonReduction?: true
    performanceGain?: true
    requestCostReduction?: true
    responseTimeReduction?: true
    energySavings?: true
    treesEquivalent?: true
    roi?: true
    uptime?: true
    tokenSpend?: true
    activeJobs?: true
    _all?: true
  }

  export type ImpactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Impact to aggregate.
     */
    where?: ImpactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Impacts to fetch.
     */
    orderBy?: ImpactOrderByWithRelationInput | ImpactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImpactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Impacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Impacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Impacts
    **/
    _count?: true | ImpactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImpactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImpactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImpactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImpactMaxAggregateInputType
  }

  export type GetImpactAggregateType<T extends ImpactAggregateArgs> = {
        [P in keyof T & keyof AggregateImpact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImpact[P]>
      : GetScalarType<T[P], AggregateImpact[P]>
  }




  export type ImpactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImpactWhereInput
    orderBy?: ImpactOrderByWithAggregationInput | ImpactOrderByWithAggregationInput[]
    by: ImpactScalarFieldEnum[] | ImpactScalarFieldEnum
    having?: ImpactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImpactCountAggregateInputType | true
    _avg?: ImpactAvgAggregateInputType
    _sum?: ImpactSumAggregateInputType
    _min?: ImpactMinAggregateInputType
    _max?: ImpactMaxAggregateInputType
  }

  export type ImpactGroupByOutputType = {
    id: string
    period: string
    periodStart: Date
    periodEnd: Date
    costSavings: number
    carbonReduction: number
    performanceGain: number
    requestCostReduction: number
    responseTimeReduction: number
    energySavings: number
    treesEquivalent: number
    roi: number
    uptime: number
    tokenSpend: number
    activeJobs: number
    _count: ImpactCountAggregateOutputType | null
    _avg: ImpactAvgAggregateOutputType | null
    _sum: ImpactSumAggregateOutputType | null
    _min: ImpactMinAggregateOutputType | null
    _max: ImpactMaxAggregateOutputType | null
  }

  type GetImpactGroupByPayload<T extends ImpactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImpactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImpactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImpactGroupByOutputType[P]>
            : GetScalarType<T[P], ImpactGroupByOutputType[P]>
        }
      >
    >


  export type ImpactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    period?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    costSavings?: boolean
    carbonReduction?: boolean
    performanceGain?: boolean
    requestCostReduction?: boolean
    responseTimeReduction?: boolean
    energySavings?: boolean
    treesEquivalent?: boolean
    roi?: boolean
    uptime?: boolean
    tokenSpend?: boolean
    activeJobs?: boolean
  }, ExtArgs["result"]["impact"]>

  export type ImpactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    period?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    costSavings?: boolean
    carbonReduction?: boolean
    performanceGain?: boolean
    requestCostReduction?: boolean
    responseTimeReduction?: boolean
    energySavings?: boolean
    treesEquivalent?: boolean
    roi?: boolean
    uptime?: boolean
    tokenSpend?: boolean
    activeJobs?: boolean
  }, ExtArgs["result"]["impact"]>

  export type ImpactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    period?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    costSavings?: boolean
    carbonReduction?: boolean
    performanceGain?: boolean
    requestCostReduction?: boolean
    responseTimeReduction?: boolean
    energySavings?: boolean
    treesEquivalent?: boolean
    roi?: boolean
    uptime?: boolean
    tokenSpend?: boolean
    activeJobs?: boolean
  }, ExtArgs["result"]["impact"]>

  export type ImpactSelectScalar = {
    id?: boolean
    period?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    costSavings?: boolean
    carbonReduction?: boolean
    performanceGain?: boolean
    requestCostReduction?: boolean
    responseTimeReduction?: boolean
    energySavings?: boolean
    treesEquivalent?: boolean
    roi?: boolean
    uptime?: boolean
    tokenSpend?: boolean
    activeJobs?: boolean
  }

  export type ImpactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "period" | "periodStart" | "periodEnd" | "costSavings" | "carbonReduction" | "performanceGain" | "requestCostReduction" | "responseTimeReduction" | "energySavings" | "treesEquivalent" | "roi" | "uptime" | "tokenSpend" | "activeJobs", ExtArgs["result"]["impact"]>

  export type $ImpactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Impact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      period: string
      periodStart: Date
      periodEnd: Date
      costSavings: number
      carbonReduction: number
      performanceGain: number
      requestCostReduction: number
      responseTimeReduction: number
      energySavings: number
      treesEquivalent: number
      roi: number
      uptime: number
      tokenSpend: number
      activeJobs: number
    }, ExtArgs["result"]["impact"]>
    composites: {}
  }

  type ImpactGetPayload<S extends boolean | null | undefined | ImpactDefaultArgs> = $Result.GetResult<Prisma.$ImpactPayload, S>

  type ImpactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImpactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImpactCountAggregateInputType | true
    }

  export interface ImpactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Impact'], meta: { name: 'Impact' } }
    /**
     * Find zero or one Impact that matches the filter.
     * @param {ImpactFindUniqueArgs} args - Arguments to find a Impact
     * @example
     * // Get one Impact
     * const impact = await prisma.impact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImpactFindUniqueArgs>(args: SelectSubset<T, ImpactFindUniqueArgs<ExtArgs>>): Prisma__ImpactClient<$Result.GetResult<Prisma.$ImpactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Impact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImpactFindUniqueOrThrowArgs} args - Arguments to find a Impact
     * @example
     * // Get one Impact
     * const impact = await prisma.impact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImpactFindUniqueOrThrowArgs>(args: SelectSubset<T, ImpactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImpactClient<$Result.GetResult<Prisma.$ImpactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Impact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactFindFirstArgs} args - Arguments to find a Impact
     * @example
     * // Get one Impact
     * const impact = await prisma.impact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImpactFindFirstArgs>(args?: SelectSubset<T, ImpactFindFirstArgs<ExtArgs>>): Prisma__ImpactClient<$Result.GetResult<Prisma.$ImpactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Impact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactFindFirstOrThrowArgs} args - Arguments to find a Impact
     * @example
     * // Get one Impact
     * const impact = await prisma.impact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImpactFindFirstOrThrowArgs>(args?: SelectSubset<T, ImpactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImpactClient<$Result.GetResult<Prisma.$ImpactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Impacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Impacts
     * const impacts = await prisma.impact.findMany()
     * 
     * // Get first 10 Impacts
     * const impacts = await prisma.impact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const impactWithIdOnly = await prisma.impact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImpactFindManyArgs>(args?: SelectSubset<T, ImpactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImpactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Impact.
     * @param {ImpactCreateArgs} args - Arguments to create a Impact.
     * @example
     * // Create one Impact
     * const Impact = await prisma.impact.create({
     *   data: {
     *     // ... data to create a Impact
     *   }
     * })
     * 
     */
    create<T extends ImpactCreateArgs>(args: SelectSubset<T, ImpactCreateArgs<ExtArgs>>): Prisma__ImpactClient<$Result.GetResult<Prisma.$ImpactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Impacts.
     * @param {ImpactCreateManyArgs} args - Arguments to create many Impacts.
     * @example
     * // Create many Impacts
     * const impact = await prisma.impact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImpactCreateManyArgs>(args?: SelectSubset<T, ImpactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Impacts and returns the data saved in the database.
     * @param {ImpactCreateManyAndReturnArgs} args - Arguments to create many Impacts.
     * @example
     * // Create many Impacts
     * const impact = await prisma.impact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Impacts and only return the `id`
     * const impactWithIdOnly = await prisma.impact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImpactCreateManyAndReturnArgs>(args?: SelectSubset<T, ImpactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImpactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Impact.
     * @param {ImpactDeleteArgs} args - Arguments to delete one Impact.
     * @example
     * // Delete one Impact
     * const Impact = await prisma.impact.delete({
     *   where: {
     *     // ... filter to delete one Impact
     *   }
     * })
     * 
     */
    delete<T extends ImpactDeleteArgs>(args: SelectSubset<T, ImpactDeleteArgs<ExtArgs>>): Prisma__ImpactClient<$Result.GetResult<Prisma.$ImpactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Impact.
     * @param {ImpactUpdateArgs} args - Arguments to update one Impact.
     * @example
     * // Update one Impact
     * const impact = await prisma.impact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImpactUpdateArgs>(args: SelectSubset<T, ImpactUpdateArgs<ExtArgs>>): Prisma__ImpactClient<$Result.GetResult<Prisma.$ImpactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Impacts.
     * @param {ImpactDeleteManyArgs} args - Arguments to filter Impacts to delete.
     * @example
     * // Delete a few Impacts
     * const { count } = await prisma.impact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImpactDeleteManyArgs>(args?: SelectSubset<T, ImpactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Impacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Impacts
     * const impact = await prisma.impact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImpactUpdateManyArgs>(args: SelectSubset<T, ImpactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Impacts and returns the data updated in the database.
     * @param {ImpactUpdateManyAndReturnArgs} args - Arguments to update many Impacts.
     * @example
     * // Update many Impacts
     * const impact = await prisma.impact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Impacts and only return the `id`
     * const impactWithIdOnly = await prisma.impact.updateManyAndReturn({
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
    updateManyAndReturn<T extends ImpactUpdateManyAndReturnArgs>(args: SelectSubset<T, ImpactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImpactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Impact.
     * @param {ImpactUpsertArgs} args - Arguments to update or create a Impact.
     * @example
     * // Update or create a Impact
     * const impact = await prisma.impact.upsert({
     *   create: {
     *     // ... data to create a Impact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Impact we want to update
     *   }
     * })
     */
    upsert<T extends ImpactUpsertArgs>(args: SelectSubset<T, ImpactUpsertArgs<ExtArgs>>): Prisma__ImpactClient<$Result.GetResult<Prisma.$ImpactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Impacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactCountArgs} args - Arguments to filter Impacts to count.
     * @example
     * // Count the number of Impacts
     * const count = await prisma.impact.count({
     *   where: {
     *     // ... the filter for the Impacts we want to count
     *   }
     * })
    **/
    count<T extends ImpactCountArgs>(
      args?: Subset<T, ImpactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImpactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Impact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImpactAggregateArgs>(args: Subset<T, ImpactAggregateArgs>): Prisma.PrismaPromise<GetImpactAggregateType<T>>

    /**
     * Group by Impact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImpactGroupByArgs} args - Group by arguments.
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
      T extends ImpactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImpactGroupByArgs['orderBy'] }
        : { orderBy?: ImpactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImpactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImpactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Impact model
   */
  readonly fields: ImpactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Impact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImpactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Impact model
   */
  interface ImpactFieldRefs {
    readonly id: FieldRef<"Impact", 'String'>
    readonly period: FieldRef<"Impact", 'String'>
    readonly periodStart: FieldRef<"Impact", 'DateTime'>
    readonly periodEnd: FieldRef<"Impact", 'DateTime'>
    readonly costSavings: FieldRef<"Impact", 'Float'>
    readonly carbonReduction: FieldRef<"Impact", 'Float'>
    readonly performanceGain: FieldRef<"Impact", 'Float'>
    readonly requestCostReduction: FieldRef<"Impact", 'Float'>
    readonly responseTimeReduction: FieldRef<"Impact", 'Float'>
    readonly energySavings: FieldRef<"Impact", 'Float'>
    readonly treesEquivalent: FieldRef<"Impact", 'Float'>
    readonly roi: FieldRef<"Impact", 'Float'>
    readonly uptime: FieldRef<"Impact", 'Float'>
    readonly tokenSpend: FieldRef<"Impact", 'Float'>
    readonly activeJobs: FieldRef<"Impact", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Impact findUnique
   */
  export type ImpactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Impact
     */
    select?: ImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Impact
     */
    omit?: ImpactOmit<ExtArgs> | null
    /**
     * Filter, which Impact to fetch.
     */
    where: ImpactWhereUniqueInput
  }

  /**
   * Impact findUniqueOrThrow
   */
  export type ImpactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Impact
     */
    select?: ImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Impact
     */
    omit?: ImpactOmit<ExtArgs> | null
    /**
     * Filter, which Impact to fetch.
     */
    where: ImpactWhereUniqueInput
  }

  /**
   * Impact findFirst
   */
  export type ImpactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Impact
     */
    select?: ImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Impact
     */
    omit?: ImpactOmit<ExtArgs> | null
    /**
     * Filter, which Impact to fetch.
     */
    where?: ImpactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Impacts to fetch.
     */
    orderBy?: ImpactOrderByWithRelationInput | ImpactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Impacts.
     */
    cursor?: ImpactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Impacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Impacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Impacts.
     */
    distinct?: ImpactScalarFieldEnum | ImpactScalarFieldEnum[]
  }

  /**
   * Impact findFirstOrThrow
   */
  export type ImpactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Impact
     */
    select?: ImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Impact
     */
    omit?: ImpactOmit<ExtArgs> | null
    /**
     * Filter, which Impact to fetch.
     */
    where?: ImpactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Impacts to fetch.
     */
    orderBy?: ImpactOrderByWithRelationInput | ImpactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Impacts.
     */
    cursor?: ImpactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Impacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Impacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Impacts.
     */
    distinct?: ImpactScalarFieldEnum | ImpactScalarFieldEnum[]
  }

  /**
   * Impact findMany
   */
  export type ImpactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Impact
     */
    select?: ImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Impact
     */
    omit?: ImpactOmit<ExtArgs> | null
    /**
     * Filter, which Impacts to fetch.
     */
    where?: ImpactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Impacts to fetch.
     */
    orderBy?: ImpactOrderByWithRelationInput | ImpactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Impacts.
     */
    cursor?: ImpactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Impacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Impacts.
     */
    skip?: number
    distinct?: ImpactScalarFieldEnum | ImpactScalarFieldEnum[]
  }

  /**
   * Impact create
   */
  export type ImpactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Impact
     */
    select?: ImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Impact
     */
    omit?: ImpactOmit<ExtArgs> | null
    /**
     * The data needed to create a Impact.
     */
    data: XOR<ImpactCreateInput, ImpactUncheckedCreateInput>
  }

  /**
   * Impact createMany
   */
  export type ImpactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Impacts.
     */
    data: ImpactCreateManyInput | ImpactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Impact createManyAndReturn
   */
  export type ImpactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Impact
     */
    select?: ImpactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Impact
     */
    omit?: ImpactOmit<ExtArgs> | null
    /**
     * The data used to create many Impacts.
     */
    data: ImpactCreateManyInput | ImpactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Impact update
   */
  export type ImpactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Impact
     */
    select?: ImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Impact
     */
    omit?: ImpactOmit<ExtArgs> | null
    /**
     * The data needed to update a Impact.
     */
    data: XOR<ImpactUpdateInput, ImpactUncheckedUpdateInput>
    /**
     * Choose, which Impact to update.
     */
    where: ImpactWhereUniqueInput
  }

  /**
   * Impact updateMany
   */
  export type ImpactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Impacts.
     */
    data: XOR<ImpactUpdateManyMutationInput, ImpactUncheckedUpdateManyInput>
    /**
     * Filter which Impacts to update
     */
    where?: ImpactWhereInput
    /**
     * Limit how many Impacts to update.
     */
    limit?: number
  }

  /**
   * Impact updateManyAndReturn
   */
  export type ImpactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Impact
     */
    select?: ImpactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Impact
     */
    omit?: ImpactOmit<ExtArgs> | null
    /**
     * The data used to update Impacts.
     */
    data: XOR<ImpactUpdateManyMutationInput, ImpactUncheckedUpdateManyInput>
    /**
     * Filter which Impacts to update
     */
    where?: ImpactWhereInput
    /**
     * Limit how many Impacts to update.
     */
    limit?: number
  }

  /**
   * Impact upsert
   */
  export type ImpactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Impact
     */
    select?: ImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Impact
     */
    omit?: ImpactOmit<ExtArgs> | null
    /**
     * The filter to search for the Impact to update in case it exists.
     */
    where: ImpactWhereUniqueInput
    /**
     * In case the Impact found by the `where` argument doesn't exist, create a new Impact with this data.
     */
    create: XOR<ImpactCreateInput, ImpactUncheckedCreateInput>
    /**
     * In case the Impact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImpactUpdateInput, ImpactUncheckedUpdateInput>
  }

  /**
   * Impact delete
   */
  export type ImpactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Impact
     */
    select?: ImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Impact
     */
    omit?: ImpactOmit<ExtArgs> | null
    /**
     * Filter which Impact to delete.
     */
    where: ImpactWhereUniqueInput
  }

  /**
   * Impact deleteMany
   */
  export type ImpactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Impacts to delete
     */
    where?: ImpactWhereInput
    /**
     * Limit how many Impacts to delete.
     */
    limit?: number
  }

  /**
   * Impact without action
   */
  export type ImpactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Impact
     */
    select?: ImpactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Impact
     */
    omit?: ImpactOmit<ExtArgs> | null
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


  export const WaitlistEntryScalarFieldEnum: {
    id: 'id',
    email: 'email',
    githubUrl: 'githubUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WaitlistEntryScalarFieldEnum = (typeof WaitlistEntryScalarFieldEnum)[keyof typeof WaitlistEntryScalarFieldEnum]


  export const HotspotScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    filePath: 'filePath',
    lineNumber: 'lineNumber',
    category: 'category',
    priority: 'priority',
    status: 'status',
    severity: 'severity',
    impact: 'impact',
    estimatedSavings: 'estimatedSavings',
    repoUrl: 'repoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    resolvedAt: 'resolvedAt'
  };

  export type HotspotScalarFieldEnum = (typeof HotspotScalarFieldEnum)[keyof typeof HotspotScalarFieldEnum]


  export const OptimizationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    type: 'type',
    status: 'status',
    beforeCode: 'beforeCode',
    afterCode: 'afterCode',
    filePath: 'filePath',
    lineNumber: 'lineNumber',
    performanceGain: 'performanceGain',
    costSavings: 'costSavings',
    carbonReduction: 'carbonReduction',
    executionTime: 'executionTime',
    repoUrl: 'repoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    appliedAt: 'appliedAt',
    hotspotId: 'hotspotId'
  };

  export type OptimizationScalarFieldEnum = (typeof OptimizationScalarFieldEnum)[keyof typeof OptimizationScalarFieldEnum]


  export const OptimizationRunScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    repoUrl: 'repoUrl',
    status: 'status',
    startedAt: 'startedAt',
    completedAt: 'completedAt',
    failedAt: 'failedAt',
    errorMessage: 'errorMessage',
    hotspotsFound: 'hotspotsFound',
    optimizationsApplied: 'optimizationsApplied',
    totalImprovements: 'totalImprovements'
  };

  export type OptimizationRunScalarFieldEnum = (typeof OptimizationRunScalarFieldEnum)[keyof typeof OptimizationRunScalarFieldEnum]


  export const MetricScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value',
    unit: 'unit',
    category: 'category',
    timestamp: 'timestamp',
    repoUrl: 'repoUrl',
    metadata: 'metadata'
  };

  export type MetricScalarFieldEnum = (typeof MetricScalarFieldEnum)[keyof typeof MetricScalarFieldEnum]


  export const ImpactScalarFieldEnum: {
    id: 'id',
    period: 'period',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    costSavings: 'costSavings',
    carbonReduction: 'carbonReduction',
    performanceGain: 'performanceGain',
    requestCostReduction: 'requestCostReduction',
    responseTimeReduction: 'responseTimeReduction',
    energySavings: 'energySavings',
    treesEquivalent: 'treesEquivalent',
    roi: 'roi',
    uptime: 'uptime',
    tokenSpend: 'tokenSpend',
    activeJobs: 'activeJobs'
  };

  export type ImpactScalarFieldEnum = (typeof ImpactScalarFieldEnum)[keyof typeof ImpactScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type WaitlistEntryWhereInput = {
    AND?: WaitlistEntryWhereInput | WaitlistEntryWhereInput[]
    OR?: WaitlistEntryWhereInput[]
    NOT?: WaitlistEntryWhereInput | WaitlistEntryWhereInput[]
    id?: StringFilter<"WaitlistEntry"> | string
    email?: StringFilter<"WaitlistEntry"> | string
    githubUrl?: StringNullableFilter<"WaitlistEntry"> | string | null
    createdAt?: DateTimeFilter<"WaitlistEntry"> | Date | string
    updatedAt?: DateTimeFilter<"WaitlistEntry"> | Date | string
  }

  export type WaitlistEntryOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    githubUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaitlistEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: WaitlistEntryWhereInput | WaitlistEntryWhereInput[]
    OR?: WaitlistEntryWhereInput[]
    NOT?: WaitlistEntryWhereInput | WaitlistEntryWhereInput[]
    githubUrl?: StringNullableFilter<"WaitlistEntry"> | string | null
    createdAt?: DateTimeFilter<"WaitlistEntry"> | Date | string
    updatedAt?: DateTimeFilter<"WaitlistEntry"> | Date | string
  }, "id" | "email">

  export type WaitlistEntryOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    githubUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WaitlistEntryCountOrderByAggregateInput
    _max?: WaitlistEntryMaxOrderByAggregateInput
    _min?: WaitlistEntryMinOrderByAggregateInput
  }

  export type WaitlistEntryScalarWhereWithAggregatesInput = {
    AND?: WaitlistEntryScalarWhereWithAggregatesInput | WaitlistEntryScalarWhereWithAggregatesInput[]
    OR?: WaitlistEntryScalarWhereWithAggregatesInput[]
    NOT?: WaitlistEntryScalarWhereWithAggregatesInput | WaitlistEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WaitlistEntry"> | string
    email?: StringWithAggregatesFilter<"WaitlistEntry"> | string
    githubUrl?: StringNullableWithAggregatesFilter<"WaitlistEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WaitlistEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WaitlistEntry"> | Date | string
  }

  export type HotspotWhereInput = {
    AND?: HotspotWhereInput | HotspotWhereInput[]
    OR?: HotspotWhereInput[]
    NOT?: HotspotWhereInput | HotspotWhereInput[]
    id?: StringFilter<"Hotspot"> | string
    title?: StringFilter<"Hotspot"> | string
    description?: StringFilter<"Hotspot"> | string
    filePath?: StringFilter<"Hotspot"> | string
    lineNumber?: IntNullableFilter<"Hotspot"> | number | null
    category?: StringFilter<"Hotspot"> | string
    priority?: StringFilter<"Hotspot"> | string
    status?: StringFilter<"Hotspot"> | string
    severity?: FloatFilter<"Hotspot"> | number
    impact?: FloatFilter<"Hotspot"> | number
    estimatedSavings?: FloatNullableFilter<"Hotspot"> | number | null
    repoUrl?: StringNullableFilter<"Hotspot"> | string | null
    createdAt?: DateTimeFilter<"Hotspot"> | Date | string
    updatedAt?: DateTimeFilter<"Hotspot"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Hotspot"> | Date | string | null
    optimizations?: OptimizationListRelationFilter
  }

  export type HotspotOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrderInput | SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    impact?: SortOrder
    estimatedSavings?: SortOrderInput | SortOrder
    repoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    optimizations?: OptimizationOrderByRelationAggregateInput
  }

  export type HotspotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HotspotWhereInput | HotspotWhereInput[]
    OR?: HotspotWhereInput[]
    NOT?: HotspotWhereInput | HotspotWhereInput[]
    title?: StringFilter<"Hotspot"> | string
    description?: StringFilter<"Hotspot"> | string
    filePath?: StringFilter<"Hotspot"> | string
    lineNumber?: IntNullableFilter<"Hotspot"> | number | null
    category?: StringFilter<"Hotspot"> | string
    priority?: StringFilter<"Hotspot"> | string
    status?: StringFilter<"Hotspot"> | string
    severity?: FloatFilter<"Hotspot"> | number
    impact?: FloatFilter<"Hotspot"> | number
    estimatedSavings?: FloatNullableFilter<"Hotspot"> | number | null
    repoUrl?: StringNullableFilter<"Hotspot"> | string | null
    createdAt?: DateTimeFilter<"Hotspot"> | Date | string
    updatedAt?: DateTimeFilter<"Hotspot"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Hotspot"> | Date | string | null
    optimizations?: OptimizationListRelationFilter
  }, "id">

  export type HotspotOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrderInput | SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    impact?: SortOrder
    estimatedSavings?: SortOrderInput | SortOrder
    repoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _count?: HotspotCountOrderByAggregateInput
    _avg?: HotspotAvgOrderByAggregateInput
    _max?: HotspotMaxOrderByAggregateInput
    _min?: HotspotMinOrderByAggregateInput
    _sum?: HotspotSumOrderByAggregateInput
  }

  export type HotspotScalarWhereWithAggregatesInput = {
    AND?: HotspotScalarWhereWithAggregatesInput | HotspotScalarWhereWithAggregatesInput[]
    OR?: HotspotScalarWhereWithAggregatesInput[]
    NOT?: HotspotScalarWhereWithAggregatesInput | HotspotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hotspot"> | string
    title?: StringWithAggregatesFilter<"Hotspot"> | string
    description?: StringWithAggregatesFilter<"Hotspot"> | string
    filePath?: StringWithAggregatesFilter<"Hotspot"> | string
    lineNumber?: IntNullableWithAggregatesFilter<"Hotspot"> | number | null
    category?: StringWithAggregatesFilter<"Hotspot"> | string
    priority?: StringWithAggregatesFilter<"Hotspot"> | string
    status?: StringWithAggregatesFilter<"Hotspot"> | string
    severity?: FloatWithAggregatesFilter<"Hotspot"> | number
    impact?: FloatWithAggregatesFilter<"Hotspot"> | number
    estimatedSavings?: FloatNullableWithAggregatesFilter<"Hotspot"> | number | null
    repoUrl?: StringNullableWithAggregatesFilter<"Hotspot"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Hotspot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hotspot"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Hotspot"> | Date | string | null
  }

  export type OptimizationWhereInput = {
    AND?: OptimizationWhereInput | OptimizationWhereInput[]
    OR?: OptimizationWhereInput[]
    NOT?: OptimizationWhereInput | OptimizationWhereInput[]
    id?: StringFilter<"Optimization"> | string
    title?: StringFilter<"Optimization"> | string
    description?: StringFilter<"Optimization"> | string
    category?: StringFilter<"Optimization"> | string
    type?: StringFilter<"Optimization"> | string
    status?: StringFilter<"Optimization"> | string
    beforeCode?: StringNullableFilter<"Optimization"> | string | null
    afterCode?: StringNullableFilter<"Optimization"> | string | null
    filePath?: StringFilter<"Optimization"> | string
    lineNumber?: IntNullableFilter<"Optimization"> | number | null
    performanceGain?: FloatNullableFilter<"Optimization"> | number | null
    costSavings?: FloatNullableFilter<"Optimization"> | number | null
    carbonReduction?: FloatNullableFilter<"Optimization"> | number | null
    executionTime?: IntNullableFilter<"Optimization"> | number | null
    repoUrl?: StringNullableFilter<"Optimization"> | string | null
    createdAt?: DateTimeFilter<"Optimization"> | Date | string
    updatedAt?: DateTimeFilter<"Optimization"> | Date | string
    appliedAt?: DateTimeNullableFilter<"Optimization"> | Date | string | null
    hotspotId?: StringNullableFilter<"Optimization"> | string | null
    hotspot?: XOR<HotspotNullableScalarRelationFilter, HotspotWhereInput> | null
    optimizationRuns?: OptimizationRunListRelationFilter
  }

  export type OptimizationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    type?: SortOrder
    status?: SortOrder
    beforeCode?: SortOrderInput | SortOrder
    afterCode?: SortOrderInput | SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrderInput | SortOrder
    performanceGain?: SortOrderInput | SortOrder
    costSavings?: SortOrderInput | SortOrder
    carbonReduction?: SortOrderInput | SortOrder
    executionTime?: SortOrderInput | SortOrder
    repoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appliedAt?: SortOrderInput | SortOrder
    hotspotId?: SortOrderInput | SortOrder
    hotspot?: HotspotOrderByWithRelationInput
    optimizationRuns?: OptimizationRunOrderByRelationAggregateInput
  }

  export type OptimizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OptimizationWhereInput | OptimizationWhereInput[]
    OR?: OptimizationWhereInput[]
    NOT?: OptimizationWhereInput | OptimizationWhereInput[]
    title?: StringFilter<"Optimization"> | string
    description?: StringFilter<"Optimization"> | string
    category?: StringFilter<"Optimization"> | string
    type?: StringFilter<"Optimization"> | string
    status?: StringFilter<"Optimization"> | string
    beforeCode?: StringNullableFilter<"Optimization"> | string | null
    afterCode?: StringNullableFilter<"Optimization"> | string | null
    filePath?: StringFilter<"Optimization"> | string
    lineNumber?: IntNullableFilter<"Optimization"> | number | null
    performanceGain?: FloatNullableFilter<"Optimization"> | number | null
    costSavings?: FloatNullableFilter<"Optimization"> | number | null
    carbonReduction?: FloatNullableFilter<"Optimization"> | number | null
    executionTime?: IntNullableFilter<"Optimization"> | number | null
    repoUrl?: StringNullableFilter<"Optimization"> | string | null
    createdAt?: DateTimeFilter<"Optimization"> | Date | string
    updatedAt?: DateTimeFilter<"Optimization"> | Date | string
    appliedAt?: DateTimeNullableFilter<"Optimization"> | Date | string | null
    hotspotId?: StringNullableFilter<"Optimization"> | string | null
    hotspot?: XOR<HotspotNullableScalarRelationFilter, HotspotWhereInput> | null
    optimizationRuns?: OptimizationRunListRelationFilter
  }, "id">

  export type OptimizationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    type?: SortOrder
    status?: SortOrder
    beforeCode?: SortOrderInput | SortOrder
    afterCode?: SortOrderInput | SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrderInput | SortOrder
    performanceGain?: SortOrderInput | SortOrder
    costSavings?: SortOrderInput | SortOrder
    carbonReduction?: SortOrderInput | SortOrder
    executionTime?: SortOrderInput | SortOrder
    repoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appliedAt?: SortOrderInput | SortOrder
    hotspotId?: SortOrderInput | SortOrder
    _count?: OptimizationCountOrderByAggregateInput
    _avg?: OptimizationAvgOrderByAggregateInput
    _max?: OptimizationMaxOrderByAggregateInput
    _min?: OptimizationMinOrderByAggregateInput
    _sum?: OptimizationSumOrderByAggregateInput
  }

  export type OptimizationScalarWhereWithAggregatesInput = {
    AND?: OptimizationScalarWhereWithAggregatesInput | OptimizationScalarWhereWithAggregatesInput[]
    OR?: OptimizationScalarWhereWithAggregatesInput[]
    NOT?: OptimizationScalarWhereWithAggregatesInput | OptimizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Optimization"> | string
    title?: StringWithAggregatesFilter<"Optimization"> | string
    description?: StringWithAggregatesFilter<"Optimization"> | string
    category?: StringWithAggregatesFilter<"Optimization"> | string
    type?: StringWithAggregatesFilter<"Optimization"> | string
    status?: StringWithAggregatesFilter<"Optimization"> | string
    beforeCode?: StringNullableWithAggregatesFilter<"Optimization"> | string | null
    afterCode?: StringNullableWithAggregatesFilter<"Optimization"> | string | null
    filePath?: StringWithAggregatesFilter<"Optimization"> | string
    lineNumber?: IntNullableWithAggregatesFilter<"Optimization"> | number | null
    performanceGain?: FloatNullableWithAggregatesFilter<"Optimization"> | number | null
    costSavings?: FloatNullableWithAggregatesFilter<"Optimization"> | number | null
    carbonReduction?: FloatNullableWithAggregatesFilter<"Optimization"> | number | null
    executionTime?: IntNullableWithAggregatesFilter<"Optimization"> | number | null
    repoUrl?: StringNullableWithAggregatesFilter<"Optimization"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Optimization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Optimization"> | Date | string
    appliedAt?: DateTimeNullableWithAggregatesFilter<"Optimization"> | Date | string | null
    hotspotId?: StringNullableWithAggregatesFilter<"Optimization"> | string | null
  }

  export type OptimizationRunWhereInput = {
    AND?: OptimizationRunWhereInput | OptimizationRunWhereInput[]
    OR?: OptimizationRunWhereInput[]
    NOT?: OptimizationRunWhereInput | OptimizationRunWhereInput[]
    id?: StringFilter<"OptimizationRun"> | string
    jobId?: StringFilter<"OptimizationRun"> | string
    repoUrl?: StringFilter<"OptimizationRun"> | string
    status?: StringFilter<"OptimizationRun"> | string
    startedAt?: DateTimeFilter<"OptimizationRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"OptimizationRun"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"OptimizationRun"> | Date | string | null
    errorMessage?: StringNullableFilter<"OptimizationRun"> | string | null
    hotspotsFound?: IntFilter<"OptimizationRun"> | number
    optimizationsApplied?: IntFilter<"OptimizationRun"> | number
    totalImprovements?: FloatNullableFilter<"OptimizationRun"> | number | null
    optimizations?: OptimizationListRelationFilter
  }

  export type OptimizationRunOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    repoUrl?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    hotspotsFound?: SortOrder
    optimizationsApplied?: SortOrder
    totalImprovements?: SortOrderInput | SortOrder
    optimizations?: OptimizationOrderByRelationAggregateInput
  }

  export type OptimizationRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    jobId?: string
    AND?: OptimizationRunWhereInput | OptimizationRunWhereInput[]
    OR?: OptimizationRunWhereInput[]
    NOT?: OptimizationRunWhereInput | OptimizationRunWhereInput[]
    repoUrl?: StringFilter<"OptimizationRun"> | string
    status?: StringFilter<"OptimizationRun"> | string
    startedAt?: DateTimeFilter<"OptimizationRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"OptimizationRun"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"OptimizationRun"> | Date | string | null
    errorMessage?: StringNullableFilter<"OptimizationRun"> | string | null
    hotspotsFound?: IntFilter<"OptimizationRun"> | number
    optimizationsApplied?: IntFilter<"OptimizationRun"> | number
    totalImprovements?: FloatNullableFilter<"OptimizationRun"> | number | null
    optimizations?: OptimizationListRelationFilter
  }, "id" | "jobId">

  export type OptimizationRunOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    repoUrl?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    hotspotsFound?: SortOrder
    optimizationsApplied?: SortOrder
    totalImprovements?: SortOrderInput | SortOrder
    _count?: OptimizationRunCountOrderByAggregateInput
    _avg?: OptimizationRunAvgOrderByAggregateInput
    _max?: OptimizationRunMaxOrderByAggregateInput
    _min?: OptimizationRunMinOrderByAggregateInput
    _sum?: OptimizationRunSumOrderByAggregateInput
  }

  export type OptimizationRunScalarWhereWithAggregatesInput = {
    AND?: OptimizationRunScalarWhereWithAggregatesInput | OptimizationRunScalarWhereWithAggregatesInput[]
    OR?: OptimizationRunScalarWhereWithAggregatesInput[]
    NOT?: OptimizationRunScalarWhereWithAggregatesInput | OptimizationRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OptimizationRun"> | string
    jobId?: StringWithAggregatesFilter<"OptimizationRun"> | string
    repoUrl?: StringWithAggregatesFilter<"OptimizationRun"> | string
    status?: StringWithAggregatesFilter<"OptimizationRun"> | string
    startedAt?: DateTimeWithAggregatesFilter<"OptimizationRun"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"OptimizationRun"> | Date | string | null
    failedAt?: DateTimeNullableWithAggregatesFilter<"OptimizationRun"> | Date | string | null
    errorMessage?: StringNullableWithAggregatesFilter<"OptimizationRun"> | string | null
    hotspotsFound?: IntWithAggregatesFilter<"OptimizationRun"> | number
    optimizationsApplied?: IntWithAggregatesFilter<"OptimizationRun"> | number
    totalImprovements?: FloatNullableWithAggregatesFilter<"OptimizationRun"> | number | null
  }

  export type MetricWhereInput = {
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    id?: StringFilter<"Metric"> | string
    name?: StringFilter<"Metric"> | string
    value?: FloatFilter<"Metric"> | number
    unit?: StringFilter<"Metric"> | string
    category?: StringFilter<"Metric"> | string
    timestamp?: DateTimeFilter<"Metric"> | Date | string
    repoUrl?: StringNullableFilter<"Metric"> | string | null
    metadata?: JsonNullableFilter<"Metric">
  }

  export type MetricOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    timestamp?: SortOrder
    repoUrl?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
  }

  export type MetricWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MetricWhereInput | MetricWhereInput[]
    OR?: MetricWhereInput[]
    NOT?: MetricWhereInput | MetricWhereInput[]
    name?: StringFilter<"Metric"> | string
    value?: FloatFilter<"Metric"> | number
    unit?: StringFilter<"Metric"> | string
    category?: StringFilter<"Metric"> | string
    timestamp?: DateTimeFilter<"Metric"> | Date | string
    repoUrl?: StringNullableFilter<"Metric"> | string | null
    metadata?: JsonNullableFilter<"Metric">
  }, "id">

  export type MetricOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    timestamp?: SortOrder
    repoUrl?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: MetricCountOrderByAggregateInput
    _avg?: MetricAvgOrderByAggregateInput
    _max?: MetricMaxOrderByAggregateInput
    _min?: MetricMinOrderByAggregateInput
    _sum?: MetricSumOrderByAggregateInput
  }

  export type MetricScalarWhereWithAggregatesInput = {
    AND?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    OR?: MetricScalarWhereWithAggregatesInput[]
    NOT?: MetricScalarWhereWithAggregatesInput | MetricScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Metric"> | string
    name?: StringWithAggregatesFilter<"Metric"> | string
    value?: FloatWithAggregatesFilter<"Metric"> | number
    unit?: StringWithAggregatesFilter<"Metric"> | string
    category?: StringWithAggregatesFilter<"Metric"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Metric"> | Date | string
    repoUrl?: StringNullableWithAggregatesFilter<"Metric"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Metric">
  }

  export type ImpactWhereInput = {
    AND?: ImpactWhereInput | ImpactWhereInput[]
    OR?: ImpactWhereInput[]
    NOT?: ImpactWhereInput | ImpactWhereInput[]
    id?: StringFilter<"Impact"> | string
    period?: StringFilter<"Impact"> | string
    periodStart?: DateTimeFilter<"Impact"> | Date | string
    periodEnd?: DateTimeFilter<"Impact"> | Date | string
    costSavings?: FloatFilter<"Impact"> | number
    carbonReduction?: FloatFilter<"Impact"> | number
    performanceGain?: FloatFilter<"Impact"> | number
    requestCostReduction?: FloatFilter<"Impact"> | number
    responseTimeReduction?: FloatFilter<"Impact"> | number
    energySavings?: FloatFilter<"Impact"> | number
    treesEquivalent?: FloatFilter<"Impact"> | number
    roi?: FloatFilter<"Impact"> | number
    uptime?: FloatFilter<"Impact"> | number
    tokenSpend?: FloatFilter<"Impact"> | number
    activeJobs?: IntFilter<"Impact"> | number
  }

  export type ImpactOrderByWithRelationInput = {
    id?: SortOrder
    period?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    costSavings?: SortOrder
    carbonReduction?: SortOrder
    performanceGain?: SortOrder
    requestCostReduction?: SortOrder
    responseTimeReduction?: SortOrder
    energySavings?: SortOrder
    treesEquivalent?: SortOrder
    roi?: SortOrder
    uptime?: SortOrder
    tokenSpend?: SortOrder
    activeJobs?: SortOrder
  }

  export type ImpactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    period_periodStart?: ImpactPeriodPeriodStartCompoundUniqueInput
    AND?: ImpactWhereInput | ImpactWhereInput[]
    OR?: ImpactWhereInput[]
    NOT?: ImpactWhereInput | ImpactWhereInput[]
    period?: StringFilter<"Impact"> | string
    periodStart?: DateTimeFilter<"Impact"> | Date | string
    periodEnd?: DateTimeFilter<"Impact"> | Date | string
    costSavings?: FloatFilter<"Impact"> | number
    carbonReduction?: FloatFilter<"Impact"> | number
    performanceGain?: FloatFilter<"Impact"> | number
    requestCostReduction?: FloatFilter<"Impact"> | number
    responseTimeReduction?: FloatFilter<"Impact"> | number
    energySavings?: FloatFilter<"Impact"> | number
    treesEquivalent?: FloatFilter<"Impact"> | number
    roi?: FloatFilter<"Impact"> | number
    uptime?: FloatFilter<"Impact"> | number
    tokenSpend?: FloatFilter<"Impact"> | number
    activeJobs?: IntFilter<"Impact"> | number
  }, "id" | "period_periodStart">

  export type ImpactOrderByWithAggregationInput = {
    id?: SortOrder
    period?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    costSavings?: SortOrder
    carbonReduction?: SortOrder
    performanceGain?: SortOrder
    requestCostReduction?: SortOrder
    responseTimeReduction?: SortOrder
    energySavings?: SortOrder
    treesEquivalent?: SortOrder
    roi?: SortOrder
    uptime?: SortOrder
    tokenSpend?: SortOrder
    activeJobs?: SortOrder
    _count?: ImpactCountOrderByAggregateInput
    _avg?: ImpactAvgOrderByAggregateInput
    _max?: ImpactMaxOrderByAggregateInput
    _min?: ImpactMinOrderByAggregateInput
    _sum?: ImpactSumOrderByAggregateInput
  }

  export type ImpactScalarWhereWithAggregatesInput = {
    AND?: ImpactScalarWhereWithAggregatesInput | ImpactScalarWhereWithAggregatesInput[]
    OR?: ImpactScalarWhereWithAggregatesInput[]
    NOT?: ImpactScalarWhereWithAggregatesInput | ImpactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Impact"> | string
    period?: StringWithAggregatesFilter<"Impact"> | string
    periodStart?: DateTimeWithAggregatesFilter<"Impact"> | Date | string
    periodEnd?: DateTimeWithAggregatesFilter<"Impact"> | Date | string
    costSavings?: FloatWithAggregatesFilter<"Impact"> | number
    carbonReduction?: FloatWithAggregatesFilter<"Impact"> | number
    performanceGain?: FloatWithAggregatesFilter<"Impact"> | number
    requestCostReduction?: FloatWithAggregatesFilter<"Impact"> | number
    responseTimeReduction?: FloatWithAggregatesFilter<"Impact"> | number
    energySavings?: FloatWithAggregatesFilter<"Impact"> | number
    treesEquivalent?: FloatWithAggregatesFilter<"Impact"> | number
    roi?: FloatWithAggregatesFilter<"Impact"> | number
    uptime?: FloatWithAggregatesFilter<"Impact"> | number
    tokenSpend?: FloatWithAggregatesFilter<"Impact"> | number
    activeJobs?: IntWithAggregatesFilter<"Impact"> | number
  }

  export type WaitlistEntryCreateInput = {
    id?: string
    email: string
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaitlistEntryUncheckedCreateInput = {
    id?: string
    email: string
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaitlistEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitlistEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitlistEntryCreateManyInput = {
    id?: string
    email: string
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WaitlistEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaitlistEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotspotCreateInput = {
    id?: string
    title: string
    description: string
    filePath: string
    lineNumber?: number | null
    category: string
    priority: string
    status: string
    severity: number
    impact: number
    estimatedSavings?: number | null
    repoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    optimizations?: OptimizationCreateNestedManyWithoutHotspotInput
  }

  export type HotspotUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    filePath: string
    lineNumber?: number | null
    category: string
    priority: string
    status: string
    severity: number
    impact: number
    estimatedSavings?: number | null
    repoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    optimizations?: OptimizationUncheckedCreateNestedManyWithoutHotspotInput
  }

  export type HotspotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: FloatFieldUpdateOperationsInput | number
    impact?: FloatFieldUpdateOperationsInput | number
    estimatedSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optimizations?: OptimizationUpdateManyWithoutHotspotNestedInput
  }

  export type HotspotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: FloatFieldUpdateOperationsInput | number
    impact?: FloatFieldUpdateOperationsInput | number
    estimatedSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optimizations?: OptimizationUncheckedUpdateManyWithoutHotspotNestedInput
  }

  export type HotspotCreateManyInput = {
    id?: string
    title: string
    description: string
    filePath: string
    lineNumber?: number | null
    category: string
    priority: string
    status: string
    severity: number
    impact: number
    estimatedSavings?: number | null
    repoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type HotspotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: FloatFieldUpdateOperationsInput | number
    impact?: FloatFieldUpdateOperationsInput | number
    estimatedSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HotspotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: FloatFieldUpdateOperationsInput | number
    impact?: FloatFieldUpdateOperationsInput | number
    estimatedSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OptimizationCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    type: string
    status: string
    beforeCode?: string | null
    afterCode?: string | null
    filePath: string
    lineNumber?: number | null
    performanceGain?: number | null
    costSavings?: number | null
    carbonReduction?: number | null
    executionTime?: number | null
    repoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appliedAt?: Date | string | null
    hotspot?: HotspotCreateNestedOneWithoutOptimizationsInput
    optimizationRuns?: OptimizationRunCreateNestedManyWithoutOptimizationsInput
  }

  export type OptimizationUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    type: string
    status: string
    beforeCode?: string | null
    afterCode?: string | null
    filePath: string
    lineNumber?: number | null
    performanceGain?: number | null
    costSavings?: number | null
    carbonReduction?: number | null
    executionTime?: number | null
    repoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appliedAt?: Date | string | null
    hotspotId?: string | null
    optimizationRuns?: OptimizationRunUncheckedCreateNestedManyWithoutOptimizationsInput
  }

  export type OptimizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    beforeCode?: NullableStringFieldUpdateOperationsInput | string | null
    afterCode?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    performanceGain?: NullableFloatFieldUpdateOperationsInput | number | null
    costSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    carbonReduction?: NullableFloatFieldUpdateOperationsInput | number | null
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotspot?: HotspotUpdateOneWithoutOptimizationsNestedInput
    optimizationRuns?: OptimizationRunUpdateManyWithoutOptimizationsNestedInput
  }

  export type OptimizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    beforeCode?: NullableStringFieldUpdateOperationsInput | string | null
    afterCode?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    performanceGain?: NullableFloatFieldUpdateOperationsInput | number | null
    costSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    carbonReduction?: NullableFloatFieldUpdateOperationsInput | number | null
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotspotId?: NullableStringFieldUpdateOperationsInput | string | null
    optimizationRuns?: OptimizationRunUncheckedUpdateManyWithoutOptimizationsNestedInput
  }

  export type OptimizationCreateManyInput = {
    id?: string
    title: string
    description: string
    category: string
    type: string
    status: string
    beforeCode?: string | null
    afterCode?: string | null
    filePath: string
    lineNumber?: number | null
    performanceGain?: number | null
    costSavings?: number | null
    carbonReduction?: number | null
    executionTime?: number | null
    repoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appliedAt?: Date | string | null
    hotspotId?: string | null
  }

  export type OptimizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    beforeCode?: NullableStringFieldUpdateOperationsInput | string | null
    afterCode?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    performanceGain?: NullableFloatFieldUpdateOperationsInput | number | null
    costSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    carbonReduction?: NullableFloatFieldUpdateOperationsInput | number | null
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OptimizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    beforeCode?: NullableStringFieldUpdateOperationsInput | string | null
    afterCode?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    performanceGain?: NullableFloatFieldUpdateOperationsInput | number | null
    costSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    carbonReduction?: NullableFloatFieldUpdateOperationsInput | number | null
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotspotId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OptimizationRunCreateInput = {
    id?: string
    jobId: string
    repoUrl: string
    status: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    hotspotsFound?: number
    optimizationsApplied?: number
    totalImprovements?: number | null
    optimizations?: OptimizationCreateNestedManyWithoutOptimizationRunsInput
  }

  export type OptimizationRunUncheckedCreateInput = {
    id?: string
    jobId: string
    repoUrl: string
    status: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    hotspotsFound?: number
    optimizationsApplied?: number
    totalImprovements?: number | null
    optimizations?: OptimizationUncheckedCreateNestedManyWithoutOptimizationRunsInput
  }

  export type OptimizationRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    hotspotsFound?: IntFieldUpdateOperationsInput | number
    optimizationsApplied?: IntFieldUpdateOperationsInput | number
    totalImprovements?: NullableFloatFieldUpdateOperationsInput | number | null
    optimizations?: OptimizationUpdateManyWithoutOptimizationRunsNestedInput
  }

  export type OptimizationRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    hotspotsFound?: IntFieldUpdateOperationsInput | number
    optimizationsApplied?: IntFieldUpdateOperationsInput | number
    totalImprovements?: NullableFloatFieldUpdateOperationsInput | number | null
    optimizations?: OptimizationUncheckedUpdateManyWithoutOptimizationRunsNestedInput
  }

  export type OptimizationRunCreateManyInput = {
    id?: string
    jobId: string
    repoUrl: string
    status: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    hotspotsFound?: number
    optimizationsApplied?: number
    totalImprovements?: number | null
  }

  export type OptimizationRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    hotspotsFound?: IntFieldUpdateOperationsInput | number
    optimizationsApplied?: IntFieldUpdateOperationsInput | number
    totalImprovements?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type OptimizationRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    hotspotsFound?: IntFieldUpdateOperationsInput | number
    optimizationsApplied?: IntFieldUpdateOperationsInput | number
    totalImprovements?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MetricCreateInput = {
    id?: string
    name: string
    value: number
    unit: string
    category: string
    timestamp?: Date | string
    repoUrl?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MetricUncheckedCreateInput = {
    id?: string
    name: string
    value: number
    unit: string
    category: string
    timestamp?: Date | string
    repoUrl?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MetricUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MetricUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MetricCreateManyInput = {
    id?: string
    name: string
    value: number
    unit: string
    category: string
    timestamp?: Date | string
    repoUrl?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MetricUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MetricUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ImpactCreateInput = {
    id?: string
    period: string
    periodStart: Date | string
    periodEnd: Date | string
    costSavings: number
    carbonReduction: number
    performanceGain: number
    requestCostReduction: number
    responseTimeReduction: number
    energySavings: number
    treesEquivalent: number
    roi: number
    uptime: number
    tokenSpend: number
    activeJobs: number
  }

  export type ImpactUncheckedCreateInput = {
    id?: string
    period: string
    periodStart: Date | string
    periodEnd: Date | string
    costSavings: number
    carbonReduction: number
    performanceGain: number
    requestCostReduction: number
    responseTimeReduction: number
    energySavings: number
    treesEquivalent: number
    roi: number
    uptime: number
    tokenSpend: number
    activeJobs: number
  }

  export type ImpactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    costSavings?: FloatFieldUpdateOperationsInput | number
    carbonReduction?: FloatFieldUpdateOperationsInput | number
    performanceGain?: FloatFieldUpdateOperationsInput | number
    requestCostReduction?: FloatFieldUpdateOperationsInput | number
    responseTimeReduction?: FloatFieldUpdateOperationsInput | number
    energySavings?: FloatFieldUpdateOperationsInput | number
    treesEquivalent?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    tokenSpend?: FloatFieldUpdateOperationsInput | number
    activeJobs?: IntFieldUpdateOperationsInput | number
  }

  export type ImpactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    costSavings?: FloatFieldUpdateOperationsInput | number
    carbonReduction?: FloatFieldUpdateOperationsInput | number
    performanceGain?: FloatFieldUpdateOperationsInput | number
    requestCostReduction?: FloatFieldUpdateOperationsInput | number
    responseTimeReduction?: FloatFieldUpdateOperationsInput | number
    energySavings?: FloatFieldUpdateOperationsInput | number
    treesEquivalent?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    tokenSpend?: FloatFieldUpdateOperationsInput | number
    activeJobs?: IntFieldUpdateOperationsInput | number
  }

  export type ImpactCreateManyInput = {
    id?: string
    period: string
    periodStart: Date | string
    periodEnd: Date | string
    costSavings: number
    carbonReduction: number
    performanceGain: number
    requestCostReduction: number
    responseTimeReduction: number
    energySavings: number
    treesEquivalent: number
    roi: number
    uptime: number
    tokenSpend: number
    activeJobs: number
  }

  export type ImpactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    costSavings?: FloatFieldUpdateOperationsInput | number
    carbonReduction?: FloatFieldUpdateOperationsInput | number
    performanceGain?: FloatFieldUpdateOperationsInput | number
    requestCostReduction?: FloatFieldUpdateOperationsInput | number
    responseTimeReduction?: FloatFieldUpdateOperationsInput | number
    energySavings?: FloatFieldUpdateOperationsInput | number
    treesEquivalent?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    tokenSpend?: FloatFieldUpdateOperationsInput | number
    activeJobs?: IntFieldUpdateOperationsInput | number
  }

  export type ImpactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    period?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    costSavings?: FloatFieldUpdateOperationsInput | number
    carbonReduction?: FloatFieldUpdateOperationsInput | number
    performanceGain?: FloatFieldUpdateOperationsInput | number
    requestCostReduction?: FloatFieldUpdateOperationsInput | number
    responseTimeReduction?: FloatFieldUpdateOperationsInput | number
    energySavings?: FloatFieldUpdateOperationsInput | number
    treesEquivalent?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    uptime?: FloatFieldUpdateOperationsInput | number
    tokenSpend?: FloatFieldUpdateOperationsInput | number
    activeJobs?: IntFieldUpdateOperationsInput | number
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WaitlistEntryCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    githubUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaitlistEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    githubUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WaitlistEntryMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    githubUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OptimizationListRelationFilter = {
    every?: OptimizationWhereInput
    some?: OptimizationWhereInput
    none?: OptimizationWhereInput
  }

  export type OptimizationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HotspotCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    impact?: SortOrder
    estimatedSavings?: SortOrder
    repoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type HotspotAvgOrderByAggregateInput = {
    lineNumber?: SortOrder
    severity?: SortOrder
    impact?: SortOrder
    estimatedSavings?: SortOrder
  }

  export type HotspotMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    impact?: SortOrder
    estimatedSavings?: SortOrder
    repoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type HotspotMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    severity?: SortOrder
    impact?: SortOrder
    estimatedSavings?: SortOrder
    repoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type HotspotSumOrderByAggregateInput = {
    lineNumber?: SortOrder
    severity?: SortOrder
    impact?: SortOrder
    estimatedSavings?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type HotspotNullableScalarRelationFilter = {
    is?: HotspotWhereInput | null
    isNot?: HotspotWhereInput | null
  }

  export type OptimizationRunListRelationFilter = {
    every?: OptimizationRunWhereInput
    some?: OptimizationRunWhereInput
    none?: OptimizationRunWhereInput
  }

  export type OptimizationRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OptimizationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    type?: SortOrder
    status?: SortOrder
    beforeCode?: SortOrder
    afterCode?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    performanceGain?: SortOrder
    costSavings?: SortOrder
    carbonReduction?: SortOrder
    executionTime?: SortOrder
    repoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appliedAt?: SortOrder
    hotspotId?: SortOrder
  }

  export type OptimizationAvgOrderByAggregateInput = {
    lineNumber?: SortOrder
    performanceGain?: SortOrder
    costSavings?: SortOrder
    carbonReduction?: SortOrder
    executionTime?: SortOrder
  }

  export type OptimizationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    type?: SortOrder
    status?: SortOrder
    beforeCode?: SortOrder
    afterCode?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    performanceGain?: SortOrder
    costSavings?: SortOrder
    carbonReduction?: SortOrder
    executionTime?: SortOrder
    repoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appliedAt?: SortOrder
    hotspotId?: SortOrder
  }

  export type OptimizationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    type?: SortOrder
    status?: SortOrder
    beforeCode?: SortOrder
    afterCode?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    performanceGain?: SortOrder
    costSavings?: SortOrder
    carbonReduction?: SortOrder
    executionTime?: SortOrder
    repoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appliedAt?: SortOrder
    hotspotId?: SortOrder
  }

  export type OptimizationSumOrderByAggregateInput = {
    lineNumber?: SortOrder
    performanceGain?: SortOrder
    costSavings?: SortOrder
    carbonReduction?: SortOrder
    executionTime?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type OptimizationRunCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    repoUrl?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    errorMessage?: SortOrder
    hotspotsFound?: SortOrder
    optimizationsApplied?: SortOrder
    totalImprovements?: SortOrder
  }

  export type OptimizationRunAvgOrderByAggregateInput = {
    hotspotsFound?: SortOrder
    optimizationsApplied?: SortOrder
    totalImprovements?: SortOrder
  }

  export type OptimizationRunMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    repoUrl?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    errorMessage?: SortOrder
    hotspotsFound?: SortOrder
    optimizationsApplied?: SortOrder
    totalImprovements?: SortOrder
  }

  export type OptimizationRunMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    repoUrl?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    completedAt?: SortOrder
    failedAt?: SortOrder
    errorMessage?: SortOrder
    hotspotsFound?: SortOrder
    optimizationsApplied?: SortOrder
    totalImprovements?: SortOrder
  }

  export type OptimizationRunSumOrderByAggregateInput = {
    hotspotsFound?: SortOrder
    optimizationsApplied?: SortOrder
    totalImprovements?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MetricCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    timestamp?: SortOrder
    repoUrl?: SortOrder
    metadata?: SortOrder
  }

  export type MetricAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type MetricMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    timestamp?: SortOrder
    repoUrl?: SortOrder
  }

  export type MetricMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    unit?: SortOrder
    category?: SortOrder
    timestamp?: SortOrder
    repoUrl?: SortOrder
  }

  export type MetricSumOrderByAggregateInput = {
    value?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ImpactPeriodPeriodStartCompoundUniqueInput = {
    period: string
    periodStart: Date | string
  }

  export type ImpactCountOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    costSavings?: SortOrder
    carbonReduction?: SortOrder
    performanceGain?: SortOrder
    requestCostReduction?: SortOrder
    responseTimeReduction?: SortOrder
    energySavings?: SortOrder
    treesEquivalent?: SortOrder
    roi?: SortOrder
    uptime?: SortOrder
    tokenSpend?: SortOrder
    activeJobs?: SortOrder
  }

  export type ImpactAvgOrderByAggregateInput = {
    costSavings?: SortOrder
    carbonReduction?: SortOrder
    performanceGain?: SortOrder
    requestCostReduction?: SortOrder
    responseTimeReduction?: SortOrder
    energySavings?: SortOrder
    treesEquivalent?: SortOrder
    roi?: SortOrder
    uptime?: SortOrder
    tokenSpend?: SortOrder
    activeJobs?: SortOrder
  }

  export type ImpactMaxOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    costSavings?: SortOrder
    carbonReduction?: SortOrder
    performanceGain?: SortOrder
    requestCostReduction?: SortOrder
    responseTimeReduction?: SortOrder
    energySavings?: SortOrder
    treesEquivalent?: SortOrder
    roi?: SortOrder
    uptime?: SortOrder
    tokenSpend?: SortOrder
    activeJobs?: SortOrder
  }

  export type ImpactMinOrderByAggregateInput = {
    id?: SortOrder
    period?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    costSavings?: SortOrder
    carbonReduction?: SortOrder
    performanceGain?: SortOrder
    requestCostReduction?: SortOrder
    responseTimeReduction?: SortOrder
    energySavings?: SortOrder
    treesEquivalent?: SortOrder
    roi?: SortOrder
    uptime?: SortOrder
    tokenSpend?: SortOrder
    activeJobs?: SortOrder
  }

  export type ImpactSumOrderByAggregateInput = {
    costSavings?: SortOrder
    carbonReduction?: SortOrder
    performanceGain?: SortOrder
    requestCostReduction?: SortOrder
    responseTimeReduction?: SortOrder
    energySavings?: SortOrder
    treesEquivalent?: SortOrder
    roi?: SortOrder
    uptime?: SortOrder
    tokenSpend?: SortOrder
    activeJobs?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OptimizationCreateNestedManyWithoutHotspotInput = {
    create?: XOR<OptimizationCreateWithoutHotspotInput, OptimizationUncheckedCreateWithoutHotspotInput> | OptimizationCreateWithoutHotspotInput[] | OptimizationUncheckedCreateWithoutHotspotInput[]
    connectOrCreate?: OptimizationCreateOrConnectWithoutHotspotInput | OptimizationCreateOrConnectWithoutHotspotInput[]
    createMany?: OptimizationCreateManyHotspotInputEnvelope
    connect?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
  }

  export type OptimizationUncheckedCreateNestedManyWithoutHotspotInput = {
    create?: XOR<OptimizationCreateWithoutHotspotInput, OptimizationUncheckedCreateWithoutHotspotInput> | OptimizationCreateWithoutHotspotInput[] | OptimizationUncheckedCreateWithoutHotspotInput[]
    connectOrCreate?: OptimizationCreateOrConnectWithoutHotspotInput | OptimizationCreateOrConnectWithoutHotspotInput[]
    createMany?: OptimizationCreateManyHotspotInputEnvelope
    connect?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OptimizationUpdateManyWithoutHotspotNestedInput = {
    create?: XOR<OptimizationCreateWithoutHotspotInput, OptimizationUncheckedCreateWithoutHotspotInput> | OptimizationCreateWithoutHotspotInput[] | OptimizationUncheckedCreateWithoutHotspotInput[]
    connectOrCreate?: OptimizationCreateOrConnectWithoutHotspotInput | OptimizationCreateOrConnectWithoutHotspotInput[]
    upsert?: OptimizationUpsertWithWhereUniqueWithoutHotspotInput | OptimizationUpsertWithWhereUniqueWithoutHotspotInput[]
    createMany?: OptimizationCreateManyHotspotInputEnvelope
    set?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
    disconnect?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
    delete?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
    connect?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
    update?: OptimizationUpdateWithWhereUniqueWithoutHotspotInput | OptimizationUpdateWithWhereUniqueWithoutHotspotInput[]
    updateMany?: OptimizationUpdateManyWithWhereWithoutHotspotInput | OptimizationUpdateManyWithWhereWithoutHotspotInput[]
    deleteMany?: OptimizationScalarWhereInput | OptimizationScalarWhereInput[]
  }

  export type OptimizationUncheckedUpdateManyWithoutHotspotNestedInput = {
    create?: XOR<OptimizationCreateWithoutHotspotInput, OptimizationUncheckedCreateWithoutHotspotInput> | OptimizationCreateWithoutHotspotInput[] | OptimizationUncheckedCreateWithoutHotspotInput[]
    connectOrCreate?: OptimizationCreateOrConnectWithoutHotspotInput | OptimizationCreateOrConnectWithoutHotspotInput[]
    upsert?: OptimizationUpsertWithWhereUniqueWithoutHotspotInput | OptimizationUpsertWithWhereUniqueWithoutHotspotInput[]
    createMany?: OptimizationCreateManyHotspotInputEnvelope
    set?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
    disconnect?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
    delete?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
    connect?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
    update?: OptimizationUpdateWithWhereUniqueWithoutHotspotInput | OptimizationUpdateWithWhereUniqueWithoutHotspotInput[]
    updateMany?: OptimizationUpdateManyWithWhereWithoutHotspotInput | OptimizationUpdateManyWithWhereWithoutHotspotInput[]
    deleteMany?: OptimizationScalarWhereInput | OptimizationScalarWhereInput[]
  }

  export type HotspotCreateNestedOneWithoutOptimizationsInput = {
    create?: XOR<HotspotCreateWithoutOptimizationsInput, HotspotUncheckedCreateWithoutOptimizationsInput>
    connectOrCreate?: HotspotCreateOrConnectWithoutOptimizationsInput
    connect?: HotspotWhereUniqueInput
  }

  export type OptimizationRunCreateNestedManyWithoutOptimizationsInput = {
    create?: XOR<OptimizationRunCreateWithoutOptimizationsInput, OptimizationRunUncheckedCreateWithoutOptimizationsInput> | OptimizationRunCreateWithoutOptimizationsInput[] | OptimizationRunUncheckedCreateWithoutOptimizationsInput[]
    connectOrCreate?: OptimizationRunCreateOrConnectWithoutOptimizationsInput | OptimizationRunCreateOrConnectWithoutOptimizationsInput[]
    connect?: OptimizationRunWhereUniqueInput | OptimizationRunWhereUniqueInput[]
  }

  export type OptimizationRunUncheckedCreateNestedManyWithoutOptimizationsInput = {
    create?: XOR<OptimizationRunCreateWithoutOptimizationsInput, OptimizationRunUncheckedCreateWithoutOptimizationsInput> | OptimizationRunCreateWithoutOptimizationsInput[] | OptimizationRunUncheckedCreateWithoutOptimizationsInput[]
    connectOrCreate?: OptimizationRunCreateOrConnectWithoutOptimizationsInput | OptimizationRunCreateOrConnectWithoutOptimizationsInput[]
    connect?: OptimizationRunWhereUniqueInput | OptimizationRunWhereUniqueInput[]
  }

  export type HotspotUpdateOneWithoutOptimizationsNestedInput = {
    create?: XOR<HotspotCreateWithoutOptimizationsInput, HotspotUncheckedCreateWithoutOptimizationsInput>
    connectOrCreate?: HotspotCreateOrConnectWithoutOptimizationsInput
    upsert?: HotspotUpsertWithoutOptimizationsInput
    disconnect?: HotspotWhereInput | boolean
    delete?: HotspotWhereInput | boolean
    connect?: HotspotWhereUniqueInput
    update?: XOR<XOR<HotspotUpdateToOneWithWhereWithoutOptimizationsInput, HotspotUpdateWithoutOptimizationsInput>, HotspotUncheckedUpdateWithoutOptimizationsInput>
  }

  export type OptimizationRunUpdateManyWithoutOptimizationsNestedInput = {
    create?: XOR<OptimizationRunCreateWithoutOptimizationsInput, OptimizationRunUncheckedCreateWithoutOptimizationsInput> | OptimizationRunCreateWithoutOptimizationsInput[] | OptimizationRunUncheckedCreateWithoutOptimizationsInput[]
    connectOrCreate?: OptimizationRunCreateOrConnectWithoutOptimizationsInput | OptimizationRunCreateOrConnectWithoutOptimizationsInput[]
    upsert?: OptimizationRunUpsertWithWhereUniqueWithoutOptimizationsInput | OptimizationRunUpsertWithWhereUniqueWithoutOptimizationsInput[]
    set?: OptimizationRunWhereUniqueInput | OptimizationRunWhereUniqueInput[]
    disconnect?: OptimizationRunWhereUniqueInput | OptimizationRunWhereUniqueInput[]
    delete?: OptimizationRunWhereUniqueInput | OptimizationRunWhereUniqueInput[]
    connect?: OptimizationRunWhereUniqueInput | OptimizationRunWhereUniqueInput[]
    update?: OptimizationRunUpdateWithWhereUniqueWithoutOptimizationsInput | OptimizationRunUpdateWithWhereUniqueWithoutOptimizationsInput[]
    updateMany?: OptimizationRunUpdateManyWithWhereWithoutOptimizationsInput | OptimizationRunUpdateManyWithWhereWithoutOptimizationsInput[]
    deleteMany?: OptimizationRunScalarWhereInput | OptimizationRunScalarWhereInput[]
  }

  export type OptimizationRunUncheckedUpdateManyWithoutOptimizationsNestedInput = {
    create?: XOR<OptimizationRunCreateWithoutOptimizationsInput, OptimizationRunUncheckedCreateWithoutOptimizationsInput> | OptimizationRunCreateWithoutOptimizationsInput[] | OptimizationRunUncheckedCreateWithoutOptimizationsInput[]
    connectOrCreate?: OptimizationRunCreateOrConnectWithoutOptimizationsInput | OptimizationRunCreateOrConnectWithoutOptimizationsInput[]
    upsert?: OptimizationRunUpsertWithWhereUniqueWithoutOptimizationsInput | OptimizationRunUpsertWithWhereUniqueWithoutOptimizationsInput[]
    set?: OptimizationRunWhereUniqueInput | OptimizationRunWhereUniqueInput[]
    disconnect?: OptimizationRunWhereUniqueInput | OptimizationRunWhereUniqueInput[]
    delete?: OptimizationRunWhereUniqueInput | OptimizationRunWhereUniqueInput[]
    connect?: OptimizationRunWhereUniqueInput | OptimizationRunWhereUniqueInput[]
    update?: OptimizationRunUpdateWithWhereUniqueWithoutOptimizationsInput | OptimizationRunUpdateWithWhereUniqueWithoutOptimizationsInput[]
    updateMany?: OptimizationRunUpdateManyWithWhereWithoutOptimizationsInput | OptimizationRunUpdateManyWithWhereWithoutOptimizationsInput[]
    deleteMany?: OptimizationRunScalarWhereInput | OptimizationRunScalarWhereInput[]
  }

  export type OptimizationCreateNestedManyWithoutOptimizationRunsInput = {
    create?: XOR<OptimizationCreateWithoutOptimizationRunsInput, OptimizationUncheckedCreateWithoutOptimizationRunsInput> | OptimizationCreateWithoutOptimizationRunsInput[] | OptimizationUncheckedCreateWithoutOptimizationRunsInput[]
    connectOrCreate?: OptimizationCreateOrConnectWithoutOptimizationRunsInput | OptimizationCreateOrConnectWithoutOptimizationRunsInput[]
    connect?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
  }

  export type OptimizationUncheckedCreateNestedManyWithoutOptimizationRunsInput = {
    create?: XOR<OptimizationCreateWithoutOptimizationRunsInput, OptimizationUncheckedCreateWithoutOptimizationRunsInput> | OptimizationCreateWithoutOptimizationRunsInput[] | OptimizationUncheckedCreateWithoutOptimizationRunsInput[]
    connectOrCreate?: OptimizationCreateOrConnectWithoutOptimizationRunsInput | OptimizationCreateOrConnectWithoutOptimizationRunsInput[]
    connect?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OptimizationUpdateManyWithoutOptimizationRunsNestedInput = {
    create?: XOR<OptimizationCreateWithoutOptimizationRunsInput, OptimizationUncheckedCreateWithoutOptimizationRunsInput> | OptimizationCreateWithoutOptimizationRunsInput[] | OptimizationUncheckedCreateWithoutOptimizationRunsInput[]
    connectOrCreate?: OptimizationCreateOrConnectWithoutOptimizationRunsInput | OptimizationCreateOrConnectWithoutOptimizationRunsInput[]
    upsert?: OptimizationUpsertWithWhereUniqueWithoutOptimizationRunsInput | OptimizationUpsertWithWhereUniqueWithoutOptimizationRunsInput[]
    set?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
    disconnect?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
    delete?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
    connect?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
    update?: OptimizationUpdateWithWhereUniqueWithoutOptimizationRunsInput | OptimizationUpdateWithWhereUniqueWithoutOptimizationRunsInput[]
    updateMany?: OptimizationUpdateManyWithWhereWithoutOptimizationRunsInput | OptimizationUpdateManyWithWhereWithoutOptimizationRunsInput[]
    deleteMany?: OptimizationScalarWhereInput | OptimizationScalarWhereInput[]
  }

  export type OptimizationUncheckedUpdateManyWithoutOptimizationRunsNestedInput = {
    create?: XOR<OptimizationCreateWithoutOptimizationRunsInput, OptimizationUncheckedCreateWithoutOptimizationRunsInput> | OptimizationCreateWithoutOptimizationRunsInput[] | OptimizationUncheckedCreateWithoutOptimizationRunsInput[]
    connectOrCreate?: OptimizationCreateOrConnectWithoutOptimizationRunsInput | OptimizationCreateOrConnectWithoutOptimizationRunsInput[]
    upsert?: OptimizationUpsertWithWhereUniqueWithoutOptimizationRunsInput | OptimizationUpsertWithWhereUniqueWithoutOptimizationRunsInput[]
    set?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
    disconnect?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
    delete?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
    connect?: OptimizationWhereUniqueInput | OptimizationWhereUniqueInput[]
    update?: OptimizationUpdateWithWhereUniqueWithoutOptimizationRunsInput | OptimizationUpdateWithWhereUniqueWithoutOptimizationRunsInput[]
    updateMany?: OptimizationUpdateManyWithWhereWithoutOptimizationRunsInput | OptimizationUpdateManyWithWhereWithoutOptimizationRunsInput[]
    deleteMany?: OptimizationScalarWhereInput | OptimizationScalarWhereInput[]
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OptimizationCreateWithoutHotspotInput = {
    id?: string
    title: string
    description: string
    category: string
    type: string
    status: string
    beforeCode?: string | null
    afterCode?: string | null
    filePath: string
    lineNumber?: number | null
    performanceGain?: number | null
    costSavings?: number | null
    carbonReduction?: number | null
    executionTime?: number | null
    repoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appliedAt?: Date | string | null
    optimizationRuns?: OptimizationRunCreateNestedManyWithoutOptimizationsInput
  }

  export type OptimizationUncheckedCreateWithoutHotspotInput = {
    id?: string
    title: string
    description: string
    category: string
    type: string
    status: string
    beforeCode?: string | null
    afterCode?: string | null
    filePath: string
    lineNumber?: number | null
    performanceGain?: number | null
    costSavings?: number | null
    carbonReduction?: number | null
    executionTime?: number | null
    repoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appliedAt?: Date | string | null
    optimizationRuns?: OptimizationRunUncheckedCreateNestedManyWithoutOptimizationsInput
  }

  export type OptimizationCreateOrConnectWithoutHotspotInput = {
    where: OptimizationWhereUniqueInput
    create: XOR<OptimizationCreateWithoutHotspotInput, OptimizationUncheckedCreateWithoutHotspotInput>
  }

  export type OptimizationCreateManyHotspotInputEnvelope = {
    data: OptimizationCreateManyHotspotInput | OptimizationCreateManyHotspotInput[]
    skipDuplicates?: boolean
  }

  export type OptimizationUpsertWithWhereUniqueWithoutHotspotInput = {
    where: OptimizationWhereUniqueInput
    update: XOR<OptimizationUpdateWithoutHotspotInput, OptimizationUncheckedUpdateWithoutHotspotInput>
    create: XOR<OptimizationCreateWithoutHotspotInput, OptimizationUncheckedCreateWithoutHotspotInput>
  }

  export type OptimizationUpdateWithWhereUniqueWithoutHotspotInput = {
    where: OptimizationWhereUniqueInput
    data: XOR<OptimizationUpdateWithoutHotspotInput, OptimizationUncheckedUpdateWithoutHotspotInput>
  }

  export type OptimizationUpdateManyWithWhereWithoutHotspotInput = {
    where: OptimizationScalarWhereInput
    data: XOR<OptimizationUpdateManyMutationInput, OptimizationUncheckedUpdateManyWithoutHotspotInput>
  }

  export type OptimizationScalarWhereInput = {
    AND?: OptimizationScalarWhereInput | OptimizationScalarWhereInput[]
    OR?: OptimizationScalarWhereInput[]
    NOT?: OptimizationScalarWhereInput | OptimizationScalarWhereInput[]
    id?: StringFilter<"Optimization"> | string
    title?: StringFilter<"Optimization"> | string
    description?: StringFilter<"Optimization"> | string
    category?: StringFilter<"Optimization"> | string
    type?: StringFilter<"Optimization"> | string
    status?: StringFilter<"Optimization"> | string
    beforeCode?: StringNullableFilter<"Optimization"> | string | null
    afterCode?: StringNullableFilter<"Optimization"> | string | null
    filePath?: StringFilter<"Optimization"> | string
    lineNumber?: IntNullableFilter<"Optimization"> | number | null
    performanceGain?: FloatNullableFilter<"Optimization"> | number | null
    costSavings?: FloatNullableFilter<"Optimization"> | number | null
    carbonReduction?: FloatNullableFilter<"Optimization"> | number | null
    executionTime?: IntNullableFilter<"Optimization"> | number | null
    repoUrl?: StringNullableFilter<"Optimization"> | string | null
    createdAt?: DateTimeFilter<"Optimization"> | Date | string
    updatedAt?: DateTimeFilter<"Optimization"> | Date | string
    appliedAt?: DateTimeNullableFilter<"Optimization"> | Date | string | null
    hotspotId?: StringNullableFilter<"Optimization"> | string | null
  }

  export type HotspotCreateWithoutOptimizationsInput = {
    id?: string
    title: string
    description: string
    filePath: string
    lineNumber?: number | null
    category: string
    priority: string
    status: string
    severity: number
    impact: number
    estimatedSavings?: number | null
    repoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type HotspotUncheckedCreateWithoutOptimizationsInput = {
    id?: string
    title: string
    description: string
    filePath: string
    lineNumber?: number | null
    category: string
    priority: string
    status: string
    severity: number
    impact: number
    estimatedSavings?: number | null
    repoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type HotspotCreateOrConnectWithoutOptimizationsInput = {
    where: HotspotWhereUniqueInput
    create: XOR<HotspotCreateWithoutOptimizationsInput, HotspotUncheckedCreateWithoutOptimizationsInput>
  }

  export type OptimizationRunCreateWithoutOptimizationsInput = {
    id?: string
    jobId: string
    repoUrl: string
    status: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    hotspotsFound?: number
    optimizationsApplied?: number
    totalImprovements?: number | null
  }

  export type OptimizationRunUncheckedCreateWithoutOptimizationsInput = {
    id?: string
    jobId: string
    repoUrl: string
    status: string
    startedAt?: Date | string
    completedAt?: Date | string | null
    failedAt?: Date | string | null
    errorMessage?: string | null
    hotspotsFound?: number
    optimizationsApplied?: number
    totalImprovements?: number | null
  }

  export type OptimizationRunCreateOrConnectWithoutOptimizationsInput = {
    where: OptimizationRunWhereUniqueInput
    create: XOR<OptimizationRunCreateWithoutOptimizationsInput, OptimizationRunUncheckedCreateWithoutOptimizationsInput>
  }

  export type HotspotUpsertWithoutOptimizationsInput = {
    update: XOR<HotspotUpdateWithoutOptimizationsInput, HotspotUncheckedUpdateWithoutOptimizationsInput>
    create: XOR<HotspotCreateWithoutOptimizationsInput, HotspotUncheckedCreateWithoutOptimizationsInput>
    where?: HotspotWhereInput
  }

  export type HotspotUpdateToOneWithWhereWithoutOptimizationsInput = {
    where?: HotspotWhereInput
    data: XOR<HotspotUpdateWithoutOptimizationsInput, HotspotUncheckedUpdateWithoutOptimizationsInput>
  }

  export type HotspotUpdateWithoutOptimizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: FloatFieldUpdateOperationsInput | number
    impact?: FloatFieldUpdateOperationsInput | number
    estimatedSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HotspotUncheckedUpdateWithoutOptimizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    category?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    severity?: FloatFieldUpdateOperationsInput | number
    impact?: FloatFieldUpdateOperationsInput | number
    estimatedSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OptimizationRunUpsertWithWhereUniqueWithoutOptimizationsInput = {
    where: OptimizationRunWhereUniqueInput
    update: XOR<OptimizationRunUpdateWithoutOptimizationsInput, OptimizationRunUncheckedUpdateWithoutOptimizationsInput>
    create: XOR<OptimizationRunCreateWithoutOptimizationsInput, OptimizationRunUncheckedCreateWithoutOptimizationsInput>
  }

  export type OptimizationRunUpdateWithWhereUniqueWithoutOptimizationsInput = {
    where: OptimizationRunWhereUniqueInput
    data: XOR<OptimizationRunUpdateWithoutOptimizationsInput, OptimizationRunUncheckedUpdateWithoutOptimizationsInput>
  }

  export type OptimizationRunUpdateManyWithWhereWithoutOptimizationsInput = {
    where: OptimizationRunScalarWhereInput
    data: XOR<OptimizationRunUpdateManyMutationInput, OptimizationRunUncheckedUpdateManyWithoutOptimizationsInput>
  }

  export type OptimizationRunScalarWhereInput = {
    AND?: OptimizationRunScalarWhereInput | OptimizationRunScalarWhereInput[]
    OR?: OptimizationRunScalarWhereInput[]
    NOT?: OptimizationRunScalarWhereInput | OptimizationRunScalarWhereInput[]
    id?: StringFilter<"OptimizationRun"> | string
    jobId?: StringFilter<"OptimizationRun"> | string
    repoUrl?: StringFilter<"OptimizationRun"> | string
    status?: StringFilter<"OptimizationRun"> | string
    startedAt?: DateTimeFilter<"OptimizationRun"> | Date | string
    completedAt?: DateTimeNullableFilter<"OptimizationRun"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"OptimizationRun"> | Date | string | null
    errorMessage?: StringNullableFilter<"OptimizationRun"> | string | null
    hotspotsFound?: IntFilter<"OptimizationRun"> | number
    optimizationsApplied?: IntFilter<"OptimizationRun"> | number
    totalImprovements?: FloatNullableFilter<"OptimizationRun"> | number | null
  }

  export type OptimizationCreateWithoutOptimizationRunsInput = {
    id?: string
    title: string
    description: string
    category: string
    type: string
    status: string
    beforeCode?: string | null
    afterCode?: string | null
    filePath: string
    lineNumber?: number | null
    performanceGain?: number | null
    costSavings?: number | null
    carbonReduction?: number | null
    executionTime?: number | null
    repoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appliedAt?: Date | string | null
    hotspot?: HotspotCreateNestedOneWithoutOptimizationsInput
  }

  export type OptimizationUncheckedCreateWithoutOptimizationRunsInput = {
    id?: string
    title: string
    description: string
    category: string
    type: string
    status: string
    beforeCode?: string | null
    afterCode?: string | null
    filePath: string
    lineNumber?: number | null
    performanceGain?: number | null
    costSavings?: number | null
    carbonReduction?: number | null
    executionTime?: number | null
    repoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appliedAt?: Date | string | null
    hotspotId?: string | null
  }

  export type OptimizationCreateOrConnectWithoutOptimizationRunsInput = {
    where: OptimizationWhereUniqueInput
    create: XOR<OptimizationCreateWithoutOptimizationRunsInput, OptimizationUncheckedCreateWithoutOptimizationRunsInput>
  }

  export type OptimizationUpsertWithWhereUniqueWithoutOptimizationRunsInput = {
    where: OptimizationWhereUniqueInput
    update: XOR<OptimizationUpdateWithoutOptimizationRunsInput, OptimizationUncheckedUpdateWithoutOptimizationRunsInput>
    create: XOR<OptimizationCreateWithoutOptimizationRunsInput, OptimizationUncheckedCreateWithoutOptimizationRunsInput>
  }

  export type OptimizationUpdateWithWhereUniqueWithoutOptimizationRunsInput = {
    where: OptimizationWhereUniqueInput
    data: XOR<OptimizationUpdateWithoutOptimizationRunsInput, OptimizationUncheckedUpdateWithoutOptimizationRunsInput>
  }

  export type OptimizationUpdateManyWithWhereWithoutOptimizationRunsInput = {
    where: OptimizationScalarWhereInput
    data: XOR<OptimizationUpdateManyMutationInput, OptimizationUncheckedUpdateManyWithoutOptimizationRunsInput>
  }

  export type OptimizationCreateManyHotspotInput = {
    id?: string
    title: string
    description: string
    category: string
    type: string
    status: string
    beforeCode?: string | null
    afterCode?: string | null
    filePath: string
    lineNumber?: number | null
    performanceGain?: number | null
    costSavings?: number | null
    carbonReduction?: number | null
    executionTime?: number | null
    repoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appliedAt?: Date | string | null
  }

  export type OptimizationUpdateWithoutHotspotInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    beforeCode?: NullableStringFieldUpdateOperationsInput | string | null
    afterCode?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    performanceGain?: NullableFloatFieldUpdateOperationsInput | number | null
    costSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    carbonReduction?: NullableFloatFieldUpdateOperationsInput | number | null
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optimizationRuns?: OptimizationRunUpdateManyWithoutOptimizationsNestedInput
  }

  export type OptimizationUncheckedUpdateWithoutHotspotInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    beforeCode?: NullableStringFieldUpdateOperationsInput | string | null
    afterCode?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    performanceGain?: NullableFloatFieldUpdateOperationsInput | number | null
    costSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    carbonReduction?: NullableFloatFieldUpdateOperationsInput | number | null
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    optimizationRuns?: OptimizationRunUncheckedUpdateManyWithoutOptimizationsNestedInput
  }

  export type OptimizationUncheckedUpdateManyWithoutHotspotInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    beforeCode?: NullableStringFieldUpdateOperationsInput | string | null
    afterCode?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    performanceGain?: NullableFloatFieldUpdateOperationsInput | number | null
    costSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    carbonReduction?: NullableFloatFieldUpdateOperationsInput | number | null
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OptimizationRunUpdateWithoutOptimizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    hotspotsFound?: IntFieldUpdateOperationsInput | number
    optimizationsApplied?: IntFieldUpdateOperationsInput | number
    totalImprovements?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type OptimizationRunUncheckedUpdateWithoutOptimizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    hotspotsFound?: IntFieldUpdateOperationsInput | number
    optimizationsApplied?: IntFieldUpdateOperationsInput | number
    totalImprovements?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type OptimizationRunUncheckedUpdateManyWithoutOptimizationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    repoUrl?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    hotspotsFound?: IntFieldUpdateOperationsInput | number
    optimizationsApplied?: IntFieldUpdateOperationsInput | number
    totalImprovements?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type OptimizationUpdateWithoutOptimizationRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    beforeCode?: NullableStringFieldUpdateOperationsInput | string | null
    afterCode?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    performanceGain?: NullableFloatFieldUpdateOperationsInput | number | null
    costSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    carbonReduction?: NullableFloatFieldUpdateOperationsInput | number | null
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotspot?: HotspotUpdateOneWithoutOptimizationsNestedInput
  }

  export type OptimizationUncheckedUpdateWithoutOptimizationRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    beforeCode?: NullableStringFieldUpdateOperationsInput | string | null
    afterCode?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    performanceGain?: NullableFloatFieldUpdateOperationsInput | number | null
    costSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    carbonReduction?: NullableFloatFieldUpdateOperationsInput | number | null
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotspotId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OptimizationUncheckedUpdateManyWithoutOptimizationRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    beforeCode?: NullableStringFieldUpdateOperationsInput | string | null
    afterCode?: NullableStringFieldUpdateOperationsInput | string | null
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: NullableIntFieldUpdateOperationsInput | number | null
    performanceGain?: NullableFloatFieldUpdateOperationsInput | number | null
    costSavings?: NullableFloatFieldUpdateOperationsInput | number | null
    carbonReduction?: NullableFloatFieldUpdateOperationsInput | number | null
    executionTime?: NullableIntFieldUpdateOperationsInput | number | null
    repoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    hotspotId?: NullableStringFieldUpdateOperationsInput | string | null
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