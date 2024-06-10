CREATE TABLE `bartenders` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `customers` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `drinks` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`price` integer
);
--> statement-breakpoint
CREATE TABLE `ingredients` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`drink_id` integer,
	FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `items` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `customer_bartender_drinks` (
	`id` integer PRIMARY KEY NOT NULL,
	`bartender_id` integer,
	`customer_id` integer,
	`drink_id` integer,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`bartender_id`) REFERENCES `bartenders`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`customer_id`) REFERENCES `customers`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`drink_id`) REFERENCES `drinks`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `people` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`address` text,
	`phone` text,
	`job` text,
	`salary` real DEFAULT 1000,
	`gender` text,
	`blob` blob,
	`isSomething` integer,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `userProfiles` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`address` text,
	`phone` text,
	`job` text,
	`salary` real DEFAULT 1000,
	`gender` text,
	`user_id` integer,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`username` text NOT NULL,
	`email` text NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
