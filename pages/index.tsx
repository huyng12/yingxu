import type { GetStaticProps } from "next";
import { Page } from "../components/app/page/page";
import { NovelCarousel } from "../components/novel-carousel/novel-carousel";
import { NovelRanking } from "../components/novel-ranking/novel-ranking";
import { cms } from "../lib/cms";
import { Novel } from "../lib/cms/types";

interface Props {
	novels: Novel[];
}

function Home(props: Props) {
	return (
		<Page>
			<div className="max-w-screen-xl m-auto space-y-6 p-4">
				<NovelCarousel
					containerId="releases"
					name="New Releases"
					novels={props.novels}
				/>
				<NovelRanking
					containerId="rankings"
					rankings={[
						{ name: "👍 Recommended", novels: props.novels },
						{ name: "🔥 Hottest", novels: props.novels },
						{ name: "👀 Most Viewed", novels: props.novels },
					]}
				/>
				<NovelCarousel
					containerId="romance"
					name="Romance"
					novels={props.novels}
				/>
				<NovelCarousel
					containerId="fantasy"
					name="Fantasy"
					novels={props.novels}
				/>
			</div>
		</Page>
	);
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const novels = cms.getNovels();
	return {
		props: { novels },
	};
};
