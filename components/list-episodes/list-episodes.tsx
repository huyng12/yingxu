import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiSortAsc, RiSortDesc } from "react-icons/ri";
import { Episode } from "../../lib/cms/types";
import { imageLoader } from "../../lib/image-loader/image-loader";

interface Props {
	slug: string;
	episodes: Episode[];
}

interface ItemProps {
	slug: string;
	index: number;
	episode: Episode;
}

function Item(props: ItemProps) {
	const router = useRouter();
	const onClick = () => void router.push(`/${props.slug}/${props.index}`);
	return (
		<div
			onClick={onClick}
			className="flex flex-row p-2 gap-4 hover:cursor-pointer md:transition md:hover:bg-slate-100"
		>
			<div className="h-full w-[84px] shrink-0">
				<Image
					loader={imageLoader}
					src={props.episode.thumbnail}
					width={156}
					height={208}
					layout="responsive"
					alt={`Thumbnail of Episode ${props.index}`}
					priority
				/>
			</div>
			<div className="flex flex-col justify-center">
				<h1 className="font-bold">Episode {props.index + 1}</h1>
				<p className="text-sm text-slate-700">1{props.index}.12.2021</p>
			</div>
		</div>
	);
}

export function ListEpisodes(props: Props) {
	const [isListReversed, setIsListReversed] = useState(false);
	const toggleListReversed = () => setIsListReversed((r) => !r);
	return (
		<div className="w-full">
			<div className="space-y-2">
				<div className="relative">
					<h1 className="text-xl font-bold">Episodes</h1>
					<button
						onClick={toggleListReversed}
						className="absolute top-0 right-0"
					>
						{isListReversed ? (
							<>
								<RiSortAsc className="inline" /> Sort by Latest
							</>
						) : (
							<>
								<RiSortDesc className="inline" /> Sort by Order
							</>
						)}
					</button>
				</div>
				<nav
					className={classNames(
						"flex",
						isListReversed ? "flex-col-reverse" : "flex-col"
					)}
				>
					{props.episodes.map((episode, index) => (
						<Item
							key={`episode-${index}`}
							slug={props.slug}
							index={index}
							episode={episode}
						/>
					))}
				</nav>
			</div>
		</div>
	);
}
