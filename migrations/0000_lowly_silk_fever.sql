CREATE TABLE IF NOT EXISTS "jobs" (
	"id" uuid PRIMARY KEY NOT NULL,
	"location" text NOT NULL,
	"price" text NOT NULL,
	"title" text NOT NULL,
	"time" text NOT NULL,
	"date" timestamp with time zone DEFAULT now() NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profile" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"full_name" text,
	"updated_at" timestamp with time zone,
	"email" text,
	"password" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"title" text,
	"location" text,
	"feedback" text,
	"rating" text,
	"booking" text,
	"revenue" text,
	"verified" text
);
