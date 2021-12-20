import Image from "next/image";
import { Novel } from "../../lib/cms/types";

interface Props {
	novel: Novel;
	index: number;
}

export function NovelCard(props: Props) {
	return (
		<div className="flex flex-row h-[84px] gap-4">
			<div className="h-full w-[84px] rounded overflow-hidden shrink-0">
				<Image
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
