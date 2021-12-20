export interface Info {
	name: string;
	summary: string;
	genres: string[];
	writers: string[];
	numEpisodes: number;
	thumbnail: {
		tall: string;
		wide: string;
	};
}

export interface Episode {
	thumbnail: string;
	content: string;
}

export interface Novel {
	slug: string;
	info: Info;
	episodes: Episode[];
}
