import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

// The schema is normally optional, but Convex Auth
// requires indexes defined on `authTables`.
// The schema provides more precise TypeScript types.
export default defineSchema({
  ...authTables,
  numbers: defineTable({
    value: v.number(),
  }),
  numbersAuditLog: defineTable({
    numberId: v.id("numbers"),
    numberValue: v.number(),
    userId: v.optional(v.id("users")),
    userTokenIdentifier: v.optional(v.string()),
  }),
});
