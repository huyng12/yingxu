import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { Page } from "../../components/app/page/page";
import { cms } from "../../lib/cms";
import { Novel } from "../../lib/cms/types";

interface Props {
	novel: Novel;
}

function NovelPage(props: Props) {
	const { novel } = props;
	return (
		<Page title={novel.info.name}>
			<div>
				<h1>Novel {novel.info.name}</h1>
				<p>{novel.info.summary}</p>
				<p>Writers: {novel.info.writers.join(", ")}</p>
				<p>Published {novel.info.numEpisodes} Episodes</p>
				<Image
					src={novel.info.thumbnail.tall}
					width={840}
					height={1120}
					layout="responsive"
					alt={`Thumbnail of ${novel.info.name}`}
				/>
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
