import { AppPage } from "app/page/page";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

interface Props {
	info: { slug: string };
}

export const getStaticPaths: GetStaticPaths = () => {
	const slugs = ["novel-1", "novel-2"];
	return {
		fallback: false,
		paths: slugs.map((slug) => ({ params: { slug } })),
	};
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
	const slug = context.params?.slug as string;
	if (slug === undefined) throw Error("[slug] is not defined");
	return {
		props: { info: { slug } },
	};
};

const NovelPage = (props: Props) => (
	<AppPage>
		<Head>
			<title>{props.info.slug} | YingXu</title>
			<meta property="og:type" content="website" />
			<meta property="og:title" content={`${props.info.slug} | YingXu`} />
		</Head>
		<div>
			<h1>Novel {props.info.slug}</h1>
		</div>
	</AppPage>
);

export default NovelPage;
