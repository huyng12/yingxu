import novels from "../../novels";
import { Episode, Novel } from "./types";

interface NovelFull {
	novel: Novel;
	episodes: Episode[];
}

const novelsFull: NovelFull[] = [];

export default novels;
