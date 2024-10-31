import {
  pgTable,
  pgEnum,
  uuid,
  timestamp,
  text,
  jsonb,
} from "drizzle-orm/pg-core";

import { sql } from "drizzle-orm";
export const keyStatus = pgEnum("key_status", [
  "expired",
  "invalid",
  "valid",
  "default",
]);
export const keyType = pgEnum("key_type", [
  "stream_xchacha20",
  "secretstream",
  "secretbox",
  "kdf",
  "generichash",
  "shorthash",
  "auth",
  "hmacsha256",
  "hmacsha512",
  "aead-det",
  "aead-ietf",
]);
export const factorType = pgEnum("factor_type", ["phone", "webauthn", "totp"]);
export const factorStatus = pgEnum("factor_status", ["verified", "unverified"]);
export const aalLevel = pgEnum("aal_level", ["aal3", "aal2", "aal1"]);
export const codeChallengeMethod = pgEnum("code_challenge_method", [
  "plain",
  "s256",
]);
export const oneTimeTokenType = pgEnum("one_time_token_type", [
  "phone_change_token",
  "email_change_token_current",
  "email_change_token_new",
  "recovery_token",
  "reauthentication_token",
  "confirmation_token",
]);
export const equalityOp = pgEnum("equality_op", [
  "in",
  "gte",
  "gt",
  "lte",
  "lt",
  "neq",
  "eq",
]);
export const action = pgEnum("action", [
  "ERROR",
  "TRUNCATE",
  "DELETE",
  "UPDATE",
  "INSERT",
]);

export const profile = pgTable("profile", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  fullName: text("full_name"),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
  email: text("email"),
  password: text("password"),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  title: text("title"),
  location: text("location"),
  feedback: text("feedback"),
  rating: text("rating"),
  booking: text("booking"),
  revenue: text("revenue"),
  verified: text("verified"),
});

export const jobs = pgTable("jobs", {
  id: uuid("id").primaryKey().notNull(),
  location: text("location").notNull(),
  price: text("price").notNull(),
  title: text("title").notNull(),
  time: text("time").notNull(),
  date: timestamp("date", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  name: text("name").notNull(),
});

export const users = pgTable("users", {
  id: uuid("id").primaryKey().notNull(),
  fullName: text("full_name"),
  avatarUrl: text("avatar_url"),
  billingAddress: jsonb("billing_address"),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
  paymentMethod: jsonb("payment_method"),
  email: text("email"),
});
