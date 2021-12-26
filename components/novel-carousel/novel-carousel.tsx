import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useWindowSize } from "react-use";
import { Novel } from "../../lib/cms/types";

interface Props {
	containerId: string;
	name: string;
	novels: Novel[];
}

interface CardProps {
	novel: Novel;
}

function Card(props: CardProps) {
	const router = useRouter();
	const onClick = () => void router.push(`/${props.novel.slug}`);
	return (
		<div
			onClick={onClick}
			className="shrink-0 p-2 rounded cursor-pointer md:transition md:hover:bg-slate-100"
		>
			<div className="relative w-[150px] lg:w-full aspect-[3/4] rounded overflow-hidden">
				<Image
					src={props.novel.info.thumbnail.tall}
					layout="fill"
					alt={`Thumbnail of ${props.novel.info.name}`}
					priority
				/>
			</div>
			<div className="mt-2">
				<h1 className="lg:text-xl font-bold">
					{props.novel.info.name}
				</h1>
				<p className="text-sm text-slate-700">
					{props.novel.info.numEpisodes} Episodes
				</p>
			</div>
		</div>
	);
}

export function NovelCarousel(props: Props) {
	const windowSize = useWindowSize();
	const [page, setPage] = useState(0);

	const range = useMemo(() => {
		return {
			from: page * 6,
			to: Math.min(page * 6 + 6, props.novels.length),
		};
	}, [page, props.novels.length]);

	const novels = useMemo(() => {
		return windowSize.width >= 1024
			? props.novels.slice(range.from, range.to)
			: props.novels;
	}, [props.novels, range.from, range.to, windowSize.width]);

	useEffect(() => {
		setPage(0);
	}, [props.novels, windowSize.width]);

	const nextPage = () => setPage((page) => page + 1);
	const prevPage = () => setPage((page) => page - 1);

	return (
		<div className="relative" id={props.containerId}>
			<h1 className="text-xl font-bold">{props.name}</h1>
			<div className="flex flex-row lg:grid lg:grid-cols-6 gap-[8px] overflow-auto mt-3">
				{novels.map((novel, index) => (
					<Card key={`novel-${novel.slug}-${index}`} novel={novel} />
				))}
			</div>
			<div className="opacity-0 lg:opacity-100 absolute top-0 right-2">
				<button
					className="btn-carousel rounded-l"
					disabled={range.from === 0}
					onClick={prevPage}
				>
					<RiArrowLeftSLine />
				</button>
				<button
					className="btn-carousel rounded-r"
					disabled={range.to === props.novels.length}
					onClick={nextPage}
				>
					<RiArrowRightSLine />
				</button>
			</div>
		</div>
	);
}
