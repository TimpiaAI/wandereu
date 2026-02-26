/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Stub file — replaced by `npx convex dev` at runtime.
 * Provides type placeholders so the project builds before Convex is configured.
 */

export type Id<T extends string = string> = string & { __tableName: T };
export type Doc<T extends string = string> = Record<string, any> & { _id: Id<T> };
export type DataModel = Record<string, any>;
