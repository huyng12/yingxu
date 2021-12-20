import novels from "../../novels";
import { Novel } from "./types";

interface ContentManagerGeneric {
	// Novels
	getNovels: () => Novel[];
	getNovelBySlug: (slug: string) => Novel | undefined;
}

class ContentManager implements ContentManagerGeneric {
	getNovels(): Novel[] {
		return novels;
	}

	getNovelBySlug(slug: string): Novel | undefined {
		return novels.find((novel) => novel.slug === slug);
	}
}

export const cms = new ContentManager();
