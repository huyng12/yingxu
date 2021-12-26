import fs from "fs";
import { Episode, Info, Novel } from "../../lib/cms/types";

// Edit here
const slug = "angel";

const info: Info = {
	// Edit here
	name: "How to Use an Angel",
	// Edit here
	summary:
		"A bunch of thugs holding a demonic invocation have kidnapped Kiom to use as their sacrificial offering. Just as she’s about to be attacked, though, the wall before her crumbles, giving way to a tall, glowing figure. The newcomer is more handsome than anyone could dream of, so pretty-faced that he seems angelic, in fact. Kiom is relieved to be rescued, but the guy seems to have mistaken her for someone else. He calls her by a strange name, and pulls out a…sword?! Will Kiom get out of this alive?",
	// Edit here
	genres: ["LoveTriangle", "PrettyBoy", "Angles", "FantasyWorld", "Romance"],
	// Edit here
	writers: ["gongsa"],
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
export const howToUseAnAngelNovel: Novel = {
	slug,
	info,
	episodes,
};
