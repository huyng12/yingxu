import { GetStaticPaths, GetStaticProps } from "next";
import { Page } from "../../components/app/page/page";
import { ListEpisodes } from "../../components/list-episodes/list-episodes";
import { NovelDescription } from "../../components/novel-description/novel-description";
import { NovelInfoCard } from "../../components/novel-info-card/novel-info-card";
import { cms } from "../../lib/cms";
import { Novel } from "../../lib/cms/types";

interface Props {
	novel: Novel;
}

function NovelPage(props: Props) {
	const { novel } = props;
	return (
		<Page title={novel.info.name}>
			<div className="max-w-screen-xl m-auto space-y-6 p-4">
				<div className="flex flex-row flex-wrap md:flex-nowrap gap-4">
					<NovelInfoCard slug={novel.slug} info={novel.info} />
					<div className="space-y-4">
						<NovelDescription slug={novel.slug} info={novel.info} />
						<ListEpisodes
							slug={novel.slug}
							episodes={novel.episodes}
						/>
					</div>
				</div>
			</div>
		</Page>
	);
}

export default NovelPage;

export const getStaticPaths: GetStaticPaths = () => {
	const slugs = cms.getNovels().map((novel) => novel.slug);
	return {
		fallback: false,
		paths: slugs.map((slug) => ({ params: { slug } })),
	};
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const slug = context.params?.slug;
	if (slug === undefined) return { notFound: true };
	if (Array.isArray(slug)) return { notFound: true };
	const novel = cms.getNovelBySlug(slug);
	if (novel === undefined) return { notFound: true };
	return { props: { novel } };
};
