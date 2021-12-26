import fs from "fs";
import { Episode, Info, Novel } from "../../lib/cms/types";

// Edit here
const slug = "hide_brother";

const info: Info = {
	// Edit here
	name: "Let's Hide My Little Brother",
	// Edit here
	summary:
		"The fate of a girl in a BL novel is a tragic one. Girls are either vaguely helpful, evil, or add nothing to the plot. So what happens when you turn into the older sister of a BL novel protagonist? The older sister who dies a tragic death at the hands of a madman who’s infatuated with your younger brother? You go with your gut instinct: hide him. Hide your brother from everything, especially men, that could harm him and you. That’s the task that Kyla Vesta is set with in this life, and a task that she’s determined to complete.",
	// Edit here
	genres: ["LoveTriangle", "PrettyBoy", "Knight", "FantasyWorld", "Romance"],
	// Edit here
	writers: ["CHAEJIHOO", "Chen Li"],
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
export const letsHideMyLittleBrotherNovel: Novel = {
	slug,
	info,
	episodes,
};
