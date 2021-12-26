import type { GetStaticProps } from "next";
import { Page } from "../components/app/page/page";
import { NovelCarousel } from "../components/novel-carousel/novel-carousel";
import { NovelRanking } from "../components/novel-ranking/novel-ranking";
import { cms } from "../lib/cms";
import { Novel } from "../lib/cms/types";

interface Props {
	novels: Novel[];
	newReleaseNovels: Novel[];
	recommendedNovels: Novel[];
	hottestNovels: Novel[];
	mostViewedNovels: Novel[];
	romanceNovels: Novel[];
	fantasyNovels: Novel[];
}

function Home(props: Props) {
	return (
		<Page>
			<div className="max-w-screen-xl m-auto space-y-6 p-4">
				<NovelCarousel
					containerId="releases"
					name="New Releases"
					novels={props.newReleaseNovels}
				/>
				<NovelRanking
					containerId="rankings"
					rankings={[
						{
							name: "👍 Recommended",
							novels: props.recommendedNovels,
						},
						{ name: "🔥 Hottest", novels: props.hottestNovels },
						{
							name: "👀 Most Viewed",
							novels: props.mostViewedNovels,
						},
					]}
				/>
				<NovelCarousel
					containerId="romance"
					name="Romance"
					novels={props.romanceNovels}
				/>
				<NovelCarousel
					containerId="fantasy"
					name="Fantasy"
					novels={props.fantasyNovels}
				/>
			</div>
		</Page>
	);
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const novels = cms.getNovels();
	return {
		props: {
			novels,
			newReleaseNovels: [1, 6, 5, 0, 2, 3, 4, 9, 10, 11, 8, 7].map(
				(id) => novels[id]
			),
			recommendedNovels: novels.slice(0, 3),
			hottestNovels: novels.slice(3, 6),
			mostViewedNovels: novels.slice(6, 9),
			romanceNovels: novels.filter((novel) =>
				novel.info.genres.includes("Romance")
			),
			fantasyNovels: [...novels].reverse(),
		},
	};
};
