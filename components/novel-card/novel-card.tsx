import Image from "next/image";
import { useRouter } from "next/router";
import { Novel } from "../../lib/cms/types";
import { imageLoader } from "../../lib/image-loader/image-loader";

interface Props {
	novel: Novel;
	index: number;
}

export function NovelCard(props: Props) {
	const router = useRouter();
	const onClick = () => void router.push(`/${props.novel.slug}`);
	return (
		<div
			onClick={onClick}
			className="flex flex-row h-[100px] gap-4 p-2 rounded hover:cursor-pointer md:transition md:hover:bg-slate-100"
		>
			<div className="h-full w-[84px] rounded overflow-hidden shrink-0">
				<Image
					loader={imageLoader}
					src={props.novel.info.thumbnail.tall}
					width={840}
					height={1120}
					layout="responsive"
					alt={`Thumbnail of ${props.novel.info.name}`}
					priority
				/>
			</div>
			<div className="flex flex-col justify-center">
				<p className="font-bold">{props.index}</p>
			</div>
			<div className="flex flex-col justify-center">
				<h1 className="font-bold">{props.novel.info.name}</h1>
				<p className="text-sm uppercase">
					{props.novel.info.genres[0]}
				</p>
				<p className="text-sm text-slate-700">
					{props.novel.info.numEpisodes} Episodes
				</p>
			</div>
		</div>
	);
}
