import fs from "fs";
import { Episode, Info, Novel } from "../../lib/cms/types";

// Edit here
const slug = "princecinderella";

const info: Info = {
	// Edit here
	name: "Prince Cinderella",
	// Edit here
	summary:
		"Outgoing and athletic, Darim’s always surrounded by friends. But back in elementary school, she used to be a social outcast—she only started making friends when Taehoo brought her into the fold. Now in high school, the two have drifted apart, but Darim is waiting for a chance to reunite with her icy Prince Charming. There’s just one issue: Darim’s body transforms into a boy’s at noon every day, only to turn back at midnight! Well, if she can’t get close to Taehoo as a girl… Why not try as a boy?!",
	// Edit here
	genres: ["WholeSome", "Crush", "Romance", "Highschool", "Lighthearted"],
	// Edit here
	writers: ["77A0r"],
	numEpisodes: 10,
	thumbnail: {
		tall: `/${slug}/thumbnails/tall.webp`,
		wide: `/${slug}/thumbnails/wide.webp`,
	},
};

const episodes: Episode[] = [
	{
		thumbnail: `/${slug}/episodes/1.webp`,
		content: fs
			.readFileSync(`./novels/${slug}/episodes/1.md`, "utf-8")
			.toString(),
	},
	{
		thumbnail: `/${slug}/episodes/2.webp`,
		content: fs
			.readFileSync(`./novels/${slug}/episodes/2.md`, "utf-8")
			.toString(),
	},
	{
		thumbnail: `/${slug}/episodes/3.webp`,
		content: fs
			.readFileSync(`./novels/${slug}/episodes/3.md`, "utf-8")
			.toString(),
	},
	{
		thumbnail: `/${slug}/episodes/4.webp`,
		content: fs
			.readFileSync(`./novels/${slug}/episodes/4.md`, "utf-8")
			.toString(),
	},
	{
		thumbnail: `/${slug}/episodes/5.webp`,
		content: fs
			.readFileSync(`./novels/${slug}/episodes/5.md`, "utf-8")
			.toString(),
	},
	{
		thumbnail: `/${slug}/episodes/6.webp`,
		content: fs
			.readFileSync(`./novels/${slug}/episodes/6.md`, "utf-8")
			.toString(),
	},
	{
		thumbnail: `/${slug}/episodes/7.webp`,
		content: fs
			.readFileSync(`./novels/${slug}/episodes/7.md`, "utf-8")
			.toString(),
	},
	{
		thumbnail: `/${slug}/episodes/8.webp`,
		content: fs
			.readFileSync(`./novels/${slug}/episodes/8.md`, "utf-8")
			.toString(),
	},
	{
		thumbnail: `/${slug}/episodes/9.webp`,
		content: fs
			.readFileSync(`./novels/${slug}/episodes/9.md`, "utf-8")
			.toString(),
	},
	{
		thumbnail: `/${slug}/episodes/10.webp`,
		content: fs
			.readFileSync(`./novels/${slug}/episodes/10.md`, "utf-8")
			.toString(),
	},
];

// Edit here
export const princeCinderellaNovel: Novel = {
	slug,
	info,
	episodes,
};
