import fs from "fs";
import { Episode, Info, Novel } from "../../lib/cms/types";

// Edit here
const slug = "lightshadow";

const info: Info = {
	// Edit here
	name: "Light and Shadow",
	// Edit here
	summary:
		"When she’s sent in the stead of a nobleman’s daughter to marry a duke of low birth, servant Edna has no choice but to lie about who she is for her survival. Eli, her new husband, has a reputation for his brutality in the battlefield and loyalty to the king. If he finds out who she really is, he will not spare her. With a secret that nobody must find out about and Eli’s growing suspicions about her true identity, Edna must play a dangerous game of cat and mouse with her husband. However, as they both cautiously navigate this marriage full of lies, something true starts blooming between the two of them…",
	// Edit here
	genres: ["Drama", "Marriage", "Royalty", "Romance"],
	// Edit here
	writers: ["Hee Won", "Ryu Hyang"],
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
export const lightAndShadowNovel: Novel = {
	slug,
	info,
	episodes,
};
