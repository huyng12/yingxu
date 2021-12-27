import Image from "next/image";
import { Info } from "../../lib/cms/types";

interface Props {
	slug: string;
	info: Info;
}

export function NovelInfoCard(props: Props) {
	return (
		<div className="w-full md:w-auto">
			<div className="w-full md:w-[360px] shrink-0">
				<Image
					src={props.info.thumbnail.tall}
					width={840}
					height={1120}
					layout="responsive"
					alt={`Vetical thumbnail of ${props.info.name}`}
					priority
				/>
			</div>
			<div className="mt-2 space-y-2">
				<h1 className="text-2xl font-bold">{props.info.name}</h1>
				<p className="text-sm text-slate-700">
					{props.info.numEpisodes} Episodes
				</p>
				<p>
					<span className="font-bold">Authors:</span>{" "}
					{props.info.writers.join(", ")}
				</p>
				<p>
					<span className="font-bold">Genres:</span>{" "}
					{props.info.genres
						.map(
							(genre) =>
								`${genre[0].toUpperCase()}${genre.slice(1)}`
						)
						.join(", ")}
				</p>
			</div>
		</div>
	);
}
