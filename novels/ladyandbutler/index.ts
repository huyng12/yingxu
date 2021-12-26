import fs from "fs";
import { Episode, Info, Novel } from "../../lib/cms/types";

// Edit here
const slug = "ladyandbutler";

const info: Info = {
	// Edit here
	name: "The Lady and Her Butler",
	// Edit here
	summary:
		"The last thing Sooha wants in her life is a man. She’s sick of her mother calling about boyfriend problems, of friends trying to set her up on dates, of girls waiting for their Prince Charming. But when a broke and homeless man offers to keep house in exchange for temporary housing, Sooha finds herself saying yes to a man for the first time in her life. After all, who wouldn’t want to come home to warm homemade dinners, clean sheets, and freshly ironed clothes?",
	// Edit here
	genres: ["Romance", "LivingTogether", "Crush", "Drama", "SliceOfLife"],
	// Edit here
	writers: ["Jade"],
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
export const theLadyAndHerButlerNovel: Novel = {
	slug,
	info,
	episodes,
};
