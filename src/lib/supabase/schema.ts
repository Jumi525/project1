import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

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
