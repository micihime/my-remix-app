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
