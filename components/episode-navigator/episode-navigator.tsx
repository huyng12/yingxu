import classNames from "classnames";
import { useRouter } from "next/router";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

interface Props {
	slug: string;
	episodeId: number;
}

const buttonStyle = {
	base: "p-2 rounded md:transition md:hover:bg-slate-100",
	disabled: "disabled:opacity-0",
};

export function EpisodeNavigator(props: Props) {
	const router = useRouter();
	const goToEpisode = (episode: number) =>
		void router.push(`/${props.slug}/${episode}`);
	const goToNext = () => goToEpisode(props.episodeId + 1);
	const goToPrev = () => goToEpisode(props.episodeId - 1);
	return (
		<div className="flex flex-row justify-between w-full">
			<button
				onClick={goToPrev}
				className={classNames(
					buttonStyle.base,
					buttonStyle.disabled,
					"ml-[-0.8rem]"
				)}
				disabled={props.episodeId === 0}
			>
				<RiArrowLeftSLine className="inline" />
				Previous episode
			</button>
			<button
				onClick={goToNext}
				className={classNames(
					buttonStyle.base,
					buttonStyle.disabled,
					"mr-[-0.8rem]"
				)}
				disabled={props.episodeId === 9}
			>
				Next episode
				<RiArrowRightSLine className="inline" />
			</button>
		</div>
	);
}
