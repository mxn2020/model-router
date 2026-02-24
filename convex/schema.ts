import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
  rules: defineTable({ name: v.string(), condition: v.string(), primaryModel: v.string(), fallbackModel: v.string(), active: v.boolean() }),
  models: defineTable({ name: v.string(), provider: v.string(), costPer1k: v.number(), avgLatencyMs: v.number(), isAvailable: v.boolean() }),
  trafficLogs: defineTable({ ruleId: v.optional(v.id("rules")), targetModel: v.string(), tokens: v.number(), wasFallback: v.boolean(), latencyMs: v.number(), timestamp: v.string() }),
});
