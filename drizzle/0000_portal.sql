CREATE TABLE accounts (id text PRIMARY KEY NOT NULL, username text NOT NULL UNIQUE, hash text NOT NULL, salt text NOT NULL, hero text NOT NULL, affiliation text NOT NULL);
--> statement-breakpoint
CREATE TABLE sessions (token text PRIMARY KEY NOT NULL, account text NOT NULL, expires integer NOT NULL);
--> statement-breakpoint
CREATE TABLE posts (id text PRIMARY KEY NOT NULL, account text NOT NULL, title text NOT NULL, body text NOT NULL, category text NOT NULL, created text NOT NULL);
--> statement-breakpoint
CREATE TABLE comments (id text PRIMARY KEY NOT NULL, post text NOT NULL, account text NOT NULL, body text NOT NULL, created text NOT NULL);
--> statement-breakpoint
CREATE TABLE attempts (key text PRIMARY KEY NOT NULL, count integer NOT NULL, reset integer NOT NULL);
