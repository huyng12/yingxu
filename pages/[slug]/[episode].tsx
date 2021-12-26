import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { Page } from "../../components/app/page/page";
import { EpisodeNavigator } from "../../components/episode-navigator/episode-navigator";
import { cms } from "../../lib/cms";
import { Episode, Info } from "../../lib/cms/types";

interface Props {
	slug: string;
	episodeId: number;
	info: Info;
	episode: Episode;
}

function EpisodePage(props: Props) {
	const lines = props.episode.content.split("\n");
	return (
		<Page title={`Episode ${props.episodeId + 1} - ${props.info.name}`}>
			<div className="max-w-screen-xl m-auto space-y-6 p-4">
				<div className="flex flex-row gap-4">
					<div className="h-full w-[84px] shrink-0">
						<Image
							src={props.episode.thumbnail}
							width={156}
							height={208}
							layout="responsive"
							alt={`Thumbnail of Episode ${props.episodeId}`}
							priority
						/>
					</div>
					<div className="space-y-2">
						<h1 className="text-2xl font-bold">
							{props.info.name}
						</h1>
						<h2 className="text-xl font-bold text-slate-700">
							Episode {props.episodeId + 1}
						</h2>
						<p className="text-slate-700">
							Published at 1{props.episodeId}.12.2021
						</p>
					</div>
				</div>
				<EpisodeNavigator
					slug={props.slug}
					episodeId={props.episodeId}
				/>
				<div className="prose prose-lg m-auto max-w-screen-xl">
					{lines.map((line, index) => (
						<p key={`line-${index}`}>{line}</p>
					))}
				</div>
				<EpisodeNavigator
					slug={props.slug}
					episodeId={props.episodeId}
				/>
			</div>
		</Page>
	);
}

export default EpisodePage;

export const getStaticPaths: GetStaticPaths = () => {
	const slugs = cms.getNovels().map((novel) => novel.slug);
	return {
		fallback: false,
		paths: slugs
			.map((slug) =>
				Array(10)
					.fill(0)
					.map((_, index) => index)
					.map((episode) => ({
						params: { slug, episode: episode.toString(10) },
					}))
			)
			.flat(),
	};
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const slug = context.params?.slug;
	const episodeId = Number(context.params?.episode);
	if (slug === undefined) return { notFound: true };
	if (Array.isArray(slug)) return { notFound: true };
	if (Number.isNaN(episodeId)) return { notFound: true };

	const novel = cms.getNovelBySlug(slug);
	if (novel === undefined) return { notFound: true };
	if (episodeId >= novel.episodes.length) return { notFound: true };

	return {
		props: {
			slug,
			episodeId,
			info: novel.info,
			episode: novel.episodes[episodeId],
		},
	};
};
