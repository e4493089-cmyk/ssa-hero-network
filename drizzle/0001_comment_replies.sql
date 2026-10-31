ALTER TABLE comments ADD COLUMN parent text;
--> statement-breakpoint
CREATE INDEX comments_post_parent_created_idx ON comments (post,parent,created);
